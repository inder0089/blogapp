/** @format */

import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import privateAPI from "../../api";

export const TodoApi = () => {
  async function getTodos() {
    const response = await privateAPI({
      url: "todos",
      headers: {
        method: "GET",
      },
    });
    return response;
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <div className='todo'>
        <div className='container'>
          <h1>Todo</h1>
          <div className='row'>
            <div className='col-md-6'>
              <form>
                <InputGroup className='mb-3'>
                  <Form.Control
                    placeholder='Enter Todo item'
                    aria-label="Recipient's username"
                    aria-describedby='basic-addon2'
                    name='item'
                  />
                  <button variant='outline-secondary' id='button-addon2'>
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
                <tr>
                  <td>
                    <div className='mb-3'>
                      <input type='checkbox' name='group1' />
                    </div>
                  </td>
                  <td className='w-75'></td>
                  <td>
                    <Button variant='danger'>Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
