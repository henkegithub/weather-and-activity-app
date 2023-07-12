import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { uid } from "uid";
function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(activity) {
    setActivities([...activities, { ...activity, id: uid() }]);
  }
  console.log("activities:", activities);
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
