import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === "change-value") {
    console.log(action.payload);
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  if (action.type === "submit-value") {
    return {
      count: state.valueToAdd + state.count,
      valueToAdd: 0,
    };
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: "change-value",
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "submit-value",
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg mb-3">Count is {state.count}</h1>
      <div className="flex flex-row gap-6">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-100 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
