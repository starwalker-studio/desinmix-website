import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { MailStore } from "./mail.type";
import { sendMail } from "./mail.functions";

export const useMailStore = create<MailStore>()(
  devtools((set) => ({
    sendResponse: null,
    loading: false,
    error: null,
    contactSendMail: async (mail) => {
      set({ loading: true, error: null });
      try {
        const serverResponse = await sendMail(mail);
        set({
          sendResponse: serverResponse,
          loading: false,
        });
      } catch (error) {
        set({
          error: "No se pudo enviar el mensaje",
          loading: false,
        });
        console.error(error);
      }
    },
    clearSendResponse: () => set({ sendResponse: null }),
  }))
);
