export type UserDetailsType = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
};

export type SignupPayloadType = {
  name: string;
  email: string;
  password: string;
  role: string;
  permissions: string[];
};
