import { useState } from "react";
import "./App.css";
import swal from "sweetalert";
function App() {
  const [sendDesc, setSendDesc] = useState();
  const [loader, setLoader] = useState(false)
  const data = {
    data: {
      descriptionText: sendDesc,
    },
  };
  // fetch("https://immense-stream-99519.herokuapp.com/api/descriptions").then((res)=> res.json() )
  //  .then(data=>console.log(data.data))
  //  .catch(e=>console.log(e))

  const submitData = (e) => {
    setLoader(true)
    e.preventDefault();
    fetch("https://immense-stream-99519.herokuapp.com/api/descriptions", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
  
    })
     
      .then((data) => {
        setLoader(false)
        if (data.status === 200) {

          swal("Good job!", "Data created Successfully!", "success");
        }
      })

      .catch((e) => console.log(e));
  };
  return (
    <div className="App">
      <div className={` box ${(loader===true)?"":"d-none"}`}>
      <div className="spinner-border text-white " role="status">
 
 </div>
      </div>

      <h5 className="text-white shadow bg-success py-2 mb-2 mb-md-5">Write somthing here</h5>
      <textarea 
        type="text"
        cols={60}
        rows={10}
        onChange={(e) => setSendDesc(e.target.value)}
      />
      <br />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default App;
