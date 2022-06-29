<script>
    import Navbar from "$lib/navbar.svelte";
    import Footer from "$lib/footer.svelte";

    import '../app.postcss';
</script>

<svelte:head>
    <link rel='icon' type='image/vnd.microsoft.icon' href='/Icon.ico'>
</svelte:head>

<div class="min-h-screen">
    <Navbar />
    <slot />
    <Footer />
</div>

<style>
	:global(body) {
		--main-background: #111;

		background-image: url('/code_wallpaper.svg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: auto;

		background-color: var(--main-background);
    color: #ffffff;
	}
</style>