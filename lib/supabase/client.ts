"use client";

import { createBrowserClientFactory } from "../../../shared/supabase/src/clients/browser";

export function createClient() {
  return createBrowserClientFactory({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });
}
