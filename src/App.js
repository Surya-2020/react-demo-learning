import logo from './logo.svg';
import './App.css';
import { MyButton } from './MyButton';
import { MyButton2 } from './MyButton2';
import { MoviesList } from './MoviesList';
import { Handlers } from './Handlers';
import { PropsHandler } from './PropsHandler';
function App() {
  
  return (
    <div className="App">

      <p>
        Edit <code>hello bhai</code> and save to reload.
      </p>
      <MyButton />
      <h1>
        <MyButton2 />
      </h1>
      <h2>Show me some movies</h2>
      <MoviesList />
      <h1>Event handlers</h1>
      <Handlers />
      <h1>Props Example Counter that updates together</h1>
      <PropsHandler/>
      <div>
        <div>
          <div>
            <p>Im fun</p>
          </div>
          <p>Im div</p>
        </div>
      </div>
      <a>Im a link</a>
    </div>
  );
}

export default App;
