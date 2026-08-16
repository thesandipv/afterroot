<script lang="ts">
  import { Separator } from "$lib/components/ui/separator"
  import { siteConfig } from "$lib/config/site"
  import {
    SiFacebook,
    SiGithub,
    SiInstagram,
    SiX,
    SiYoutube,
  } from "@icons-pack/svelte-simple-icons"
</script>

<footer class="w-full mt-auto py-10 bg-background text-foreground/80">
  <div class="container mx-auto px-4 max-w-5xl flex flex-col items-center gap-6">
    <Separator class="w-full opacity-30" />

    <!-- Navigation links -->
    <div class="flex flex-wrap items-center justify-center gap-2 text-sm">
      {#each siteConfig.footerLinks as link, index (link.title)}
        {#if index > 0}
          <span class="text-muted-foreground select-none">•</span>
        {/if}
        <a
          href={link.url}
          target={link.isExternal ? "_blank" : undefined}
          rel={link.isExternal ? "noopener noreferrer" : undefined}
          class="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors rounded-md"
        >
          {link.title}
        </a>
      {/each}
    </div>

    <!-- Social brand links using simple-icons -->
    <div class="flex items-center justify-center gap-4">
      <a
        href={siteConfig.links.igUrl}
        target="_blank"
        rel="noopener noreferrer external"
        aria-label="Find AfterROOT on Instagram"
        class="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
      >
        <SiInstagram class="size-4" />
      </a>
      <a
        href={siteConfig.links.ytUrl}
        target="_blank"
        rel="noopener noreferrer external"
        aria-label="Find AfterROOT on YouTube"
        class="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
      >
        <SiYoutube class="size-4" />
      </a>
      <a
        href={siteConfig.links.fbUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find AfterROOT on Facebook"
        class="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
      >
        <SiFacebook class="size-4" />
      </a>
      <a
        href={siteConfig.links.twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find AfterROOT on X / Twitter"
        class="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
      >
        <SiX class="size-4" />
      </a>
      <a
        href={siteConfig.links.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Projects on GitHub"
        class="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
      >
        <SiGithub class="size-4" />
      </a>
    </div>

    <!-- Copyright and details -->
    <div class="text-center text-xs text-muted-foreground leading-relaxed">
      <p>
        {siteConfig.copyright} • v{siteConfig.version}
        {#if siteConfig.commitSha}
          -
          <a
            href={`${siteConfig.links.githubProjectUrl}/tree/${siteConfig.commitShaLong}`}
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-foreground"
          >
            {siteConfig.commitSha}
          </a>
        {/if}
        • Built on {siteConfig.buildDate}
      </p>
      <p class="mt-1">
        Developed with
        <a
          href={siteConfig.links.jetbrains}
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-foreground"
        >
          IntelliJ IDEA
        </a>
        and
        <a
          href={siteConfig.links.vsCode}
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-foreground"
        >
          VS Code
        </a>
      </p>
    </div>
  </div>
</footer>
