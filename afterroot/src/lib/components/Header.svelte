<script lang="ts">
  import { Button } from "$lib/components/ui/button"
  import { siteConfig } from "$lib/config/site"
  import { SiGithub } from "@icons-pack/svelte-simple-icons"
  import { ArrowLeft } from "@lucide/svelte"

  interface Props {
    title?: string
    showBack?: boolean
  }

  const { title = siteConfig.siteTitleShort, showBack = false }: Props = $props()
</script>

<header class="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border transition-colors">
  <div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
    <div class="flex items-center gap-3">
      {#if showBack}
        <Button variant="ghost" size="icon" href="/" aria-label="Go back">
          <ArrowLeft class="size-4" />
        </Button>
      {/if}

      <a href="/" class="flex items-center gap-3 group">
        <img
          src="/logos/ar_logo.svg"
          alt="AfterROOT logo"
          class="h-9 w-9 rounded-full bg-background p-0.5 ring-1 ring-border group-hover:ring-primary transition-all"
        />
        <span class="text-xl font-light tracking-tight group-hover:text-primary transition-colors">
          {title}
        </span>
      </a>
    </div>

    <nav class="flex items-center gap-2 sm:gap-4">
      <Button variant="ghost" size="sm" href="/apps">
        Apps
      </Button>
      <Button variant="ghost" size="sm" href="/about">
        About
      </Button>
      <Button variant="ghost" size="sm" href="/contact">
        Contact
      </Button>
      <Button
        variant="ghost"
        size="icon"
        href={siteConfig.links.githubProjectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
      >
        <SiGithub class="size-4" />
      </Button>
    </nav>
  </div>
</header>
