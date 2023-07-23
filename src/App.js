import Calculator from "./components/calculator";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "1.4rem",
          color: "grey",
        }}
      >
        <h1>The Calculator You Need!!!!!</h1>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
