import React from 'react';

import './assets/css/style.css';

//fonksiyonel component
// function App({ title }) {
//   return (
//     <div>
//       <div className='bg-gray-600 text-white p-5 border'>{title}</div>
//     </div>
//   );
// }

//sınıf component
class App extends React.Component {
  constructor(props) {
    super(props);

    //this App componentinden referans alıyor
    this.state = { title: 'Hello Constructor', isShowing: false };

    //handleClick'i normal bır fonk. olarak tanımlamak istersek
    //this degerini goremez bu yuzden bind ile fonk.nu baglamamız gerekir.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isShowing: !this.state.isShowing });
  }

  render() {
    return (
      <section className='flex justify-center'>
        <div className='w-1/2'>
          <div className='my-4'>{this.state.title}</div>
          <div className='text-center'>
            <button
              className='p-1 bg-blue-700 text-white my-2'
              onClick={this.handleClick}
            >
              Toogle Image
            </button>
          </div>
          {this.state.isShowing ? (
            <img src='https://cdn.pixabay.com/photo/2020/06/07/17/19/child-5271290_960_720.jpg' />
          ) : null}
        </div>
      </section>
    );
  }
}
export default App;
