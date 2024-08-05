<script>
	import { useUser } from '$lib/user';
	import '../app.css';
	import Header from './header.svelte';

	useUser();
</script>

<div class="flex flex-col sm:gap-4">
	<Header />
	<slot />
</div>
