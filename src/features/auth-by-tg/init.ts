
export function initTelegramUser() {
  const tg = window.Telegram?.WebApp;
  if (!tg) {
    console.error("❗ Telegram WebApp не инициализирован");
    return;
  }

  tg.ready();
}
