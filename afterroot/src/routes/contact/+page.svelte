<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import { Badge } from "$lib/components/ui/badge"
  import { Button } from "$lib/components/ui/button"
  import * as Card from "$lib/components/ui/card"
  import { ArrowLeft, Mail } from "@lucide/svelte"
</script>

<SEO
  title="Contact Us"
  description="Get in touch with AfterROOT"
/>

<div class="container mx-auto max-w-3xl px-4 py-8">
  <div class="mb-6">
    <Button variant="ghost" size="sm" href="/" class="gap-1 text-muted-foreground hover:text-foreground">
      <ArrowLeft class="size-4" data-icon="inline-start" />
      Back to Home
    </Button>
  </div>

  <Card.Root class="border-border/60">
    <Card.Header>
      <div class="flex items-center gap-2 mb-1">
        <Badge variant="secondary">Contact</Badge>
      </div>
      <Card.Title class="text-3xl font-light">Contact AfterROOT</Card.Title>
      <Card.Description>We're here to help and answer any questions.</Card.Description>
    </Card.Header>

    <Card.Content class="space-y-6">
      <div class="rounded-lg border bg-muted/20 p-5 space-y-3">
        <h2 class="text-base font-medium text-foreground">
          Request for deletion of account and data:
        </h2>
        <p class="text-sm text-muted-foreground leading-relaxed">
          To request deletion of your account and associated data, please send us an email.
        </p>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Please include your name, email address, and the specific app for which you are requesting data deletion.
        </p>
        <div class="pt-2">
          <Button href="mailto:afterhasroot@gmail.com" class="gap-2">
            <Mail class="size-4" data-icon="inline-start" />
            Email Us (afterhasroot@gmail.com)
          </Button>
        </div>
      </div>
    </Card.Content>
  </Card.Root>
</div>
