
import React, { useEffect, useState, Component } from 'react'
import "../scss/Main.scss";
import Slider from 'react-slick';



const MySlickSlider = () => {

    const [imgSlider, setImgSlider] = useState([]);
       // slick
       const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: 10
      };

    const fetchImages = () => {
        fetch("https://picsum.photos/v2/list")
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((imgesData) => {
            console.log(imgesData);
            setImgSlider(imgesData);
        })
    }

    useEffect(() => {
            fetchImages();
    }, []);

 

  return (

    <div className="main-container">
         <Slider {...settings}>
           {
                imgSlider.map((myImages) => 
                    <div className="img-card" key={myImages.id}> 
                    <ul>
                        <li> { myImages.author.split(" ", 1)} </li>
                        <li> <img src={myImages.download_url} alt="" /> </li>

                        </ul>
                    </div>
                )  
            }
            </Slider>
    </div>
  );
}

export default MySlickSlider;
