import { adminApp, adminAuth } from "./firebase-admin";


export const getUsers = async (page = 1, items = 10) => {

    const offset = (page - 1) * items + 1;

    /*

    const list = await adminAuth.listUsers(items, page);



    return list.users.map(({ uid, email, emailVerified, photoURL, displayName }) =>
        ({ uid, email, emailVerified, photoURL, displayName }));

    */

    const projectID = adminApp.options.projectId;

    const token = await adminApp.options.credential?.getAccessToken();

    if (!token) {
        throw 'No token!';
    }

    const url = `https://identitytoolkit.googleapis.com/v1/projects/${projectID}/accounts:query?alt=json`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.access_token}`
        },
        body: JSON.stringify({
            "returnUserInfo": true,
            "limit": items.toString(),
            "offset": offset.toString(),
            "expression": []
        })
    };

    type UserRecord = Omit<Awaited<ReturnType<typeof adminAuth.listUsers>>['users'][0], 'photoURL' | 'uid'> & {
        photoUrl: string;
        localId: string;
    };

    const r = await fetch(url, options).then(response => response.json()) as {
        recordsCount: string,
        userInfo: UserRecord[]
    };

    return r.userInfo.map(({ localId, email, emailVerified, photoUrl, displayName }) =>
        ({ localId, email, emailVerified, photoUrl, displayName }));

};

export const getNumberOfUsers = async () => {

    const projectID = adminApp.options.projectId;

    const token = await adminApp.options.credential?.getAccessToken();

    if (!token) {
        throw 'No token!';
    }

    const url = `https://identitytoolkit.googleapis.com/v1/projects/${projectID}/accounts:query?alt=json`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.access_token}`
        },
        body: JSON.stringify({
            "returnUserInfo": false,
            "expression": []
        })
    };

    return await fetch(url, options).then(response => response.json()) as {
        recordsCount: string
    };
};