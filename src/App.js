import React from 'react';

//fonksiyonel component
// function App() {return <div>Hello React</div>;}

//sınıf component
class App extends React.Component {
  constructor(props) {
    super(props);

    //this App componentinden referans alıyor
    this.state = { title: 'Hello Constructor' };
  }
  render() {
    return <div>{this.state.title} </div>;
  }
}
export default App;
