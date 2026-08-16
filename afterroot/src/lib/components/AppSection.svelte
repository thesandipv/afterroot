<script lang="ts">
  import type { AppItem } from "$lib/data/apps"
  import AppCard from "$lib/components/AppCard.svelte"
  import { Skeleton } from "$lib/components/ui/skeleton"
  import { defaultApps } from "$lib/data/apps"
  import { fetchAppsFromRemoteConfig } from "$lib/firebase"
  import { onMount } from "svelte"
  import { cubicOut } from "svelte/easing"
  import { fade, fly } from "svelte/transition"

  interface Props {
    title?: string
  }

  const { title = "Our Apps" }: Props = $props()

  let apps = $state<AppItem[]>(defaultApps)
  let isLoaded = $state<boolean>(false)

  onMount(async () => {
    try {
      const fetched = await fetchAppsFromRemoteConfig()
      if (fetched && fetched.length > 0) {
        apps = fetched
      }
    } catch {
    // Fallback already initialized
    } finally {
      isLoaded = true
    }
  })
</script>

<section class="py-12 px-4 sm:px-6">
  <div class="container mx-auto max-w-5xl">
    {#if title}
      <div class="text-center mb-8">
        <h2 class="text-3xl font-light tracking-tight">{title}</h2>
        <p class="text-sm text-muted-foreground mt-2">
          Explore tools and applications created by AfterROOT
        </p>
      </div>
    {/if}

    {#if !isLoaded}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4" out:fade={{ duration: 150 }}>
        {#each [1, 2, 3, 4] as i (i)}
          <div class="border rounded-xl p-5 flex items-start gap-4 bg-card">
            <Skeleton class="size-12 rounded-xl" />
            <div class="flex-1 space-y-2">
              <Skeleton class="h-5 w-36" />
              <Skeleton class="h-4 w-full" />
              <Skeleton class="h-4 w-3/4" />
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each apps as app, index (app.id || app.path)}
          <div
            in:fly={{
              y: 20,
              duration: 400,
              delay: index * 80,
              easing: cubicOut,
            }}
          >
            <AppCard {app} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
