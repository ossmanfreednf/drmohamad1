import type { ClinicalFaq } from "./clinical-pages";

export const clinicalFaqs: Record<string, ClinicalFaq[]> = {
  "appendicitis-appendix-surgery": [
    {question:"What are the signs of appendicitis?",answer:"Classic symptoms include pain that starts around the navel and moves to the lower right abdomen, loss of appetite, nausea, and low-grade fever. Pain often worsens with movement or coughing. Any suspected appendicitis needs prompt medical evaluation."},
    {question:"Is appendicitis always an emergency?",answer:"In most cases, yes. An inflamed appendix can progress to rupture, increasing the risk of infection spreading in the abdomen. Suspected appendicitis should be evaluated urgently."},
    {question:"How is appendicitis treated?",answer:"The standard treatment is laparoscopic appendectomy—keyhole removal of the appendix. In selected cases, appendicitis may initially be managed with antibiotics, but surgery remains the definitive treatment for most patients."},
    {question:"Is appendix removal a big operation?",answer:"Laparoscopic appendectomy is a common, generally low-risk procedure with a short hospital stay for uncomplicated cases. Recovery is longer if the appendix has ruptured before surgery."},
    {question:"Can you live a normal life without an appendix?",answer:"Yes. The appendix has no essential function in adults, and its removal does not affect digestion or long-term health."}
  ],
  "gallstones-gallbladder-disease": [
    {question:"Do all gallstones need surgery?",answer:"No. Gallstones found incidentally without symptoms often do not require surgery. Surgery is generally recommended when stones cause repeated pain, inflammation, jaundice, or pancreatitis."},
    {question:"What is the treatment for a painful gallbladder?",answer:"The standard treatment for symptomatic gallstones or gallbladder inflammation is laparoscopic cholecystectomy—keyhole removal of the gallbladder."},
    {question:"Is gallbladder removal a major operation?",answer:"Laparoscopic cholecystectomy is generally a low-risk, minimally invasive procedure with a short hospital stay. Complexity can increase with inflammation, prior surgery, or unclear anatomy."},
    {question:"Can I live normally without a gallbladder?",answer:"Yes. The liver continues producing bile, which flows directly into the intestine. Most patients have no long-term dietary restrictions."},
    {question:"How soon can I go back to work after gallbladder surgery?",answer:"This varies according to recovery progress and the physical demands of the job and is discussed individually."}
  ],
  "hernia-repair": [
    {question:"What is a hernia?",answer:"A hernia occurs when internal tissue or an organ pushes through a weak spot in the surrounding muscle or connective tissue, most often in the abdominal wall or groin."},
    {question:"Do all hernias need surgery?",answer:"Not always immediately, but most hernias do not resolve on their own. Surgery is generally recommended when a hernia causes symptoms, grows, or carries a risk of incarceration or strangulation."},
    {question:"What is the difference between open and laparoscopic hernia repair?",answer:"Open repair uses a single incision over the hernia; laparoscopic repair uses small incisions and a camera. The appropriate approach depends on the hernia and the patient."},
    {question:"Is mesh used in hernia repair, and is it safe?",answer:"Mesh reinforcement is standard for many hernia repairs because it lowers recurrence rates. Mesh type and technique are chosen for the specific hernia and discussed beforehand."},
    {question:"How long is recovery after hernia surgery?",answer:"Recovery depends on the hernia type, repair technique, and activity level. Most patients return gradually to normal activity over several weeks."}
  ],
  "pilonidal-sinus": [
    {question:"What is a pilonidal sinus?",answer:"A pilonidal sinus is a small tunnel or cavity under the skin near the top of the buttocks crease. It can become infected, causing pain, swelling, and drainage."},
    {question:"Does a pilonidal sinus always need surgery?",answer:"An acute abscess usually needs drainage first. Recurrent or chronic pilonidal disease generally requires surgical treatment to reduce recurrence."},
    {question:"Why does pilonidal disease keep coming back?",answer:"Recurrence can relate to a persistent sinus tract or to moisture, hair regrowth, and friction affecting wound healing. Treatment is individualized."},
    {question:"What does recovery from pilonidal surgery look like?",answer:"Recovery depends on the technique and whether the wound is closed or left to heal open. Specific wound-care and follow-up instructions are provided."},
    {question:"Can pilonidal sinus be prevented from recurring?",answer:"Good hygiene, hair removal, and avoiding prolonged sitting or friction can help reduce recurrence, although some patients remain predisposed."}
  ],
  "anorectal-conditions": [
    {question:"What is the difference between hemorrhoids, an anal fissure, and a fistula?",answer:"Hemorrhoids are swollen blood vessels. A fissure is a tear in the anal canal lining. A fistula is an abnormal tunnel between the anal canal and skin, usually following infection or an abscess."},
    {question:"Do hemorrhoids need surgery?",answer:"Most mild hemorrhoids improve with dietary changes, topical treatment, or office procedures. Surgery is reserved for more severe, recurrent, or prolapsing disease."},
    {question:"Can an anal fissure heal without surgery?",answer:"Many acute fissures heal with fiber, stool softeners, and topical medication. A chronic fissure that does not heal may need a minor procedure."},
    {question:"Is anal fistula surgery complicated?",answer:"Complexity depends on the fistula’s path relative to the anal sphincter muscles. This is carefully assessed, with imaging when needed."},
    {question:"Are these conditions embarrassing to discuss with a doctor?",answer:"These are common conditions. Evaluation is handled discreetly and professionally, and prompt assessment helps rule out more serious causes of bleeding."},
    {question:"What is the difference between internal and external hemorrhoids?",answer:"Internal hemorrhoids usually cause painless bleeding. External hemorrhoids can cause pain, itching, swelling, or a lump, especially when thrombosed."},
    {question:"What are the most common risk factors for hemorrhoids?",answer:"Risk factors include constipation, straining, prolonged sitting, low-fiber diet, pregnancy, obesity, aging, family history, chronic diarrhea, and heavy lifting."},
    {question:"How are internal hemorrhoids treated?",answer:"Initial treatment includes fiber, fluids, and avoiding straining. Persistent disease may be treated with rubber-band ligation or, for advanced cases, surgery."},
    {question:"How are external hemorrhoids treated?",answer:"Treatment may include topical care, sitz baths, and dietary changes. A painful thrombosed hemorrhoid may be excised when assessed early or managed conservatively as pain improves."},
    {question:"When is surgery needed for hemorrhoids?",answer:"Surgery is considered for large, prolapsing, recurrent hemorrhoids or disease that has not responded to non-surgical treatment."}
  ]
};
