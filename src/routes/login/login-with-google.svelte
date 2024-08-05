<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { loginWithGoogle } from '$lib/user';
</script>

<form method="POST" action="/login?/loginWithGoogle" on:submit|preventDefault={loginWithGoogle}>
	<Button type="submit" variant="outline" class="w-full bg-red-600 text-white font-semibold">
		Login with Google
	</Button>
</form>
