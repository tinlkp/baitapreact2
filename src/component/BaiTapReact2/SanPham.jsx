
import React, { Component } from 'react'

import style from "./stylecss/style.module.css"
export default class SanPham extends Component {
  render() {

    return (

      <img onClick={()=>{this.props.handleChangeGlass(this.props.element.url,this.props.element.name,this.props.element.desc)}} className={style.imgProduct} src={this.props.element.url} alt="" />

    )
  }
}
