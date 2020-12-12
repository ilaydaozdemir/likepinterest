import React, { Component } from 'react';

export default class Images extends Component {
  componentWillUnmount() {
    console.log('Images Comp Unmounted');
  }
  render() {
    return (
      <img src='https://cdn.pixabay.com/photo/2020/06/07/17/19/child-5271290_960_720.jpg' />
    );
  }
}
