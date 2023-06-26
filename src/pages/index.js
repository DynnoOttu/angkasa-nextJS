/* eslint-disable jsx-a11y/alt-text */
import logo from "../assets/images/logo1.png"
import fatukopa from "../assets/images/gunung_fatukopa.svg"
import pulaukomodo from "../assets/images/pulaukomodo.svg"
import rote from "../assets/images/1.jpg"
import rumahAdat from "../assets/images/2.jpg"
import fatumnasi from "../assets/images/3.jpg"
import gunungSumba from "../assets/images/4.jpg"
import sumbaBarat from "../assets/images/5.jpg"
import lautPulauKomodo from "../assets/images/6.jpg"
import gunungMangarai from "../assets/images/7.png"
import kupang from "../assets/images/8.jpg"
import sumba from "../assets/images/9.jpg"
import blue from "../assets/images/blue.png"
import Link from 'next/link'
import Image from "next/image"
import Footer from '@/components/footer/footer';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const token = cookies.token;
  return (
    <>
      <div className='main-landing'>
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container p-3">
            <Image src={logo} alt="logo" className="navbar-brand" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <form className="d-flex form-search">
              <input className="form-control me-2 search" type="text" placeholder={"Where you want to go?"} />
            </form>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item mx-5">
                  {token ? (
                    <Link href="/findticket/findticket" className="nav-link">Find Ticket</Link>
                  ) : (
                    <Link href="/auth/login" className="nav-link">Find Ticket</Link>
                  )}
                </li>
                <li className="nav-item">
                  {token ? (
                    <Link href="/mybooking/mybooking" className="nav-link">My Booking</Link>
                  ) : (
                    <Link href="/auth/login" className="nav-link">My Booking</Link>
                  )}
                </li>
              </ul>
            </div>
            <Link href="/auth/register">
              <button className="btn" style={{ backgroundColor: "#2395FF" }} type="submit">Sign Up</button>
            </Link>
          </div>
        </nav>

        <div className='find mt-3 container'>
          <div className='row justify-content-between'>
            <div className='col-sm-7'>
              <div className='text-find'>
                <h1>Find your <span>Flight</span></h1>
                <p>And explore the world with us</p>
                <Image src={fatukopa} className='image-left' />
              </div>
            </div>
            <div className='col-sm-5'>
              <div className='landing-image'>
                <Image src={pulaukomodo} className='right' />
                <Image src={blue} className='right mt-5' />
              </div>
            </div>
          </div>
        </div>

        <div className='slide-trending container'>
          <div className='row justifny-content-betwee'>
            <div className='col-sm-11'>
              <Link href="" className='link-slide-trending'>TRENDING</Link>
              <p className='text-link-slide'>Trending destinations</p>
            </div>
            <div className='col-sm-1'>
              <Link href="" className='link-slide-view'>View All</Link>
            </div>
          </div>
        </div>

        <div className="slide-container swiper container">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            navigation={{
              clickable: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="slide-content">
              <div className="card-wrapper swiper-wrapper">
                <SwiperSlide>
                  <div className="card swiper-slide ">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={rote} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={rumahAdat} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={gunungSumba} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={fatumnasi} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={sumbaBarat} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={lautPulauKomodo} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={gunungMangarai} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={kupang} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <Image src={sumba} alt="" className="card-img" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
          <div className="swiper-button-next nav-btn"></div>
          <div className="swiper-button-prev nav-btn"></div>
          <div className="swiper-pagination"></div>
        </div>

        <Footer />

      </div>
    </>
  )
}
