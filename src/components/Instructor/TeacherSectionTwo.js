import React, { Component } from 'react';
import Link from 'next/link';

class TeacherTwo extends Component {

    render() {

        return (
            <section className="teacher__area pt-115 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title hover-underline-animation">Our Most <br/>
                           Popular <span className="yellow-bg"> Teachers </span> <br/>
                        </h2>
                        <p>You don't have to struggle alone, you've got our assistance and help.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor"><a><img src="assets/img/teacher/teachers/teacher-1.png" alt="img not found"/></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title">Ahmed Khan</h3> 
                           <span> CO Founder</span>
                           <div className="teacher__social">
                           <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor"><a><img src="assets/img/teacher/teachers/teacher-2.png" alt="img not found"/></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title">Junaid Ali</h3> 
                           <span>Desginer</span>

                           <div className="teacher__social">
                           <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor"><a><img src="assets/img/teacher/teachers/teacher-3.png" alt="img not found"/></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title">Syed Hammad</h3> 
                           <span>Markater</span>

                           <div className="teacher__social">
                            <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor"><a><img src="assets/img/teacher/teachers/teacher-4.png" alt="img not found"/></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title">Usman Ahmed</h3> 
                           <span>CO Founder</span>

                           <div className="teacher__social">
                            <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor"><a><img src="assets/img/teacher/teachers/teacher-5.png" alt="img not found"/></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title">Asad Khan</h3> 
                           <span>Web Developer</span>

                           <div className="teacher__social">
                            <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor"><a><img src="assets/img/teacher/teachers/teacher-6.png" alt="img not found"/></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title">Saim Ali</h3> 
                           <span>Engineer</span>

                           <div className="teacher__social">
                            <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }
}

export default TeacherTwo;