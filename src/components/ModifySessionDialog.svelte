<script lang="ts">
    import SlotName from '$root/components/SlotName.svelte';
	import { createEventDispatcher } from "svelte";
    import { enhance } from '$app/forms'

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
    
    dialog > article {
        flex-grow: 1;
    }
    
    dialog footer input {
        display: inline;
        width: fit-content;
        white-space:nowrap;
    }
    
    textarea {
        resize: vertical;
        height: 15em;
    }
</style>

<dialog open>
    <article>
        <header><strong>Modifica sessione</strong></header>
        
        <form use:enhance id="modifySession" action="?/modifySession" method="post" autocomplete="off">
            <input type=hidden name="sessionId" value={sessionData.id} />

            <div class="grid">
                <label for="name">
                    Nome sessione
                    <input
                        id="name"
                        aria-label="Nome sessione"
                        value={sessionData.name}
                        name="name"
                        placeholder=""
                        type="text"
                    />
                </label>
                
                <label>
                    Nome gioco
                    <input
                        id="game"
                        aria-label="Nome gioco"
                        value={sessionData.game}
                        name="game"
                        placeholder=""
                        type="text"
                    />
                </label>
            </div>
            
            <label>
                Descrizione
                <textarea
                    aria-label="Descrizione"
                    name="description"
                    placeholder=""
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