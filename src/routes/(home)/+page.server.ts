import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ parent }) => {

    const data = await parent();

    if (data.user) {

        return redirect(302, '/admin');
    }

}) satisfies PageServerLoad;





