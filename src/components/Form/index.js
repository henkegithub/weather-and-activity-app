export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.name.value, event.target.isForGoodWeather.checked);
    onAddActivity({
      name: event.target.name.value,
      isForGoodWeather: event.target.isForGoodWeather.checked,
    });
    event.target.reset();
    event.target.name.focus();
  }
  return (
    <>
      <h1>Add new activity:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Activity name</label>
        <input id="name" type="text" name="name"></input>
        <label htmlFor="is-for-good-weather">Is for good weather?</label>
        <input
          id="is-for-good-weather"
          type="checkbox"
          name="isForGoodWeather"
        ></input>
        <button type="submit">Submit!</button>
      </form>
    </>
  );
}
