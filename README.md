# GameBoost Arena

GameBoost Arena is an Expo / React Native Android gaming assistant interface with an Arabic RTL gaming dashboard, animated branded splash screen, local PNG assets, calm background audio, performance-mode controls, and a floating-overlay preview.

> This repository contains the application source and EAS build configuration. Android system restrictions still apply to overlay access and background-process management.

## Tech Stack

- Expo SDK 57
- React Native 0.86
- Expo Router
- TypeScript
- NativeWind
- Expo Audio
- Expo EAS Build
- GitHub Actions

## Project Structure

```text
app/                         Expo Router screens and layouts
components/                  Reusable UI components
assets/images/backgrounds/   PNG background artwork
assets/images/icons/         Transparent PNG UI icons
assets/images/system/        Android, splash, launcher, and web assets
assets/audio/music/          Background music
assets/audio/effects/        UI and boost sound effects
app.config.ts                Expo and Android configuration
eas.json                     EAS APK/AAB profiles
.github/workflows/            GitHub Actions APK workflow
GITHUB_APK_GUIDE.md          Arabic build handoff guide
```

## Requirements

- Node.js 22+
- pnpm 9.12+
- An Expo account for EAS builds
- An Expo access token for GitHub Actions builds

## Local Development

```bash
pnpm install
pnpm check
pnpm lint
pnpm dev:metro
```

The Expo web development server uses port `8081`. The project also retains the starter server configuration on port `3000`.

## Build an Android APK

The `preview` profile creates an installable APK:

```bash
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile preview
```

The `production` profile is configured for an Android App Bundle:

```bash
npx eas-cli@latest build --platform android --profile production
```

## GitHub Actions

Two workflows live in `.github/workflows/`:

- `build-apk.yml` — **recommended, no Expo account needed.** Generates the native Android project with `expo prebuild` and builds a release APK with Gradle on GitHub's runners. Start it from **Actions → Build APK → Run workflow**, then download `gameboost-arena-apk` from the run's **Artifacts** section. The APK is signed with the default debug key, which is fine for sideloading and testing.
- `build-apk-eas.yml` — optional EAS build. Needs an Expo account, `npx eas-cli init` run once locally (adds the EAS project id), and the `EXPO_TOKEN` repository secret.

For Google Play you must sign with your own upload keystore (EAS manages this for you).

## Android Permissions

`app.config.ts` declares only `POST_NOTIFICATIONS`. Special permissions (`SYSTEM_ALERT_WINDOW`, `PACKAGE_USAGE_STATS`, `KILL_BACKGROUND_PROCESSES`) were removed because no code uses them yet; add them back together with the native feature that needs them. Android vendors and OS versions may restrict or ignore background-process termination requests.

The floating menu in the current UI is a safe in-app preview. A production system-wide overlay requires a native Android implementation and a user-approved overlay permission.

## Asset Policy

All app artwork is stored as real image files rather than code-drawn icons:

- Backgrounds and system artwork are PNG files.
- UI icons use transparent PNG files.
- Audio files are stored locally under `assets/audio`.
- Asset locations are documented in `assets/ASSET_MANIFEST.md` and `assets/IMAGE_ASSET_URLS.json`.

## Current scope

The UI is a working prototype: boost toggle, sounds (looping background music, click and boost effects), game tabs and the floating-menu preview are interactive, but the "boost" does not change any system setting and the games list is sample data.

## License

This project is private application source prepared for the repository owner. Add a license before distributing the source publicly.
