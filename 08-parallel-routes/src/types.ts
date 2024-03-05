export interface Chat {
  id: number;
  name: string;
  user_email: string;
  timestamp: Date;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface StoredMessage extends Message {
  id: number;
  chat_id: number;
}

export interface ChatWithMessages extends Chat {
  messages: StoredMessage[];
}
