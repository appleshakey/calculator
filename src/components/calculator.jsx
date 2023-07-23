import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function Calculator() {
  const [dispValue, setDispValue] = useState(0);
  const [result, setResult] = useState(0);
  const [op, setOp] = useState(0);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  function giveValue(event) {
    setDispValue(dispValue * 10 + Number(event.target.value));
  }

  function allClear() {
    setDispValue(0);
    setResult(0);
  }

  function deletChar() {
    setDispValue((dispValue - (dispValue % 10)) / 10);
  }

  function operator(event) {
    if (result === 0) {
      setResult(dispValue);
      setDispValue(0);
      setOp(Number(event.target.value));
    } else {
      let operation = op;
      console.log(result, op);
      let temp;
      if (operation === 1) temp = result + dispValue;
      else if (operation === 2) temp = result - dispValue;
      else if (operation === 3) temp = result * dispValue;
      else if (operation === 4 && dispValue !== 0) temp = result / dispValue;
      else if (operation === 5) {
        if (operation === 1) temp = result + dispValue;
        else if (operation === 2) temp = result - dispValue;
        else if (operation === 3) temp = result * dispValue;
        else if (operation === 4) temp = result / dispValue;
        setDispValue(0);
      }
      setDispValue(0);
      if (temp < 9999999) {
        setResult(temp || 0);
      }
      if (event.target.value !== 5) setOp(Number(event.target.value));
    }
  }

  const button_style = {
    backgroundColor: "rgb(70, 70, 71, 0.3)",
    borderColor: "transparent",
    borderRadius: "1.5rem",
    width: "75%",
    color: "white",
  };

  const operations_style = {
    backgroundColor: "rgb(161, 43, 29)",
    borderColor: "transparent",
    borderRadius: "1.5rem",
    color: "white",
  };

  const special_style = {
    backgroundColor: "rgb(13, 25, 79)",
    borderColor: "transparent",
    borderRadius: "1.5rem",
    color: "white",
  };

  return (
    <div
      style={{
        padding: isNonMobileScreens ? "0 40%" : "0 15%",
        margin: "5rem 0rem",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(200, 201, 207)",
          padding: "0.5rem",
          margin: "0.5rem",
          borderRadius: "1rem",
          boxShadow: "10px 5px 5px grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "rgb(59, 58, 58)",
            margin: "2rem 1rem",
            borderRadius: "1rem",
            color: "white",
          }}
        >
          <h1>({result})</h1>
          <h1>{dispValue}</h1>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr 1fr",
              height: "10rem",
              maxHeight: "50rem",
              gap: ".7rem",
              margin: ".7rem 0",
            }}
          >
            <button
              onClick={(event) => giveValue(event)}
              value={1}
              style={button_style}
            >
              1
            </button>
            <button onClick={giveValue} value={2} style={button_style}>
              2
            </button>
            <button onClick={giveValue} value={3} style={button_style}>
              3
            </button>
            <button onClick={operator} value={1} style={operations_style}>
              +
            </button>
            <button onClick={giveValue} value={4} style={button_style}>
              4
            </button>
            <button onClick={giveValue} value={5} style={button_style}>
              5
            </button>
            <button onClick={giveValue} value={6} style={button_style}>
              6
            </button>
            <button onClick={operator} value={2} style={operations_style}>
              -
            </button>
            <button onClick={giveValue} value={7} style={button_style}>
              7
            </button>
            <button onClick={giveValue} value={8} style={button_style}>
              8
            </button>
            <button onClick={giveValue} value={9} style={button_style}>
              9
            </button>
            <button onClick={operator} value={3} style={operations_style}>
              *
            </button>
            <button onClick={giveValue} value={0} style={button_style}>
              0
            </button>
            <button onClick={allClear} style={special_style}>
              AC
            </button>
            <button onClick={deletChar} style={special_style}>
              DC
            </button>
            <button onClick={operator} value={4} style={operations_style}>
              /
            </button>
          </div>
          <button
            onClick={operator}
            value={5}
            style={{
              ...operations_style,
              width: "100%",
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
