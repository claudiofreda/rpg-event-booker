<script lang="ts">
    import Session from '$root/components/Session.svelte';
    export let sessions: any;
</script>

<style>
    :global(:is(h1, h2, h3, h4, h5))+.sessions-grid
    {
        margin-top: -0.5rem;
    }

    .sessions-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
    }

    @media (max-width: 992px) {
        .sessions-grid {
            grid-template-columns: 1fr;
        }
    }

    .sessions-grid :global(article) {
        margin: 0;
    }
</style>

<div class="sessions-grid">
    {#each sessions as session}
        <Session session={session} />
    {/each}
</div>