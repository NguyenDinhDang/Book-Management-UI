import { Button, TextField } from '@mui/material'
import Todo from './components/Todo'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
type Book = {
  id: number;
  name: string;
}

function App() {
  const [nameBook, setNameBook] = useState<{ id: number; name: string }[]>([]);
  const [addBook, setAddBook] = useState<string>('');

  const addBookHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddBook(event.target.value);
  };
  
  const addBookToList = () => {
    const newBook: Book = {
      id: uuidv4(),
      name: addBook,
    };
    setNameBook([...nameBook, newBook]);
    setAddBook('');
  }

  return (
    <>
      <p> Đây là trang quản lí sách của tôi</p> <br />
      <div>
        <TextField size= "small" label="Thêm sách" variant="outlined" value={addBook} placeholder="Nhập tên sách" onChange={addBookHandler}></TextField>
        <Button variant="contained" color="primary" onClick={addBookToList}>
          Thêm sách
        </Button>
      </div>
        {
          nameBook.map((todo) => {
            return <Todo name={todo.name}/>
          })
        }
    </>
  )
}

export default App
