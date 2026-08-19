export interface AppItem {
  id: string
  title: string
  description: string
  path: string
  graphic: string
  external?: string
}

export const defaultApps: AppItem[] = [
  {
    id: "pointer-replacer",
    title: "Pointer Replacer",
    description: "An Xposed Module to replace touch pointer",
    path: "/apps/pointer-replacer",
    graphic: "/logos/pointer-replacer.png",
    external: "https://pointer-replacer.web.app",
  },
  {
    id: "watchdone",
    title: "WatchDone",
    description: "Watchlist Manager with 'Mark as Watched' function",
    path: "/apps/watchdone",
    graphic: "/logos/watchdone.png",
  },
  {
    id: "dynamics",
    title: "Dynamics",
    description: "Dynamic Data Monitoring App for Enterprise",
    path: "/apps/dynamics",
    graphic: "/logos/icon-512x512.png",
  },
]
