import React, { useState } from "react";

const Input = () => {
  const [txtValue, setTextValue] = useState("");

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" />
      </div>
      <br />
      <div>
        <label>이메일</label>
        <input type="email" />
      </div>
      <div>
        <label>전화번호</label>
        <input type="phone" />
      </div>
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
