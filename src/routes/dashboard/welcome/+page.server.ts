import * as billing from '$lib/server/services/billing';

export async function load({ url }) {
	const sessionId = url.searchParams.get('checkout_session_id');

	await billing.syncCheckout(sessionId);
}
