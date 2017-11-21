class ProductList extends React.Component {
	constructor() {
		super();
	}

  render() {
    return (
      <div className='ui items'>
        Hello, Friend! I am a basic react component.
      </div>
    );
	}
}

ReactDOM.render(
	<ProductList />,
	document.getElementById('content')
);