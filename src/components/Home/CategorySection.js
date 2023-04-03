import React, { Component } from 'react';
import Link from 'next/link';
import { GrAnnounce } from "react-icons/gr"
import { HiOutlineCurrencyDollar, HiOutlineAcademicCap, HiOutlineSpeakerphone } from "react-icons/hi"
import { IoFitnessOutline, IoBusinessOutline } from "react-icons/io5"
import { BsBrush } from "react-icons/bs"
import { GiSkills, GiMaterialsScience } from "react-icons/gi"

import CategorySlider from '../Slider/Slider';

class Category extends Component {

    render() {

        return (
            <main>
                <section className="category__area pt-120 pb-70">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
                                <div className="section__title-wrapper mb-45">
                                    <h2 className="section__title">Explore <br />Our <span className="yellow-bg">Popular  </span>Courses
                                    </h2>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
                                <div className="category__more mb-50 float-md-end fix">
                                    <Link href="/course-grid"><a className="link-btn">
                                        View all Category
                                        <i className="fas fa-arrow-right"></i>
                                        <i className="fas fa-arrow-right"></i>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center">
                            
                            <CategorySlider />
                          
                            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="category__item mb-30 transition-3">
                                    <div className="category__icon">
                                        <svg viewBox="0 0 512 512">
                                            <g>
                                                <path className="st0" d="M128.9,421.4c-37.9-36.3-49-86.7-49-122.8c0-54.9,32.9-79.8,68.9-96.7V181C101.9,205.1,20,217,20,303.6   c0,36.1,11.1,86.5,48.9,122.9c36.4,37.8,86.8,48.9,122.9,48.9c14.5,0,26.9-2.3,37.6-6.4C196.7,465.1,158.2,452,128.9,421.4z" />
                                                <g>
                                                    <path className="st1" d="M505.6,38.8l-12.4-11.4c-15.9-14.7-40.3-14.2-55.6,1.3L309.9,158c-4.8,4.9-10.4,3.5-12.5,2.7s-7.1-3.3-7.6-10    c-0.8-10.8,0-20.7,2.2-27.8c5-15.6,2.6-32-6.5-45.2c-9.3-13.5-24.6-22-40.8-22.9c-13.1-0.7-32.1,4.9-46.4,22.5    c-10,12.4-17.1,27.7-24,42.5c-6,13-12.3,26.5-18.4,32.4c-0.1,0.1-0.2,0.2-0.3,0.3c-8.6,8.6-26.3,15.7-45,23.3    C87.1,185.3,60.4,196,39,214.5c-25.9,22.4-39,52.4-39,89.1c0,25.3,5.3,89.3,54.8,137c47.7,49.4,111.7,54.8,137,54.8    c36.7,0,66.6-13.1,89-39.1c18.5-21.4,29.2-48.1,38.7-71.6c7.5-18.7,14.9-36.6,23.5-45.2l0,0l0,0c5.9-6.1,19.4-12.4,32.4-18.4    c14.8-6.9,30.1-14,42.5-24c17.6-14.3,23.2-33.3,22.5-46.4c-0.8-16.2-9.4-31.5-22.9-40.8c-13.1-9.1-29.6-11.5-45.2-6.5    c-10.5,3.3-16.3,14.6-13,25.1s14.6,16.3,25.1,13c3.8-1.2,7.3-0.8,10.3,1.3c3.3,2.3,5.5,6.2,5.7,10.1c0,0.1,0.3,6.8-7.7,13.2    c-8.5,6.9-21.6,12.9-34.2,18.8c-17.1,7.9-33.2,15.4-44.3,26.8c-14.3,14.4-22.9,35.7-31.9,58.2c-20.8,51.7-38.4,85.7-90.6,85.7    c-20.2,0-71.3-4.2-108.5-42.8c-0.2-0.2-0.4-0.4-0.6-0.6C44.1,374.9,40,323.8,40,303.6c0-52.3,33.9-69.8,85.7-90.6    c22.5-9.1,43.8-17.6,58.2-31.9c11.5-11.1,18.9-27.2,26.8-44.3c5.9-12.6,11.9-25.7,18.8-34.2c6.5-8,13.2-7.7,13.2-7.7    c3.8,0.2,7.8,2.4,10.1,5.7c2.1,3,2.5,6.5,1.3,10.3c-3.8,12.1-5.2,26.9-4,43c1.5,20.3,14.4,37.3,33.6,44.4    c19.3,7.1,40.2,2.5,54.7-12.1L466.1,56.7l12.4,11.4c8.1,7.5,20.7,7,28.2-1.1S513.7,46.3,505.6,38.8L505.6,38.8z" />
                                                    <path className="st1" d="M207.6,209.5c-7.8,7.8-7.8,20.5,0,28.3l49.9,49.9c3.9,3.9,9,5.9,14.1,5.9s10.2-2,14.1-5.9    c7.8-7.8,7.8-20.5,0-28.3l-49.9-49.9C228.1,201.7,215.4,201.7,207.6,209.5L207.6,209.5z" />
                                                </g>
                                                <path className="st2" d="M215.8,350.5c-5.1,0-10.2-2-14.1-5.9l-49.9-49.9c-7.8-7.8-7.8-20.5,0-28.3s20.5-7.8,28.3,0l49.9,49.9   c7.8,7.8,7.8,20.5,0,28.3C226,348.6,220.9,350.5,215.8,350.5z M173.9,400.6c7.8-7.8,7.8-20.5,0-28.3L124,322.4   c-7.8-7.8-20.5-7.8-28.3,0s-7.8,20.5,0,28.3l49.9,49.9c3.9,3.9,9,5.9,14.1,5.9C164.9,406.4,170,404.5,173.9,400.6z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="category__content">
                                        <h4 className="category__title"><Link href="/course-details"><a>Music</a></Link></h4>
                                        <p>Major or Minor</p>
                                    </div>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Category;