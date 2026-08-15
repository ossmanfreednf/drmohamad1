import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Hospital Affiliations", description: "Hospital affiliations and consultation locations for Dr. Mohamad El Haress will be announced soon.", alternates: { canonical: "/hospitals" }, robots: { index: true, follow: true } };

export default function HospitalsPage() {
  return <main id="main" className="hospitals-page"><section className="hospitals-hero"><div className="container"><span>Hospital affiliations</span><h1>Consultation & surgical locations.</h1><p>Dr. Mohamad El Haress’s hospital affiliations and consultation locations will be published here soon.</p><div className="coming-soon-mark"><b>Coming soon</b><span>Affiliation details are being finalized.</span></div><div className="hospitals-actions"><Link className="button white" href="/appointment">Request an appointment <b>→</b></Link><Link href="/contact">Contact the clinic</Link></div></div></section></main>;
}
