import {
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Typography,
    Button,
    styled,
  } from "@mui/material";
  import { useState, useEffect } from "react";
  import { editTodo , edit } from "./service/api";
  import { useNavigate , useParams } from "react-router-dom";
  
  const Container = styled(FormGroup)`
    width: 50%;
    margin: 10% auto 0 auto;
    & > h2 {
      text-align: center;
      margin-bottom: 10px;
    }
  `;
  
  const Edit = () => {
    const [todo, settodo] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getTodoData();
    }, [])
    
  
    const getTodoData=async()=>{
        let response = await editTodo(id);
        console.log(response);
        settodo(response.data)
    }
    const onValueChange = (e) => {
      settodo({ ...todo, [e.target.name]: e.target.value });
      console.log(todo);
    };
  
    const addTodoDetails = async () => {
      await edit(todo , id);
      console.log(todo);
      navigate('/alluser')
    };
  
    return (
      <Container>
        <Typography variant="h2">Edit Todo</Typography>
        <FormControl>
          {/* <InputLabel>todo</InputLabel> */}
          <Input  onChange={(e) => onValueChange(e)} name="todo" value={todo.todo} />
          <Button onClick={() => addTodoDetails()} variant="contained">
            Edit Todo
          </Button>
        </FormControl>
      </Container>
    );
  };
  
  export default Edit;
  