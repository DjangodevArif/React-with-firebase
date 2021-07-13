// import logo from './logo.svg';
import './App.css';
import Form from './Form';
import OurCard from './Card';
import { Paper } from '@material-ui/core';
import Login from './Login';
import { useState } from 'react';
import { useStateValue } from './static/StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Paper variant="outlined" square Card>
            {
              user ?
                <Form /> : <Login />
            }
          </Paper>
          <OurCard />
        </div>
      </header>
    </div>
  );
}

export default App;
