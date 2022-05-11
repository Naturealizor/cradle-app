<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Topper from './topHeaderImg.svelte';
</script>

<!-- Leaving this in as a reference for importing fonts if needed -->
<!-- <svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet" />
</svelte:head> -->

<Topper />
<Header />

<main>
	<img src="images/Cavernet-Sauvignon-Grapes-on-the-vine-1.jpg" alt="grape vine" />
</main>
<Footer />

<style>
	main,
	img {
		width: 100%;
		margin: 0;
		padding: 0;
	}
</style>
