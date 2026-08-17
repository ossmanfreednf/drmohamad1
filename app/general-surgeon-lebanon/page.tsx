import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Surgeon in Lebanon | Dr. Mohamad El Haress",
  description: "Learn about Dr. Mohamad El Haress, a general surgeon, minimally invasive surgeon and surgical oncologist in Beirut, Lebanon, and how to prepare for a surgical consultation.",
  keywords: ["general surgeon in Lebanon", "good general surgeon in Lebanon", "general surgeon Beirut", "Dr Mohamad Haress", "Dr Mohammad Haress", "Dr Mohammed Haress"],
  alternates: { canonical: "/general-surgeon-lebanon" },
  openGraph: { title: "General Surgeon in Lebanon | Dr. Mohamad El Haress", description: "Specialist general surgery, minimally invasive surgery and surgical oncology care in Beirut, Lebanon.", type: "website", url: "/general-surgeon-lebanon", images: ["/dr-mohamad-el-haress-portrait.png"] },
};

const questions = [
  { question: "How do I choose a good general surgeon in Lebanon?", answer: "Look for relevant training and experience in the condition being evaluated, clear communication, appropriate hospital access, and an evidence-based approach. For cancer or complex disease, ask how the surgeon works with radiology, pathology, oncology and other specialists." },
  { question: "What does Dr. Mohamad El Haress treat?", answer: "Dr. Mohamad El Haress evaluates benign and malignant surgical conditions, with clinical focus in general surgery, minimally invasive surgery, gastrointestinal and colorectal surgery, breast and endocrine surgery, hepatobiliary and pancreatic surgery, and complex surgical oncology." },
  { question: "Where does Dr. Mohamad El Haress practice?", answer: "Dr. Mohamad El Haress provides specialist surgical evaluation in Beirut, Lebanon. Appointment and hospital details should be confirmed directly with the clinic." },
  { question: "Is Dr. Mohamad El Haress also listed as Dr. Mohammad Haress or Dr. Mohammed Haress?", answer: "The official English spelling is Dr. Mohamad El Haress. Patients may use variations such as Dr. Mohamad Haress, Dr. Mohammad Haress or Dr. Mohammed Haress when searching online." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://drmharess.com/general-surgeon-lebanon#webpage", url: "https://drmharess.com/general-surgeon-lebanon", name: "General Surgeon in Lebanon | Dr. Mohamad El Haress", about: { "@id": "https://drmharess.com/#physician" }, mainEntity: { "@id": "https://drmharess.com/#physician" } },
    { "@type": "FAQPage", mainEntity: questions.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ],
};

export default function GeneralSurgeonLebanonPage() {
  return <main id="main">
    <section className="page-hero"><div className="container"><div className="eyebrow light"><span></span>Specialist surgical care in Beirut</div><h1>General surgeon<br/><em>in Lebanon.</em></h1><p>Dr. Mohamad El Haress is a general surgeon, minimally invasive surgeon and surgical oncologist providing specialist evaluation for benign, malignant and complex surgical conditions.</p><div className="button-row"><Link className="button white" href="/appointment">Request an appointment <b>→</b></Link><Link className="button text" href="/about">About Dr. El Haress</Link></div></div></section>
    <section className="section why"><div className="container why-grid"><div><div className="eyebrow"><span></span>Choosing surgical care</div><h2>Clear evaluation before treatment.</h2><p>Choosing a surgeon is not only about a search ranking. The appropriate choice depends on the diagnosis, the operation being considered, the surgeon’s relevant training and experience, and access to the right multidisciplinary team.</p><Link className="inline-link" href="/conditions">Explore conditions <b>→</b></Link></div><div className="principles"><article><span>01</span><div><h3>General & minimally invasive surgery</h3><p>Evaluation and treatment planning for common and complex surgical conditions, including laparoscopic approaches when appropriate.</p></div></article><article><span>02</span><div><h3>Complex surgical oncology</h3><p>Multidisciplinary assessment of cancers that may require surgery as part of a complete treatment plan.</p></div></article><article><span>03</span><div><h3>International surgical training</h3><p>Clinical and surgical training across Lebanon, the United States, France, India, Egypt and Lithuania.</p></div></article></div></div></section>
    <section className="clinical-faq"><div className="container"><div className="clinical-faq-heading"><span>Frequently asked questions</span><h2>Finding the right surgeon in Lebanon.</h2><p>General information to help patients prepare for a specialist surgical consultation.</p></div><div className="clinical-faq-list">{questions.map((item,index)=><details key={item.question}><summary><span>{String(index+1).padStart(2,"0")}</span><h3>{item.question}</h3><b>+</b></summary><p>{item.answer}</p></details>)}</div></div></section>
    <section className="appointment-band"><div className="container appointment-band-grid"><h2>Need a specialist surgical evaluation?</h2><div><p>Contact the clinic to request an appointment and confirm consultation details.</p><Link className="button white" href="/appointment">Book an appointment <b>→</b></Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  </main>;
}
