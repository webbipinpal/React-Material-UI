import React from 'react';
import ReactDOM from 'react-dom';
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { withStyles } from "@material-ui/core/styles"
import Slider from "react-slick";
import HbkuSliderItem from './HbkuSliderItem'
import lSlide1 from "./images/l-slide01.png";
import lSlide2 from "./images/l-slide02.png";
import lSlide3 from "./images/l-slide03.png";

const styles = theme => ({
    
  })
  const useStyles = makeStyles(theme => ({

    display4:{
      fontSize:'2.5rem',
      fontWeight: 500,
    },
    display3:{
      fontWeight:'bold',
    },
  }))

const HbkuSlider = (props) =>  {
    const classes = useStyles();
    
    const SlideCont = [
        {
        SImagURL :lSlide1,
        SText: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. Again during the 90s as desktop publishers bundled the text with their software.",
        STitle: " Digitally easy."
        },
        {
        SImagURL :lSlide2,
        SText: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. Again during the 90s as desktop publishers bundled the text with their software.",
        STitle: " Extending the possibilities."
        },
        {
        SImagURL :lSlide3,
        SText: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. Again during the 90s as desktop publishers bundled the text with their software.",
        STitle: " Access Everywhere."
        },
      ]

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <Slider {...settings}>
            {SlideCont.map(option => (
                <HbkuSliderItem ImageURL={option.SImagURL} SlideInfo={option.SText} SlideTitle={option.STitle} key={option.STitle} />
            ))}
           
        </Slider>
    )
}
export default withStyles(styles)(HbkuSlider)