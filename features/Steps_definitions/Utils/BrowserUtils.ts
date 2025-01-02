// utils/browserUtils.ts
import { chromium, Browser, Page } from "@playwright/test";

export async function setupBrowser(headless: boolean = true): Promise<Page> {
  const browser: Browser = await chromium.launch({ headless });
  const context = await browser.newContext();
  return context.newPage();
}
