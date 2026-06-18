import React from 'react'
import { Button, TextField } from '@mui/material'

type Props = {
    addBook : string, 
    addBookHandler : (e : React.ChangeEvent<HTMLInputElement>) => void; 
    addBookToList : () => void
}

export const CreateNewBook = (
    {   
        addBook, 
        addBookHandler, 
        addBookToList 
    } : Props ) => {
  

  return (
    <div>
        <TextField 
            size= "small" label="Thêm sách" variant="outlined" 
            value={addBook} 
            placeholder="Nhập tên sách" 
            onChange={addBookHandler}>
        </TextField>
        <Button variant="contained" color="primary" onClick={addBookToList}>
          Thêm sách
        </Button>
      </div>
  )
}

export default CreateNewBook
