import React, { Component } from 'react';
import Link from 'next/link';

class RecentPost extends Component {

    render() {

        return (
            <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                    <h3 className="sidebar__widget-title">Recent posts</h3>
                </div>
                <div className="sidebar__widget-content">
                    <div className="rc__post-wrapper">
                        <div className="rc__post d-flex align-items-center">
                            <div className="rc__thumb mr-20">
                            <Link href="/blog-details"><a><img src="assets/img/blog/sm/blog-sm/blog-sm-1.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="rc__content">
                            <div className="rc__meta">
                                <span>February 20, 2023</span>
                            </div>
                                <h6 className="rc__title"><Link href="/blog-details"><a>The Benefits and Risks of Internet of Things (IoT) Technology.</a></Link></h6>
                            </div>
                        </div>
                        <div className="rc__post d-flex align-items-center">
                            <div className="rc__thumb mr-20">
                                <Link href="/blog-details"><a><img src="assets/img/blog/sm/blog-sm/blog-sm-2.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="rc__content">
                            <div className="rc__meta">
                                <span>March 10, 2023</span>
                            </div>
                                <h6 className="rc__title"><Link href="/blog-details"><a>The Impact of Social Media on Business.</a></Link></h6>
                            </div>
                        </div>
                        <div className="rc__post d-flex align-items-center">
                            <div className="rc__thumb mr-20">
                                <Link href="/blog-details"><a><img src="assets/img/blog/sm/blog-sm/blog-sm-3.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="rc__content">
                            <div className="rc__meta">
                                <span>April 25, 2023</span>
                            </div>
                                <h6 className="rc__title"><Link href="/blog-details"><a>The Benefits and Challenges of Cloud Computing.</a></Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentPost;