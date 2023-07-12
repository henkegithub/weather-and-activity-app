import "./WeatherWidget.css";

export function WeatherWidget({ weatherEmoji, temperature }) {
  return (
    <p className="weather-widget">
      <span role="img" aria-label="sunny weather">
        {weatherEmoji}
      </span>
      <span>{temperature}&#8451;</span>
    </p>
  );
}
