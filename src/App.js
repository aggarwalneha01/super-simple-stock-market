import './App.css';
import {  Header } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
     <Header size="large" textAlign='center' color="blue">
        <Header.Content content='Super Simple Stock Market' >
        </Header.Content>
      </Header>
    </div>
  );
}

export default App;
