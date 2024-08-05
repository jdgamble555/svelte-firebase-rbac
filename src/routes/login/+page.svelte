<script lang="ts">
	import LoginWithGoogle from './login-with-google.svelte';
</script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="flex items-center justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="grid gap-2 text-center">
				<h1 class="text-3xl font-bold">Login</h1>
				<p class="text-muted-foreground text-balance">Sign in with your admin google account.</p>
			</div>
			<div class="grid gap-4">
				<LoginWithGoogle />
			</div>
		</div>
	</div>
</div>
