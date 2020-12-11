import React from 'react';

import './assets/css/style.css';

//fonksiyonel component
function App({ title }) {
  return (
    <div>
      <div className='bg-gray-600 text-white p-5 border'>{title}</div>
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
