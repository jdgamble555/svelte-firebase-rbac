<script lang="ts">
	import * as Pagination from '$lib/components/ui/pagination';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	export let count = 10;
	export let perPage = 0;
	export let page = 1;
</script>

<Pagination.Root {count} {perPage} {page} let:pages let:currentPage>
	<Pagination.Content>
		<Pagination.Item>
			<Pagination.PrevButton>
				<a class="gap-1 items-center flex" href={'/admin?page=' + (page - 1).toString()}>
					<ChevronLeft class="h-4 w-4" />
					<span class="hidden sm:block">Previous</span>
				</a>
			</Pagination.PrevButton>
		</Pagination.Item>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
			{:else}
				<Pagination.Item>
					<a href={'/admin?page=' + page.value}>
						<Pagination.Link {page} isActive={currentPage == page.value}>
							{page.value}
						</Pagination.Link>
					</a>
				</Pagination.Item>
			{/if}
		{/each}
		<Pagination.Item>
			<a href={'/admin?page=' + (page + 1).toString()}>
				<Pagination.NextButton>
					<a class="gap-1 items-center flex" href={'/admin?page=' + (page - 1).toString()}>
						<span class="hidden sm:block">Next</span>
						<ChevronRight class="h-4 w-4" />
					</a>
				</Pagination.NextButton>
			</a>
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
