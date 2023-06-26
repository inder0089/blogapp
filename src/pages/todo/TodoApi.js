/** @format */

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import privateAPI from "../../api";
import axios from "axios";

const auth = JSON.parse(window.localStorage.getItem("auth"));

export const TodoApi = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, settodoList] = useState([]);
  async function getTodos() {
    // const response = await privateAPI({
    //   url: "todos",
    //   headers: {
    //     method: "GET",
    //   },
    // });

    const response = await privateAPI.get("/todos");

    // const response = await axios.get(
    //   "https://todolist-api-mz6f.onrender.com/todos",
    //   {
    //     headers: {
    //       Authorization: auth?.access_token,
    //     },
    //   }
    // );

    console.log("todo data", response);
    settodoList(response.data.todos);
    return response;
  }

  useEffect(() => {
    getTodos(); //fetch todo data with get on page mount
  }, []);

  const initialvalue = {
    title: "",
    isCompleted: false,
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInputText({ ...inputText, [name]: value });
  };

  const formData = (e) => {
    e.preventDefault();
    privateAPI
      .post("/todos", inputText) // add API
      .then(async (response) => {
        console.log("response", response);
        await getTodos();
      })
      .catch((error) => {
        console.log("error", error);
      });
    setInputText(initialvalue);
  };
  // console.log(todoList);

  const handleCheckbox = async (e, iD) => {
    // const checklist = e.target.checked;
    const checklistID = iD;

    // console.log("handleCheckbox", checklist, iD);
    await privateAPI.get(`/isCompleted/${checklistID}`);
    await getTodos();

    // const checkedItem = [...todoList];

    // const filtedList = checkedItem.map((item) => {
    //   return iD === item._id;
    // });
    // console.log("filtedList", filtedList);
  };

  const deleteItem = async (iD) => {
    const deleteItemID = iD;
    // console.log("id", deleteItemID);
    await privateAPI.delete(`/todos/${deleteItemID}`);
    await getTodos();
  };

  return (
    <div>
      <div className='todo'>
        <div className='container'>
          <h1>Todo</h1>
          <div className='row'>
            <div className='col-md-6'>
              <form onSubmit={formData}>
                <InputGroup className='mb-3'>
                  <Form.Control
                    placeholder='Enter Title'
                    aria-label="Recipient's username"
                    aria-describedby='basic-addon2'
                    name='title'
                    value={inputText.title}
                    onChange={handlechange}
                  />
                  <button
                    type='submit'
                    variant='outline-secondary'
                    id='button-addon2'>
                    Add
                  </button>
                </InputGroup>
              </form>
            </div>
            <div className='col-md-6'>
              <select name='filter' id='select-list'>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='notCompleted'>Not completed</option>
              </select>
            </div>
          </div>
          <div className='todo-table'>
            <Table striped bordered hover variant='dark'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Todo Item</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {todoList.length > 0 &&
                  todoList.map((list) => {
                    return (
                      <tr key={list._id}>
                        <td>
                          <div className='mb-3'>
                            <input
                              type='checkbox'
                              name='group1'
                              checked={list?.isCompleted}
                              onClick={(e) => handleCheckbox(e, list._id)}
                            />
                          </div>
                        </td>
                        <td className='w-75'>{list.title}</td>
                        <td>
                          <Button
                            variant='danger'
                            onClick={() => deleteItem(list._id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
