import { userStore } from "@stores/user/user-action/user-action";


export function initTelegramUser() {
  const tg = window.Telegram?.WebApp;
  if (!tg) {
    console.error("❗ Telegram WebApp не инициализирован");
    return;
  }

  tg.ready();

  const user = tg.initDataUnsafe?.user;
  if (user) {
    userStore.initFromTelegram()
  } else {
    console.error("❗ Пользователь не найден в initDataUnsafe");
  }
}
