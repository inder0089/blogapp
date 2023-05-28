/** @format */

import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
const Todo = () => {
  const [inputItem, setInputItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filteredTodos, setFilteredToodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      todo: inputItem,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputItem("");
  };

  // const deleteItem = (name, idx) => {
  //   const _todoList = todoList.filter((na, id) => {
  //     return id != idx;
  //   });
  //   setTodoList(_todoList);
  // };

  // console.log("Out of useEffect", todoList);

  useEffect(() => {
    // console.log("Use Effect Ran on Mount"); //? componentDidMount //! works on first render
    // console.log("state", todoList);
    // return () => {
    //   console.log("Use Effect cleanup"); //? works when page/component is closed
    // };
  }, [todoList]); //? will call useEffect Block if given state updates

  const deleteItem = (name, idx) => {
    const _todoList = [...todoList];

    _todoList.splice(idx, 1);
    setTodoList(_todoList);
  };

  const handleCheckbox = (e, index) => {
    // console.log("checkbox", e.target.checked, index);

    const checkValue = e.target.checked;

    const _todoList = JSON.parse(JSON.stringify(todoList));
    //  [...todoList];

    _todoList[index].isCompleted = checkValue;
    // console.log("state", todoList);

    // console.log(_todoList);
    setTodoList(_todoList);
  };

  const handleFilters = (e) => {
    // console.log("handlefilter", e.target.value);
    const filterSelected = e?.target?.value;
    setFilter(filterSelected);
  };

  useEffect(() => {
    let filterSelectedTodo = [];
    if (filter === "all") {
      filterSelectedTodo = todoList;
    } else if (filter === "completed") {
      filterSelectedTodo = todoList.filter((item) => {
        return item.isCompleted === true;
      });
    } else if (filter === "notCompleted") {
      filterSelectedTodo = todoList.filter((item) => {
        return item.isCompleted === false;
      });
    }

    setFilteredToodos(filterSelectedTodo);
  }, [todoList, filter]);

  return (
    <>
      <div className='todo'>
        <div className='container'>
          <h1>Todo</h1>
          <div className='row'>
            <div className='col-md-6'>
              <form onSubmit={addTodo}>
                <InputGroup className='mb-3'>
                  <Form.Control
                    placeholder='Enter Todo item'
                    aria-label="Recipient's username"
                    aria-describedby='basic-addon2'
                    name='item'
                    required={true}
                    value={inputItem}
                    onChange={(e) => {
                      setInputItem(e.target.value);
                    }}
                  />
                  <button variant='outline-secondary' id='button-addon2'>
                    Add
                  </button>
                </InputGroup>
              </form>
            </div>
            <div className='col-md-6'>
              <select
                name='filter'
                id='select-list'
                onChange={(e) => handleFilters(e)}>
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
                {filteredTodos.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className='mb-3'>
                          <input
                            type='checkbox'
                            checked={item?.isCompleted}
                            onChange={(e) => handleCheckbox(e, index)}
                            name='group1'
                          />
                        </div>
                      </td>
                      <td className='w-75'>{item?.todo}</td>
                      <td>
                        <Button
                          variant='danger'
                          onClick={() => deleteItem(item?.todo, index)}>
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
    </>
  );
};

export default Todo;
