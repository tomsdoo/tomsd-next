import getConfig from "next/config";
import { NextResponse } from "next/server";

const { publicRuntimeConfig } = getConfig();

export async function GET() {
  const statusObj = Object.fromEntries(
    ["version"].map((field) => [field, publicRuntimeConfig[field]]),
  );
  return NextResponse.json(statusObj);
}
