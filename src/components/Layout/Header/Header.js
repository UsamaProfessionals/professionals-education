import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BurgerMenus from './BurgerMenus';
import ShopingCart from './ShopingCart';

const Header = () => {

   const [menuOpen, setMenuOpen] = useState(false)
   const [shopOpen, setShopOpen] = useState(false)

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

   //THEME CUSTOMIZATION

   //THEME


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
            <title>Professionals Education</title>
            <link rel="shortcut icon" href="assets/img/logo/favicon.ico" />
            {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
            <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
         </Head>
         <header>
            <div id="header-sticky" className="header__area header__transparent header__padding">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-3 col-sm-6 col-8">
                        <div className="header__left d-flex">
                           <div className="logo">
                              <Link href="/">
                                 <a><img src="assets/img/logo/PELogo.png" alt="logo"/></a>
                              </Link>
                           </div>
                           <div className="header__category d-none d-lg-block active">
                              <nav >
                                 <ul>
                                    <li>
                                       <Link href="/course-grid"><a className="cat-menu d-flex align-items-center">
                                          <div className="cat-dot-icon d-inline-block">
                                             <svg viewBox="0 0 276.2 276.2">
                                                <g>
                                                   <g>
                                                      <path className="cat-dot" d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z" />
                                                      <path className="cat-dot" d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z" />
                                                      <path className="cat-dot" d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z" />
                                                      <path className="cat-dot" d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z" />
                                                      <path className="cat-dot" d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z" />
                                                      <path className="cat-dot" d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z" />
                                                      <path className="cat-dot" d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    " />
                                                      <path className="cat-dot" d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z" />
                                                      <path className="cat-dot" d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z" />
                                                   </g>
                                                </g>
                                             </svg>
                                          </div>
                                          <span>Category</span>
                                       </a>
                                       </Link>
                                       <ul className="cat-submenu">
                                          <li><Link href="/course-grid"><a>English Learning</a></Link></li>
                                          <li><Link href="/course-grid"><a>Web Development</a></Link></li>
                                          <li><Link href="/course-grid"><a>Logo Design</a></Link></li>
                                          <li><Link href="/course-grid"><a>Motion Graphics</a></Link></li>
                                          <li><Link href="/course-grid"><a>Video Edition</a></Link></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-9 col-sm-6 col-4">
                        <div className="header__right d-flex justify-content-end align-items-center">
                           <div className="main-menu d-none d-xl-block">
                              <nav id="mobile-menu">
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
                                    <li><a className="menu-item" id="theme" style={{cursor: "pointer"}}>Theme</a></li>
                                 </ul>
                              </nav>
                           </div>
                           <div className="header__search p-relative ml-50 d-none d-md-block">
                              <form action="#">
                                 <input type="text" placeholder="Search..." />
                                 <button type="submit"><i className="fas fa-search"></i></button>
                              </form>
                              <div className="header__cart">
                                 <span className="cart-toggle-btn" onClick={() => { setShopOpen(!shopOpen) }}>
                                    <div className="header__cart-icon">
                                       <svg viewBox="0 0 24 24">
                                          <circle className="st0" cx="9" cy="21" r="1" />
                                          <circle className="st0" cx="20" cy="21" r="1" />
                                          <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6" />
                                       </svg>
                                    </div>
                                    <span className="cart-item">2</span>
                                 </span>
                              </div>
                           </div>
                           <div className="header__cart header__cart--responsive">
                              <span className="cart-toggle-btn" onClick={() => { setShopOpen(!shopOpen) }}>
                                 <div className="header__cart-icon">
                                    <svg viewBox="0 0 24 24">
                                       <circle className="st0" cx="9" cy="21" r="1" />
                                       <circle className="st0" cx="20" cy="21" r="1" />
                                       <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6" />
                                    </svg>
                                 </div>
                                 <span className="cart-item">2</span>
                              </span>
                           </div>
                           <div className="header__btn ml-20 d-none d-sm-block">
                              <Link href="/contact"><a className="e-btn">Try for free</a></Link>
                           </div>
                           <div className="sidebar__menu d-xl-none">
                              <div className="sidebar-toggle-btn ml-30" id="sidebar-toggle" onClick={() => {
                                 setMenuOpen(!menuOpen)
                              }}>
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

            <ShopingCart shopOpen={shopOpen} setShopOpen={setShopOpen} />
            <div onClick={() => setShopOpen(false)} className={shopOpen ? "body-overlay show" : "body-overlay"}></div>

         </header>
      </React.Fragment>
   );
}

export default Header;