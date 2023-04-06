import React, { Component } from 'react';

import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';

// class HomeMain extends Component {
export default () => (
    <section className="price__area pt-60 pb-130">
        <Tabs>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 offset-xxl-4">
                        <div className="section__title-wrapper mb-60 text-center">
                            <h2 className="section__title hover-underline-animation">Simple <br /> All Inclusive  <span className="yellow-bg yellow-bg-big">Pricing</span></h2>
                            <p>No contracts. No surprise fees.</p>
                        </div>
                    </div>
                </div>

                <section class="pricing-columns pricing-section">
                    <label class="toggler toggler--is-active" id="filt-monthly">Monthly</label>
                    <div class="toggle">
                        <input type="checkbox" id="switcher" class="check" />
                        <b class="b switch"></b>
                    </div>
                    <label class="toggler" id="filt-hourly">Hourly</label>
                    <div id="monthly" class="wrapper-full d-flex justify-content-center">
                        <div id="pricing-chart-wrap">
                            <div id="pricing-chart">
                                <div id="smaller-plans">
                                    <div class="plan">
                                        <div className="price__head">
                                            <h3>Gold</h3>
                                        </div>
                                        <div class="price">
                                            <span class="dollar">$</span>
                                            <span class="amount" data-dollar-amount="35.49">35.49</span>
                                            <span class="slash">/</span>
                                            <span class="month">mo</span>
                                        </div>
                                        <ul>
                                            <li>30GB<span>SSD Disk</span></li>
                                            <li>1GB<span>Memory</span></li>
                                            <li>1 Core<span>vCPU</span></li>
                                            <li>667GB/mo<span>Transfer</span></li>
                                        </ul>
                                        <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,30,1024,730">Sign Up</a>
                                    </div>
                                    <div class="plan popular">
                                        <div className="price__head">
                                            <h3>Diamond</h3>
                                        </div>
                                        <div class="price">
                                            <span class="dollar">$</span>
                                            <span class="amount" data-dollar-amount="56.88">56.88</span>
                                            <span class="slash">/</span>
                                            <span class="month">mo</span>
                                        </div>
                                        <p class="pop-plan">Most Popular Plan</p>
                                        <ul>
                                            <li>40GB<span>SSD Disk</span></li>
                                            <li>2GB<span>Memory</span></li>
                                            <li>1 Core<span>vCPU</span></li>
                                            <li>1333GB/mo<span>Transfer</span></li>
                                        </ul>
                                        <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,40,2048,730">Sign Up</a>
                                    </div>
                                    <div class="plan">
                                        <div className="price__head">
                                            <h3>Silver</h3>
                                        </div>
                                        <div class="price">
                                            <span class="dollar">$</span>
                                            <span class="amount" data-dollar-amount="102.05">102.05</span>
                                            <span class="slash">/</span>
                                            <span class="month">mo</span>
                                        </div>
                                        <ul>
                                            <li>60GB<span>SSD Disk</span></li>
                                            <li>4GB<span>Memory</span></li>
                                            <li>2 Cores<span>vCPU</span></li>
                                            <li>2667GB/mo<span>Transfer</span></li>
                                        </ul>
                                        <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,60,4096,730">Sign Up</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="hourly" class="wrapper-full hide">
                        <div id="pricing-chart-wrap">
                            <div id="pricing-chart">
                                <div id="smaller-plans">
                                    <div class="plan ">
                                        <div class="price">
                                            <span class="dollar">$</span>
                                            <span class="amount" data-dollar-amount="0.05">0.05</span>
                                            <span class="slash">/</span>
                                            <span class="month">hr</span>
                                        </div>
                                        <ul>
                                            <li>30GB<span>SSD Disk</span></li>
                                            <li>1GB<span>Memory</span></li>
                                            <li>1 Core<span>vCPU</span></li>
                                            <li>Transfer<span>Pay as you use it</span></li>
                                        </ul>
                                        <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,30,1024,1">Sign Up</a>
                                    </div>
                                    <div class="plan popular">
                                        <div class="price">
                                            <span class="dollar">$</span>
                                            <span class="amount" data-dollar-amount="0.08">0.08</span>
                                            <span class="slash">/</span>
                                            <span class="month">hr</span>
                                        </div>
                                        <p class="pop-plan">Most Popular Plan</p>
                                        <ul>
                                            <li>40GB<span>SSD Disk</span></li>
                                            <li>2GB<span>Memory</span></li>
                                            <li>1 Core<span>vCPU</span></li>
                                            <li>Transfer<span>Pay as you use it</span></li>
                                        </ul>
                                        <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,40,2048,1">Sign Up</a>
                                    </div>
                                    <div class="plan">
                                        <div class="price">
                                            <span class="dollar">$</span>
                                            <span class="amount" data-dollar-amount="0.14">0.14</span>
                                            <span class="slash">/</span>
                                            <span class="month">hr</span>
                                        </div>
                                        <ul>
                                            <li>60GB<span>SSD Disk</span></li>
                                            <li>4GB<span>Memory</span></li>
                                            <li>2 Cores<span>vCPU</span></li>
                                            <li>Transfer<span>Pay as you use it</span></li>
                                        </ul>
                                        <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,60,4096,1">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="price__tab-btn text-center mb-50">
                            <div className="nav-tabs">
                                <TabList>
                                    <Tab><button className="nav-link" id="nav-monthly-tab" type="button">monthly plan</button></Tab>
                                    <Tab><button className="nav-link" id="nav-annually-tab" type="button">Annual Plan</button></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                        <div className="price__tab-content">
                            <TabPanel>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                                        <div className="price__item grey-bg mb-30 p-relative h-100">
                                            <div className="price__head">
                                                <h3>Gold</h3>
                                                <p>Perfect for small marketing teams</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>$39<span>.99 / monthly</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i className="fas fa-check"></i>Course Discussions</li>
                                                    <li><i className="fas fa-check"></i>Content Library</li>
                                                    <li><i className="fas fa-check"></i>1-hour Mentorship</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-4">Get Started</a></Link>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                                        <div className="price__item grey-bg mb-30 p-relative h-100">
                                            <div className="price__offer">
                                                <span>Best Value</span>
                                            </div>
                                            <div className="price__head">
                                                <h3>Diamond</h3>
                                                <p>Perfect for small marketing teams</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>$79<span>.99 / monthly</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i className="fas fa-check"></i>Course Discussions</li>
                                                    <li><i className="fas fa-check"></i>Content Library</li>
                                                    <li><i className="fas fa-check"></i>1-hour Mentorship</li>
                                                    <li><i className="fas fa-check"></i>Online Course</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-border">Get Started</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                                        <div className="price__item grey-bg mb-30 p-relative h-100">
                                            <div className="price__head">
                                                <h3>Gold</h3>
                                                <p>Perfect for small marketing teams</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>$59<span>.99 / annually</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i className="fas fa-check"></i>Course Discussions</li>
                                                    <li><i className="fas fa-check"></i>Content Library</li>
                                                    <li><i className="fas fa-check"></i>1-hour Mentorship</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-4">Get Started</a></Link>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                                        <div className="price__item grey-bg mb-30 p-relative h-100">
                                            <div className="price__offer">
                                                <span>Best Value</span>
                                            </div>
                                            <div className="price__head">
                                                <h3>Diamond</h3>
                                                <p>Perfect for small marketing teams</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>$99<span>.99 / annually</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i className="fas fa-check"></i>Course Discussions</li>
                                                    <li><i className="fas fa-check"></i>Content Library</li>
                                                    <li><i className="fas fa-check"></i>1-hour Mentorship</li>
                                                    <li><i className="fas fa-check"></i>Online Course</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-border">Get Started</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div >
        </Tabs >
    </section >

);
// export default Price