export type SortData = { sortBy: string, sortDirection: 'asc' | 'desc' } | null;

export type Roles = 'User' | 'Farmer' | 'Admin';

export type ItemsType = 'Farms' | 'Products';

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

export type editUserFormData = {
  firstName?: string,
  lastName?: string,
  emailAddress?: string,
  userName?: string,
  password?: string,
  roles?: string[],
};

export type FarmFormData = {
  name: string,
  description: string,
  imagePath: string,
  country: string,
  city: string,
  address: string,
  faceBook: string,
  instagram: string,
  telephone: string,
  email: string
};

export type ProductFormData = {
  name: string,
  description: string,
  price: number,
  categoryId: number,
  imagePath: string,
};

