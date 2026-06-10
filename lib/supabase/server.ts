import { createServerClientFactory } from "../../../shared/supabase/src/clients/server";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClientFactory({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    getAllCookies: () => cookieStore.getAll(),
    setAllCookies: (cookiesToSet) => {
      try {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        );
      } catch {
        // Can be ignored if middleware refreshes sessions
      }
    },
  });
}
