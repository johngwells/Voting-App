// 1st Component ProductList
// renders all list of products w/ its sub-components / child components

class ProductList extends React.Component {
  render() {
    const product = Data[0];
    return (
      <div className='ui items'>
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitter_avatar_url={product.submitter_avatar_url}
          product_image_url={product.product_image_url}
        />
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
          <img src={this.props.product_image_url} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a>
              <i className='large caret up icon'></i>
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}>
            </a>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitter_avatar_url}
            />
          </div>
        </div>
      </div>
    );
  }
});

/*
// Harded Coded Version
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
              src='images/avatarb/daniel.jpg'
            />
          </div>
        </div>
      </div>
    );
  }
});
*/

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
