import "./App.css";
import { Form } from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { List } from "./components/List";
import { ListHeading } from "./components/ListHeading";
import { useEffect, useState } from "react";
import { WeatherWidget } from "./components/WeatherWidget";
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
    const id = setInterval(getWeather, 5000);

    async function getWeather() {
      const weatherData = await (
        await fetch("https://example-apis.vercel.app/api/weather")
      ).json();
      console.log("weatherData", weatherData);
      setWeather(weatherData);
    }
    return () => {
      clearInterval(id);
    };
  }, []);

  function handleAddActivity(activity) {
    setActivities([...activities, { ...activity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
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
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
