<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import { Badge } from "$lib/components/ui/badge"
  import { Button } from "$lib/components/ui/button"
  import * as Card from "$lib/components/ui/card"
  import { ArrowLeft } from "@lucide/svelte"
</script>

<SEO title="About Us" description="Learn more about AfterROOT" />

<div class="container mx-auto max-w-3xl px-4 py-12">
  <div class="mb-6">
    <Button variant="ghost" size="sm" href="/" class="gap-1 text-muted-foreground hover:text-foreground">
      <ArrowLeft class="size-4" data-icon="inline-start" />
      Back to Home
    </Button>
  </div>

  <Card.Root class="border-border/60">
    <Card.Header>
      <div class="flex items-center gap-2 mb-2">
        <Badge variant="secondary">About</Badge>
      </div>
      <Card.Title class="text-3xl font-light">About AfterROOT</Card.Title>
      <Card.Description>Everything's connected from the root.</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        AfterROOT started just for fun. But now it has an aim. We go after the root of problems to build simple, helpful, and effective applications.
      </p>
      <p>
        That's why it's named AfterROOT. Let's build the world better together from the ROOT.
      </p>
    </Card.Content>
  </Card.Root>
</div>
