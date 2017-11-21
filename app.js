// import React, { Component } from 'react';

// 1st Component ProductList
// renders all list of products w/ its sub-components / child components
class ProductList extends React.Component {  
  render() {
    return (
      <div className='ui items'>
        <Product />
      </div>
    );
  }
}

// child component - contains the product listing
// every product we'll add an image, a title, description & an avatar of the post author
const Product = React.createClass({
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src='images/products/image-aqua.png' />
        </div>
        <div className='midle aligned content'>
          <div className='description'>
            <a>Fort Knight</a>
            <p>Authentic renaissnce actors, delivered in just two weeks</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src='images/avatar/daniel.jpg'
            />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);