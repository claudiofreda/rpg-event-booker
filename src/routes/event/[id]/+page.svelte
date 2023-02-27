<script lang="ts">
    export let form: any;
    export let data : any;
    import SessionGrid from '$root/components/SessionGrid.svelte';
    import FormattedTime from '$root/components/FormattedTime.svelte';
    import FormattedDate from '$root/components/FormattedDate.svelte';
    import NewSessionDialog from '$root/components/NewSessionDialog.svelte';
	import ModifySessionDialog from '$root/components/ModifySessionDialog.svelte';
	import DeleteSessionDialog from '$root/components/DeleteSessionDialog.svelte';

    let facilitators = data.event.slots.flatMap( (slot: any) => slot.sessions ).map( (session: any) => session.facilitator );

    let currentDialog = "";
    let editedSession: any;

    let closeDialog = () => {
        if (currentDialog) console.log("dialog closed");
        currentDialog = "";
        editedSession = null;
    }

    let openDialog = (dialogName: string, further = (event: any) => {}) => {
        return (event: any) => {
            closeDialog();
            currentDialog = dialogName;
            further(event);
        }
    }

    let setEditedSession = (session: any) => {
        console.log(session);
        editedSession = session;
    }

    if (form?.success) {
        closeDialog();
        form = null;
    }
</script>

<style>

button {
    margin: 1em 0em;
}

</style>

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
    </h2>
    <SessionGrid
        sessions={slot.sessions}
        on:openForModify={openDialog("modifySession", (event) => { setEditedSession(event.detail.session) })}
        on:openForDelete={openDialog("deleteSession", (event) => { setEditedSession(event.detail.session) })}
    />
    <button on:click={openDialog("createSession")}>
        Crea nuova sessione
    </button>
{/each}

{#if currentDialog == "createSession"}
    <NewSessionDialog
        event={data.event}
        on:closeDialog={closeDialog}
        />
{/if}

{#if currentDialog == "modifySession"}
    <ModifySessionDialog
        sessionData={editedSession}
        event={data.event}
        on:closeDialog={closeDialog}
        />
{/if}

{#if currentDialog == "deleteSession"}
    <DeleteSessionDialog
        sessionData={editedSession}
        event={data.event}
        on:closeDialog={closeDialog}
        />
{/if}