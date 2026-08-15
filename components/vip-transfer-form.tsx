"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "9613600777";

export function VipTransferForm() {
  const [consent, setConsent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "VIP Medical Travel Request",
      "",
      `Name: ${data.get("name")}`,
      `Phone / WhatsApp: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Service: ${data.get("service")}`,
      `Travel mode: ${data.get("travelMode")}`,
      `Departure: ${data.get("departure")}`,
      `Destination: ${data.get("destination")}`,
      `Preferred date: ${data.get("date") || "To be discussed"}`,
      `Patient status: ${data.get("status")}`,
      "",
      `Medical needs / notes: ${data.get("notes") || "Not provided"}`,
      "",
      "I understand that this request requires clinical review and is not an emergency service.",
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <form className="vip-transfer-form" onSubmit={submit}><div className="vip-form-grid"><label><span>Full name *</span><input name="name" required autoComplete="name" placeholder="Patient or contact name"/></label><label><span>Phone / WhatsApp *</span><input name="phone" required autoComplete="tel" inputMode="tel" placeholder="Include country code"/></label><label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="name@example.com"/></label><label><span>Service required *</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Medical team for an existing private jet or yacht</option><option>Aircraft and medical team coordination</option><option>Medical escort on a commercial flight</option><option>Hospital-to-hospital international transfer</option><option>Not sure — clinical guidance needed</option></select></label><label><span>Travel mode *</span><select name="travelMode" required defaultValue=""><option value="" disabled>Select travel mode</option><option>Private aviation</option><option>Commercial aviation</option><option>Private yacht / boat</option><option>To be determined</option></select></label><label><span>Preferred travel date</span><input name="date" type="date"/></label><label><span>Departure city / country *</span><input name="departure" required placeholder="From"/></label><label><span>Destination city / country *</span><input name="destination" required placeholder="To"/></label><label className="wide"><span>Current patient status *</span><select name="status" required defaultValue=""><option value="" disabled>Select the closest description</option><option>Stable and able to travel with assistance</option><option>Hospitalized and requires transfer</option><option>Requires oxygen or medical equipment</option><option>Requires continuous medical monitoring</option><option>Condition needs clinical review</option></select></label><label className="wide"><span>Medical needs and additional information</span><textarea name="notes" rows={5} placeholder="Briefly describe the diagnosis, current location, mobility, equipment or specialist support required. Please do not send highly sensitive records through this form."/></label></div><label className="vip-consent"><input type="checkbox" required checked={consent} onChange={event=>setConsent(event.target.checked)}/><span>I consent to sending this information through WhatsApp for the purpose of reviewing this travel request. This service is not for emergencies.</span></label><button type="submit" className="vip-whatsapp-submit" disabled={!consent}><span>Send request via WhatsApp</span><b>→</b></button></form>;
}
