<script>
	export const prerender = true;
</script>

<form name="contact" method="POST" data-netlify="true">
	<div class="formColumn">
		<div class="field half">
			<label>First Name <input type="text" name="firstName" id="firstName" placeholder="" /></label>
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

<!-- <form name="contact" method="POST" data-netlify="true">
	<div class="formColumn">
		<p>
			<label>First Name <input type="text" name="firstName" /></label>
		</p>
		<p>
			<label>Last Name <input type="text" name="lastName" /></label>
		</p>

		<p>
			<label>Email <input type="email" name="email" /></label>
		</p>
		<p>
			<label for="selectForm">Subject</label>
			<select id="selectForm" name="select" />
		</p>

		<p>
			<label>Message: <textarea name="message" /></label>
		</p>
	</div>
	<div class="formColumn">
		<p>
			<label>Country/Region <input type="text" name="region" /></label>
		</p>
		<p>
			<label>Address <input type="text" name="address" /></label>
		</p>
		<p>
			<label>Post Code <input type="text" name="postCode" /></label>
		</p>
	</div>
</form> -->
<style>
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
	/* Importing the Roboto font from Google Fonts.
	@import url('https://fonts.googleapis.com/css?family=Roboto:400');

	Set font of all elements to 'Roboto'
	* {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
	}

	Remove outline of all elements on focus
	*:focus {
		outline: 0;
	}

	form {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
	}

	.formColumn {
		margin: 0 10em;
	}

	Add styles to 'label' selector
	label {
		font-size: 0.85em;
		margin-left: 12px;
	}

	Add styles to 'input' and 'textarea' selectors
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

	Add styles to show 'focus' of selector
	input[type='text']:focus,
	input[type='email']:focus,
	textarea:focus {
		border: 1px solid green;
	} */
</style>
