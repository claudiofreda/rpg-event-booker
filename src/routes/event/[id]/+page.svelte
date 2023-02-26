<script lang="ts">
    export let data : any;
    import NewSessionDialog from '$root/components/NewSessionDialog.svelte';
    import SessionGrid from '$root/components/SessionGrid.svelte';
    import FormattedTime from '$root/components/FormattedTime.svelte';
    import FormattedDate from '$root/components/FormattedDate.svelte';

    let facilitators = data.event.slots.flatMap( (slot: any) => slot.sessions ).map( (session: any) => session.facilitator );

    let isOpen_NewSessionDialog = false;

    let handleCreateNewSession = () => {
        isOpen_NewSessionDialog = true;
    }

    let handleCloseNewSessionDialog = () => {
        isOpen_NewSessionDialog = false;
    }
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
    <h2>Slot from <FormattedTime time={slot.startTime} /> to <FormattedTime time={slot.endTime} />
        <a href="#cancel" role="button" on:click={handleCreateNewSession}>Crea nuova sessione</a>
    </h2>
    <SessionGrid sessions={slot.sessions}/>
{/each}

{#if isOpen_NewSessionDialog}
    <NewSessionDialog
        eventId={data.event.id}
        on:closeDialog={handleCloseNewSessionDialog}
        />
{/if}