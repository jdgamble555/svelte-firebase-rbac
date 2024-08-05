<script lang="ts">
	import type { LayoutData } from './$types';
	import { useUser } from '$lib/user';
	import '../app.css';

	import Header from './header.svelte';

	export let data: LayoutData;

	useUser(data.user);
</script>

<div class="flex flex-col sm:gap-4">
	<Header />
	<slot />
</div>
