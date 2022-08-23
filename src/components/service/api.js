import axios from 'axios';

const API_URL = 'http://localhost:3002/todos';

export const addTodo = async(data)=>{
    try {
        return await axios.post(API_URL,data)
    } catch (error) {
        console.log('error while cathing api',error.message)
    }
}

export const getTodo = async()=>{
    try {
      return await axios.get(API_URL);
    } catch (error) {
        console.log('error while geting the api',error.message)
    }
}

export const editTodo = async(data)=>{
    try {
      return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
        console.log('error while editing the api',error.message)
    }
}

export const edit = async(data , id)=>{
    try {
      return await axios.put(`${API_URL}/${id}`,data);
    } catch (error) {
        console.log('error while editing the data',error.message)
    }
}

export const deleteTodo = async(id)=>{
    try {
      return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log('error while deleting the data',error.message)
    }
}


