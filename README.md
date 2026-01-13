# Vocabulity code sample

This repository is used for expose examples of Vocabulity source code.
Vocabulity is a vocabulary learning app, available on [Apple Store](https://apps.apple.com/fr/app/vocabulity-vocabulaire-anglais/id6468937557) and [Play Store](https://play.google.com/store/apps/details?id=com.edwbr.vocabulity&hl=en&gl=US).

The app is builded on Expo framework <https://github.com/expo/expo>.
For the auth / back-end part I use Supabase sdk for JavaScript <https://github.com/supabase/supabase-js>.

The global rounting working with file-based routing provided by expo-router <https://docs.expo.dev/router/basics/core-concepts/>.

## Architecture
**Logic & Gameplay (/helpers):** Pure TypeScript logic for game mechanics. Includes unit tests (Jest) to ensure algorithm reliability.

**State Management (/store):** Normalized data structures using Redux Toolkit to manage user progression.

**Infrastructure & Bridge (/server & /hooks):** Implementation of the communication layer between the mobile client and Supabase Edge Functions.

**Observability (/utils):** Integration of Sentry for performance monitoring and crash reporting in production.

# Video exemple

<video src="https://raw.githubusercontent.com/P4tt4te/vocabulity-code-sample/main/video.mp4" width="600" controls>
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>