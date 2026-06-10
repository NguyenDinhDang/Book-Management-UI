import { Button } from '@mui/material'

export const Todo = ({ name } : {name: string}) => {
  return (
      <Button style={{ justifyContent: 'center' }} fullWidth = {true} variant="contained" color="primary">{name}</Button>
  )
}

export default Todo
