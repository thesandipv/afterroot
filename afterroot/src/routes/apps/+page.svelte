<script lang="ts">
  import AppSection from "$lib/components/AppSection.svelte"
  import SEO from "$lib/components/SEO.svelte"
  import { Button } from "$lib/components/ui/button"
  import { ArrowLeft } from "@lucide/svelte"
</script>

<SEO title="Apps" description="Browse all applications developed by AfterROOT" />

<div class="container mx-auto max-w-5xl px-4 pt-8">
  <Button variant="ghost" size="sm" href="/" class="gap-1 text-muted-foreground hover:text-foreground">
    <ArrowLeft class="size-4" data-icon="inline-start" />
    Back to Home
  </Button>
</div>

<AppSection title="All Applications" />
