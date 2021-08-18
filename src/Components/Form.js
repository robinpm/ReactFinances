const Form = () => {
  return (
    <div>
      <form action="./gogo.php" method="post">
        <div className="input-box">
          <input type="text" name="name" placeholder="Who are you?" />
        </div>
        <div className="input-box">
          <input id="today" type="date" name="date" />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="description"
            placeholder="What did you buy?"
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            step="0.01"
            id="price"
            pattern="^\d*(\.\d{0,2})?$"
            title="Insert a price! (00.000"
            name="amount"
            placeholder="How much was it?"
          />
          <i>$</i>
        </div>
        <div className="input-box">
          <input type="text" name="notes" placeholder="Anything else?" />
        </div>
        <div className="button">
          <input type="submit" value="Submit" />
        </div>
      </form>
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
