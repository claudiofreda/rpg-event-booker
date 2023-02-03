<script>    
    import Navbar from '$root/components/Navbar.svelte';
    import '@picocss/pico'
    import '../app.css'
</script>

<header class="container-fluid">
    <Navbar />
</header>

<main class="container">
    <slot></slot>
</main>

