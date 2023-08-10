import React, { Component } from 'react'
import Header from './Header'

import style from "./stylecss/style.module.css"
import Body from './Body'

export default class BaiTapReact2 extends Component {
    render() {
        return (
            <div className={`${style.backgroundimg} `}>
                <div className={style.overlay}></div>
                    < Header />
                    <Body />


            </div>
        )
    }
}
