<script lang="ts">
  import AppSection from "$lib/components/AppSection.svelte"
  import SEO from "$lib/components/SEO.svelte"
  import { Separator } from "$lib/components/ui/separator"
  import { onMount } from "svelte"
  import { cubicOut } from "svelte/easing"
  import { fade, fly } from "svelte/transition"

  let mounted = $state(false)

  onMount(() => {
    mounted = true
  })
</script>

<SEO title="Home" />

<!-- Hero Section -->
<section
  class="relative h-[85vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style="background-image: url('/assets/background.webp');"
>
  <!-- Overlay gradient for depth and legibility -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background/95"></div>

  <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
    {#if mounted}
      <h1
        in:fly={{ x: -50, duration: 900, delay: 150, easing: cubicOut }}
        class="text-4xl sm:text-6xl md:text-7xl font-light text-white uppercase tracking-[0.18em] leading-tight drop-shadow-md"
      >
        Everything's<br />connected
      </h1>
      <p
        in:fade={{ duration: 800, delay: 500 }}
        class="mt-6 text-sm sm:text-base text-zinc-300 font-light tracking-wide max-w-md mx-auto"
      >
        Building thoughtful tools and digital experiences from the root.
      </p>
    {/if}
  </div>
</section>

<!-- About Section -->
<section class="py-16 px-4 sm:px-6">
  <div class="container mx-auto max-w-3xl text-center">
    <h2 class="text-3xl font-light tracking-tight mb-4">About Us</h2>
    <p class="text-base sm:text-lg text-muted-foreground leading-relaxed">
      AfterROOT started just for fun. But now it has an aim. We go after the root.
      <br class="hidden sm:inline" />
      That's why it's named AfterROOT. Let's build the world better together from the ROOT.
    </p>
  </div>
</section>

<div class="container mx-auto max-w-4xl px-4">
  <Separator class="opacity-40" />
</div>

<!-- Apps Section -->
<AppSection title="Our Apps" />
