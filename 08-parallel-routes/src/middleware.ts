import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const config = {
  matcher: ["/chats/:chatid*"],
};

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
});
