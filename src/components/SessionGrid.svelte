<script lang="ts">
    import Session from '$root/components/Session.svelte';
    export let sessions;
</script>

<style>
    .sessions-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
        gap: 1em;
        padding: 1em;
        max-width: 120em;
    }
</style>

<div class="sessions-grid">
{#each sessions as session}
    <Session session={session} />
{/each}
</div>