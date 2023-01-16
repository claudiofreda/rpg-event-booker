<script lang="ts">
    export let session;
    export let showFacilitator = true;
    export let showEvent = false;
</script>

<style>
.session {
    border-radius: 1em;
    border: 1px solid grey;
    padding: 1em;
    max-width: 45em;
}

.session :global(p) {
    margin: 0.5em 0;
}

.session > h1 {
    margin: 0;
}

.description > h3 {
    margin-bottom: 0;
}

.signups {
    display: grid;
    grid-template-columns: 1fr min-content;
}

.signups > button {
    height: fit-content;
    margin: auto;
}

.signups > p {
    margin: 0;
}

</style>

<div class="session">
    <h1>{session.name}</h1>
    <p>
        <strong>GM/Facilitatore</strong>: 
        {#if showFacilitator}
            <a href="/user/{session.facilitator.handle}">{session.facilitator.handle}</a>
        {/if}
        {#if showEvent}
            <a href="/event/{session.event.id}">{session.event.name}</a>
        {/if}
    </p>
    <p><strong>Gioco</strong>: {session.game}</p>
    <div class="signups">
        <p><strong>Iscritti:</strong> {session.bookings.length} su {session.maxBookings} </p> <button>Iscriviti</button>
    </div>
    <div class="description">
        <h3>Descrizione</h3>
        {@html session.description}
    </div>
</div>