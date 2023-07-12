export function ListHeading({ isGoodWeather }) {
  return (
    <h2>
      {isGoodWeather
        ? "The weather is good, let's do this:"
        : "Bad weather outside, here is what we do:"}
    </h2>
  );
}
