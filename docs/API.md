# API Contract Reference - Aasia Travel

![API Specifications](https://img.shields.io/badge/Contract-Specifications-000000?style=for-the-badge&logo=whatsapp&logoColor=white)
![Format](https://img.shields.io/badge/Payload-URL_Encoded-FF6B00?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-Serverless-3178C6?style=for-the-badge)

The Aasia Travel platform is a statically-served client application (SSG) with zero database overhead. Communication with the booking coordinator happens serverless-ly through structured query parameters via the WhatsApp Public API.

---

## Outgoing Request Contracts

| Action            | Component                  | Message Target                 | Description                                                                                           |
| :---------------- | :------------------------- | :----------------------------- | :---------------------------------------------------------------------------------------------------- |
| **Get in Touch**  | Navbar, MobileMenu, Footer | Generic Inquiry                | Requests Hajj & Umrah services consultation and guidance                                              |
| **Chat Support**  | Footer                     | Support Inquiry                | Requests direct assistance regarding travel planning and bookings                                     |
| **Book Journey**  | PackageHero                | Dynamic Package details        | Initiates seat booking inquiries with target package metadata                                         |
| **WhatsApp Calc** | PriceCalculator            | Interactive Calculator Receipt | Sends receipt payload containing travellers count, sharing room choice, add-ons list, and total price |

---

## Outgoing Contract Specifications

### 1. General Get in Touch Redirect

- **Purpose**: Redirects user to WhatsApp for general services info and planning questions.
- **Component Location**: `Navbar.tsx` (Desktop CTA), `MobileMenu.tsx` (Mobile CTA), `Footer.tsx` (Phone contact link).
- **Outgoing Protocol**: `GET https://wa.me/{phone}?text={payload}`
- **Preferred Template**:
  ```text
  Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

  I visited your Aasia Travel website, and I'm interested in learning more about your *Hajj & Umrah services*.

  Could you please provide me with more information regarding the booking process and guidance?

  Jazakumullahu Khairan. I look forward to your response.
  ```

---

### 2. General Chat Support Redirect

- **Purpose**: Requests support channels regarding travel details.
- **Component Location**: `Footer.tsx` ("Chat Support" link).
- **Outgoing Protocol**: `GET https://wa.me/{phone}?text={payload}`
- **Preferred Template**:
  ```text
  Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

  I visited your Aasia Travel website, and I need *chat support* regarding my travel planning.

  Could you please connect me with a support representative?

  Jazakumullahu Khairan. I look forward to your response.
  ```

---

### 3. Dynamic Package Booking - "BOOK JOURNEY"

- **Purpose**: Requests initial booking details and seat availability checks for a specific package.
- **Component Location**: `PackageHero.tsx` ("BOOK JOURNEY" button).
- **Outgoing Protocol**: `GET https://wa.me/{phone}?text={payload}`
- **Preferred Template**:
  ```text
  Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

  I visited your Aasia Travel website, and I'm interested in booking the *"{Package Title}"* package.

  *Details:*
  • *Category:* {category}
  • *Duration:* {duration}
  • *Departure City:* {departureCity}
  • *Date:* {date}
  • *Base Price:* *Rs {price}*

  Could you please provide me with more information regarding the booking process and availability?

  Jazakumullahu Khairan. I look forward to your response.
  ```

---

### 4. Dynamic Calculator Booking - "BOOK ON WHATSAPP"

- **Purpose**: Requests custom bookings based on calculations from the pricing widget.
- **Component Location**: `PriceCalculator.tsx` ("BOOK ON WHATSAPP" button).
- **Outgoing Protocol**: `GET https://wa.me/{phone}?text={payload}`
- **Preferred Template**:
  ```text
  Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

  I visited your Aasia Travel website, and I want to book the *"{Package Title}"* package with the following custom options:

  *Booking Details:*
  • *Travellers:* {travellers}
  • *Room Sharing:* {sharing} Sharing
  • *Selected Add-ons:* {addonsList}
  • *Estimated Total Price:* *Rs {grandTotal}*

  Could you please confirm the availability and guide me through the booking process?

  Jazakumullahu Khairan. I look forward to your response.
  ```
