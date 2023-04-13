import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {

  const [home, setHome] = useState(false)
  const [courses, setcourses] = useState(false)
  const [blog, setBlog] = useState(false)
  const [pages, setPages] = useState(false)

  const router = useRouter()
  const [path, setPath] = useState("")
  useEffect(() => {
    setPath(router.pathname)
  }, [router])

  const openMobileMenu = menu => {

    if (menu == 'home') {
      setHome(!home)
      setcourses(false)
      setBlog(false)
      setPages(false)
    }
    else if (menu == 'courses') {
      setHome(false)
      setcourses(!courses)
      setBlog(false)
      setPages(false)
    }
    else if (menu == 'blog') {
      setHome(false)
      setcourses(false)
      setBlog(!blog)
      setPages(false)
    }
    else if (menu == 'pages') {
      setHome(false)
      setcourses(false)
      setBlog(false)
      setPages(!pages)
    }
  };

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
    <div className={menuOpen ? "sidebar__area open" : "sidebar__area"}>
      <div className="sidebar__wrapper">
        <div className="sidebar__close">
          <button className="sidebar__close-btn" id="sidebar__close-btn" onClick={() => setMenuOpen(false)}>
            <span><i className="fas fa-times"></i></span>
            <span>close</span>
          </button>
        </div>
        <div className="sidebar__content">
          <div className="logo mb-40">
            <Link href="/"><a><img src="assets/img/logo/PELogo.png" alt="logo" className='img-fluid w-50' /></a></Link>
          </div>
          <div className="mm-menu">
            <ul>
              <li className={home ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('home'); }}>Home</a>
                <ul className={home ? "sub-menu active" : "sub-menu"}>
                  <li><Link href="/"><a>Home 1</a></Link></li>
                  <li><Link href="/home-2"><a>Home 2</a></Link></li>
                  <li><Link href="/home-3"><a>Home 3</a></Link></li>
                </ul>
              </li>
              <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('courses'); }}>Courses</a>
                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                  <li><Link href="/course-grid"><a>Courses </a></Link></li>
                  <li><Link href="/course-list"><a>Course List</a></Link></li>
                  <li><Link href="/course-sidebar"><a>Course Sidebar</a></Link></li>
                  <li><Link href="/course-details"><a>Course Details</a></Link></li>
                </ul>
              </li>
              <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                  <li><Link href="/blog" as="/blog"><a>Blog</a></Link></li>
                  <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                </ul>
              </li>
              <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                <ul className={pages ? "sub-menu active" : "sub-menu"}>
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
          </div>

          <div className="sidebar__search p-relative mt-40 ">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit"><i className="fas fa-search"></i></button>
            </form>
          </div>
          {/* <div className="sidebar__cart mt-30">
                <a href="#">
                    <div className="header__cart-icon">
                      <svg viewBox="0 0 24 24">
                          <circle className="st0" cx="9" cy="21" r="1"/>
                          <circle className="st0" cx="20" cy="21" r="1"/>
                          <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"/>
                      </svg>
                    </div>
                    <span className="cart-item">2</span>
                </a>
              </div> */}
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
      </div>
    </div>


  )
}

export default BurgerMenus;