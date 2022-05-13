<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Topper from './topHeaderImg.svelte';
	import Modal from './modal.svelte';
</script>

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
