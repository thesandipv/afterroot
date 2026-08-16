<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import { Badge } from "$lib/components/ui/badge"
  import { Button } from "$lib/components/ui/button"
  import * as Card from "$lib/components/ui/card"
  import { ArrowLeft, ExternalLink } from "@lucide/svelte"
</script>

<SEO
  title="Pointer Replacer"
  description="An Xposed Module to replace touch pointer"
/>

<div class="container mx-auto max-w-4xl px-4 py-8">
  <div class="flex items-center justify-between gap-4 mb-6">
    <Button variant="ghost" size="sm" href="/apps" class="gap-1 text-muted-foreground hover:text-foreground">
      <ArrowLeft class="size-4" data-icon="inline-start" />
      Back to Apps
    </Button>
    <div class="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        href="https://pointer-replacer.web.app"
        target="_blank"
        rel="noopener noreferrer"
        class="gap-1.5"
      >
        <span>Open Web App</span>
        <ExternalLink class="size-3.5" data-icon="inline-end" />
      </Button>
      <Button variant="secondary" size="sm" href="/apps/pointer-replacer/repo">
        Repository
      </Button>
    </div>
  </div>

  <Card.Root class="overflow-hidden border-border/60">
    <Card.Header>
      <div class="flex items-center gap-2 mb-1">
        <Badge variant="secondary">Xposed Module</Badge>
      </div>
      <Card.Title class="text-3xl font-light">Pointer Replacer</Card.Title>
      <Card.Description>An Xposed Module to replace your Android touch pointer</Card.Description>
    </Card.Header>

    <Card.Content class="p-0 sm:p-6 sm:pt-0">
      <div class="relative w-full aspect-video rounded-none sm:rounded-lg overflow-hidden bg-black shadow-inner">
        <iframe
          src="https://www.youtube.com/embed/eWcV0PUwlzs"
          title="Pointer Replacer Video Demonstration"
          class="absolute inset-0 size-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Card.Content>
  </Card.Root>
</div>
