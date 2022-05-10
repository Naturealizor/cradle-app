<div class="navbar">
	<img src="images/stationary logo 3.jpg" alt="cradle logo" />
	<img src="images/Group_63.png" alt="cradle logo" />
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
	<div class="subnav">
		<button class="subnavbtn">wine club<i class="fa fa-caret-down" /></button>
		<div class="subnav-content">
			<a href="">about club</a>
			<a href="">private cellar</a>
			<a href="">member login</a>
			<a href="">sign up</a>
		</div>
	</div>
	<div class="subnav">
		<button class="subnavbtn">gallery<i class="fa fa-caret-down" /></button>
		<div class="subnav-content">
			<a href="">the artists</a>
			<a href="">the gallery</a>
			<a href="">georgian art lables</a>
			<a href="">limited edition art</a>
		</div>
	</div>
	<div class="subnav">
		<button class="subnavbtn">visit us<i class="fa fa-caret-down" /></button>
		<div class="subnav-content">
			<a href="">virtual tasting</a>
			<a href="">winery tours and tastings</a>
			<a href="">events calendar</a>
		</div>
	</div>
</div>

<!-- <header>
	

	<ul>
		<li><a href="">georgia</a></li>
		<img src="images/Line_220.png" alt="verticle seperator" />
		<li><a href="">About Us</a></li>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<li><a href="">shop wine</a></li>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<li><a href="">wine club</a></li>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<li><a href="">Gallery</a></li>
		<img src="images/Line_219.png" alt="verticle seperator" />
		<li><a href="">visit us</a></li>
	</ul>
</header>

<style>
	header,
	img {
		display: inline-block;
	}

	ul,
	li,
	a {
		display: inline-flex;
		flex-direction: row;
		padding: 15px;
		text-decoration: none;
		text-transform: uppercase;
	}
</style> -->
<style>
	.navbar {
		overflow: hidden;
		background-color: rgb(255, 255, 255);
	}

	.navbar a {
		float: left;
		font-size: 16px;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	.subnav {
		display: inline-flex;
		float: none;
		overflow: hidden;
	}

	.subnav .subnavbtn {
		font-size: 16px;
		border: none;
		outline: none;
		color: rgb(55, 53, 53);
		padding: 14px 16px;
		background-color: inherit;
		font-family: inherit;
		margin: 0;
	}

	/* .navbar a:hover,
	.subnav:hover .subnavbtn {
		background-color: red;
	} */

	.subnav-content {
		display: none;
		position: absolute;
		left: 0;
		background-color: rgba(79, 80, 79, 0.4);
		width: 100%;
		z-index: 1;
		/* bottom: 66%; */
		top: 13.8%;
	}

	.subnav-content a {
		float: left;
		color: white;
		text-decoration: none;
	}

	.subnav-content a:hover {
		opacity: 1;
		background-color: #eee;
		color: black;
	}

	.subnav:hover .subnav-content {
		display: inline-flex;
		flex-direction: column;
	}
</style>
