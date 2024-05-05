import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  // ここにロギングや、認証、リダイレクトの処理を実装

  console.log("ミドルウェア通過");

  return NextResponse.next();
};

// ミドルウェアを経由するパスを設定
export const config = { matcher: ["/", "/task"] };
