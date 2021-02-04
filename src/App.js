import './App.css';
import {store} from "./store/configureStore";
import {Provider} from "react-redux";
import AppRouter from "./Router";

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
