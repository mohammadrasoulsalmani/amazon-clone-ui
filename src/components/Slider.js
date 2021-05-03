import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import "./Slider.css";

function Slider() {
  var items = [
    {
      name: "Random Name #1",
      src:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
    },
    {
      name: "Random Name #2",
      src:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_1500x600_CV59._CB403490035_.jpg",
    },
    {
      name: "Random Name #2",
      src:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg",
    },
    {
      name: "Random Name #2",
      src:
        "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    },
    {
      name: "mmmsss",
      src:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
    },
  ];

  return (
    <Carousel indicators={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  console.log(props.item.src);
  return (
    <Paper>
      <img src={props.item.src} className="slider__image" />
    </Paper>
  );
}

export default Slider;
