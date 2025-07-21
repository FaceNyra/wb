export interface TgWebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
  }
  
  export interface TgInitDataUnsafe {
    user?: TgWebAppUser;
    auth_date: number;
    hash: string;
  }
  
  export interface TelegramWebApp {
    initDataUnsafe: TgInitDataUnsafe;
    ready(): void;
  }
  