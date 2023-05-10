import React from "react";

const Jokes = () => {
  return (
    <>
      <div className="jokepage">
        <div className="container">
          <h1 className="text-center py-3">JOKE List</h1>

          <div className="joke-table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Jokes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jokes;
