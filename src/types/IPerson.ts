export interface IPerson {
  id:number;
  firstName: string;
  lastName: string;
  alive: boolean;
  father?:string;
  fatherId?: number;
  mother:string;
  motherId?: number;
  createdAt:string;
}
