import React, { useEffect, useState } from 'react';

export default function Images() {
  // const [myInterval, setmyInterval] = useState(null);

  useEffect(() => {
    console.log('Images Comp Mounted');

    const interval = setInterval(() => {
      console.log('hello');
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <img src='https://cdn.pixabay.com/photo/2020/06/07/17/19/child-5271290_960_720.jpg' />
  );
}

// export default class Images extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { interval: null };
//   }

//   componentDidMount() {
//     console.log('Images Comp Mounted');
//     this.setState({
//       interval: setInterval(() => {
//         console.log('hello');
//       }, 1000),
//     });
//   }

//   componentWillUnmount() {
//     console.log('Images Comp Unmounted');
//     clearInterval(this.state.interval);
//   }
//   render() {
//     return (
//       <img src='https://cdn.pixabay.com/photo/2020/06/07/17/19/child-5271290_960_720.jpg' />
//     );
//   }
// }
