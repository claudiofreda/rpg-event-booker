<script lang="ts">
    import SlotName from '$root/components/SlotName.svelte';
	import { createEventDispatcher } from "svelte";

    export let defaultSlotId: number | null = null;
    export let event: any;
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
        
        <form id="newsession" action="?/createSession" method="post" autocomplete="off">
            
            <div class="grid">
                <label for="name">
                    Nome sessione
                    <input
                        id="name"
                        aria-label="Enter your Tweet"
                        bind:value={sessionData.name}
                        name="name"
                        placeholder="What's your hot take?"
                        type="text"
                    />
                </label>
                
                <label>
                    Nome gioco
                    <input
                        id="game"
                        aria-label="Enter your Tweet"
                        bind:value={sessionData.game}
                        name="game"
                        placeholder="What's your hot take?"
                        type="text"
                    />
                </label>
            </div>
            
            <label>
                Descrizione
                <textarea
                    aria-label="Enter your Tweet"
                    name="description"
                    placeholder="What's your hot take?"
                    bind:value={sessionData.description}
                />
            </label>
            
            <label>
                Slot
                <select name="slotId" aria-label="Slot" id="slot">
                    {#each event.slots as slot}
                        <option value={slot.id} selected={slot.id == defaultSlotId || undefined}>
                            <SlotName slot={slot} />
                        </option>
                    {/each}
                </select>
            </label>
            
        </form>
        <footer>
            <a href="#cancelNewSession" role="button" class="secondary" on:click={handleClose}>Annulla</a>
            <input form="newsession" type="submit" role="button" value="Conferma"/>
        </footer>
    </article>
</dialog>