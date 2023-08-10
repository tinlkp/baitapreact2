import React, { Component } from 'react'
import data from '../../data/dataGlasses.json'
import style from "./stylecss/style.module.css"
import SanPham from './SanPham'
export default class Body extends Component {
    state = {
        url: "./glassesImage/v1.png",
    }
    renderListSanPham = () => {
        const content = data.map((element, index) => {
            return (
                <div key={index} className='col-2'>
                    <SanPham
                        key={index}
                        element={element}
                        handleChangeGlass={this.handleChangeGlass}
                    />
                </div>
            )
        });
        return content;
    }
    handleChangeGlass = (url) => {
        this.setState({
            url: url
        })
    }

    render() {
      
        return (
            <div >
                <div className={style.row}>
                    <div className={style.card}>
                        <img className="card-img-top" src="./glassesImage/model.jpg" />
                        <img className={style.imgGlass} src={this.state.url} />
                        <div className={`${style.cardItem} ${style.cardItembg}`}>
                            <h4 className={`${style.colorTitleCard}`}>GUCCI G8850U</h4>
                            <p className={style.colorTextCard}>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                        </div>
                    </div>
                    <div className={style.imgModel}>
                        <img className='img-fluid' src="./glassesImage/model.jpg" />
                    </div>
                </div>
                <div className='container'>
                    <div className={style.rowProduct}>
                        {this.renderListSanPham()}
                    </div>
                </div>

            </div>

        )
    }

}