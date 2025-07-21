import ReactDOM from "react-dom/client";
import { initTelegramUser } from "../features/auth-by-tg/init";

initTelegramUser(); 

ReactDOM.createRoot(document.getElementById("root")!);
