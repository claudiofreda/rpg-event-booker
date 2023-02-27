<script lang="ts">
    export let slot: any; 
    import FormattedTime from "./FormattedTime.svelte";
</script>

Slot from <FormattedTime time={slot.startTime} /> to <FormattedTime time={slot.endTime} />