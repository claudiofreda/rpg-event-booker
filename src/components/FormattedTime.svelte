<script lang="ts">
    export let time: Date
    
    function formatTime(date: Date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ';
        return strTime;
    }
</script>

{formatTime(time)}