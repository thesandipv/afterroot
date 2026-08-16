<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import { Badge } from "$lib/components/ui/badge"
  import { Button } from "$lib/components/ui/button"
  import * as Card from "$lib/components/ui/card"
  import { SiGithub } from "@icons-pack/svelte-simple-icons"
  import { ArrowLeft } from "@lucide/svelte"
</script>

<SEO
  title="WatchDone"
  description="Watchlist Manager with 'Mark as Watched' function"
/>

<div class="container mx-auto max-w-3xl px-4 py-8">
  <div class="mb-6">
    <Button variant="ghost" size="sm" href="/apps" class="gap-1 text-muted-foreground hover:text-foreground">
      <ArrowLeft class="size-4" data-icon="inline-start" />
      Back to Apps
    </Button>
  </div>

  <Card.Root class="border-border/60">
    <Card.Header>
      <div class="flex items-center gap-2 mb-1">
        <Badge variant="secondary">Android App</Badge>
      </div>
      <div class="flex items-start justify-between gap-4">
        <div>
          <Card.Title class="text-3xl font-light">WatchDone</Card.Title>
          <Card.Description class="mt-1">
            Watchlist Manager with 'Mark as Watched' function.
          </Card.Description>
        </div>
        <img
          src="/logos/watchdone.png"
          alt="WatchDone logo"
          class="size-14 rounded-xl p-1 bg-muted/40 ring-1 ring-border/40"
        />
      </div>
    </Card.Header>
    <Card.Content class="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        WatchDone helps you keep track of movies and TV shows you want to watch or have already completed, with intuitive watchlist management and seamless tracking.
      </p>
      <div class="pt-2 flex flex-wrap gap-3">
        <Button
          variant="outline"
          href="https://github.com/thesandipv/WatchDone"
          target="_blank"
          rel="noopener noreferrer"
          class="gap-2"
        >
          <SiGithub class="size-4" data-icon="inline-start" />
          View on GitHub
        </Button>
      </div>
    </Card.Content>
  </Card.Root>
</div>
