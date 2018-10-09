import React from 'react'
import './menu.css'

const ShippingList = props => {
  return (
    <div className="shipping-area">
      <div className="container-fluid">
        <div className="row">
          <div className="shipping-list">
            <div className="shipping-box">
              <div className="shipping-icon">
                <img
                  src={require('../assets/images/ship.png')}
                  alt="logo"
                  className="logo"
                />
              </div>
              <div className="shipping-content">
                <h6>Free Shipping On Order Over $120</h6>
                <p>Free shipping on all order</p>
              </div>
            </div>
            {/* end */}
            <div className="shipping-box">
              <div className="shipping-icon">
                <img
                  src={require('../assets/images/piggy.png')}
                  alt="logo"
                  className="logo"
                />
              </div>
              <div className="shipping-content">
                <h6>Money Return</h6>
                <p>Back guarantee under 7 days</p>
              </div>
            </div>
            {/* end */}
            <div className="shipping-box-last">
              <div className="shipping-icon">
                <img
                  src={require('../assets/images/member.png')}
                  alt="logo"
                  className="logo"
                />
              </div>
              <div className="shipping-content">
                <h6>Member Discount</h6>
                <p>Support online 24 hours a day</p>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  )
}

const Menu = props => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="header">
          <nav>
            <img
              src={require('../assets/images/logofarm.png')}
              alt="logo"
              className="logo"
            />

            <i className="fas fa-shopping-cart cart" />
          </nav>
          <div className="hero">
            <h3>FRUIT ORGANIC FOOD</h3>
            <h2>BIG SALE</h2>
            <h4>UPTO 30% OFF</h4>
            <a href="google.com" className="btn-white">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <ShippingList />
    </React.Fragment>
  )
}

export default Menu
