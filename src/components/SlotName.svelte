<script lang="ts">
    export let slot: any; 
    import FormattedTime from "./FormattedTime.svelte";
</script>

Slot dalle <FormattedTime time={slot.startTime} /> alle <FormattedTime time={slot.endTime} />