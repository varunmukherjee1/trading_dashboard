import React from 'react'

import classes from "./nav.module.css"

// Images
import brand_logo from "../../assets/tracktrades_logo.svg"
import down_arrow from "../../assets/down_arrow.svg"

const Nav = () => {
  return (
    <nav className = {classes.nav}>
      <div className = {classes.container}>
        <div className = {classes.brand}>
          <img src= {brand_logo} alt="logo" />
        </div>
        <div className = {classes.links}>
          <ul>
            <li>Dashboard</li>
            <li>Option chain</li>
            <li>Strategy builder</li>
            <li>Positions</li>
            <li>Order book</li>
          </ul>
        </div>
        <div className = {classes.stats}>
          <ul>
            <li>
              <p>NIFTY</p>
              <div>
                <p className = {`${classes.percentage} ${classes.up}`}>0.35%</p>
                <p>18,245.32</p>
              </div>
            </li>
            <li>
              <p>BANKNIFTY</p>
              <div>
                <p className = {`${classes.percentage} ${classes.up}`}>0.7%</p>
                <p>39,156.1</p>
              </div>
            </li>
            <li>
              <p>INDIA VIX</p>
              <div>
                <p className = {`${classes.percentage} ${classes.down}`}>-10.9%</p>
                <p>12.12</p>
              </div>
            </li>
          </ul>
        </div>
        <div className = {classes.profile}>
          <p>Profile</p>
          <img src= {down_arrow} alt="arrow" />
        </div>
      </div>
    </nav>
  )
}

export default Nav