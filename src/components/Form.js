export function Form() {
  return (
    <>
      <h1>Heading</h1>
      <label htmlFor="name">Activity name</label>
      <input id="name" type="text" name="name"></input>
      <label htmlFor="is-for-good-weather">Is for good weather?</label>
      <input
        id="is-for-good-weather"
        type="checkbox"
        name="isForGoodWeather"
      ></input>
      <button type="submit">Submit!</button>
    </>
  );
}
