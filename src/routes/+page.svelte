<script>
    import FormattedDate from '$root/components/FormattedDate.svelte'
    export let data;

</script>

<h1>Lista Eventi</h1>
<ul>
{#each data.events as event}
    <li>
        <a href="/event/{event.id}">{event.name} - <FormattedDate date={event.startTime} /></a>
        </li>
{/each}
</ul>