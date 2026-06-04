<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Zg2UG8IgXen8RvGITFyNz-AAuLJiMg8I

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Export the `API_KEY` environment variable with your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy on Firebase Hosting

This repository is now prepared to deploy to Firebase Hosting from GitHub Actions.

### Files added for Firebase

- `firebase.json` publishes the Vite build from `dist`
- `.github/workflows/deploy.yml` deploys to Firebase whenever you push to `main`

### Required GitHub configuration

Add these in your GitHub repository before the automatic deploy can work:

1. Repository variable: `FIREBASE_PROJECT_ID`
2. Repository secret: `FIREBASE_SERVICE_ACCOUNT`
3. Repository secret: `API_KEY` only if you want to keep the Gemini-powered text generation enabled

### Important security note

Firebase Hosting gives you a secure HTTPS URL and lets you use a custom domain, but it does not hide a Gemini API key if the calls are made directly from the browser. In the current app, the Gemini key ends up in the frontend bundle at build time. If you want the key to be truly private, the Gemini requests need to move to a backend service such as Firebase Functions.
