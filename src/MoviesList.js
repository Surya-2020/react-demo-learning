import { useState } from "react";

export const MoviesList = ({ items, message }) => {
  items.sort((a, b) => b.rating - a.rating);
  const [state, setState] = useState(-1);
  const getMessage = () => {
    return items.length === 0 ? <p>No items found in the list</p> : null;
  };
  const getMessage1 = () => {
    return items.length === 0 && <p>No items found in the list</p>;
  };

  return (
    <>
      <h1>List of Vijay Movies</h1>
      {getMessage1()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={
              state === index ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setState(index);
              message(item.vijaymovies);
            }}
          >
            {index} - {item.vijaymovies} Rating - {item.rating}
          </li>
        ))}
      </ul>
    </>
  );
};
