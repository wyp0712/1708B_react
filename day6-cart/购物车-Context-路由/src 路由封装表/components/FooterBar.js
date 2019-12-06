import React from 'react'
import { Link } from 'react-router-dom'

const FooterBar = () => {
  return <div>
         <nav>
            <Link to="/home">首页</Link>
            <Link to="/cart">购物车</Link>
         </nav>  
      </div>
}

export default FooterBar