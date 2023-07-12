import "./App.css";
import { Form } from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { List } from "./components/List";
function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      {
        name: "Play Soccer",
        isForGoodWeather: true,
        id: "dd4350364bd",
      },
    ],
  });

  function handleAddActivity(activity) {
    setActivities([...activities, { ...activity, id: uid() }]);
  }
  console.log("activities:", activities);
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}

export default App;
