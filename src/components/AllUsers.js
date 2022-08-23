import React,{ useEffect , useState} from 'react';
import {Table,styled, Button} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getTodo , deleteTodo, edit } from './service/api';
import {Link} from 'react-router-dom';


const StyledTable=styled(Table)`
  width:20%;
  margin: 100px auto 0 auto;
   
`
const Thead=styled(TableRow)`
  background-color:#e03169;
  & > th{
    color:white;
    font-size:20px;
  }
   
`

const Tbody=styled(TableBody)`
  & > td {
  
  font-size:20px;
 }
   
`

const AllUsers=()=>{

  const [todos,setTodos] = useState([]);
  useEffect(() => {
    getTodoDetails();
    },[])

    const getTodoDetails=async()=>{
      let response = await getTodo();
      console.log(response);
      setTodos(response.data)

    }

    const deleteTodoData=async(id)=>{
      await deleteTodo(id);
      getTodoDetails();  

    }
  
  return(
    
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Todos</TableCell>
        
        </Thead>
      </TableHead>
      <TableBody>
        {todos.map(todo=>(
          <Tbody>
            <TableCell>{todo.id}</TableCell>
            <TableCell>{todo.todo}</TableCell>
            <TableCell style={{display:'flex',}}>
              <Button variant='contained' style={{marginRight:'10px'}} component={Link} to={`/edit/${todo.id}`} >Edit</Button>
              <Button variant='contained' color='secondary' onClick={()=>deleteTodoData(todo.id)} >Delete</Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>  
    </StyledTable>
    
  )
}

export default AllUsers;