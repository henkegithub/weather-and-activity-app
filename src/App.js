import "./App.css";
import { Form } from "./components/Form/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { List } from "./components/List/List";
import { ListHeading } from "./components/ListHeading/ListHeading";
import { useEffect, useState } from "react";
import { WeatherWidget } from "./components/WeatherWidget/WeatherWidget";
function App() {
  const [weather, setWeather] = useState();
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      {
        name: "Play Soccer",
        isForGoodWeather: true,
        id: "dd4350364bd",
      },
      {
        name: "Wash dishes",
        isForGoodWeather: false,
        id: "dd4350364ba",
      },
    ],
  });

  useEffect(() => {
    async function getWeather() {
      const weatherData = await (
        await fetch("https://example-apis.vercel.app/api/weather")
      ).json();
      console.log("weatherData", weatherData);
      setWeather(weatherData);
    }
    getWeather();
  }, []);

  function handleAddActivity(activity) {
    setActivities([...activities, { ...activity, id: uid() }]);
  }
  console.log("activities:", activities);
  return (
    <div className="App">
      <WeatherWidget
        weatherEmoji={weather?.condition}
        temperature={weather?.temperature}
      />
      <ListHeading isGoodWeather={!!weather?.isGoodWeather} />
      <List
        activities={activities.filter(
          (activity) => activity.isForGoodWeather === !!weather?.isGoodWeather
        )}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
