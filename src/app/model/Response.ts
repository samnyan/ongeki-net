export interface Response<T> {
  code: number;
  data?: T;
  message?: string;
}

export interface PageResponse<T> {
  content: T[];
  page: number;
  totalPages: number;
  totalElements: number;
}
