import React from 'react'

import classes from "./dashboard.module.css"

import arrow from "../../assets/down_arrow.svg"
import filterIcon from "../../assets/filter_icon.svg"

const Dashboard = () => {
  return (
    <section className = {classes.div}>
      <div className = {classes.container}>
        <div>
          <div className = {classes.inputs}>
            <div className = {classes.input}>
              <label htmlFor="scrip">Scrip</label>
              <input type="text"  id = "scrip" value = "NIFTY"/>
            </div>
            <div className = {classes.input}>
              <label htmlFor="exp">Exp</label>
              <input type="text"  id = "exp" value = "18 May 2023"/>
            </div>
          </div>
          <ul className = {classes.stats}>
            <li>
              <p>Spot</p>
              <div>
                <p>18,245.3</p>
                <p className = {classes.percent}>0.35%</p>
              </div>
            </li>
            <li>
              <p>Fut</p>
              <div>
                <p>18,251.1</p>
                <p className = {classes.percent}>0.35%</p>
              </div>
            </li>
          </ul>
          <ul className = {classes.options}>
            <li>
              <div className = {classes.head}>
                <p>Max pain</p>
              </div>
              <p>18,200</p>
            </li>
            <li>
              <div className = {classes.head}>
                <p>PCR</p>
              </div>
              <p>0.92</p>
            </li>
            <li>
              <div className = {classes.head}>
                <p>Support 1</p>
                <div>
                  <img src= {arrow} alt="up" />
                  <img src= {arrow} alt="down" />
                </div>
              </div>
              <p>18100</p>
            </li>
            <li>
              <div className = {classes.head}>
                <p>Resistance 1</p>
                <div>
                  <img src= {arrow} alt="up" />
                  <img src= {arrow} alt="down" />
                </div>
              </div>
              <p>18500</p>
            </li>
          </ul>
          <div className = {classes.filters}>
            <div>
              <img src= {filterIcon} alt="filter_icon" />
              <p>Filters</p>
            </div>
            <div className = {classes.basket}>
              <p>3</p>
              <button>Basket</button>
            </div>
          </div>
        </div>

        <div className = {classes.buttons}>
          <button>LTP</button>
          <button>Greeks</button>
        </div>
      </div>
    </section>
  )
}

export default Dashboard