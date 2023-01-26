export interface Message {
  title: string;
  text: string;
}

export interface MessageResponse {
  comments: string[];
  createdAt: Date;
  id: string;
  text: string;
  title: string;
  updatedAt: Date;
  user: string;
}
export interface OwnMessageResponse {
  comments: string[];
  createdAt: Date;
  id: string;
  text: string;
  title: string;
  updatedAt: Date;
}

export interface AllMessagesResponse {
  createdAt: Date;
  id:        string;
  text:      string;
  title:     string;
  updatedAt: Date;
  user:      User;
}

export interface User {
  createdAt: Date;
  email:     string;
  fullname:  string;
  id:        string;
  updatedAt: Date;
  username:  string;
}
