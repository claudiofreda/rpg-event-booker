<script lang="ts">
    import Session from '$root/components/Session.svelte';
    export let sessions;
</script>

<style>
    :global(h1)+.sessions-grid {
        margin-top: -0.5em;
    }

    :global(h2)+.sessions-grid {
        margin-top: -0.5em;
    }

    :global(h3)+.sessions-grid {
        margin-top: -0.25em;
    }

    :global(h4)+.sessions-grid {
        margin-top: -0.25em;
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