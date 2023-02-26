<script lang="ts">
    export let session: any;
    export let showFacilitator = true;
    export let showEvent = false;
</script>

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
    <p><strong>Iscritti:</strong> {session.bookings.length} su {session.maxBookings} </p> 
    <div class="description">
        {@html session.description}
    </div>
    <footer>
        <div class="buttons">
            <button class="outline">Cancella</button>
            <button class="outline">Modifica</button>
            <button class="">Iscriviti</button>
        </div>
    </footer>
</article>


<style>
    .session {
        max-width: 45em;
    }
    
    header {
        margin-bottom: 1rem;
    }
    
    footer {
        margin-top: 1rem;
    }
    
    footer button {
        margin: 0;
    }
    
    header > :is(h1,h2,h3,h4,h5,h6) {
        margin: 0;
        text-align: center;
    }
    
    :is(h1,h2,h3,h4,h5,h6) {
        margin-top: var(--typography-spacing-vertical);
    }
    
    .buttons {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(0%,1fr));;
        gap: 1rem;
    }
    
    </style>