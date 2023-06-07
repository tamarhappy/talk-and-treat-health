import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FeeState } from './components/context/feeState';

ReactDOM.render(
  <BrowserRouter>
  <FeeState>
    <App/>
  </FeeState>
  </BrowserRouter>,
  document.getElementById('root')
);
