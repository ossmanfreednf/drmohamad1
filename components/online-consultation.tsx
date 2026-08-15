"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const drappUrl = "https://drapp.me/d/lb/general-medicine/dr-mohamad-el-haress-9290";

export function OnlineConsultation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  return <>
    <button className="button online-consultation-button" type="button" onClick={() => setOpen(true)}>Online consultation <b>↗</b></button>
    {open && <div className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onMouseDown={(event) => event.currentTarget === event.target && setOpen(false)}>
      <div className="consultation-panel">
        <button className="consultation-close" type="button" aria-label="Close online consultation" onClick={() => setOpen(false)}>×</button>
        <div className="consultation-copy"><span>Online consultation</span><h2 id="consultation-title">Connect with Dr. El Haress on DRAPP</h2><p>Continue securely to DRAPP to request an online medical consultation.</p></div>
        <a className="drapp-card" href={drappUrl} target="_blank" rel="noreferrer">
          <Image src="/drapp-connect.png" alt="Connect with Dr. Mohamad El Haress on DRAPP" width={656} height={1168} unoptimized/>
          <span>Open Dr. El Haress’s DRAPP profile <b>↗</b></span>
        </a>
      </div>
    </div>}
  </>;
}
