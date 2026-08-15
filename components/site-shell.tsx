"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["Home", "/"], ["About", "/about"], ["Conditions & Cancers", "/conditions"], ["Procedures", "/procedures"],
  ["Second Opinion", "/second-opinion"], ["Research", "/research-publications"], ["Articles", "/articles"], ["VIP Services", "/vip-services"], ["Hospitals", "/hospitals"], ["Contact", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <><div className="topbar"><div className="container topbar-inner"><span>Specialist surgical care in Lebanon</span><a href="tel:+9613600777">Call +961 03 600 777</a></div></div>
  <header className="header"><div className="container nav-wrap"><Link className="brand" href="/" aria-label="Mohamad El Haress home"><Image src="/logo-icon.png" width={62} height={62} alt="Mohamad El Haress medical logo" priority unoptimized /><span><b>Mohamad El Haress, MD, FICS</b><small>General Surgeon | Minimally Invasive Surgeon | Complex Surgical Oncologist</small></span></Link>
  <button className="menu-button" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}><i></i><i></i></button>
  <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/appointment" onClick={() => setOpen(false)}>Book appointment</Link></nav></div></header><div className="mobile-contact-bar"><a href="tel:+9613600777">Call</a><a href="https://wa.me/9613600777" target="_blank" rel="noreferrer">WhatsApp</a><Link href="/appointment">Appointment</Link></div></>;
}

export function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div><Link className="footer-brand" href="/"><Image src="/logo-icon.png" width={78} height={78} alt="Mohamad El Haress medical logo" unoptimized /><span><b>Mohamad El Haress, MD, FICS</b><small>General Surgeon | Minimally Invasive Surgeon | Complex Surgical Oncologist</small></span></Link><p>Advanced surgery, minimally invasive care and individualized treatment grounded in multidisciplinary planning.</p><Link className="footer-booking" href="/appointment">Book an appointment <b>→</b></Link></div><div><h3>Patient care</h3><Link href="/conditions">Conditions & cancers</Link><Link href="/procedures">Surgical procedures</Link><Link href="/second-opinion">Cancer surgery second opinion</Link><Link href="/vip-services">VIP medical travel services</Link><Link href="/hospitals">Hospital affiliations</Link></div><div><h3>Learn more</h3><Link href="/about">About Dr. Haress</Link><Link href="/research-publications">Research & publications</Link><Link href="/articles">Patient articles</Link></div><div><h3>Contact</h3><a href="tel:+9613600777">+961 03 600 777</a><a href="mailto:Elharessmohamad@gmail.com">Elharessmohamad@gmail.com</a><a href="https://wa.me/9613600777" target="_blank" rel="noreferrer">WhatsApp the clinic</a><a href="https://lb.linkedin.com/in/mohamad-el-haress-md-911040141" target="_blank" rel="noreferrer">LinkedIn</a><span>Beirut, Lebanon</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Mohamad El Haress. All rights reserved.</span><span>Medical information does not replace a clinical consultation.</span></div></footer>;
}
