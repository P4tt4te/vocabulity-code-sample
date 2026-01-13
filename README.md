# Vocabulity code sample

This repository showcases selected examples of the Vocabulity source code.
Vocabulity is a vocabulary learning app, available on [Apple Store](https://apps.apple.com/fr/app/vocabulity-vocabulaire-anglais/id6468937557) and [Play Store](https://play.google.com/store/apps/details?id=com.edwbr.vocabulity&hl=en&gl=US).

The application is built on the Expo framework (React Native) and uses the Supabase SDK for authentication and backend services. Global routing is managed via Expo Router (file-based routing).

## Architecture
**Logic & Gameplay (/helpers):** Pure TypeScript logic for game mechanics. Includes unit tests (Jest) to ensure algorithm reliability.

**State Management (/store):** Normalized data structures using Redux Toolkit to manage user progression.

**Infrastructure & Bridge (/server & /hooks):** Implementation of the communication layer between the mobile client and Supabase Edge Functions.

**Observability (/utils):** Integration of Sentry for performance monitoring and crash reporting in production.

# Video exemple

<video src="https://raw.githubusercontent.com/P4tt4te/vocabulity-code-sample/main/video.mp4" width="300" controls>
  Video not supported by your browser.
</video>