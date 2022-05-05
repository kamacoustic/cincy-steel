/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import axios from "axios";

// core components

// const items = [
//   {
//     src: require("assets/img/band.png").default,
//     altText: "band",
//     caption: "The Band!",
//   },
//   {
//     src: require("assets/img/christmas_show.jpg").default,
//     altText: "show",
//     caption: "Christmas Event",
//   },
//   {
//     src: require("assets/img/band_back.jpg").default,
//     altText: "band_back",
//     caption: "We're Back!",
//   }
// ];

  var items = []

  

// response.data[0].attributes.image.data

const getPhotos =  async () => {
  let response = await axios('http://localhost:1337/api/photos?populate=*')
  items = [
      {
        src: require("assets/img/band.png").default,
        altText: "band",
        caption: "The Band!",
      },
      {
        src: require("assets/img/christmas_show.jpg").default,
        altText: "show",
        caption: "Christmas Event",
      },
      {
        src: require("assets/img/band_back.jpg").default,
        altText: "band_back",
        caption: "We're Back!",
      }
    ];
  let photos = response.data.data[0].attributes.image.data
  for (let index = 0; index < photos.length; index++) { 
    let element = photos[index].attributes;
    var arrayEntry = {}
    arrayEntry.src = "http://localhost:1337" + element.formats.medium.url
    arrayEntry.altText = element.alternativeText
    arrayEntry.caption = element.caption
    items.push(arrayEntry)
  }
  
}

  

function SectionCarousel() {

  

   React.useEffect(() => {
     getPhotos()
     setAnimating(true)
     setActiveIndex(0)
     setAnimating(false)
   }, [])
  
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel"
              style={{
                minHeight: "366px"
              }}
              >
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                       
                      >
                      &nbsp;
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
