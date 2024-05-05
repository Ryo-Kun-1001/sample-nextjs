import { NextResponse } from "next/server";

export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: "プログラミング" },
  { id: 2, name: "ランニング" },
];

export const GET = async () => {
  return NextResponse.json({ tasks }, { status: 200 });
};

// ルートハンドラーは、デフォルトの設定では静的な要素となり、ビルド時に取得するデータが決まってしまう
// ユーザーの操作によってデータが頻繁に更新される場合、古いデータが表示されてしまうという欠点がある
// 以下のように、ルートセグメントコンフィグで設定を行うことで、リクエストごとに動的にデータ取得ができるようになる
export const dynamic = "force-dynamic";
