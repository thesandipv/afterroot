<script lang="ts">
  import { page } from "$app/state"
  import SEO from "$lib/components/SEO.svelte"
  import { Button } from "$lib/components/ui/button"
  import { Home } from "@lucide/svelte"
  import { cubicOut } from "svelte/easing"
  import { fade, fly } from "svelte/transition"
</script>

<SEO title="Page Not Found" />

<section class="min-h-[70vh] flex items-center justify-center px-4 py-16">
  <div class="text-center max-w-lg mx-auto">
    <h1
      in:fly={{ y: -20, duration: 600, easing: cubicOut }}
      class="text-7xl font-extralight text-muted-foreground tracking-widest mb-4"
    >
      {page.status || 404}
    </h1>

    <h2
      in:fade={{ duration: 600, delay: 200 }}
      class="text-2xl font-light text-foreground mb-3"
    >
      {page.error?.message || "Page Not Found"}
    </h2>

    <p
      in:fade={{ duration: 600, delay: 300 }}
      class="text-sm text-muted-foreground mb-8"
    >
      The page you're looking for doesn't exist or has been moved.
    </p>

    <div in:fade={{ duration: 600, delay: 400 }}>
      <Button href="/" class="gap-2">
        <Home class="size-4" data-icon="inline-start" />
        Return Home
      </Button>
    </div>
  </div>
</section>
