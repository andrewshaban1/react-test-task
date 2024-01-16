export type Auth = {
  user: AuthUserData | null;
  isAuthenticated: boolean;
};

export type AuthUserData = {
  id: number;
  email: string;
  picture?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
};
