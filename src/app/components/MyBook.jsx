import BookForm from "./BookForm";
import BookList from "./BookList";

var MyBook = () => {
  return (
    <>
      <div>
        <h3>My Book</h3>
        <BookList />
        <BookForm />
      </div>
    </>
  )
}

export default MyBook;