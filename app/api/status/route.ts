import packageJson from "@@/package.json" with { type: "json" };
import { NextResponse } from "next/server";

export async function GET() {
	const statusObj = {
		version: packageJson.version,
	};
	return NextResponse.json(statusObj);
}
