# Architecture Design - Aasia Travel

![Architecture Style](https://img.shields.io/badge/System-Architecture-000000?style=for-the-badge&logo=mermaid&logoColor=white)
![Design Pattern](https://img.shields.io/badge/Pattern-Static_SSG-61DAFB?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deploy-CDN_Ready-22C55E?style=for-the-badge)

A detailed technical breakdown of the system architecture, component pipelines, and structural data relationships of the Aasia Travel application.

---

## Technical Architecture Summary

| Layer              | Component Location            | Tech Choice               | Purpose                                                             |
| :----------------- | :---------------------------- | :------------------------ | :------------------------------------------------------------------ |
| **Frontend/BFF**   | `src/app/`, `src/components/` | Next.js 16.2.10           | Static-site generation, route skeleton loading, dynamic SEO headers |
| **Styling**        | `src/app/globals.css`         | Tailwind CSS v4           | Class utilities, custom theme colors, responsive grid structures    |
| **Client Physics** | Component imports             | Framer Motion & Lenis     | Smooth viewport animations, exponential ease scroll physics         |
| **Checkout API**   | `src/lib/whatsapp.ts`         | WhatsApp API Link Builder | Serverless order communication via query parameter payloads         |
| **Data Layer**     | `src/data/`                   | TypeScript Static Data    | Decoupled local data files without CMS or SQL overhead              |
| **CI/CD Pipeline** | `.github/workflows/`          | GitHub Actions            | Automatic lint, format, typecheck, and test checks on push/PR       |

---

## System Context Diagram

```mermaid
graph TD
    Client[Browser UI / Client Device]
    StaticServer[Static CDN Host / Vercel]
    WhatsAppAPI[WhatsApp Business API Services]

    Client -->|1. Requests static assets| StaticServer
    StaticServer -->|2. Serves JS, CSS, HTML| Client
    Client -->|3. Launches chat link with prefilled context| WhatsAppAPI
```

---

## Dynamic Order Request Pipeline (WhatsApp checkout)

The sequence diagram below displays the step-by-step custom calculator state updates and URL generation flow on booking:

```mermaid
sequenceDiagram
    autonumber
    actor Pilgrim as Pilgrim User
    participant Page as Package Details Page (Client)
    participant Calculator as PriceCalculator Component
    participant Lib as lib/whatsapp helper
    participant API as WhatsApp Desktop/App

    Pilgrim->>Page: Select custom travellers count & room sharing tier
    Page->>Calculator: Update state variables
    Calculator->>Calculator: Recalculate estimated total price
    Pilgrim->>Calculator: Select Optional Add-ons
    Calculator->>Calculator: Update addons state & final total
    Pilgrim->>Calculator: Click "BOOK ON WHATSAPP"
    Calculator->>Lib: Call getWhatsAppCalculatorBookingLink(details)
    Lib->>Lib: Build URL-encoded payload (with Greeting & closing)
    Lib-->>Calculator: Return https://wa.me/918800665701?text=...
    Calculator->>API: window.open(whatsappLink, '_blank')
```

---

## Data Model ERD

Below is the entity schema layout of the package metadata model used throughout our static datasets:

```mermaid
classDiagram
    class Package {
        string id
        string title
        string type
        string category
        number price
        string duration
        string date
        string departureCity
        number rating
        string image
        boolean limitedSeats
        string subtitle
        string description
        number seatsLeft
        Record sharingPrices
        Record addonPrices
    }

    class FlightInfo {
        string type
        string code
        string city
        string destCode
        string destCity
        string plane
        string date
        string time
    }

    class HotelInfo {
        string type
        string name
        number rating
        string distance
        string[] features
        string image
    }

    Package *-- FlightInfo : departureFlight
    Package *-- FlightInfo : returnFlight
    Package *-- HotelInfo : hotels
```

---

## Key System Boundaries & Evolutions

1. **Zero Database Overhead**: There is no live DB connection. Package listings are defined statically in [packages.ts](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/src/data/packages.ts). To scale, a DB layer (e.g. Postgres + Drizzle ORM) can be added cleanly.
2. **Serverless Static-Site Output**: Dynamic package pages are precompiled at build time (`generateStaticParams`) ensuring rapid CDN loads.
