export interface RegisterUser {
  email: string;
  fullname: string;
  password: string;
  username: string;
}

export interface RegisterUserResponse {
  email: string;
  fullname: string;
  id: string;
  username: string;
}

export interface loginUser {
  password: string;
  username: string;
}
export interface loginUserResponse {
  access_token: string;
  expires_in: string;
  message: string;
  status: boolean;
}
