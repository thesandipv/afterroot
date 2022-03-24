---
title: "Android Studio 3.1 Canary released"
date: "2017-10-26"
categories: 
  - "development"
tags: 
  - "android"
  - "android-studio"
  - "d8"
coverImage: "android-studio-logo-840x359.png"
---

As all you know [Android Studio 3.0](https://developer.android.com/studio/releases/index.html#3-0-0) has been released yesterday.

Now [Android Studio 3.1](https://developer.android.com/studio/preview/features/index.html) Canary is also available on Android Developers site.

Major change in Android Studio 3.1 Canary is

### New Dex Compiler - D8

As announced on [Android Developers Blog](https://android-developers.googleblog.com/2017/08/next-generation-dex-compiler-now-in.html) D8 is next-gen dex compiler. Dex compilation is the process of transforming .class bytecode into .dex bytecode for the Android Runtime (or Dalvik, for older versions of Android) and it directly impacts your app's build time, .dex file size, and runtime performance. The new Dex Compiler was available as preview from android studio 3.0 beta but now it is enabled by default  in android studio 3.1 Canary. comparing to the old DX compiler, D8 compiles faster and outputs smaller .dex files. Below are comparison of DX and D8.

\[caption id="attachment\_781" align="alignnone" width="1024"\]![image1](https://afterroot.files.wordpress.com/2017/10/image1.png?w=1024) Dex Compilation Time: DX vs D8\[/caption\]

\[caption id="attachment\_784" align="alignnone" width="1024"\]![image2](https://afterroot.files.wordpress.com/2017/10/image2.png?w=1024) .dex file size: DX vs D8\[/caption\]

###### Source: [Android Developers Blog](https://android-developers.googleblog.com/2017/08/next-generation-dex-compiler-now-in.html)

More info can be found on [Android Developers Site](https://developer.android.com/studio/preview/features/index.html#simpleperf)

Download [Android Studio 3.1 Canary](https://developer.android.com/studio/preview/index.html)
