import type { LayoutServerLoad } from './$types';

export const load = (async ({
    locals: { getSession }
}) => {

    const session = await getSession();

    if (!session) {
        return {
            user: null
        }
    }

    const user: UserType = {
        displayName: session.name,
        email: session.email,
        photoURL: session.picture,
        uid: session.uid
    };

    return {
        user
    };

}) satisfies LayoutServerLoad;