import type {
  PackageBookingDetails,
  CalculatorBookingDetails,
  HotelDirectionsDetails,
} from '@/types';

export const WHATSAPP_MSG_GET_IN_TOUCH = `Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

I visited your Aasia Travel website, and I'm interested in learning more about your *Hajj & Umrah services*.

Could you please provide me with more information regarding the booking process and guidance?

Jazakumullahu Khairan. I look forward to your response.`;

export const WHATSAPP_MSG_CHAT_SUPPORT = `Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

I visited your Aasia Travel website, and I need *chat support* regarding my travel planning.

Could you please connect me with a support representative?

Jazakumullahu Khairan. I look forward to your response.`;

export function formatWhatsAppPackageBookingMsg({
  title,
  category,
  duration,
  departureCity,
  date,
  basePrice,
}: PackageBookingDetails) {
  return `Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

I visited your Aasia Travel website, and I'm interested in booking the *"${title}"* package.

*Details:*
• *Category:* ${category}
• *Duration:* ${duration}
• *Departure City:* ${departureCity}
• *Date:* ${date}
• *Base Price:* *Rs ${basePrice.toLocaleString()}*

Could you please provide me with more information regarding the booking process and availability?

Jazakumullahu Khairan. I look forward to your response.`;
}

export function formatWhatsAppCalculatorBookingMsg({
  packageTitle,
  travellers,
  sharing,
  addonsList,
  grandTotal,
}: CalculatorBookingDetails) {
  return `Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

I visited your Aasia Travel website, and I want to book the *"${packageTitle}"* package with the following custom options:

*Booking Details:*
• *Travellers:* ${travellers}
• *Room Sharing:* ${sharing} Sharing
• *Selected Add-ons:* ${addonsList}
• *Estimated Total Price:* *Rs ${grandTotal.toLocaleString()}*

Could you please confirm the availability and guide me through the booking process?

Jazakumullahu Khairan. I look forward to your response.`;
}

export function formatWhatsAppHotelDirectionsMsg({ name, type, distance }: HotelDirectionsDetails) {
  return `Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

I visited your Aasia Travel website, and I need directions / location details for the following hotel:

*Hotel Details:*
• *Hotel Name:* ${name}
• *Type:* ${type}
• *Distance:* ${distance}

Could you please share the Google Maps location or directions for this hotel?

Jazakumullahu Khairan. I look forward to your response.`;
}
