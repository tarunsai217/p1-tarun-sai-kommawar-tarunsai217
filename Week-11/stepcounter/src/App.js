import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import StepCounter from './Components/StepCounter/StepCounter'
function App() {
  return (
    <Provider store={store}>
     <StepCounter/>
    </Provider>
  );
}

export default App;
