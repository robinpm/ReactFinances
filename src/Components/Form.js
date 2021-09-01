import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";

const Form = ({ onSubmit }) => {
  const [user, setUser] = useState("");
  const [description, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  // Submit data to server
  const submitData = () => {
    console.log("test");
    const formData = new FormData();
    formData.append("user", user);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("notes", notes);
    formData.append(
      "file",
      new Blob(["test payload"], {
        type: "text/csv",
      })
    );
    axios({
      url: "https://api.stop-watch.xyz/webfinances.php",
      method: "POST",
      data: formData,
      headers: {
        // Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    // axios({
    //   url: "https://api.stop-watch.xyz/testing/connect.php",
    //   method: "GET",
    // });
    window.location.href = "#submit";
  };

  return (
    <div id="myForm">
      <div className="input-box">
        <input
          type="text"
          // name="name"
          placeholder="Who are you?"
          onChange={handleUserChange}
        />
      </div>
      <div className="input-box">
        <input
          id="today"
          type="date"
          // name="date"
          onChange={handleDateChange}
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          // name="description"
          placeholder="What did you buy?"
          onChange={handleDescChange}
        />
      </div>
      <div className="input-box">
        <i>$</i>
        <input
          type="number"
          // step="0.01"
          id="price"
          // pattern="^\d*(\.\d{0,2})?$"
          // title="Insert a price! (00.000"
          // name="amount"
          placeholder="How much was it?"
          onChange={handlePriceChange}
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          // name="notes"
          placeholder="Anything else?"
          onChange={handleNotesChange}
        />
      </div>
      <div className="button">
        <input type="submit" value="Submit" onClick={submitData} />
      </div>
    </div>
  );
};

export default Form;

// import { useState } from "react";

// const AddTask = ({ onAdd }) => {
//   const [text, setText] = useState("");
//   const [day, setDay] = useState("");
//   const [reminder, setReminder] = useState(false);

//   const onSubmit = (e) => {
//       e.preventDefault()

//       if(!text) {
//           alert('Please add a task')
//           return
//       }

//       onAdd({text, day, reminder})

//       setText('')
//       setDay('')
//       setReminder(false);
//   }

//   return (
//     <form classNameName="add-form" onSubmit={onSubmit}>
//       <div classNameName="form-control">
//         <label>Task</label>
//         <input
//           type="text"
//           placeholder="Add Task"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//       </div>
//       <div classNameName="form-control">
//         <label>Day & Time</label>
//         <input
//           type="text"
//           placeholder="Day & Time"
//           value={day}
//           onChange={(e) => setDay(e.target.value)}
//         />
//       </div>
//       <div classNameName="form-control form-control-check">
//         <label>Reminder</label>
//         <input
//           type="checkbox"
//           value={reminder}
//           checked={reminder}
//           onChange={(e) => setReminder(e.currentTarget.checked)}
//         />
//       </div>

//       <input classNameName="btn btn-block" type="submit" value="Save Task" />
//     </form>
//   );
// };

// export default AddTask;
