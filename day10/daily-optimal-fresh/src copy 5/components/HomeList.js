import React, { Component,Fragment } from 'react'
import { 
  HomeDiv,
  GoodsImg,
  ImgDiv,
  FontDiv,
  SpanDiv
} from '../views/styleHome'

export default class HomeList extends Component {
  render() {
    const { list } = this.props;
    return (
        <HomeDiv>
        { list.map((item, index) => {
            return (
            <GoodsImg key={item.id}>
              <ImgDiv className="img">
                <img onClick={ () => this.handleDetailClick(item) } src={item.img} alt=''/>
              </ImgDiv>
              <FontDiv className="font">
                { item.count ? (
                  <Fragment>
                    <SpanDiv onClick={ () => this.handleRemoveEvent(index) } >-</SpanDiv>
                    <SpanDiv>{item.count}</SpanDiv>
                  </Fragment>
                ): null }
                <SpanDiv onClick={ () => this.hanleAddEvent(index) }>+</SpanDiv>
              </FontDiv>
            </GoodsImg>
            )
        }) }
      </HomeDiv>
    )
  }

  handleDetailClick = (item) => {
    const { detailClick } = this.props;
    detailClick(item)
  }

  handleRemoveEvent = (index) => {
    const { removeClick } = this.props;
    removeClick(index)
  }

  hanleAddEvent = (index) => {
    const { addClick } = this.props;
    addClick(index)
  }
}
