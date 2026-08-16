<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import { Badge } from "$lib/components/ui/badge"
  import { Button } from "$lib/components/ui/button"
  import * as Card from "$lib/components/ui/card"
  import { ArrowLeft } from "@lucide/svelte"
</script>

<SEO
  title="Privacy Policy"
  description="View AfterROOT's Privacy Policy"
/>

<div class="container mx-auto max-w-4xl px-4 py-8">
  <div class="mb-6">
    <Button variant="ghost" size="sm" href="/" class="gap-1 text-muted-foreground hover:text-foreground">
      <ArrowLeft class="size-4" data-icon="inline-start" />
      Back to Home
    </Button>
  </div>

  <Card.Root class="border-border/60">
    <Card.Header>
      <div class="flex items-center gap-2 mb-1">
        <Badge variant="secondary">Legal</Badge>
      </div>
      <Card.Title class="text-3xl font-light">Privacy Policy</Card.Title>
      <Card.Description>Last updated and effective for all AfterROOT services</Card.Description>
    </Card.Header>

    <Card.Content class="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
      <p>
        Sandip Vaghela (AfterROOT) built Allusive (Pointer Replacer), ShowTouchesEnabler, WatchDone, and Expenses apps as Ad-Supported or utility apps. This SERVICE is provided by Sandip Vaghela (AfterROOT) at no cost and is intended for use as is.
      </p>
      <p>
        This policy is used to inform you regarding policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service.
      </p>
      <p>
        If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that is collected is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
      </p>

      <h3 class="text-xl font-medium text-foreground pt-3">Information Collection and Use</h3>
      <p>
        For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Device Name and Device ID. The information requested will be retained on your device and is not collected by us directly in any unauthorized way.
      </p>
      <p>
        The app does use third-party services that may collect information used to identify you.
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li>
          <a
            href="https://www.google.com/policies/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            Google Play Services
          </a>
        </li>
        <li>
          <a
            href="https://firebase.google.com/policies/analytics"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            Firebase Analytics
          </a>
        </li>
      </ul>

      <h3 class="text-xl font-medium text-foreground pt-3">Log Data</h3>
      <p>
        Whenever you use our Service, in the case of an error in the app, data and information (through third-party products) is collected on your device called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, configuration of the app, time and date of your use of the Service, and other statistics.
      </p>

      <h3 class="text-xl font-medium text-foreground pt-3">Cookies</h3>
      <p>
        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
      </p>
      <p>
        This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies.
      </p>

      <h3 class="text-xl font-medium text-foreground pt-3">Service Providers</h3>
      <p>We may employ third-party companies and individuals due to the following reasons:</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
      <p>
        These third parties have access to your Personal Information solely to perform tasks assigned to them on our behalf and are obligated not to disclose or use it for any other purpose.
      </p>

      <h3 class="text-xl font-medium text-foreground pt-3">Security</h3>
      <p>
        We value your trust in providing your Personal Information, thus we strive to use commercially acceptable means of protecting it. However, no method of transmission over the internet or method of electronic storage is 100% secure and reliable.
      </p>

      <h3 class="text-xl font-medium text-foreground pt-3">Links to Other Sites</h3>
      <p>
        This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. We strongly advise you to review the Privacy Policy of these websites.
      </p>

      <h3 class="text-xl font-medium text-foreground pt-3">Children’s Privacy</h3>
      <p>
        These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
      </p>

      <h3 class="text-xl font-medium text-foreground pt-3">Changes to This Privacy Policy</h3>
      <p>
        We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.
      </p>

      <h3 class="text-xl font-medium text-foreground pt-3">Contact Us</h3>
      <p>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at
        <a href="mailto:afterhasroot@gmail.com" class="text-primary hover:underline">
          afterhasroot@gmail.com
        </a>.
      </p>
    </Card.Content>
  </Card.Root>
</div>
