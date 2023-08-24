// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/services/auth').Auth;
		type DatabaseUserAttributes = {
			name: string?;
			email: string;
			email_verified: boolean;
			role: string;
			avatar: string?;
			active: boolean?;
		};
		type DatabaseSessionAttributes = {};
	}

	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
