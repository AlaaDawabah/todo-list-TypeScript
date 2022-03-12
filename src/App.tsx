import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AddTask from './pages/task/AddTask';
import Login from './Login/Login';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path={`/login`}
            element={<Login />}
          />
          <Route
            path={`/home`}
            element={<Home />}
          />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
