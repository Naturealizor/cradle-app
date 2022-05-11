<div class="navbar">
	<div class="nav-logo">
		<a href="/">
			<img src="images/stationary logo 3.jpg" alt="cradle logo" />
		</a>
		<img src="images/Group_63.png" alt="cradle logo" />
	</div>
	<div class="subnav-seperator">
		<div class="subnav">
			<button class="subnavbtn">georgia <i class="fa fa-caret-down" /></button>
			<div class="subnav-content">
				<a href="">the land and it's people</a>
				<a href="">the history of georgian wine</a>
				<a href="">georgian vineyards/varietals</a>
				<a href="">a look inside, qvevri wines</a>
				<a href="">in the news</a>
			</div>
		</div>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<div class="subnav">
			<button class="subnavbtn">about us <i class="fa fa-caret-down" /></button>
			<div class="subnav-content">
				<a href="">cradle wine</a>
				<a href="">management</a>
				<a href="">winemakers</a>
				<a href="">innovations</a>
				<a href="">philanthropy</a>
				<a href="">wine blog</a>
			</div>
		</div>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<div class="subnav">
			<button class="subnavbtn">shop wine<i class="fa fa-caret-down" /></button>
			<div class="subnav-content">
				<a href="">wine store direct</a>
				<a href="">locate cradle wines</a>
				<a href="">cradle gift program</a>
				<a href="">wine pairings</a>
				<a href="">merchandise</a>
			</div>
		</div>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<div class="subnav">
			<button class="subnavbtn">wine club<i class="fa fa-caret-down" /></button>
			<div class="subnav-content">
				<a href="">about club</a>
				<a href="">private cellar</a>
				<a href="">member login</a>
				<a href="">sign up</a>
			</div>
		</div>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<div class="subnav">
			<button class="subnavbtn">gallery<i class="fa fa-caret-down" /></button>
			<div class="subnav-content">
				<a href="">the artists</a>
				<a href="">the gallery</a>
				<a href="">georgian art lables</a>
				<a href="">limited edition art</a>
			</div>
		</div>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<div class="subnav">
			<button class="subnavbtn">visit us<i class="fa fa-caret-down" /></button>
			<div class="subnav-content">
				<a href="">virtual tasting</a>
				<a href="">winery tours and tastings</a>
				<a href="">events calendar</a>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		padding-left: 10px;
		display: inline-block;
	}

	.subnav-seperator {
		margin-left: 5%;
		margin-top: 3%;
	}
	.nav-logo {
		display: flex;
		flex-direction: column;
		float: left;
		align-items: stretch;
	}
	.navbar {
		display: grid;
		grid-template-rows: minmax(100px, max-content);
		grid-template-columns: 0.1fr 2fr;
		overflow: hidden;
		background-color: rgb(255, 255, 255);
	}

	.navbar a {
		float: left;
		font-size: 16px;
		color: white;
		padding: 11px 16px;
		text-decoration: none;
	}

	/* .navbar a:hover,{} */
	.subnav {
		display: inline-flex;
		float: none;
		overflow: hidden;
	}

	.subnav .subnavbtn {
		font-family: 'Baskerville';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 21px;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		border: none;
		outline: none;
		color: #4d3614;
		padding: 14px 30px;
		background-color: inherit;
		margin: 0;
		/* margin-left: 1em; */
	}

	.subnav:hover .subnavbtn {
		transform: scale(1.1);
	}

	.subnav-content {
		display: none;
		position: absolute;
		left: 0;
		background-color: rgba(79, 80, 79, 0.4);
		width: 100%;
		z-index: 1;
		top: 8em;
	}

	.subnav-content a {
		float: left;
		color: white;
		font-family: 'Lato';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 14px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.subnav-content a:hover {
		opacity: 1;
		/* background-color: #eee; */
		color: white;
	}

	.subnav:hover .subnav-content {
		display: inline-flex;
		flex-direction: column;
	}
</style>
