<script lang="ts">
    export let time: Date
    
    function formatTime(date: Date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let minutesString = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutesString + ' ';
        return strTime;
    }
</script>

{formatTime(time)}