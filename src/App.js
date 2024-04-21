import logo from "./logo.svg";
import "./App.css";
import { MyButton } from "./MyButton";
import { MyButton2 } from "./MyButton2";
import { Handlers } from "./Handlers";
import { PropsHandler } from "./PropsHandler";
import { Destructure } from "./Destrcuture";
import "bootstrap/dist/css/bootstrap.css";
import { MoviesListHandler } from "./MovieListHandler";
function App() {
  return (
    <div className="App">
      {/* <p>
        Edit <code>hello bhai</code> and save to reload.
      </p>
      <MyButton />
      <h1>
        <MyButton2 />
      </h1> */}
      <h2>Show me some movies</h2>
      <MoviesListHandler />

      {/* <h1>Event handlers</h1>
      <Handlers />
      <h1>Props Example Counter that updates together</h1>
      <PropsHandler />
      <h1>Get the data</h1>
      <Destructure /> */}
    </div>
  );
}

export default App;
