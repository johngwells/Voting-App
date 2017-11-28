// Parent Component
class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        {/* Hello, Friend! I am a basic React component. */}
        <Product />
      </div>
    );
  }
}

// Child Component
// Every product will have an image, title, description, avatar, post author
class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src='images/products/image-aqua.png' />
          {/* ... todo ... */}
      </div>
      <div className='middle aligned content'>
        <div className='description'>
          <a>Fort Knight</a>
          <p>Authentic renaissance actors, delivered in just two weeks.</p>
        </div>
        <div className='extra'>
          <span>Submitted by:</span>
          <img
            className='ui avatar image'
            src='images/avatars/daniel.jpg'
          />
        </div>
      </div>
    </div>
    );
  }
}

// We need to render the ProductList inside a pecific DOM node
// ReactDOM has two arguments. First is what you like to render
// second is where you want to render it.
ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);