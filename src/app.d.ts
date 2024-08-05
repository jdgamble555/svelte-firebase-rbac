// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {

	type Optional<T> = T | undefined | null;

	type UserType = {
		displayName: string | null
		photoURL: string | null;
		uid: string;
		email: string | null;
	};

	namespace App {
		interface Locals {
			getSession(): Promise<DecodedIdToken | null>;
		}
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
