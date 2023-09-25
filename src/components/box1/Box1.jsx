import React from "react";
import "./box1.css";

function Box1() {
  const siOptions = [
    { value: "None", text: "None" },
    { value: "Diabetes", text: "Diabetes" },
    { value: "Hypertension", text: "Hypertension" },
    { value: "Hypotension", text: "Hypotension" },
    { value: "Thyroid", text: "Thyroid" },
    { value: "Other", text: "Other" },
  ];

  const genderOptions = [
    { value: "male", text: "Male" },
    { value: "female", text: "Female" },
    { value: "others", text: "Others" },
  ];

  return (
    <>
      <div id="box-1">
        <form action="" method="post" id="form-1">
          <div className="op">
            <label for="op">Op Number:</label>
            <input type="text" name="opNum" id="opNum" />
          </div>

          <div className="age">
            <label for="age">Age:</label>
            <input type="text" name="age" id="age" />
          </div>

          <div className="gender">
            <label for="Gender">Gender:</label>
            <select name="Gender" id="gender">
              {genderOptions.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="si">
            <label for="si">Systemic Illness:</label>
            <select name="si" id="si">
              {siOptions.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="hca">
            <label for="hca">HCA:</label>
            <input type="text" name="hca" id="hca" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Box1;
