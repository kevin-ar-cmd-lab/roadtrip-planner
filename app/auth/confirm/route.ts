import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as
    | "signup"
    | "email"
    | "recovery"
    | "invite"
    | "magiclink"
    | "email_change"
    | null;
  const next = searchParams.get("next") ?? "/dashboard";

  if (token_hash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // For password recovery, redirect to the reset-password page
      if (type === "recovery") {
        return NextResponse.redirect(`${origin}/reset-password`);
      }
      return NextResponse.redirect(`${origin}${next}`);
    }

    // Provide specific error for expired links
    const errorParam = error.message?.includes("expired")
      ? "access_denied&error_code=otp_expired"
      : "auth_confirm_error";
    return NextResponse.redirect(`${origin}/login?error=${errorParam}`);
  }

  return NextResponse.redirect(`${origin}/login?error=auth_confirm_error`);
}
