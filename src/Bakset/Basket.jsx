import React from "react";
import style from "./basket.module.css";

export const Basket = () => {
  const data = JSON.parse(localStorage.getItem("product"));
  console.log(data);

  return (
    <div>
      <h1>hello form basket</h1>
      <div className={style.cardBox}>
        {data?.map((item) => {
          return (
            <div className={style.cardItem} key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
