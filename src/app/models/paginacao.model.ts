import { Sistema } from './sistema.model';

export interface Paginacao {
  currentPage: number;
  lastPage: number;
  data: Sistema[];
  total: number;
}
