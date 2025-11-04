import { messageElement } from "./elements.js";

export default function (message) {
  messageElement.textContent = message ? `*${message}` : "";
}
