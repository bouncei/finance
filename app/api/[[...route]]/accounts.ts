import { db } from "@/db/drizzle";
import { accounts, insertAccountSchema } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator"
import { createId } from "@paralleldrive/cuid2"
import { Hono } from "hono";
import { eq } from "drizzle-orm";

const app = new Hono()
    .get("/", clerkMiddleware(), async (c) => {
        const auth = getAuth(c)

        if (!auth?.userId) {
            return c.json({ error: "Unauthorized" }, 401)
            // throw new HTTPException(401, {
            //     res: c.json({ error: "Unauthorized" }, 401)
            // })
        }


        const data = await db.select({
            id: accounts.id,
            name: accounts.name
        }).from(accounts).where(eq(accounts.userId, auth.userId))

        return c.json({ data })
    })

    .post("/", zValidator("json", insertAccountSchema.pick({
        name: true
    })), clerkMiddleware(), async (c) => {
        const auth = getAuth(c)
        const values = c.req.valid("json")

        if (!auth?.userId) {
            return c.json({ error: "Unauthorized" }, 401)
        }


        const data = await db.insert(accounts).values({
            id: createId(),
            userId: auth.userId,
            ...values
        }).returning()


        return c.json({ data: data[0] })



    })


export default app