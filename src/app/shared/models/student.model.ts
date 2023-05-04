import { status } from 'src/app/shared/models/status.model';

export interface Student{
  id:string;
  name:string;
  status:status;
  email:string;
  grade:string;
}
