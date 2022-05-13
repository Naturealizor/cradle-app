<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Topper from './topHeaderImg.svelte';
	import Form from './contactForm.svelte';
	import Section from './sectionWBtn.svelte';

	const prerender = true;

	// function routeMediaContact (
	//    window.location.href="/";
	// )
</script>

<Topper />
<Header />
<main>
	<div>
		<img
			src="images/stock-photo-panoramic-view-of-sighnaghi-in-winery-region-of-georgia-kakheti-during-sunset-in-summer-with-1407625517-5.png"
			alt="placeholder img"
		/>
	</div>
	<Form />
	<section>
		<img src="images/Group_616.png" alt="locations" />
	</section>
	<section class="media-contact">
		<h2>media</h2>
		<h3>Media Contacts</h3>
		<button type="button" value="media contacts">media contacts</button>
	</section>
	<Section />
	<section class="careers-contact">
		<h2>careers</h2>
		<h3>Careers Contacts</h3>
		<button type="button" value="career contacts">career contacts</button>
	</section>
</main>
<Footer />

<style>
	img {
		width: 100%;
	}
	.media-contact,
	.careers-contact {
		text-align: center;
		margin: 5%;
	}
	h2 {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 17px;
		letter-spacing: 0.21em;
		text-transform: uppercase;
	}
	h3 {
		font-family: 'Baskerville';
		font-style: normal;
		font-weight: 400;
		font-size: 36px;
		line-height: 41px;
		text-align: center;
		color: #9c1232;
		margin-top: 1%;
		margin-bottom: 3%;
	}
	button {
		box-sizing: border-box;
		font-family: 'Arial';
		font-style: normal;
		font-weight: 400;
		font-size: 11.2306px;
		line-height: 13px;
		text-align: center;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		align-items: center;
		padding: 10px 35px;
		width: auto;
		height: auto;
		margin: 0 auto;
		margin-bottom: 4%;
		border: 0.802189px solid #4e4d4b;
		border-radius: 6.41751px;
		background-color: transparent;
	}
</style>
