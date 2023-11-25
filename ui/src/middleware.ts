import { NextRequest, NextResponse } from "next/server";

// This is only to allow for previewing the site outside FiveM - it's not needed for production

export function middleware(req: NextRequest) {
	const userAgent = req.headers.get("user-agent");

	if (req.nextUrl.searchParams.get("preview") === "true") return;
	if (userAgent && !userAgent.includes("CitizenFX")) {
		return NextResponse.redirect(`${req.url}?preview=true`);
	}

	return;
}

export const config = {
	matcher: "/",
};
