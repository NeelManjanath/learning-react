import { useReducer } from "react";
import "./App.css";
import DigitButton from "./Components/DigitButton";
import OperationButton from "./Components/OperationButton";
import formatOperand from "./Functions/IntegerFormatter";
import Reducer from "./Functions/ReducerFunction"

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const numbers = Array.from({ length: 9 }, (_, index) => index + 1);
numbers.push(".", "0");


function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    Reducer,
    {}
  );
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
          <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>
      </div>
      <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
      <div className="number-pad">
        {numbers.map((item) => {
          return <DigitButton digit={item} dispatch={dispatch} />;
        })}
      </div>
      <div className="operation-pad">
        {["➗", "✖️", "➕", "➖"].map((item) => {
          return <OperationButton operation={item} dispatch={dispatch} />;
        })}
      </div>
      <button
          className="span-two evaluate"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          🟰
        </button>
    </div>
  );
}

export default App;
export { ACTIONS };
