import { NextRequest, NextResponse } from "next/server";
import React from "react";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.includes(".")) {
    console.log("ミドルウェアのテスト");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*"],
};
