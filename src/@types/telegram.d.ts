import type { TelegramWebApp } from "@/shared/model/tg";

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}

export {};
