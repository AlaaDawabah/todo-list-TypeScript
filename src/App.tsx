import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import RoutesComp from './utils/Routes';
import NavBar from './components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Container>
          <RoutesComp />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
