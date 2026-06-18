import CreateNewBook from './components/Button/CreateNewBook'
import Todo from './components/Button/Todo'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

type Book = {
  id: string;
  name: string;
}

function App() {
  const [nameBook, setNameBook] = useState<{ id: string; name: string }[]>([]);
  const [addBook, setAddBook] = useState<string>('');

  const addBookHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddBook(event.target.value);
  };
  
  const addBookToList = () => {
    const newBook: Book = {
      id: uuidv4(),
      name: addBook,
    };
    setNameBook([...nameBook, newBook]); // Spread operator to create a new array with the existing books and the new book
    setAddBook(''); // Sau khi thêm nó sẽ tự động xoá trong TextField để người dùng có thể nhập tên sách tiếp theo mà không cần phải xoá thủ công.
  }

  return (
    <>
      <p> Đây là trang quản lí sách của tôi</p> <br />
      <CreateNewBook 
        addBook={addBook} 
        addBookHandler={addBookHandler} 
        addBookToList={addBookToList} />

    </>
  )
}
{/* 
      <div>
        <TextField size= "small" label="Thêm sách" variant="outlined" value={addBook} placeholder="Nhập tên sách" onChange={addBookHandler}></TextField>
        <Button variant="contained" color="primary" onClick={addBookToList}>
          Thêm sách
        </Button>
      </div> */}

        {
          nameBook.map((todo) => {
            return <Todo name={todo.name}/>
          }) 
        }
    </>
  )
}

export default App
