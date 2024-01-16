export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type Company = {
  name: string;
};
