<script>
    export let data;
    import SessionGrid from '$root/components/SessionGrid.svelte';
    import FormattedTime from '$root/components/FormattedTime.svelte';
    import FormattedDate from '$root/components/FormattedDate.svelte';

    function uniqBy(array, fnKey) {
        var seen = {};
        return array.filter(function(item) {
            var key = fnKey(item);
            return seen.hasOwnProperty(key) ? false : (seen[key] = true);
        })
    }

    function getEvents(sessions) {
        const slots = sessions.flatMap( (session) => session.slot )
        const slotsFiltered = uniqBy( slots, (slot) => slot.id )
        const events = slots.flatMap( (slot) => slot.event )
        return uniqBy( events, (event) => event.id )
    }
    
    const sessions = data.user.facilitatorOf;
    const eventsFiltered = getEvents(sessions)
    const sessionPerEvent = eventsFiltered.map(
        (event) => sessions.filter(
            (session) => session.slot.event.id == event.id
        )
    );
</script>

<h1>Profilo utente: {data.user.handle}</h1>

<p>
    <strong>Organizza i seguenti eventi: </strong>
    {#each data.user.organizerOf as event, index}
        {#if index > 0}, {/if}
        <a href="/event/{event.id}">{event.name}</a>
    {/each} 
</p>

<h2>Sessioni facilitate</h2>

{#each eventsFiltered as event, index}
<h2><a href="/event/{event.id}">{event.name} - <FormattedDate date={event.startTime} /></a></h2>
    <SessionGrid sessions={sessionPerEvent[index]}/>
{/each}