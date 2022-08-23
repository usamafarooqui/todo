import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { useState } from "react";
import { addTodo } from "./service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 10% auto 0 auto;
  & > h2 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

const AddUser = () => {
  const [todo, settodo] = useState("");
  const navigate = useNavigate();

  const onValueChange = (e) => {
    settodo({ ...todo, [e.target.name]: e.target.value });
    console.log(todo);
  };

  const addTodoDetails = async () => {
    await addTodo(todo);
    console.log(todo);
    navigate('/alluser')
  };

  return (
    <Container>
      <Typography variant="h2">Add Todo</Typography>
      <FormControl>
        <InputLabel>todo</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name="todo" />
        <Button onClick={() => addTodoDetails()} variant="contained">
          Add Todo
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
