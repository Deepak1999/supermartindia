import React from 'react'
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <>
      <div className='header'>
        <div>
          <img style={{ width: 120, height: 40, marginTop: 10 }} className='image' src="https://links.papareact.com/f90"
          />
        </div>

        <div className='headerInputcontainer'>
          <input className='headerInput' type="text" placeholder='search items or Products' />
          <SearchOutlinedIcon style={{ color: "white", marginLeft: 4, marginTop: 2 }} />
        </div>

        <div>
          <h4 className='headerText'>Hello Test</h4>
          <h4 className='headerText'>Accounts & Lists</h4>
        </div>

        <div>
          <h4 className='headerText'>Returns</h4>
          <h4 className='headerText'>& Orders</h4>
        </div>

        <div style={{ position: "relative" }}>
          <ShoppingCartIcon style={{ color: "white" }} />
          <span className='spantag'>0</span>
        </div>

        <div>
          <h4 className='headerText'>India</h4>
          <h4 className='headerText'>0987654321</h4>
        </div>

      </div>

      <div className='headerBottom'>
        <MenuIcon style={{ color: "white", paddingTop: 1 }} />
        <p className='headerBottomText'>Buy</p>
        <p className='headerBottomText'>Healthy Products</p>
        <p className='headerBottomText'>Sell</p>
        <p className='headerBottomText'>Baby</p>
        <p className='headerBottomText'>Health & LifeStyle</p>
        <p className='headerBottomText'>Prime Video</p>
        <p className='headerBottomText'>Super Sale</p>
        <p className='headerBottomText'>Offers</p>
        <p className='headerBottomText'>Exciting Offers</p>
        <p className='headerBottomText'>Subscribe</p>
      </div>

    </>
  )
}

export default Header