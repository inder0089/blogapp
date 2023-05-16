import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
const Todo = () => {
  return (
    <>
      <div className="todo">
        <div className="container">
          <h1>Todo</h1>
          <div className="row">
            <div className="col-md-6">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Add
                </Button>
              </InputGroup>
            </div>
            <div className="col-md-6">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
                  <Dropdown.Item href="#/action-2">Completed</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Not Completed</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="todo-table">
            <Table striped bordered hover variant="dark">
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
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                  </td>
                  <td className="w-75">Mark</td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
