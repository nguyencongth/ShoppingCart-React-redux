import { React, Component } from 'react';
import './App.css';
import Cart from './Components/Cart';
import ListProduct from './Components/ListProduct';
import Notify from './Components/Notify';
import Title from './Components/Title';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {/* TITLE : START */}
          <Title />
          {/* TITLE : END */}
          <div className="row">
            {/* LIST PRODUCT : START */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <ListProduct />
            </div>
            {/* LIST PRODUCT : END */}
            {/* CART : START */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <Cart />
              <Notify />
            </div>
            {/* CART : END */}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
