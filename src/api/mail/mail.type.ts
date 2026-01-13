export type MailStore = {
  sendResponse: MailResponse | null;
  loading: boolean;
  error: string | null;
  contactSendMail: (mail: Mail) => Promise<void>;
  clearSendResponse: () => void;
};

export type Mail = {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  package?: string;
  message: string;
};

export type MailResponse = {
  success: boolean;
  message: string;
  lead: { id: number };
  timestamp: string;
};
