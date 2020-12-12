import React, { useState, useEffect, useRef } from 'react';

import './assets/css/style.css';
import Images from './components/Images';

//fonksiyonel component
function App() {
  //hook
  const [title, setTitle] = useState('Hello Hook');
  const [isShowing, setIsShowing] = useState(false);
  const mountRef = useRef(false);

  useEffect(() => {
    console.log('App Mounted');
  }, []);

  //Component will Update
  useEffect(() => {
    if (mountRef.current) {
      console.log('App Updated');
    } else {
      mountRef.current = true;
    }
  }, [isShowing]);

  function handleClick() {
    setIsShowing(!isShowing);
  }

  return (
    <section className='flex justify-center'>
      {console.log('re-rendred')}
      <div className='w-10/12'>
        <div className='text-center'>
          <div className='my-4'>{title}</div>

          <button
            className='p-1 bg-blue-700 text-white my-2'
            onClick={handleClick}
          >
            Toogle Image
          </button>
        </div>
        {isShowing ? <Images /> : null}
      </div>
    </section>
  );
}

// sınıf component
// class App extends React.Component {

//   constructor(props) {
//     super(props);

//     //this App componentinden referans alıyor
//     this.state = { title: 'Hello Constructor', isShowing: false };
//   }

//   render() {
//     return (
//       <section className='flex justify-center'>
//       <div className='w-1/2'>
//         <div className='my-4'>{this.state.title}</div>
//         <div className='text-center'>
//           <button
//             className='p-1 bg-blue-700 text-white my-2'
//             onClick={this.handleClick}
//           >
//             Toogle Image
//           </button>
//         </div>
//         {this.state.isShowing ? <Images /> : null}
//       </div>
//     </section>
//     );
//   }
// }
export default App;
