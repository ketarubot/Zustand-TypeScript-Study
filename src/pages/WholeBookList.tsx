import BookCard from "../components/BookCard";
import { useBooks } from "../store/store";
import Header from "../components/Header";

function WholeBookList() {
  const books = useBooks(state => state.books);

  return (
    <>
      <Header />
      {books.map((v, i) => {
        <BookCard info={v} key={i} />;
      })}
    </>
  );
}

export default WholeBookList;
