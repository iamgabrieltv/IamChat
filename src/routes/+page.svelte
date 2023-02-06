<script>
	import Auth from '$lib/Auth.svelte';
	import { user } from '$lib/firebase';
</script>

{#if user}
	<h1 class="text-xl font-bold">Hello World!</h1>
{:else}
	<Auth />
{/if}
