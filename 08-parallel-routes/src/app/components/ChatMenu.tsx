import { auth as getServerSession } from "@/auth";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import { getChats } from "@/db";

export default async function ChatMenu() {
  const session = await getServerSession();
  const chats = await getChats(session?.user?.email!);

  return (
    <>
      <div className="text-2xl font-bold">Chat Sessions</div>
      <Separator className="my-3" />
      <div className="flex flex-col gap-2">
        {chats.map((chat) => (
          <div key={chat.id}>
            <Link href={`/chats/${chat.id}`} className="text-lg line-clamp-1">
              {chat.name.trim().slice(0, 20)}
              {chat.name.length >= 20 ? "..." : ""}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
