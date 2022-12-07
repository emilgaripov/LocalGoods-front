import { Roles } from "../types/types";

export interface IUser {
  id: number,
  username: string,
  email: string,
  roleId: Roles
}
