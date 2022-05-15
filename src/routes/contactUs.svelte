<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Topper from './topHeaderImg.svelte';
	import Section from './sectionWBtn.svelte';

	// const submitForm = async (data) => {
	// 	const formData = new FormData(data.currentTarget);

	// 	const res = await fetch('contact.json', {
	// 		method: 'POST',
	// 		body: formData
	// 	});

	// 	const { message } = res.json();
	// };
	export const prerender = true;

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
	<form name="contact" netlify data-netlify="true">
		<input type="hidden" name="form-name" value="test" />
		<input type="hidden" name="bot-field" />
		<div class="formColumn">
			<div class="field half">
				<label
					>First Name <input type="text" name="firstName" id="firstName" placeholder="" /></label
				>
			</div>
			<div class="field half">
				<label>Last Name <input type="text" name="lastName" id="lastName" placeholder="" /></label>
			</div>
			<div class="field half">
				<label>Email <input type="email" name="email" id="email" placeholder="" /></label>
			</div>
		</div>
		<div class="formColumn">
			<div class="field half">
				<label>Country/Region <input type="text" name="region" id="region" /></label>
			</div>
			<div class="field half">
				<label>Address <input type="text" name="address" id="address" /></label>
			</div>
			<div class="field half">
				<label>Post Code <input type="text" name="postCode" id="postCode" /></label>
			</div>
		</div>
		<div class="formColumn-btm">
			<textarea name="message" id="message" placeholder="Message" rows="7" />
			<button class="button" type="submit" value="Send Message">Submit Message</button>
			<!-- <ul class="actions">
			<li><input type="submit" value="Send Message" class="button-primary" /></li>
		</ul> -->
		</div>
	</form>
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
	/* Remove outline of all elements on focus */
	*:focus {
		outline: 0;
	}
	form {
		display: grid;
		grid-template-columns: 50% 50%;
		padding: 10px;
		margin: 0 5em;
		/* position: relative;
		display: flex;
		width: 100%;
		align-items: flex-start;
		justify-content: center; */
	}
	/* ul {
		display: block;
	} */
	.formColumn {
		display: flex;
		flex-direction: column;
		margin: 0 10em;
	}
	.formColumn-btm {
		display: flex;
		margin: 0 10em;
		flex-wrap: wrap;
		width: 100%;
	}

	button {
		list-style: none;
		padding: 7px;
	}

	input[type='text'],
	input[type='email'],
	textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		margin: 0 auto;
		margin-top: 6px;
		margin-bottom: 16px;
		resize: vertical;
	}
	input[type='text']:focus,
	input[type='email']:focus,
	textarea:focus {
		border: 1px solid green;
	}
</style>
