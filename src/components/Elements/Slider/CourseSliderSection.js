import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

class CourseSlider extends Component {

    render() {

        return (
            <div className="course__slider swiper-container">
                <div className="swiper-wrapper pb-10">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y,]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2
                            },
                            1200: {
                                // when window width is >= 992px
                                slidesPerView: 2,
                            }
                        }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="flip-box course__item course__item-3 swiper-slide white-bg mb-80 fix">

                                <div className="flip-box-front course__thumb w-img p-relative fix" style={{ backgroundImage: "url(assets/img/course/new-course/new-course-img-1.png)" }}>
                                    {/* <Link href="/course-details"><a>
                                        <img src="assets/img/course/new-course/new-course-img-1.png" alt="img not found" />
                                    </a></Link> */}
                                    <div className="course__tag">
                                        <Link href="/course-details"><a>Art & Design</a></Link>
                                    </div>
                                    <div className="course__content">

                                        <div className="course__meta d-none d-flex align-items-center justify-content-between">
                                            <div className="course__lesson">
                                                <span><i className="fas fa-book"></i>43 Lesson</span>
                                            </div>
                                            <div className="course__rating">
                                                <span><i className="fas fa-star"></i>4.5 (44)</span>
                                            </div>
                                        </div>

                                        <h3 className="flip-box-header course__title" style={{ color: "white" }}><Link href="/course-details"><a>Become a product Manager learn the skills & job.</a></Link></h3>

                                        <div className="course__teacher d-none d-flex align-items-center">
                                            <div className="course__teacher-thumb mr-15">
                                                <img src="assets/img/course/teacher/teachers/teacher-1.png" alt="img not found" />
                                            </div>
                                            <h6><Link href="/instructor-details"><a>Ahmed Khan</a></Link></h6>
                                        </div>

                                    </div>
                                </div>

                                <div className='flip-box-back'>
                                    <div className="course__content">
                                        <div className="course__meta d-flex align-items-center justify-content-between">
                                            <div className="course__lesson">
                                                <span><i className="fas fa-book"></i>43 Lesson</span>
                                            </div>
                                            <div className="course__rating">
                                                <span><i className="fas fa-star"></i>4.5 (44)</span>
                                            </div>
                                        </div>
                                        <h3 className="flip-box-header course__title" style={{ color: "black" }}><Link href="/course-details"><a>Become a product Manager learn the skills & job.</a></Link></h3>
                                        <div className="course__teacher d-flex align-items-center">
                                            <div className="course__teacher-thumb mr-15">
                                                <img src="assets/img/course/teacher/teachers/teacher-1.png" alt="img not found" />
                                            </div>
                                            <h6><Link href="/instructor-details"><a>Ahmed Khan</a></Link></h6>
                                        </div>
                                        <div className="course__btn text-end">
                                            <Link href="/course-details"><a className="link-btn">
                                                Know Details
                                                <i className="fas fa-arrow-right"></i>
                                                <i className="fas fa-arrow-right"></i>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status">
                                        <span>Free</span>
                                    </div>
                                    <div className="course__btn d-none">
                                        <Link href="/course-details"><a className="link-btn">
                                            Know Details
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="course__thumb w-img p-relative fix">
                                    <Link href="/course-details"><a><img src="assets/img/course/new-course/new-course-img-1.png" alt="img not found" /></a></Link>
                                    <div className="course__tag">
                                        <Link href="/course-details"><a>Art & Design</a></Link>
                                    </div>
                                </div>
                                <div className="course__content">
                                    <div className="course__meta d-flex align-items-center justify-content-between">
                                        <div className="course__lesson">
                                            <span><i className="fas fa-book"></i>43 Lesson</span>
                                        </div>
                                        <div className="course__rating">
                                            <span><i className="fas fa-star"></i>4.5 (44)</span>
                                        </div>
                                    </div>
                                    <h3 className="course__title"><Link href="/course-details"><a>Become a product Manager learn the skills & job.</a></Link></h3>
                                    <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                            <img src="assets/img/course/teacher/teachers/teacher-1.png" alt="img not found" />
                                        </div>
                                        <h6><Link href="/instructor-details"><a>Ahmed Khan</a></Link></h6>
                                    </div>
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status">
                                        <span>Free</span>
                                    </div>
                                    <div className="course__btn">
                                        <Link href="/course-details"><a className="link-btn">
                                            Know Details
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                </div>
                            </div> */}
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flip-box course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="flip-box-front course__thumb w-img p-relative fix" style={{ backgroundImage: "url(assets/img/course/new-course/new-course-img-6.png)" }}>
                                    {/* <Link href="/course-details"><a >
                                        <img src="assets/img/course/new-course/new-course-img-6.png" alt="img not found" />
                                    </a></Link> */}
                                    <div className="course__tag">
                                        <Link href="/course-details"><a className="pink">UX Design</a></Link>
                                    </div>
                                    <div className="course__content">
                                        <div className="course__meta d-none d-flex align-items-center justify-content-between">
                                            <div className="course__lesson">
                                                <span><i className="fas fa-book"></i>13 Lesson</span>
                                            </div>
                                            <div className="course__rating">
                                                <span><i className="fas fa-star"></i>4.5 (72)</span>
                                            </div>
                                        </div>
                                        <h3 className="flip-box-header course__title" style={{ color: "white" }}><Link href="/course-details"><a>Creative writing through Storytelling</a></Link></h3>
                                        <div className="course__teacher d-none d-flex align-items-center">
                                            <div className="course__teacher-thumb mr-15">
                                                <img src="assets/img/course/teacher//teachers/teacher-6.png" alt="img not found" />
                                            </div>
                                            <h6><Link href="/instructor-details"><a>Saim Ali</a></Link></h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="flip-box-back course__thumb w-img p-relative fix">
                                    <div className="course__content">
                                        <div className="course__meta d-flex align-items-center justify-content-between">
                                            <div className="course__lesson">
                                                <span><i className="fas fa-book"></i>13 Lesson</span>
                                            </div>
                                            <div className="course__rating">
                                                <span><i className="fas fa-star"></i>4.5 (72)</span>
                                            </div>
                                        </div>
                                        <h3 className="flip-box-header course__title" style={{ color: "black" }}><Link href="/course-details"><a>Creative writing through Storytelling</a></Link></h3>
                                        <div className="course__teacher d-flex align-items-center">
                                            <div className="course__teacher-thumb mr-15">
                                                <img src="assets/img/course/teacher//teachers/teacher-6.png" alt="img not found" />
                                            </div>
                                            <h6><Link href="/instructor-details"><a>Saim Ali</a></Link></h6>
                                        </div>
                                        <div className="course__btn text-end">
                                            <Link href="/course-details"><a className="link-btn">
                                                Know Details
                                                <i className="fas fa-arrow-right"></i>
                                                <i className="fas fa-arrow-right"></i>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="pink">$46.00</span>
                                        <span className="old-price">$72.00</span>
                                    </div>
                                    <div className="course__btn d-none">
                                        <Link href="/course-details"><a className="link-btn">
                                            Know Details
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="course__thumb w-img p-relative fix">
                                    <Link href="/course-details"><a><img src="assets/img/course/new-course/new-course-img-2.png" alt="img not found" /></a></Link>
                                    <div className="course__tag">
                                        <Link href="/course-details"><a className="sky-blue">Mechanical</a></Link>
                                    </div>
                                </div>
                                <div className="course__content">
                                    <div className="course__meta d-flex align-items-center justify-content-between">
                                        <div className="course__lesson">
                                            <span><i className="fas fa-book"></i>72 Lesson</span>
                                        </div>
                                        <div className="course__rating">
                                            <span><i className="fas fa-star"></i>4.5 (44)</span>
                                        </div>
                                    </div>
                                    <h3 className="course__title"><Link href="/course-details"><a>Fundamentals of music theory Learn new</a></Link></h3>
                                    <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                            <img src="assets/img/course/teacher/teachers/teacher-2.png" alt="img not found" />
                                        </div>
                                        <h6><Link href="/instructor-details"><a>Junaid Ali</a></Link></h6>
                                    </div>
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="sky-blue">$32.00</span>
                                        <span className="old-price">$68.00</span>
                                    </div>
                                    <div className="course__btn">
                                        <Link href="/course-details"><a className="link-btn">
                                            Know Details
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                </div>
                            </div> */}
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flip-box course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="flip-box-front course__thumb w-img p-relative fix" style={{ backgroundImage: "url(assets/img/course/new-course/new-course-img-5.png)" }}>
                                    {/* <Link href="/course-details"><a >
                                        <img src="assets/img/course/new-course/new-course-img-5.png" alt="img not found" />
                                    </a></Link> */}
                                    <div className="course__tag">
                                        <Link href="/course-details"><a className="orange">Audio & Music</a></Link>
                                    </div>
                                    <div className="course__content">
                                        <div className="course__meta d-none d-flex align-items-center justify-content-between">
                                            <div className="course__lesson">
                                                <span><i className="fas fa-book"></i>18 Lesson</span>
                                            </div>
                                            <div className="course__rating">
                                                <span><i className="fas fa-star"></i>4.5 (37)</span>
                                            </div>
                                        </div>
                                        <h3 className="flip-box-header course__title" style={{ color: "white" }}><Link href="/course-details"><a>Build your media and Public presence</a></Link></h3>
                                        <div className="course__teacher d-none d-flex align-items-center">
                                            <div className="course__teacher-thumb mr-15">
                                                <img src="assets/img/course/teacher//teachers/teacher-5.png" alt="img not found" />
                                            </div>
                                            <h6><Link href="/instructor-details"><a>Asad Khan</a></Link></h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="flip-box-back course__thumb w-img p-relative fix">
                                    <div className="course__content">
                                        <div className="course__meta d-flex align-items-center justify-content-between">
                                            <div className="course__lesson">
                                                <span><i className="fas fa-book"></i>18 Lesson</span>
                                            </div>
                                            <div className="course__rating">
                                                <span><i className="fas fa-star"></i>4.5 (37)</span>
                                            </div>
                                        </div>
                                        <h3 className="flip-box-header course__title" style={{ color: "black" }}><Link href="/course-details"><a>Build your media and Public presence</a></Link></h3>
                                        <div className="course__teacher d-flex align-items-center">
                                            <div className="course__teacher-thumb mr-15">
                                                <img src="assets/img/course/teacher//teachers/teacher-5.png" alt="img not found" />
                                            </div>
                                            <h6><Link href="/instructor-details"><a>Asad Khan</a></Link></h6>
                                        </div>
                                        <div className="course__btn text-end">
                                            <Link href="/course-details"><a className="link-btn">
                                                Know Details
                                                <i className="fas fa-arrow-right"></i>
                                                <i className="fas fa-arrow-right"></i>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="orange">$62.00</span>
                                        <span className="old-price">$97.00</span>
                                    </div>
                                    <div className="course__btn d-none">
                                        <Link href="/course-details"><a className="link-btn">
                                            Know Details
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="course__thumb w-img p-relative fix">
                                    <Link href="/course-details"><a><img src="assets/img/course/new-course/new-course-img-3.png" alt="img not found" /></a></Link>
                                    <div className="course__tag">
                                        <Link href="/course-details"><a className="green">Development</a></Link>
                                    </div>
                                </div>
                                <div className="course__content">
                                    <div className="course__meta d-flex align-items-center justify-content-between">
                                        <div className="course__lesson">
                                            <span><i className="fas fa-book"></i>14 Lesson</span>
                                        </div>
                                        <div className="course__rating">
                                            <span><i className="fas fa-star"></i>3.5 (55)</span>
                                        </div>
                                    </div>
                                    <h3 className="course__title"><Link href="/course-details"><a>Strategy law and organization Foundation</a></Link></h3>
                                    <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                            <img src="assets/img/course/teacher/teachers/teacher-3.png" alt="img not found" />
                                        </div>
                                        <h6><Link href="/instructor-details"><a>Syed Hammad</a></Link></h6>
                                    </div>
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="green">$46.00</span>
                                        <span className="old-price">$68.00</span>
                                    </div>
                                    <div className="course__btn">
                                        <Link href="/course-details"><a className="link-btn">
                                            Know Details
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                </div>
                            </div> */}
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flip-box course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="flip-box-front course__thumb w-img p-relative fix" style={{ backgroundImage: "url(assets/img/course/new-course/new-course-img-4.png)" }}>
                                    {/* <Link href="/course-details"><a >
                                        <img src="assets/img/course/new-course/new-course-img-4.png" alt="img not found" />
                                    </a></Link> */}
                                    <div className="course__tag">
                                        <Link href="/course-details"><a className="blue">Marketing</a></Link>
                                    </div>
                                    <div className="course__content">
                                        <div className="course__meta d-none d-flex align-items-center justify-content-between">
                                            <div className="course__lesson">
                                                <span><i className="fas fa-book"></i>22 Lesson</span>
                                            </div>
                                            <div className="course__rating">
                                                <span><i className="fas fa-star"></i>4.5 (42)</span>
                                            </div>
                                        </div>
                                        <h3 className="flip-box-header course__title" style={{ color: "white" }}><Link href="/course-details"><a>The business Intelligence analyst Course 2022</a></Link></h3>
                                        <div className="course__teacher d-none d-flex align-items-center">
                                            <div className="course__teacher-thumb mr-15">
                                                <img src="assets/img/course/teacher//teachers/teacher-4.png" alt="img not found" />
                                            </div>
                                            <h6><Link href="/instructor-details"><a>Usman Ahmed</a></Link></h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="flip-box-back course__thumb w-img p-relative fix">
                                    <div className="course__content">
                                        <div className="course__meta d-flex align-items-center justify-content-between">
                                            <div className="course__lesson">
                                                <span><i className="fas fa-book"></i>22 Lesson</span>
                                            </div>
                                            <div className="course__rating">
                                                <span><i className="fas fa-star"></i>4.5 (42)</span>
                                            </div>
                                        </div>
                                        <h3 className="flip-box-header course__title" style={{ color: "black" }}><Link href="/course-details"><a>The business Intelligence analyst Course 2022</a></Link></h3>
                                        <div className="course__teacher d-flex align-items-center">
                                            <div className="course__teacher-thumb mr-15">
                                                <img src="assets/img/course/teacher//teachers/teacher-4.png" alt="img not found" />
                                            </div>
                                            <h6><Link href="/instructor-details"><a>Usman Ahmed</a></Link></h6>
                                        </div>
                                        <div className="course__btn text-end">
                                            <Link href="/course-details"><a className="link-btn">
                                                Know Details
                                                <i className="fas fa-arrow-right"></i>
                                                <i className="fas fa-arrow-right"></i>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="blue">$62.00</span>
                                        <span className="old-price">$97.00</span>
                                    </div>
                                    <div className="course__btn d-none">
                                        <Link href="/course-details"><a className="link-btn">
                                            Know Details
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="course__thumb w-img p-relative fix">
                                    <Link href="/course-details"><a><img src="assets/img/course/new-course/new-course-img-4.png" alt="img not found" /></a></Link>
                                    <div className="course__tag">
                                        <Link href="/course-details"><a className="blue">Marketing</a></Link>
                                    </div>
                                </div>
                                <div className="course__content">
                                    <div className="course__meta d-flex align-items-center justify-content-between">
                                        <div className="course__lesson">
                                            <span><i className="fas fa-book"></i>22 Lesson</span>
                                        </div>
                                        <div className="course__rating">
                                            <span><i className="fas fa-star"></i>4.5 (42)</span>
                                        </div>
                                    </div>
                                    <h3 className="course__title"><Link href="/course-details"><a>The business Intelligence analyst Course 2022</a></Link></h3>
                                    <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                            <img src="assets/img/course/teacher/teachers/teacher-4.png" alt="img not found" />
                                        </div>
                                        <h6><Link href="/instructor-details"><a>Usman Ahmed</a></Link></h6>
                                    </div>
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="blue">$62.00</span>
                                        <span className="old-price">$97.00</span>
                                    </div>
                                    <div className="course__btn">
                                        <Link href="/course-details"><a className="link-btn">
                                            Know Details
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                </div>
                            </div> */}
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        );
    }
}

export default CourseSlider;