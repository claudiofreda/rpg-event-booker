<script lang="ts">
    export let data: any;
    import SessionGrid from '$root/components/SessionGrid.svelte';
    import FormattedDate from '$root/components/FormattedDate.svelte';

    function uniqBy(array: any, fnKey: any) {
        var seen: any = {};
        return array.filter(function(item: any) {
            var key = fnKey(item);
            return seen.hasOwnProperty(key) ? false : (seen[key] = true);
        })
    }

    function getEvents(sessions: any) {
        const slots = sessions.flatMap( (session: any) => session.slot )
        const slotsFiltered = uniqBy( slots, (slot: any) => slot.id )
        const events = slots.flatMap( (slot: any) => slot.event )
        return uniqBy( events, (event: any) => event.id )
    }
    
    const sessions = data.user.facilitatorOf;
    const eventsFiltered = getEvents(sessions)
    const sessionPerEvent = eventsFiltered.map(
        (event: any) => sessions.filter(
            (session: any) => session.slot.event.id == event.id
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
    <SessionGrid sessions={sessionPerEvent[index]} />
{/each}