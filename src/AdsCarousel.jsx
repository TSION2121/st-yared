
import { useState } from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import StYared from './assets/st-Yared-1.png';

import {Image} from "@mui/icons-material";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AdsCarousel = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    const Img1 = StYared;
    const Img2 = 'https://www.ecured.cu/images/thumb/0/07/Saint_Yared.jpg/390px-Saint_Yared.jpg';
    const Img3 = StYared;
    const Img4 = 'https://th.bing.com/th/id/OIP.6nkCrM-lseB0eWUWRs0ftwAAAA?pid=ImgDet&w=189&h=253&c=7&dpr=1.4'


    const images = [Img1, Img2, Img3, Img4];
    return (
        <div className="w-full">
            <Slider style={{width:'90%', height:'100%' , alignItems:'center'
            }} {...sliderSettings} className='header-slider'>
                {images.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img}
                            alt={`Banner ${index + 1}`}
                            style={{
                                width: 'fit-content', // Use viewport width (vw) for full screen width
                                height: 'auto', // Auto height to maintain aspect ratio
                                // maxWidth:'100%',
                                maxHeight: '80vh', // Max height to fit the screen height
                                objectFit: 'cover', // Contain the image within the div without cropping
                                margin: '0 80px',
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AdsCarousel;
