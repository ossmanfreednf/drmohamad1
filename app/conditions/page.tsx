import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { conditions } from "@/lib/clinical-pages";

export const metadata: Metadata = { title: "General Surgery Conditions & Cancers", description: "Patient-focused information about common general surgery conditions, endocrine disease and cancers evaluated by Dr. Mohamad El Haress in Lebanon.", alternates: { canonical: "/conditions" } };

const common = ["appendicitis-appendix-surgery", "gallstones-gallbladder-disease", "hernia-repair", "pilonidal-sinus", "anorectal-conditions", "soft-tissue-lumps", "benign-gi-hpb-conditions"];
const endocrine = ["thyroid-conditions-tumors", "parathyroid-conditions-tumors", "adrenal-conditions-tumors"];
const cancer = ["liver-tumors-cancer", "pancreatic-tumors-cancer", "gallbladder-bile-duct-cancer", "colon-rectal-cancer", "stomach-gi-cancers", "breast-tumors-cancer", "abdominal-retroperitoneal-tumors", "metastatic-cancer-surgery", "complex-recurrent-abdominal-cancer"];

function ConditionGrid({ items, start = 1 }: { items: string[]; start?: number }) {
  return <div className="directory-grid">{items.map((slug,index) => { const item = conditions[slug]; return <Link href={`/conditions/${slug}`} key={slug}><div className="directory-photo"><Image src={item.image} alt={`Medical illustration for ${item.title}`} fill sizes="(max-width:760px) 100vw, 33vw" unoptimized/><span>{String(start+index).padStart(2,"0")}</span></div><h2>{item.title}</h2><p>{item.short}</p><b>Explore condition →</b></Link>; })}</div>;
}

export default function Conditions() {
  return <main id="main"><section className="directory-hero"><div className="container"><div><div className="eyebrow light"><span></span>General surgery · Endocrine · Cancer</div><h1>Start with the condition.<br/><em>Understand the options.</em></h1></div><p>Clear information for everyday surgical concerns, endocrine disease, complex conditions and cancer care.</p></div></section>
  <section className="clinical-directory directory-group"><div className="container"><div className="directory-intro"><span>Common general surgery</span><h2>Conditions seen every day</h2><p>Practical surgical evaluation for common symptoms and diagnoses—from gallstones and hernias to appendicitis and minor procedures.</p></div><ConditionGrid items={common}/></div></section>
  <section className="clinical-directory directory-group directory-group-tint"><div className="container"><div className="directory-intro"><span>Endocrine surgery</span><h2>Thyroid, parathyroid & adrenal conditions</h2><p>Coordinated evaluation of endocrine tumors and functional conditions, with surgery considered when clinically appropriate.</p></div><ConditionGrid items={endocrine} start={common.length+1}/></div></section>
  <section className="clinical-directory directory-group cancer-directory-group"><div className="container"><div className="directory-intro"><span>Cancer & complex surgery</span><h2>Specialist oncologic evaluation</h2><p>Individualized review of imaging, pathology, operability and the role of surgery within a multidisciplinary cancer plan.</p></div><ConditionGrid items={cancer} start={common.length+endocrine.length+1}/></div></section>
  <section className="directory-cta"><div className="container"><div><span>Already have reports or imaging?</span><h2>Request a specialist surgical opinion.</h2></div><Link className="button white" href="/appointment">Book consultation <b>→</b></Link></div></section></main>;
}
