# Production Setup & Deployment Guide - Aasia Travel

![Setup Status](https://img.shields.io/badge/Setup-Production--Ready-22C55E?style=for-the-badge)
![Target Web](https://img.shields.io/badge/Deploy-Vercel--Cloudflare-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Node Version](https://img.shields.io/badge/Node-20%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

This guide details the step-by-step procedures required to customize, build, and deploy the Aasia Travel web application.

---

## Deployment Configuration Profiles

| Target Platform      | Hosting Type     | Build Preset            | Output Folder |
| :------------------- | :--------------- | :---------------------- | :------------ |
| **Vercel**           | Serverless CDN   | Next.js Project Preset  | `.next`       |
| **Cloudflare Pages** | Edge Network CDN | Next.js (Static Export) | `out`         |

---

## 1. Modifying the Main WhatsApp Recipient

The destination contact phone number is managed within the global configuration profile.

To update the recipient number:

1. Open the configuration file [site.ts](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/src/config/site.ts).
2. Locate the `contact` configuration block:
   ```typescript
   export const siteConfig = {
     // ...
     contact: {
       email: 'aasiatravel@gmail.com',
       phone: '+91 8800665701', // Update this phone value
       address: 'New Delhi',
     },
   };
   ```
3. Update the `phone` string. The library automatically extracts digit-only patterns for the WhatsApp API (`wa.me`) while preserving the formatting shown to users in the footer.

---

## 2. Deploying to Vercel

Vercel detects Next.js configurations automatically and performs static site generation (SSG) in the cloud.

### Build and Deployment Steps

1. Push your latest code changes to your repository (GitHub/GitLab/Bitbucket).
2. Log in to the Vercel Dashboard and click **Add New Project**.
3. Select and import the repository.
4. Leave build settings at default (`Next.js` project presets are handled out-of-the-box).
5. Click **Deploy**.

<!-- TODO: screenshot of Vercel build dashboard -->

---

## 3. Deploying to Cloudflare Pages

For maximum edge network caching and fast loading times, deploy the built static output to Cloudflare Pages.

### Setup Settings

- **Framework Preset**: `Next.js (Static HTML Export)`
- **Build Command**: `pnpm build`
- **Build Output Directory**: `out`
- **Node.js Version**: `20` or higher
