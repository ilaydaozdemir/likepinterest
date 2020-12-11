import React from 'react';
import './assets/css/style.css';

//fonksiyonel component
function App({ title }) {
  return (
    <div>
      <div className='box'>{title}</div>
    </div>
  );
}

//sınıf component
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     //this App componentinden referans alıyor
//     this.state = { title: 'Hello Constructor' };
//   }
//   render() {
//     return <div>{this.state.title} </div>;
//   }
// }
export default App;
