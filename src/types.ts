export interface Book {
  name: string;
  author: string;
}

export type Status = "다 읽음" | "읽는 중" | "관심 있음";
export interface BookState {
  book: Book;
  curPage: number;
  lastPage: number;
  aim?: Date;
  status: Status;
}
