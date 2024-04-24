
import { useState } from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerImg1 from "./assets/image_1.jpeg";
import BannerImg2 from "./assets/image_2.jpg";
import BannerImg3 from "./assets/images_3.jpeg";
import {Image} from "@mui/icons-material";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AdsCarousel = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    const Img1 = 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn';
    const Img2 = 'https://yt3.ggpht.com/a/AGF-l7-LQkmghwCr0bIbKdlr7R2yfgKr9cyZeWvvoQ=s900-c-k-c0xffffffff-no-rj-mo';
    const Img3 = 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn';


    const images = [Img1, Img2, Img3];
    return (
        <div className="w-full m-auto">
            <Slider {...sliderSettings} className='header-slider'>
                {images.map((img, index) => (
                    <img width={'fit-content'} height={350} key={index} className='header-slide' src={img} style={{ objectFit: 'cover',

                        backgroundPosition: 'center', height: '100vh' }}>
                        {/*<header className='h-100 min-vh-100 d-flex align-items-center text-light'>*/}

                        {/*    <div className='container d-flex flex-column align-items-center'>*/}
                        {/*        <h1 className='new text-center fw-semibold'>IETP Course Platform</h1>*/}
                        {/*        <p> Integrated Engineering Team Project is a course given to Addis Ababa Science and Technology University students 1 year before their graduation </p>       <div className='d-flex flex-column flex-sm-row align-items-center'>*/}
                        {/*        <h3>*/}
                        {/*            Are you that stake ?*/}
                        {/*        </h3>*/}
                        {/*        <Link to="/login">*/}
                        {/*            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Login</button>*/}
                        {/*        </Link>*/}

                        {/*    </div></div>*/}
                        {/*</header>*/}
                    </img>
                ))}
            </Slider>

        </div>
    );
};

export default AdsCarousel;
