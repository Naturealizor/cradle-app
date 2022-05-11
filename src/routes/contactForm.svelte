<form name="contact" method="POST" data-netlify="true">
	<p>
		<label>Your Name: <input type="text" name="name" /></label>
	</p>
	<p>
		<label>Your Email: <input type="email" name="email" /></label>
	</p>
	<p>
		<label
			>Your Role: <select name="role[]" multiple>
				<option value="leader">Leader</option>
				<option value="follower">Follower</option>
			</select></label
		>
	</p>
	<p>
		<label>Message: <textarea name="message" /></label>
	</p>
	<p>
		<button type="submit">Send</button>
	</p>
</form>

<!-- <div class="container">
		<h3>Contact Form</h3>
		<form action="#" name="contact_form">
			<label for="first_name">First Name</label>
			<input name="first_name" type="text" required placeholder="John" />
			<br />
			<label for="last_name">Last Name</label>
			<input name="last_name" type="text" required placeholder="Doe" />
			<br />
			<label for="email">Email</label>
			<input name="email" type="email" required placeholder="you@domain.com" />
			<br />
			<label for="message">Message</label><br />
			<textarea
				name="message"
				cols="30"
				rows="10"
				placeholder="Enter your message here ..."
				required
			/>
			<div class="center">
				<input type="submit" value="Submit" />
			</div>
		</form>
	</div> -->
<style>
	/* Importing the Roboto font from Google Fonts. */
	@import url('https://fonts.googleapis.com/css?family=Roboto:400');

	/* Set font of all elements to 'Roboto' */
	* {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
	}

	/* Remove outline of all elements on focus */
	*:focus {
		outline: 0;
	}

	h3 {
		text-align: center;
	}

	/* Add styles to 'container' class */
	.container {
		padding: 12px 24px 24px 24px;
		margin: 48px 12px;
		/* background: #e3f2fd; */
		border-radius: 4px;
	}

	/* Add styles to 'label' selector */
	label {
		font-size: 0.85em;
		margin-left: 12px;
	}

	/* Add styles to 'input' and 'textarea' selectors */
	input[type='text'],
	input[type='email'],
	textarea {
		/* width: 100%; */
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		margin: 0 auto;
		margin-top: 6px;
		margin-bottom: 16px;
		resize: vertical;
	}

	/* Add styles to show 'focus' of selector */
	input[type='text']:focus,
	input[type='email']:focus,
	textarea:focus {
		border: 1px solid green;
	}

	/* Add styles to the submit button */
	input[type='submit'] {
		background: #64b5f6;
		margin: 0 auto;
		outline: 0;
		color: white;
		border: 0;
		padding: 12px 24px;
		border-radius: 4px;
		transition: all ease-in-out 0.1s;
		position: relative;
		display: inline-block;
		text-align: center;
	}

	/* Add styles for 'focus' property */
	input[type='submit']:focus {
		background: #a5d6a7;
		color: whitesmoke;
	}

	/* Style 'hover' property */
	input[type='submit']:hover {
		background: #2196f3;
	}

	/* Align items to center of the 'div' with the class 'center' */
	.center {
		text-align: center;
	}
</style>
