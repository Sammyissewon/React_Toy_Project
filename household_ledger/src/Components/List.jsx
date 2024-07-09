import React from "react";
import "./List.css";
import { useSelector } from "react-redux";

const List = () => {
  let state = useSelector((state) => state.data);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Memo</th>
          </tr>
        </thead>
        <tbody>
          {/* state가 배열이므로, state.map을 사용하여 각 항목을 순회 */}
          {state.map((item) => (
            // 각 <tr> 태그에 key 속성을 추가하여 배열을 렌더링할 때 각 항목을 고유하게 식별
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.memo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
