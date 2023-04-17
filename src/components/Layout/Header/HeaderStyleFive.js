import React, { useState, useEffect, Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BurgerMenus from './BurgerMenus';
import Head from 'next/head';
import Image from 'next/image';
import HeaderSearch from './HeaderSearch';

const HeaderStyleFive = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.header__area');
        const scrollTop = window.scrollY;
        scrollTop >= 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    // Sticky Menu Area End

    useEffect(() => {
        const theme = document.querySelector('#theme');
        const themeModal = document.querySelector(".customize-theme");
        const fontSizes = document.querySelectorAll(".choose-size span")
        var root = document.querySelector(':root');

        const colorPallete = document.querySelectorAll('.choose-color span')
        const Bg1 = document.querySelector('.bg-1');
        const Bg2 = document.querySelector('.bg-2');
        const Bg3 = document.querySelector('.bg-3');

        console.log(themeModal, "============================");

        const OpenThemeModal = () => {
            themeModal.style.display = "grid";
        }

        const closeThemeModal = (e) => {
            if (e.target.classList.contains('customize-theme')) {
                themeModal.style.display = 'none';
            }
        }

        themeModal.addEventListener('click', closeThemeModal);

        theme.addEventListener('click', OpenThemeModal);

        const removeSizeSelector = () => {
            fontSizes.forEach(size => {
                size.classList.remove('active');
            })
        }

        // FONT SIZES

        fontSizes.forEach(size => {

            size.addEventListener('click', () => {

                removeSizeSelector();
                let fontSizes;
                size.classList.toggle('active');

                if (size.classList.contains('font-size-1')) {
                    fontSizes = '10px';
                    root.style.setProperty('----sticky-top-left', '5.4rem');
                    root.style.setProperty('----sticky-top-right', '5.4rem');
                }
                else if (size.classList.contains('font-size-2')) {
                    fontSizes = '13px';
                    root.style.setProperty('----sticky-top-left', '5.4rem');
                    root.style.setProperty('----sticky-top-right', '-7rem');
                }
                else if (size.classList.contains('font-size-3')) {
                    fontSizes = '16px';
                    root.style.setProperty('----sticky-top-left', '.2rem');
                    root.style.setProperty('----sticky-top-right', '-17rem');
                }
                else if (size.classList.contains('font-size-4')) {
                    fontSizes = '19px';
                    root.style.setProperty('----sticky-top-left', '-5rem');
                    root.style.setProperty('----sticky-top-right', '-25rem');
                }
                else if (size.classList.contains('font-size-5')) {
                    fontSizes = '22px';
                    root.style.setProperty('----sticky-top-left', '-10rem');
                    root.style.setProperty('----sticky-top-right', '-33rem');
                }

                document.querySelector('html').style.fontSize = fontSizes;
            })

        })

        // CHANGE COLOR

        const changeActiveColorClass = () => {
            colorPallete.forEach(colorPicker => {
                colorPicker.classList.remove('active');
            })
        }

        colorPallete.forEach(color => {
            color.addEventListener('click', () => {
                let primaryHue;
                changeActiveColorClass();
                if (color.classList.contains('color-1')) {
                    primaryHue = 252;
                }
                else if (color.classList.contains('color-2')) {
                    primaryHue = 52;
                }
                else if (color.classList.contains('color-3')) {
                    primaryHue = 352;
                }
                else if (color.classList.contains('color-4')) {
                    primaryHue = 152;
                }
                else if (color.classList.contains('color-5')) {
                    primaryHue = 202;
                }

                color.classList.add('active');
                root.style.setProperty('--primary-color-hue', primaryHue)
            })
        })

        // CHANGE THEME BACKGROUND

        let lightColorLightness;
        let darkColorLightness;
        let whiteColorLightness;

        const changeBG = () => {
            root.style.setProperty('--light-color-lightness', lightColorLightness);
            root.style.setProperty('--white-color-lightness', whiteColorLightness);
            root.style.setProperty('--dark-color-lightness', darkColorLightness);
        }

        Bg2.addEventListener('click', () => {
            darkColorLightness = '95%';
            whiteColorLightness = '20%';
            lightColorLightness = '15%';

            Bg2.classList.add('active');
            Bg1.classList.remove('active');
            Bg3.classList.remove('active');
            changeBG();
        })

        Bg3.addEventListener('click', () => {
            darkColorLightness = '95%';
            whiteColorLightness = '10%';
            lightColorLightness = '0%';

            Bg3.classList.add('active');
            Bg1.classList.remove('active');
            Bg2.classList.remove('active');
            changeBG();
        })

        Bg1.addEventListener('click', () => {
            Bg1.classList.add('active');
            Bg2.classList.remove('active');
            Bg3.classList.remove('active');
            window.location.reload();
        })

    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>Educal – Online Course and Education React, Nextjs Template</title>
                <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <header>
                <div id="header-sticky" className="header__area header__transparent header__padding-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="header__left d-flex">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img className="logo-white" src="assets/img/logo/PELogo.png" alt="logo" />
                                                <img className="logo-black" src="assets/img/logo/PELogo.png" alt="logo" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 d-none d-xl-block">
                                <div className="main-menu main-menu-3 d-none d-xl-block">
                                    <nav id="mobile-menu" style={{ marginTop: "35px" }}>
                                        <ul>
                                            <li className="has-dropdown">
                                                <Link href="/"><a>Home</a></Link>
                                                <ul className="submenu">
                                                    <li><Link href="/"><a>Home Style 1</a></Link></li>
                                                    <li><Link href="/home-2"><a>Home Style 2</a></Link></li>
                                                    <li><Link href="/home-3"><a>Home Style 3</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link href="/course-grid"><a>Courses</a></Link>
                                                <ul className="submenu">
                                                    <li><Link href="/course-grid"><a>Courses</a></Link></li>
                                                    <li><Link href="/course-list"><a>Courses List</a></Link></li>
                                                    <li><Link href="/course-sidebar"><a>Courses Sidebar</a></Link></li>
                                                    <li><Link href="/course-details"><a>Courses Details</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link href="/blog"><a>Blog</a></Link>
                                                <ul className="submenu">
                                                    <li><Link href="/blog"><a>Blog</a></Link></li>
                                                    <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link href="/course-grid"><a>Pages</a></Link>
                                                <ul className="submenu">
                                                    <li><Link href="/about"><a>About</a></Link></li>
                                                    <li><Link href="/instructor"><a>Instructor</a></Link></li>
                                                    <li><Link href="/instructor-details"><a>Instructor Details</a></Link></li>
                                                    <li><Link href="/event-details"><a>Event Details</a></Link></li>
                                                    <li><Link href="/cart"><a>My Cart</a></Link></li>
                                                    <li><Link href="/wishlist"><a>My Wishlist</a></Link></li>
                                                    <li><Link href="/checkout"><a>Checkout</a></Link></li>
                                                    <li><Link href="/sign-in"><a>Sign In</a></Link></li>
                                                    <li><Link href="/sign-up"><a>Sign Up</a></Link></li>
                                                    <li><Link href="/error"><a>Error</a></Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact"><a>Contact</a></Link></li>
                                            <li><a className="menu-item" id="theme" style={{ cursor: "pointer" }}>Theme</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="header__right d-flex justify-content-end align-items-center">
                                    <div className="header__search-2">
                                        <svg className="search-toggle" onClick={() => { setSearchOpen(!searchOpen) }} viewBox="0 0 584.4 584.4">
                                            <g>
                                                <g>
                                                    <path className="st0" d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z" />
                                                    <path className="st1" d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="header__btn header__btn-2 ml-30 d-none d-sm-block">
                                        <Link href="/sign-up"><a className="e-btn">Sign Up</a></Link>
                                    </div>
                                    <div className="sidebar__menu d-xl-none">
                                        <div className="sidebar-toggle-btn sidebar-toggle-btn-white ml-30" id="sidebar-toggle" onClick={() => { setMenuOpen(!menuOpen) }}>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ====================THEME CUSTOMIZATION START ========================= --> */}

                <div class="customize-theme">
                    <div class="card">
                        <h2>Customize Your View</h2>
                        {/* <p class="text-muted">Manage your font size, color and background.</p> */}

                        {/* <!-- ================ Font Size ==================================== --> */}
                        {/* <div class="font-size">
                            <h4>Font Size</h4>
                            <div>
                                <h6>Aa</h6>
                                <div class="choose-size">
                                    <span class="font-size-1"></span>
                                    <span class="font-size-2"></span>
                                    <span class="font-size-3 active"></span>
                                    <span class="font-size-4"></span>
                                    <span class="font-size-5"></span>
                                </div>
                                <h3>Aa</h3>
                            </div>
                        </div> */}

                        {/* <div class="color">
                            <h4>Color</h4>
                            <div class="choose-color">
                                <span class="color-1 active"></span>
                                <span class="color-2"></span>
                                <span class="color-3"></span>
                                <span class="color-4"></span>
                                <span class="color-5"></span>
                            </div>
                        </div> */}

                        {/* <!-- =================== Background Colors============================== --> */}
                        <div class="background">
                            {/* <h4>Background</h4> */}
                            <div class="choose-bg">
                                <div class="bg-1 active">
                                    <span></span>
                                    <h5 for="bg-1">Light</h5>
                                </div>

                                <div class="bg-2">
                                    <span></span>
                                    <h5 for="bg-2" className='text-white'>Dim</h5>
                                </div>

                                <div class="bg-3">
                                    <span></span>
                                    <h5 for="bg-3" className='text-white'>Lights Out</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ====================THEME CUSTOMIZATION END ========================= --> */}

                <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

                <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
                <div onClick={() => setSearchOpen(false)} className={searchOpen ? "body-overlay show" : "body-overlay"}></div>

            </header>
        </React.Fragment>
    );
}

export default HeaderStyleFive;