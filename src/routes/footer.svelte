<div class="container" />
<footer>
	<!-- Footer main -->
	<section class="ft-main">
		<div class="ft-main-item">
			<h2 class="ft-title">company</h2>
			<ul>
				<li><a href="#">Our Team</a></li>
				<li><a href="#">Careers</a></li>
				<li><a href="#">Sustanability</a></li>
				<li><a href="#">Trade & Distribution</a></li>
				<li><a href="#">Logistics</a></li>
			</ul>
		</div>
		<div class="ft-main-item">
			<h2 class="ft-title">media & press</h2>
			<ul>
				<li><a href="#">Media</a></li>
				<li><a href="#">Cradle Press</a></li>
				<li><a href="#">Testimonials</a></li>
				<li><a href="#">Subscribe</a></li>
				<li><a href="#">Influencer Programs</a></li>
			</ul>
		</div>
		<div class="ft-main-item">
			<h2 class="ft-title">support</h2>
			<ul>
				<!-- Here's the contact us link -->
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">Investor Relations</a></li>
				<li><a href="#">Returns & Refunds</a></li>
				<li><a href="#">Shipping Information</a></li>
				<li><a href="#">Web Accessibility</a></li>
			</ul>
		</div>
		<div class="ft-main-item">
			<h2 class="ft-title">legal</h2>
			<ul>
				<li><a href="#">FAQs</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Terms & Conditions</a></li>
				<li><a href="#">Legal Notices</a></li>
				<li><a href="#">Cookie Preferences</a></li>
			</ul>
		</div>
	</section>

	<!-- Footer social -->
	<section class="ft-social">
		<ul class="ft-social-list">
			<li><a href="#"><i class="fab fa-facebook" /></a></li>
			<li><a href="#"><i class="fab fa-twitter" /></a></li>
			<li><a href="#"><i class="fab fa-instagram" /></a></li>
			<li><a href="#"><i class="fab fa-github" /></a></li>
			<li><a href="#"><i class="fab fa-linkedin" /></a></li>
			<li><a href="#"><i class="fab fa-youtube" /></a></li>
		</ul>
	</section>

	<!-- Footer legal -->
	<section class="ft-legal">
		<ul class="ft-legal-list">
			<li>&copy; 2022 Copyright Kartuli Spirits</li>
		</ul>
	</section>
</footer>

<style>
	.container {
		flex: 1; /* same as flex-grow: 1; */
	}
	.ft-main {
		padding: 1.25rem 1.875rem;
		display: flex;
		flex-wrap: wrap;
	}
	.ft-main-item {
		padding: 1.25rem;
		min-width: 12.5rem /*200px*/;
	}
	* {
		box-sizing: border-box;
		font-family: ’Lato’, sans-serif;
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
		padding-left: 0;
	}
	footer {
		background-color: #cdd1c4;
		color: #bbb;
		line-height: 1.5;
	}
	footer a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		text-decoration: underline;
	}
	.ft-title {
		color: #b59f61;
		font-family: ’Merriweather’, serif;
		font-size: 1.375rem;
		padding-bottom: 0.625rem;
	}

	@media only screen and (min-width: 29.8125rem /*477px*/) {
		.ft-main {
			justify-content: space-around;
		}
	}
	@media only screen and (min-width: 77.5rem /*1240px*/) {
		.ft-main {
			justify-content: space-evenly;
		}
	}
</style>
