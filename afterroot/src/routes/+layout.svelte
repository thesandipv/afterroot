<script lang="ts">
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import SEO from "$lib/components/SEO.svelte"
  import "./layout.css"

  const { children } = $props()
</script>

<SEO />

<div class="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20">
  <Header />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>
