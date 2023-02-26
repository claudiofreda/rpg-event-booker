<script>
	import { createEventDispatcher } from "svelte";

    export let eventId = 0;
    export let sessionData = {
        name: "",
        game: "",
        description: ""
    };

    let dispatch = createEventDispatcher();

    let handleClose = () => {
        dispatch("closeDialog");
    }
</script>

<style>
    article header {
        margin-bottom: 1rem;
    }
        
    article footer {
        margin-top: 0;
    }
    
    dialog >article {
        flex-grow: 1;
    }
    
    dialog footer input {
        display: inline;
        width: fit-content;
        white-space:nowrap;
    }
    
    textarea {
      resize: none;
    }
</style>

<dialog open>
    <article>
        <header><strong>Crea nuova sessione</strong></header>
        
        <form id="newsession" action="/event/{eventId}/new-session" method="post" autocomplete="off">
            
            <div class="grid">
                <label for="name">
                    Nome sessione
                    <input
                        id="name"
                        aria-label="Enter your Tweet"
                        bind:value={sessionData.name}
                        name="tweet"
                        placeholder="What's your hot take?"
                        type="text"
                    />
                </label>
                
                <label>
                    Nome gioco
                    <input
                        id="name"
                        aria-label="Enter your Tweet"
                        bind:value={sessionData.game}
                        name="tweet"
                        placeholder="What's your hot take?"
                        type="text"
                    />
                </label>
            </div>
            
            <label>
                Descrizione
                <textarea
                    aria-label="Enter your Tweet"
                    name="tweet"
                    placeholder="What's your hot take?"
                    bind:value={sessionData.description}
                />
            </label>
            
            
        </form>
        <footer>
            <a href="#cancel" role="button" class="secondary" on:click={handleClose}>Annulla</a>
            <input form="newsession" type="submit" role="button" value="Conferma"/>
        </footer>
    </article>
</dialog>