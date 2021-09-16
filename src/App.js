import {useState} from "react";
import Hello from "./components/Hello";
import Input from "./components/Input";

function App() {
  // dispatchAction() a function that we call to update the state 
  // destructuring the array to update the UI to change in state
  // The first item is the state - the initial value
  // The second item is the function is what we call to update the state
  const [name, setName] = useState("Blanche");

  return (
  <main>
    <Hello name={name}/>

    <Input handler={setName}/>
  </main>);
}

export default App;
