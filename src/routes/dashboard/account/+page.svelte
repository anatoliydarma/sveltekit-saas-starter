<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import Error from '$lib/components/Error.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { PUBLIC_APP_NAME } from '$env/static/public';
	export let data;

	const toastStore = getToastStore();

	const { form, errors, enhance, constraints, message } = superForm(data.form);

	$: if ($message) {
		toastStore.trigger($message);
	}
</script>

<svelte:head>
	<title>My account - {PUBLIC_APP_NAME}</title>
</svelte:head>

<main class="max-w-screen-xl px-4 mx-auto space-y-2">
	<form method="POST" action="?/save" use:enhance>
		<input type="hidden" name="id" value={$form.id} />
		<div class="max-w-xs space-y-4">
			<label class="label">
				<span>Name</span>
				<input
					class="input"
					type="text"
					id="name"
					name="name"
					placeholder="user name"
					bind:value={$form.name}
					aria-invalid={$errors.name ? 'true' : undefined}
					{...$constraints.name}
				/>
				{#if $errors.name}
					<Error>{$errors.name}</Error>
				{/if}
			</label>

			<label class="label">
				<span>Email</span>
				<input
					class="input"
					id="email"
					name="email"
					type="email"
					placeholder="email"
					required
					bind:value={$form.email}
					aria-invalid={$errors.email ? 'true' : undefined}
					{...$constraints.email}
				/>
				{#if $errors.email}
					<Error>{$errors.email}</Error>
				{/if}
			</label>

			<div class="flex justify-end">
				<button type="submit" class="btn variant-soft-secondary"> Save </button>
			</div>
		</div>
	</form>

	<div>
		Your subscription is {data.subIsActive ? 'Active' : 'Not active'}
	</div>
</main>
