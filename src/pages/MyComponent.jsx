import { useLocation } from "react-router-dom";

function MyComponent() {
  // useLocation returns an object with information about the current URL
  const location = useLocation();

  // Access properties of the location object
  const pathname = location.pathname;
  const search = location.search;
  const state = location.state;
  console.log("State from previous location:", state);
  // Use the values in your component
  console.log(location);
  return (
    <div>
      <h2>Current Path: {pathname}</h2>
      <p>Query Parameters: {search}</p>
    </div>
  );
}

export default MyComponent;
