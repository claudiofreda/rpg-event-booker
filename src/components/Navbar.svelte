<script>
    export let loggedIn = false
</script>

<nav>
    <a href="/">Home</a>
    |
    {#if loggedIn}
        <a href="">Log Out</a>
        |
        <a href="">My Profile</a>
    {:else}
        <a href="">Log In</a>
    {/if}
</nav>