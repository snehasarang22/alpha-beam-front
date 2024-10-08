import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const SpotLightSection = () => {
  return (
    <section className="women-banner spad">
      <div className="container-fluid">
        <div className="row spotlight">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2>Spotlight</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              navigation={true}
              modules={[Autoplay, Navigation]}
              className=""
              slidesPerView={4}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop
            >
              <SwiperSlide className="product-item">
                <div className="pi-pic">
                  <img src="/img/products/product-1.png" alt="Product 1" />
                  <div className="pi-title">
                    Lowarance <br />
                    for your sea
                  </div>
                  <ul>
                    <li className="quick-view btn">
                      <a href="#">Shop Now</a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-item">
                <div className="pi-pic">
                  <img src="/img/products/product-1.png" alt="Product 2" />
                  <div className="pi-title">
                    Lowarance <br />
                    for your sea
                  </div>

                  <ul>
                    <li className="quick-view btn">
                      <a href="#">Shop Now</a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-item">
                <div className="pi-pic">
                  <img src="/img/products/product-1.png" alt="Product 3" />
                  <div className="pi-title">
                    Lowarance <br />
                    for your sea
                  </div>
                  <ul>
                    <li className="quick-view btn">
                      <a href="#">Shop Now</a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-item">
                <div className="pi-pic">
                  <img src="/img/products/product-1.png" alt="Product 4" />
                  <div className="pi-title">
                    Lowarance <br />
                    for your sea
                  </div>
                  <ul>
                    <li className="quick-view btn">
                      <a href="#">Shop Now</a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-item">
                <div className="pi-pic">
                  <img src="/img/products/product-1.png" alt="Product 4" />
                  <div className="pi-title">
                    Lowarance <br />
                    for your sea
                  </div>
                  <ul>
                    <li className="quick-view btn">
                      <a href="#">Shop Now</a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-item">
                <div className="pi-pic">
                  <img src="/img/products/product-1.png" alt="Product 4" />
                  <div className="pi-title">
                    Lowarance <br />
                    for your sea
                  </div>
                  <ul>
                    <li className="quick-view btn">
                      <a href="#">Shop Now</a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false} // Display dots for indicators
              infiniteLoop={true} // Equivalent to `loop: true`
              autoPlay={true} // Equivalent to `autoplay: true`
              interval={2000} // Controls the speed of autoplay transition
              stopOnHover={true} // Stops autoplay on hover
              transitionTime={1000} // Equivalent to `smartSpeed: 1200` (in half, since Owl Carousel uses double the value in ms)
              swipeable={true} // Enables swiping
              emulateTouch={true} // Enables touch swipe
              dynamicHeight={false}
              centerMode={true} // Centers the active slide
              centerSlidePercentage={25} // Controls how much of the slide is shown
              showThumbs={false} // Hides the thumbnail images

              //   renderArrowPrev={(clickHandler, hasPrev) =>
              //     hasPrev && (
              //       <button
              //         type="button"
              //         onClick={clickHandler}
              //         className="control-arrow control-prev"
              //       >
              //         {/* <i className="ti-angle-left"></i> */}
              //       </button>
              //     )
              //   }
              //   renderArrowNext={(clickHandler, hasNext) =>
              //     hasNext && (
              //       <button
              //         type="button"
              //         onClick={clickHandler}
              //         className="control-arrow control-next"
              //       >
              //         {/* <i className="ti-angle-right"></i> */}
              //       </button>
              //     )
              //   }
            ></Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotLightSection;
