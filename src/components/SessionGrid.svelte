<script lang="ts">
    import Session from '$root/components/Session.svelte';
    export let sessions: any;
</script>

<style>
    :global(:is(h1, h2, h3, h4, h5))+.session-grid
    {
        margin-top: -0.5rem;
    }

    .session-grid :global(article) {
        display: flex;
        flex-flow: column nowrap;
        height: 100%;
    }

    .session-grid :global(article > :has(+footer)) {
        flex-grow: 1;
    }    

    .session-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
    }

    @media (max-width: 992px) {
        .session-grid {
            grid-template-columns: 1fr;
        }
    }

    .session-grid :global(article) {
        margin: 0;
    }
</style>

<div class="session-grid">
    {#each sessions as session}
        <Session session={session} on:openForDelete on:openForModify />
    {/each}
    <slot></slot>
</div>