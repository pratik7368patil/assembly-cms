import "./App.css";
import COMPONENTS from "./components";
import { Provider } from "react-redux";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <COMPONENTS.Container />
      </div>
    </Provider>
  );
}

export default App;
