import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getNumberOfUsers, getUsers } from '$lib/admin-user';

export const load = (async ({ parent, url }) => {

    const page = url.searchParams.get('page') || '1';

    const data = await parent();

    if (!data.user) {
        return redirect(302, '/login');
    }

    return {
        userList: await getUsers(page),
        count: await getNumberOfUsers(),
        page
    }

}) satisfies PageServerLoad;