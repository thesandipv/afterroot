import type { AppItem } from "$lib/data/apps"
import type { FirebaseApp } from "firebase/app"
import type { Auth } from "firebase/auth"
import type { RemoteConfig } from "firebase/remote-config"
import { defaultApps } from "$lib/data/apps"
import { getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { fetchAndActivate, getRemoteConfig, getValue } from "firebase/remote-config"

export const firebaseConfig = {
  apiKey: "AIzaSyCVgZRrAD3bWNq-wMsx0DA08BbbOaTk-qg",
  authDomain: "afterroot.firebaseapp.com",
  databaseURL: "https://afterroot.firebaseio.com",
  projectId: "afterroot",
  storageBucket: "afterroot.appspot.com",
  messagingSenderId: "910276298420",
  appId: "1:910276298420:web:1fd8216cb2422070f979e1",
  measurementId: "G-LJ042LZHR5",
}

let app: FirebaseApp | undefined
let remoteConfig: RemoteConfig | undefined
let authInstance: Auth | undefined

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    const existing = getApps()
    if (existing.length > 0) {
      app = existing[0]
    } else {
      app = initializeApp(firebaseConfig)
    }
  }
  return app
}

export function getFirebaseAuth(): Auth | undefined {
  if (typeof window === "undefined")
    return undefined
  if (!authInstance) {
    authInstance = getAuth(getFirebaseApp())
  }
  return authInstance
}

export async function fetchAppsFromRemoteConfig(): Promise<AppItem[]> {
  if (typeof window === "undefined") {
    return defaultApps
  }

  try {
    const firebaseApp = getFirebaseApp()
    if (!remoteConfig) {
      remoteConfig = getRemoteConfig(firebaseApp)
      remoteConfig.settings = {
        fetchTimeoutMillis: 10000,
        minimumFetchIntervalMillis: 3600000,
      }
    }

    await fetchAndActivate(remoteConfig)
    const rawVal = getValue(remoteConfig, "apps").asString()
    if (!rawVal)
      return defaultApps

    const parsed = JSON.parse(rawVal)
    const result: AppItem[] = []

    for (const key in parsed) {
      if (Object.hasOwn(parsed, key)) {
        const item = parsed[key]
        result.push({
          id: key,
          title: item.title,
          description: item.description,
          path: `/apps/${item.path}`,
          graphic: `/logos/${item.path}.png`,
          external: item.external,
        })
      }
    }

    return result.length > 0 ? result : defaultApps
  } catch (error) {
    console.warn("Failed to fetch apps from Firebase Remote Config, using fallback:", error)
    return defaultApps
  }
}
