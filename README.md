# Millionaire – Android app

## Easiest: build the APK online (no Android Studio)
1. Create a free GitHub account and a new repository.
2. Upload everything in this folder (including the hidden `.github` folder).
3. Open the repo's **Actions** tab -> "Build Android APK" -> **Run workflow**.
4. After ~5-10 minutes, open the finished run and download **Millionaire-debug-apk**. Unzip it and install `app-debug.apk` on your phone (allow "install unknown apps").

## Optional, once, on your PC: bundle fonts for offline use
`npm install` then `npm run fonts`, and upload the updated `www` folder.

## Build on your own PC instead
Needs Node 22+, Android Studio (JDK 21 included).
    npm install
    npx cap add android
    npm run icons
    npx cap sync android
    npx cap open android      # then Build > Build APK

## Play Store
The debug APK is for testing only. For the Play Store you need a signed **.aab**
(Android Studio: Build > Generate Signed App Bundle) with your own keystore. Keep that keystore safe forever.
