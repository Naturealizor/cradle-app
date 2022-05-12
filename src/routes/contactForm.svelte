<form name="contact" method="POST" data-netlify="true">
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
</form>

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

	form {
		display: flex;
		width: 100%;
		/* align-items: center; */
		justify-content: center;
	}

	.formColumn {
		margin: 0 10em;
	}

	/* Add styles to 'label' selector */
	label {
		font-size: 0.85em;
		/* margin-left: 12px; */
	}

	/* Add styles to 'input' and 'textarea' selectors */
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

	/* Add styles to show 'focus' of selector */
	input[type='text']:focus,
	input[type='email']:focus,
	textarea:focus {
		border: 1px solid green;
	}
</style>
