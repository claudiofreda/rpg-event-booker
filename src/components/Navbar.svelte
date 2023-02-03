<script>
    export let loggedIn = false
</script>

<nav>
    <ul>
        <li><strong><a href="/">Piattaforma di Iscrizione Eventi</a></strong></li>
    </ul>
    <ul>
        {#if loggedIn}
            <li><a href="">Log Out</a></li>
            <li><a href="">My Profile</a></li>
        {:else}
            <li><a href="">Log In</a></li>
        {/if}
    </ul>
</nav>