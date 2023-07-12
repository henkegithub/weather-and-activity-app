export function List({ activities, onDeleteActivity }) {
  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button type="button" onClick={() => onDeleteActivity(activity.id)}>
              <span role="img" aria-label="Remove">
                ❌
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
