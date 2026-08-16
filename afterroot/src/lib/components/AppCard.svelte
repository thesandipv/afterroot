<script lang="ts">
  import type { AppItem } from "$lib/data/apps"
  import { Badge } from "$lib/components/ui/badge"
  import * as Card from "$lib/components/ui/card"
  import { ArrowRight, ExternalLink } from "@lucide/svelte"

  interface Props {
    app: AppItem
  }

  const { app }: Props = $props()
  const isExternal = $derived(Boolean(app.external))
  const linkHref = $derived(app.external || app.path)
</script>

<a
  href={linkHref}
  target={isExternal ? "_blank" : undefined}
  rel={isExternal ? "noopener noreferrer external" : undefined}
  class="group block transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
>
  <Card.Root class="h-full border-border/60 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
    <Card.Header class="flex flex-row items-start justify-between gap-4 pb-2">
      <div class="flex items-center gap-3.5">
        <div class="size-12 shrink-0 rounded-xl overflow-hidden bg-muted/60 p-1 flex items-center justify-center ring-1 ring-border/50 group-hover:ring-primary/40 transition-all">
          <img
            src={app.graphic}
            alt={app.title}
            class="size-full object-contain"
            onerror={(e) => {
              // Fallback to generic logo if icon is missing
              const target = e.currentTarget as HTMLImageElement
              target.src = "/logos/ar_logo.svg"
            }}
          />
        </div>
        <div>
          <Card.Title class="text-lg font-medium group-hover:text-primary transition-colors flex items-center gap-1.5">
            {app.title}
          </Card.Title>
          <div class="mt-0.5">
            {#if isExternal}
              <Badge variant="secondary" class="text-[10px] uppercase tracking-wider py-0 px-1.5 font-normal">
                Web App
              </Badge>
            {:else}
              <Badge variant="outline" class="text-[10px] uppercase tracking-wider py-0 px-1.5 font-normal">
                App
              </Badge>
            {/if}
          </div>
        </div>
      </div>

      <div class="text-muted-foreground group-hover:text-primary transition-colors pt-1">
        {#if isExternal}
          <ExternalLink class="size-4" />
        {:else}
          <ArrowRight class="size-4 group-hover:translate-x-0.5 transition-transform" />
        {/if}
      </div>
    </Card.Header>

    <Card.Content class="pt-2">
      <Card.Description class="text-sm line-clamp-2 text-muted-foreground leading-relaxed">
        {app.description}
      </Card.Description>
    </Card.Content>
  </Card.Root>
</a>
