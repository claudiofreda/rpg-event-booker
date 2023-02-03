<script>
    export let data;
    import SessionGrid from '$root/components/SessionGrid.svelte';
    import FormattedTime from '$root/components/FormattedTime.svelte';
    import FormattedDate from '$root/components/FormattedDate.svelte';

    let facilitators = data.event.slots.flatMap( (slot) => slot.sessions ).map( (session) => session.facilitator );

</script>

<h1>{data.event.name} (<FormattedDate date = {data.event.startTime}/>): Lista sessioni</h1>

<p>
    <strong>Organizzatori: </strong>
    {#each data.event.organizers as user, index}
        {#if index > 0}, {/if}
        <a href="/user/{user.handle}">{user.handle}</a>
    {/each} 
</p>
<p>
    <strong>Facilitatori: </strong>
    {#each facilitators as user, index}
        {#if index > 0}, {/if}
        <a href="/user/{user.handle}">{user.handle}</a>
    {/each} 
</p>

{#each data.event.slots as slot}
    <h2>Slot from <FormattedTime time={slot.startTime} /> to <FormattedTime time={slot.endTime} /> </h2>
    <SessionGrid sessions={slot.sessions}/>
{/each}