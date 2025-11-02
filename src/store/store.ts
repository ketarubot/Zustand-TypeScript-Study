import { create } from "zustand";
import type { BookState } from "../types";

interface Books {
  books: BookState[];
  addBook: (newBook: BookState) => void;
}

export const useBooks = create<Books>(set => ({
  books: [],
  addBook: (newBook: BookState) =>
    set(prev => ({
      books: [...prev.books, newBook],
    })),
}));
