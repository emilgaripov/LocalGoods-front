export type SortData = { sortBy: string, sortDirection: 'asc' | 'desc' } | null;

export type Roles = 'User' | 'Farmer' | 'Admin';

export type RegistrationFormData = {
  firstName: string,
  lastName: string,
  emailAddress: string,
  userName: string,
  password: string,
  isFarmer: boolean
};

export type LoginFormData = {
  emailAddress: string,
  password: string
};

export type JWT = {
  expiresAt: string,
  refreshToken: string,
  token: string
};
