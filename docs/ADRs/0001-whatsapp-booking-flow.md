# ADR 0001: WhatsApp Booking Flow for Hajj & Umrah Packages

![ADR Status](https://img.shields.io/badge/ADR-Approved-22C55E?style=for-the-badge)
![Category](https://img.shields.io/badge/Category-Checkout_System-3178C6?style=for-the-badge)
![Target](https://img.shields.io/badge/Target-Serverless_BFF-000000?style=for-the-badge)

An Architectural Decision Record (ADR) detailing the selection, implementation trade-offs, and architecture rules for our serverless checkout system.

---

## Architectural Decision Summary

| Criteria       | Choice                              | Justification                                                                       |
| :------------- | :---------------------------------- | :---------------------------------------------------------------------------------- |
| **Status**     | **Approved**                        | Merged and verified in production                                                   |
| **Technology** | WhatsApp Public API Links (`wa.me`) | Eliminates payment processor accounts, login sessions, and credit database overhead |
| **Format**     | Unicode-styled markdown             | Preserves visual readability and professionalism in customer chat threads           |

---

## Context & Problem Statement

Traditional booking platforms require user accounts, complex credit card configurations, and manual support intervention to coordinate custom travel itineraries. For Islamic pilgrimages (Hajj & Umrah), booking confirmation details require strict verification of visa eligibility, flight schedules, and family room preferences, which are usually finalized over a direct support channel.

---

## Proposed Decision

We choose to utilize direct, dynamic redirects to the WhatsApp Public API (`wa.me`) as the primary booking checkout system. All custom configuration states (number of travellers, sharing tiers, add-ons, pricing options) are assembled on the client side, formatted into a structured text message containing the proper greeting and closing, URL-encoded, and opened in a new tab directing the user to chat immediately with the coordinator.

---

## Consequences & Trade-Offs

### Positive Outcomes

- **Zero Backend Costs**: Eliminates user databases, security credentials, authentication flows, payment gateway connections, and strict PCI/GDPR compliance scans.
- **Frictionless Sign-Up**: Pilgrims launch a chat immediately from the landing page or detail calculator page without remembering user credentials.
- **Personalized Support**: Direct coordination aligns with the high-involvement decision-making process common with Hajj & Umrah.

### Negative Outcomes

- **Manual Processing**: Booking coordinators must manually record receipt parameters in chat threads to finalize bookings and resolve manual payment steps.
