import { PageContent, ServiceContent, LocationContent } from "./types";
import { homePage } from "./pages/home";
import { locationPage } from "./pages/location";
import { faqsPage } from "./pages/faqs";
import { tenantLoginPage } from "./pages/tenant-login";
import { legacyPage } from "./pages/legacy";
import { rvBoatStorageService } from "./services/rv-boat-storage";
import { rvStorageService } from "./services/rv-storage";
import { boatStorageService } from "./services/boat-storage";
import { trailerStorageService } from "./services/trailer-storage";
import { commercialFleetParkingService } from "./services/commercial-fleet-parking";
import { semiTruckParkingService } from "./services/semi-truck-parking";
import { constructionEquipmentStorageService } from "./services/construction-equipment-storage";
import { bentonvilleArLocation } from "./locations/bentonville-ar";
import { springdaleArLocation } from "./locations/springdale-ar";
import { fayettevilleArLocation } from "./locations/fayetteville-ar";
import { lowellArLocation } from "./locations/lowell-ar";
import { centertonArLocation } from "./locations/centerton-ar";

export const allPages: Record<string, PageContent> = {
  [homePage.slug]: homePage,
  [locationPage.slug]: locationPage,
  [faqsPage.slug]: faqsPage,
  [tenantLoginPage.slug]: tenantLoginPage,
  [legacyPage.slug]: legacyPage,
};

export const allServices: Record<string, ServiceContent> = {
  [rvBoatStorageService.slug]: rvBoatStorageService,
  [rvStorageService.slug]: rvStorageService,
  [boatStorageService.slug]: boatStorageService,
  [trailerStorageService.slug]: trailerStorageService,
  [commercialFleetParkingService.slug]: commercialFleetParkingService,
  [semiTruckParkingService.slug]: semiTruckParkingService,
  [constructionEquipmentStorageService.slug]: constructionEquipmentStorageService,
};

export const allLocations: Record<string, LocationContent> = {
  [bentonvilleArLocation.slug]: bentonvilleArLocation,
  [springdaleArLocation.slug]: springdaleArLocation,
  [fayettevilleArLocation.slug]: fayettevilleArLocation,
  [lowellArLocation.slug]: lowellArLocation,
  [centertonArLocation.slug]: centertonArLocation,
};

export function getPage(slug: string): PageContent | undefined {
  return allPages[slug] || allServices[slug] || allLocations[slug];
}

export function getAllSlugs(): string[] {
  return [
    ...Object.keys(allPages),
    ...Object.keys(allServices),
    ...Object.keys(allLocations),
    "blog",
  ];
}

export { siteConfig } from "./site-config";
export type { PageContent, ServiceContent, LocationContent, Section } from "./types";
