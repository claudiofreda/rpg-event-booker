<script lang="ts">
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
        margin-bottom: -1em;
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
      resize: none;
    }
</style>

<dialog open>
    <article>
        <header>
            <strong> Sei sicuro di voler cancellare la sessione "{sessionData.name}"? </strong>
            
        </header>
        <footer>
            <form use:enhance id="deleteSession" action="?/deleteSession" method="post" autocomplete="off">
                <a href="#cancelDeleteSession" role="button" class="secondary" on:click={handleClose}>Annulla</a>
                <input form="deleteSession" type="submit" role="button" value="Conferma"/>
                <input type=hidden name="sessionId" value={sessionData.id} />
            </form>
        </footer>
    </article>
</dialog>