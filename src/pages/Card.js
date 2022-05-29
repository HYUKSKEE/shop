import { useState } from "react";

function Card(props) {
  //컴포넌트화

  let [cart, handleCart] = useState({ title: "" });
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleCart({ title: props.shoes.title });
          console.log(handleCart);
          alert("Cart에 담겼습니다.");
        }}
      >
        주문하기
      </button>
    </div>
  );
}

export default Card;
