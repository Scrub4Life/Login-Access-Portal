import "./App.css";
import { Login } from "./Login";

function App() {
  return (
    <>
      <h1>Login Access Portal</h1>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 5 }}>
          <Login name={"Student"} username={"Student ID"} />
        </div>

        <div style={{ marginLeft: 5 }}>
          <Login name={"Faculty & Staff"} username={"Falculty ID"} />
        </div>
      </div>
    </>
  );
}

export default App;
