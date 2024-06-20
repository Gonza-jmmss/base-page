import { db } from "@/db/client";
import { insertUserSchema, usersTable } from "@/db/schema/user";
import { z } from "zod";

export default async function Users() {
  const users = await db.select().from(usersTable);

  // const newUser = {
  //   name:'Jodas',
  //   role: 'admin'
  // }

  // const validUser = insertUserSchema.parse(newUser)

  // console.log(validUser)

  return (
    <main className="">
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
}
