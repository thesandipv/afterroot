<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import { Badge } from "$lib/components/ui/badge"
  import { Button } from "$lib/components/ui/button"
  import * as Card from "$lib/components/ui/card"
  import { SiGithub } from "@icons-pack/svelte-simple-icons"
  import { ArrowLeft } from "@lucide/svelte"
</script>

<SEO
  title="ShowTouchesEnabler"
  description="Helper for enabling 'Show Taps' directly from Quick Settings on Android"
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
        <Badge variant="secondary">Android Tool</Badge>
      </div>
      <div class="flex items-start justify-between gap-4">
        <div>
          <Card.Title class="text-3xl font-light">ShowTouchesEnabler</Card.Title>
          <Card.Description class="mt-1">
            Toggle "Show Taps" easily from your Android Quick Settings tile.
          </Card.Description>
        </div>
        <img
          src="/logos/touch-enabler.png"
          alt="ShowTouchesEnabler logo"
          class="size-14 rounded-xl p-1 bg-muted/40 ring-1 ring-border/40"
        />
      </div>
    </Card.Header>
    <Card.Content class="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        ShowTouchesEnabler allows developers, screen recorders, and power users to quickly toggle the system touch visual feedback directly from Android's Quick Settings panel without navigating deep into Developer Options.
      </p>
      <div class="pt-2 flex flex-wrap gap-3">
        <Button
          variant="outline"
          href="https://github.com/thesandipv/ShowTouchesEnabler"
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
