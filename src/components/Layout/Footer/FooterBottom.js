import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="footer__bottom footer__bottom-2">
            <div className="container">
                <div className="row">
                <div className="col-xxl-12">
                    <div className="footer__copyright text-center">
                        <p>© 2022 Professionals Education, All Rights Reserved. Design By <Link href="/"><a>Theme Pure</a></Link></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;