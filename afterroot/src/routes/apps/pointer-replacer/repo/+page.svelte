<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import { Badge } from "$lib/components/ui/badge"
  import { Button } from "$lib/components/ui/button"
  import * as Card from "$lib/components/ui/card"
  import { ArrowLeft } from "@lucide/svelte"
</script>

<SEO
  title="Pointer Repository"
  description="Explore and share pointers for Pointer Replacer"
/>

<div class="container mx-auto max-w-3xl px-4 py-8">
  <div class="mb-6">
    <Button
      variant="ghost"
      size="sm"
      href="/apps/pointer-replacer"
      class="gap-1 text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft class="size-4" data-icon="inline-start" />
      Back to Pointer Replacer
    </Button>
  </div>

  <Card.Root class="border-border/60">
    <Card.Header>
      <div class="flex items-center gap-2 mb-1">
        <Badge variant="secondary">Repository</Badge>
      </div>
      <Card.Title class="text-3xl font-light">Pointer Repository</Card.Title>
      <Card.Description>Community pointers repository and downloads</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4 text-muted-foreground">
      <p>
        Browse and share custom pointer packs designed for Pointer Replacer.
      </p>
      <div class="rounded-lg border border-dashed p-8 text-center bg-muted/20">
        <p class="text-sm font-medium">Repository Sync In Progress</p>
        <p class="text-xs text-muted-foreground mt-1">
          Pointers collection will appear here shortly.
        </p>
      </div>
    </Card.Content>
  </Card.Root>
</div>
