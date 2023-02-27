<script lang="ts">
    import SlotName from '$root/components/SlotName.svelte';
	import { createEventDispatcher } from "svelte";

    export let event: any;
    export let sessionData: any;

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
        <header><strong>Modifica sessione</strong></header>
        
        <form id="modifySession" action="?/modifySession" method="post" autocomplete="off">
            <input type=hidden name="sessionId" value={sessionData.id} />

            <div class="grid">
                <label for="name">
                    Nome sessione
                    <input
                        id="name"
                        aria-label="Enter your Tweet"
                        value={sessionData.name}
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
                        value={sessionData.game}
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
                    value={sessionData.description}
                />
            </label>
            
            <label>
                Slot
                <select name="slotId" aria-label="Slot" id="slot">
                    {#each event.slots as slot}
                        <option value={slot.id} selected={slot.id == sessionData.slotId || undefined}>
                            <SlotName slot={slot} />
                        </option>
                    {/each}
                </select>
            </label>
        </form>

        <footer>
            <a href="#cancelModify" role="button" class="secondary" on:click={handleClose}>Annulla</a>
            <input form="modifySession" type="submit" role="button" value="Conferma"/>
        </footer>
    </article>
</dialog>