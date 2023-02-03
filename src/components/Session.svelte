<script lang="ts">
    export let session;
    export let showFacilitator = true;
    export let showEvent = false;
</script>

<style>
.session {
    max-width: 45em;
}

.session > header > h1,h2,h3,h4,h5,h6 {
    margin: 0;
}

.session :global(p) {
    margin: 0.5em 0;
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

<article class="session">
    <header>
        <h3>{session.name}</h3>
    </header>
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
        <h4>Descrizione</h4>
        {@html session.description}
    </div>
</article>