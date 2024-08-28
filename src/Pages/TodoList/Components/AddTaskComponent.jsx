import React, { useState } from "react";
import { DeleteIcon } from "../../../assets/svg/Icons";
const AddTaskComponent = () => {
  const [DetailsType, setDetailsType] = useState(0);
  const [DataCounter, setDataCounter] = useState(0);

  const [data, setData] = useState([]);

  const handleAddMoreData = (e) => {
    if (DataCounter + 1 > 3) return;
    setDataCounter(DataCounter + 1);
    setData([...data, { value: "" }]);
  };

  const handleDelete = (index) => {
    setDataCounter(DataCounter - 1);
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleInputChange = (index, value) => {
    const newData = [...data];
    newData[index].value = value;
    setData(newData);
  };

  return (
    <>
      <div className="Title">
        <h3>Add New Task</h3>
      </div>
      <div className="Input__Data">
        <label htmlFor="">Task Name</label>
        <input type="text" className="Input" />
      </div>
      <div className="Input__Data">
        <label htmlFor="">Details Type</label>
        <select
          name=""
          id=""
          className="Input"
          onChange={(e) => setDetailsType(e.target.value)}
        >
          <option value={0}>No Details</option>
          <option value={1}>List Details</option>
          <option value={2}>Text Details</option>
        </select>
      </div>
      {DetailsType == 1 && (
        <div className="Input__Data">
          <label htmlFor="">List Details</label>
          <textarea type="text" className="Input" />
        </div>
      )}
      {DetailsType == 2 && (
        <>
          {data.map((item, index) => (
            <div key={index} className="Input__Data Deletable">
              <input
                type="text"
                placeholder={`Data ${index + 1}`}
                className="Input M-Top-0"
                value={item.value}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="InputDeleteButton"
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
          <div className="Input__Data">
            <button className="btn_outline Full" onClick={handleAddMoreData}>
              Add Data
            </button>
          </div>
        </>
      )}
      <div className="Input__Data">
        <input
          type="submit"
          value="Add New Task"
          className="btn_primary Full"
        />
      </div>
    </>
  );
};

export default AddTaskComponent;
