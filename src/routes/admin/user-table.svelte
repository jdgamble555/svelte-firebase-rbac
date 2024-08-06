<script lang="ts">
	import { page } from '$app/stores';
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import type { PageData } from '$types/routes/admin/$types';
	import { derived } from 'svelte/store';
	import UserPagination from './user-pagination.svelte';

	const data = derived(page, ($page) => $page.data as PageData);
</script>

<Card.Root class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
	<Card.Header class="px-7">
		<Card.Title>Users</Card.Title>
		<Card.Description>A list of all users in Firebase Auth.</Card.Description>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>User</Table.Head>
					<Table.Head>UID</Table.Head>
					<Table.Head>Role</Table.Head>
					<Table.Head>Verified</Table.Head>
					<Table.Head>Photo</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each $data?.userList || [] as user}
					<Table.Row class="bg-accent">
						<Table.Cell>
							{#if user?.displayName}
								<div class="font-medium">{user.displayName}</div>
							{/if}
							{#if user.email}
								<div class="text-muted-foreground text-sm md:inline">{user?.email}</div>
							{/if}
						</Table.Cell>
						<Table.Cell>{user.localId}</Table.Cell>
						<Table.Cell>User</Table.Cell>
						<Table.Cell>{user?.emailVerified}</Table.Cell>						
						<Table.Cell>
							{#if user?.photoUrl}
								<img alt={user.displayName} src={user.photoUrl} />
							{/if}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>

<div class="mb-5">
	<UserPagination count={Number($data.count.recordsCount)} perPage={10} page={Number($data.page)} />
</div>
