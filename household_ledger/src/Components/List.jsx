import React from "react";

const List = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">날짜</th>
            <th scope="col">유형</th>
            <th scope="col">이름</th>
            <th scope="col">가격</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>date</td>
            <td>식료품</td>
            <td>쌀</td>
            <td>5000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
