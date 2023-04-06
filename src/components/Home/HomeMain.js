import React, { Component } from 'react';
import Hero from './HeroSection';
import Category from './CategorySection';
import Banner from './BannerSection';
import Event from './EventSection';
import Cta from './CtaSection';
import PriceTab from '../Elements/Tab/PriceTab';
import CourseTab from '../Elements/Tab/CourseTab';

class HomeMain extends Component {
	constructor(props) {
		super(props);

		// Initializing the state 
		// this.state = { color: 'lightgreen' };
	}
	// componentDidMount() {
	// 	var e = document.getElementById("filt-monthly"),
	// 		d = document.getElementById("filt-hourly"),
	// 		t = document.getElementById("switcher"),
	// 		m = document.getElementById("monthly"),
	// 		y = document.getElementById("hourly");

	// 	e.addEventListener("click", function () {
	// 		t.checked = false;
	// 		e.classList.add("toggler--is-active");
	// 		d.classList.remove("toggler--is-active");
	// 		m.classList.remove("hide");
	// 		y.classList.add("hide");
	// 	});

	// 	d.addEventListener("click", function () {
	// 		t.checked = true;
	// 		d.classList.add("toggler--is-active");
	// 		e.classList.remove("toggler--is-active");
	// 		m.classList.add("hide");
	// 		y.classList.remove("hide");
	// 	});

	// 	t.addEventListener("click", function () {
	// 		d.classList.toggle("toggler--is-active");
	// 		e.classList.toggle("toggler--is-active");
	// 		m.classList.toggle("hide");
	// 		y.classList.toggle("hide");
	// 	})
	// }

	// componentWillUnmount() {
	// 	// var e = document.getElementById("filt-monthly"),
	// 	// 	d = document.getElementById("filt-hourly"),
	// 	// 	t = document.getElementById("switcher"),
	// 	// 	m = document.getElementById("monthly"),
	// 	// 	y = document.getElementById("hourly");

	// 	e.removeEventListener("click", function () {
	// 		t.checked = false;
	// 		e.classList.add("toggler--is-active");
	// 		d.classList.remove("toggler--is-active");
	// 		m.classList.remove("hide");
	// 		y.classList.add("hide");
	// 	});

	// 	d.removeEventListener("click", function () {
	// 		t.checked = true;
	// 		d.classList.add("toggler--is-active");
	// 		e.classList.remove("toggler--is-active");
	// 		m.classList.add("hide");
	// 		y.classList.remove("hide");
	// 	});

	// 	t.removeEventListener("click", function () {
	// 		d.classList.toggle("toggler--is-active");
	// 		e.classList.toggle("toggler--is-active");
	// 		m.classList.toggle("hide");
	// 		y.classList.toggle("hide");
	// 	})
	// }

	render() {

		return (
			<main>
				{/* hero-start */}
				<Hero />
				{/* hero-end */}

				{/* category-start */}
				<Category />
				{/* category-end */}

				{/* banner-start */}
				<Banner />
				{/* banner-end */}

				{/* course-start */}
				<CourseTab />
				{/* course-end */}

				{/* event-start */}
				<Event />
				{/* event-end */}

				{/* tab-start */}
				<PriceTab />
				{/* tab-end */}

				{/* cta-start */}
				<Cta />
				{/* cta-end */}

			</main>
		);
	}
}

export default HomeMain;