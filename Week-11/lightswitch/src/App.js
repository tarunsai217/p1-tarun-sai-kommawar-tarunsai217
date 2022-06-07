import logo from './logo.svg';
import './App.css';
import Room from './Components/Room/Room'
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Room/>
    </Provider>
  );
}

export default App;
