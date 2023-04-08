import React, { Component } from "react";
import { placeInfo, reviews, detailInfo, news } from "../data.js";

const InfoContext = React.createContext();

// Provider
// Consumer

class InfoProvider extends Component {
  state = {
    info: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news,
    headerTitle: detailInfo.headerTitle,
    headerSubTitle: detailInfo.headerSubTitle,
    headerText: detailInfo.headerText,
    title: detailInfo.title,
    description: detailInfo.description,
    img: detailInfo.img,
    maps: detailInfo.maps,
  };

  getItem =id=>{
    const item =this.state.info.find(item=>item.id === id)
    return item
  }
  handleDetail = id =>{ 
    const item=this.getItem(id);
    this.setState(()=>{
      return{detailInfo:item};
    })
  }

  render() {
    return (
      <InfoContext.Provider
        value={{
          info: this.state.info,
          reviews: this.state.reviews,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
          headerTitle: this.state.headerTitle,
          headerSubTitle: this.state.headerSubTitle,
          headerText: this.state.headerText,
          title: this.state.title,
          description: this.state.description,
          img: this.state.img,
          maps: this.state.maps,
          avatar:this.state.avatar,
          handleDetail:this.handleDetail
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
