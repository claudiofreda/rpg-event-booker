<script>
    export let data;
    let tweet;
</script>

<div class="compose">
	<form action="/event/{data.id}/new-session" method="post" autocomplete="off">
		<input
			aria-label="Enter your Tweet"
			bind:value={tweet}
			name="tweet"
			placeholder="What's your hot take?"
			type="text"
		/>
		<button
			class="btn"
			class:error={false}
			disabled={false}
			type="submit"
		>
		</button>
	</form>
</div>