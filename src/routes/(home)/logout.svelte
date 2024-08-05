<script lang="ts">
	import { logout } from '$lib/user';
</script>

<form method="POST" action="/login?/logout" on:submit|preventDefault={logout}>
	<button type="submit">Logout</button>
</form>
