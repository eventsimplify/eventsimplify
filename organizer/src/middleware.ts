// middleware.ts
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: (response) => {
        const { token } = response;
        return !!token;
      },
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
