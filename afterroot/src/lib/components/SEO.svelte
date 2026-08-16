<script lang="ts">
  import { siteConfig } from "$lib/config/site"

  interface Props {
    title?: string
    description?: string
    keywords?: string[]
    appName?: string
    image?: string
  }

  const {
    title = siteConfig.siteTitleShort,
    description = siteConfig.siteDescription,
    keywords = ["afterroot", "apps", "android", "tools"],
    appName = siteConfig.siteTitleShort,
    image = siteConfig.siteLogo,
  }: Props = $props()

  const formattedTitle = $derived(
    title === siteConfig.siteTitleShort
      ? siteConfig.siteTitle
      : `${title} | ${siteConfig.siteTitleShort}`,
  )
</script>

<svelte:head>
  <title>{formattedTitle}</title>
  <meta name="application-name" content={appName} />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords.join(", ")} />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content={appName} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={formattedTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content={siteConfig.siteTitleShort} />
  <meta property="og:image" content={image} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={formattedTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:creator" content="@thesandipv" />
  <meta name="twitter:image" content={image} />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="theme-color" content={siteConfig.themeColor} />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="192x192" href="/logos/logo_512.png" />
  <link rel="manifest" href="/manifest.json" />
</svelte:head>
