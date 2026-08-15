import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/site-shell";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://drmharess.com"),
  title: { default: "Dr. Mohamad El Haress, MD, FICS | General Surgeon & Surgical Oncologist in Lebanon", template: "%s | Dr. Mohamad El Haress" },
  description: "Official website of Dr. Mohamad El Haress, a general surgeon, minimally invasive surgeon and complex surgical oncologist in Beirut, Lebanon.",
  keywords: ["Dr Mohamad El Haress", "Mohamad El Haress surgeon", "general surgeon Beirut", "general surgeon Lebanon", "surgical oncologist Lebanon", "cancer surgeon Beirut", "minimally invasive surgeon Lebanon", "liver surgeon Lebanon", "pancreatic surgeon Lebanon", "colorectal surgeon Lebanon", "breast surgeon Lebanon", "HIPEC Lebanon", "advanced laparoscopy Beirut"],
  authors: [{ name: "Dr. Mohamad El Haress", url: "/about" }],
  creator: "Dr. Mohamad El Haress",
  publisher: "Dr. Mohamad El Haress",
  alternates: { canonical: "/" },
  openGraph: { title: "Dr. Mohamad El Haress, MD, FICS", description: "General Surgery, Complex Surgical Oncology & Advanced Laparoscopy in Beirut, Lebanon.", type: "website", locale: "en_LB", siteName: "Dr. Mohamad El Haress", url: "https://drmharess.com", images: [{ url: "/dr-mohamad-el-haress-portrait.png", width: 999, height: 1000, alt: "Dr. Mohamad El Haress, general surgeon and surgical oncologist" }] },
  twitter: { card: "summary_large_image", title: "Dr. Mohamad El Haress, MD, FICS", description: "General Surgeon | Minimally Invasive Surgeon | Complex Surgical Oncologist", images: ["/dr-mohamad-el-haress-portrait.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const physicianSchema = {
  "@context": "https://schema.org", "@type": "Physician", "@id": "https://drmharess.com/#physician", name: "Dr. Mohamad El Haress", givenName: "Mohamad", familyName: "El Haress", honorificPrefix: "Dr.", honorificSuffix: "MD, FICS",
  medicalSpecialty: ["General Surgery", "Surgical Oncology"], telephone: "+9613600777", image: "https://drmharess.com/dr-mohamad-el-haress-portrait.png",
  url: "https://drmharess.com", sameAs: ["https://orcid.org/0009-0007-5388-9762", "https://lb.linkedin.com/in/mohamad-el-haress-md-911040141", "https://www.cureus.com/users/1247243-mohamad-el-haress"], areaServed: [{ "@type": "Country", name: "Lebanon" }, { "@type": "City", name: "Beirut" }], address: { "@type": "PostalAddress", addressLocality: "Beirut", addressCountry: "LB" },
  jobTitle: ["General Surgeon", "Complex General Surgical Oncology Fellow", "Clinical Instructor"], worksFor: { "@type": "Hospital", name: "American University of Beirut Medical Center" },
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "Beirut Arab University" }, { "@type": "Hospital", name: "AUB Medical Center" }],
  memberOf: [{ "@type": "Organization", name: "International College of Surgeons" }, { "@type": "Organization", name: "American College of Surgeons" }, { "@type": "Organization", name: "European Society of Surgical Oncology" }],
  knowsAbout: ["Minimally Invasive Surgery", "Advanced Laparoscopic Surgery", "General Surgery", "Complex General Surgical Oncology", "HIPEC", "Hepatobiliary Surgery", "Pancreatic Surgery", "Breast Surgery", "Thyroid Surgery"]
};
const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://drmharess.com/#website", url: "https://drmharess.com", name: "Dr. Mohamad El Haress", inLanguage: "en", publisher: { "@id": "https://drmharess.com/#physician" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /></body></html>;
}
