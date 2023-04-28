import React, { Component } from 'react';
import Link from 'next/link';

class Category extends Component {

    render() {

        return (
            <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                    <h3 className="sidebar__widget-title">Category</h3>
                </div>
                <div className="sidebar__widget-content">
                    <div className="sidebar__category">
                        <ul>
                            <li><Link href="/blog"><a>Courses</a></Link></li>
                            <li><Link href="/blog"><a>Video & Tips  (4)</a></Link></li>
                            <li><Link href="/blog"><a>Education  (8)</a></Link></li>
                            <li><Link href="/blog"><a>Web Development  (5)</a></Link></li>
                            <li><Link href="/blog"><a>UX Design  (3)</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;