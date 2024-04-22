export { auth as middleware } from "@/app/auth/[...nextauth]/route";

export const config = { matcher: ["/chats/:chatid*"] };
