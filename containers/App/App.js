import React from 'react';
import Hello from '../../components/Hello/Hello';

class App extends React.Component {
  
  render() {
    return (
      <div><Hello /><Hello /></div>
    );
  }
}

export default App;