import { createAdminClient } from "./admin";

export interface SiteSettings {
  googleAnalyticsId: string | null;
  googleTagManagerId: string | null;
  googleSearchConsoleVerification: string | null;
  facebookPixelId: string | null;
  customHeadScripts: string | null;
}

interface SiteSettingsRow {
  google_analytics_id: string | null;
  google_tag_manager_id: string | null;
  google_search_console_verification: string | null;
  facebook_pixel_id: string | null;
  custom_head_scripts: string | null;
}

/**
 * Fetch site-level settings from Supabase.
 * Falls back to null values if Supabase is unavailable.
 */
export async function fetchSiteSettings(projectSlug: string): Promise<SiteSettings> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("site_settings")
      .select("google_analytics_id, google_tag_manager_id, google_search_console_verification, facebook_pixel_id, custom_head_scripts")
      .eq("project_slug", projectSlug)
      .single();

    if (error) {
      console.error("Supabase site_settings fetch error:", error.message);
      return {
        googleAnalyticsId: null,
        googleTagManagerId: null,
        googleSearchConsoleVerification: null,
        facebookPixelId: null,
        customHeadScripts: null,
      };
    }

    const row = data as unknown as SiteSettingsRow | null;

    return {
      googleAnalyticsId: row?.google_analytics_id ?? null,
      googleTagManagerId: row?.google_tag_manager_id ?? null,
      googleSearchConsoleVerification: row?.google_search_console_verification ?? null,
      facebookPixelId: row?.facebook_pixel_id ?? null,
      customHeadScripts: row?.custom_head_scripts ?? null,
    };
  } catch (err) {
    console.error("Failed to fetch site settings from Supabase:", err);
    return {
      googleAnalyticsId: null,
      googleTagManagerId: null,
      googleSearchConsoleVerification: null,
      facebookPixelId: null,
      customHeadScripts: null,
    };
  }
}
