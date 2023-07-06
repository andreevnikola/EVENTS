import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/:locale/sign-in", "/pricing", "aboutus", "/howitworks"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
