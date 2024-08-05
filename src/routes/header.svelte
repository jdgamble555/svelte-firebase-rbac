<script lang="ts">
	import { useUser } from '$lib/user';
	import Logout from './(home)/logout.svelte';
	import Shield from 'lucide-svelte/icons/shield';

	const user = useUser();
</script>

<header
	class="bg-background sticky top-0 flex justify-between h-16 gap-4 border-b px-4 md:px-6 z-10"
>
	<nav
		class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
	>
		<a href="/" class="flex items-center gap-2 text-lg font-semibold md:text-base">
			<Shield class="h-6 w-6" />
			<span class="sr-only">Firebase User Admin</span>
		</a>
		<span class="text-lg">Firebase User Admin</span>
	</nav>
	<div class="flex items-center gap-2 text-lg font-semibold md:text-base">
		{#if $user}
			<Logout />
		{:else}
			<a href="/login">Login</a>
		{/if}
	</div>
</header>
