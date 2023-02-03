<script>
	import Auth from '$lib/Auth.svelte';
	import user from '$lib/Auth.svelte';
</script>

{#if user}
	<Auth />
{:else}
	<h1 class="text-xl font-bold">Hello World!</h1>
{/if}
