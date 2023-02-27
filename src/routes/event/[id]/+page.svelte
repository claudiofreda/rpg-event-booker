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
    let defaultSlotId: number | null;

    let closeDialog = () => {
        if (currentDialog) console.log("dialog closed");
        currentDialog = "";
        editedSession = null;
        defaultSlotId = null;
    }

    let openDialog = (dialogName: string, further = (event: any) => {}) => {
        return (event: any) => {
            closeDialog();
            currentDialog = dialogName;
            further(event);
        }
    }

    if (form?.success) {
        closeDialog();
        form = null;
    }
</script>

<style>

button.new-session {
    min-height: 20em;
    margin: 0;
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
        on:openForModify={openDialog("modifySession", (event) => { editedSession = event.detail.session; })}
        on:openForDelete={openDialog("deleteSession", (event) => { editedSession = event.detail.session; })}
    >
        <button class="new-session outline" on:click={openDialog("createSession", () => { defaultSlotId = slot.id })}>
            Crea nuova sessione
        </button>
    </SessionGrid>
{/each}

{#if currentDialog == "createSession"}
    <NewSessionDialog
        defaultSlotId={defaultSlotId}
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