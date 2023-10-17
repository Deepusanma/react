
import { store } from './management/store/StudentStore';
import { Dispatcher } from './management/dispatcher/StudentDispatch';
import './App.css';
import { Provider } from 'react-redux';


function App() {
  const st=store;
  return (
    <div className="App">
      <Provider store={st}>
        <Dispatcher/>
      </Provider>
     
    </div>
  );
}

export default App;
