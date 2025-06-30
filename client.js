const doctors = {
  Ravi: {
    password: "ravi123",
    patients: ["John Doe", "Meena Rao", "Ashwin Patel"]
  },
  Madhav: {
    password: "madhav123",
    patients: ["Jane Smith", "Karthik Dev", "Amrita Bose"]
  },
  Purvi: {
    password: "purvi123",
    patients: ["Rahul Das", "Sunita Reddy", "Ali Khan"]
  }
};

const patients = [
  { name: "John Doe", age: 50, diagnosis: "Diabetes", history: ["BP", "Obesity"] },
  { name: "Jane Smith", age: 65, diagnosis: "Arthritis", history: ["Back Pain"] },
  { name: "Meena Rao", age: 30, diagnosis: "Asthma", history: ["Coughing", "Allergy"] },
  { name: "Karthik Dev", age: 45, diagnosis: "Hypertension", history: ["BP", "Stress"] },
  { name: "Ashwin Patel", age: 28, diagnosis: "Migraine", history: ["Light Sensitivity"] },
  { name: "Amrita Bose", age: 39, diagnosis: "Skin Rash", history: ["Allergy"] },
  { name: "Rahul Das", age: 42, diagnosis: "Anxiety", history: ["Sleep Disorder"] },
  { name: "Sunita Reddy", age: 36, diagnosis: "Cold", history: ["Sneezing", "Runny Nose"] },
  { name: "Ali Khan", age: 55, diagnosis: "Fever", history: ["Chills", "Fatigue"] }
];

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (doctors[username] && doctors[username].password === password) {
    localStorage.setItem("doctor", username);
    window.location.href = "profile.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

window.onload = () => {
  const container = document.getElementById("patient-container");
  const totalPatients = document.getElementById("total-patients");
  if (!container) return;

  const doctor = localStorage.getItem("doctor");
  if (!doctor || !doctors[doctor]) {
    container.innerHTML = "<p>Please log in as a doctor.</p>";
    return;
  }

  const allowedPatients = doctors[doctor].patients;
  const visiblePatients = patients.filter(p => allowedPatients.includes(p.name));

  totalPatients.innerText = visiblePatients.length;

  visiblePatients.forEach(p => {
    const div = document.createElement("div");
    div.className = "patient-card";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p><strong>Age:</strong> ${p.age}</p>
      <p><strong>Diagnosis:</strong> ${p.diagnosis}</p>
      <p><strong>History:</strong> ${p.history.join(", ")}</p>
    `;
    container.appendChild(div);
  });
};

function generatePrescription() {
  const symptom = document.getElementById("symptoms-input").value.toLowerCase();
  const output = document.getElementById("prescription-output");
  let prescription = "Please consult a specialist if symptoms persist.";

 if (symptom.includes("fever")) {
    prescription = "Paracetamol 500mg every 6 hours";
  } else if (symptom.includes("diabetes")) {
    prescription = "Metformin 500mg twice a day";
  } else if (symptom.includes("bp")) {
    prescription = "Amlodipine 5mg once daily";
  } else if (symptom.includes("pressure")) {
    prescription = "Amlodipine 5mg once daily";
  } else if (symptom.includes("asthma")) {
    prescription = "Salbutamol inhaler 2 puffs as needed";
  } else if (symptom.includes("cough")) {
    prescription = "Dextromethorphan 10mg every 6 hours";
  } else if (symptom.includes("headache")) {
    prescription = "Ibuprofen 400mg every 8 hours";
  } else if (symptom.includes("cold")) {
    prescription = "Phenylephrine 10mg every 4 hours";
  } else if (symptom.includes("infection")) {
    prescription = "Amoxicillin 500mg three times a day";
  } else if (symptom.includes("allergy")) {
    prescription = "Cetirizine 10mg once daily";
  } else if (symptom.includes("indigestion")) {
    prescription = "Omeprazole 20mg before breakfast";
  } else if (symptom.includes("ulcer")) {
    prescription = "Ranitidine 150mg twice a day";
  } else if (symptom.includes("arthritis")) {
    prescription = "Diclofenac 50mg three times a day";
  } else if (symptom.includes("depression")) {
    prescription = "Sertraline 50mg once daily";
  } else if (symptom.includes("anxiety")) {
    prescription = "Alprazolam 0.25mg as needed";
  } else if (symptom.includes("insomnia")) {
    prescription = "Zolpidem 10mg at bedtime";
  } else if (symptom.includes("hypertension")) {
    prescription = "Losartan 50mg once daily";
  } else if (symptom.includes("cholesterol")) {
    prescription = "Atorvastatin 20mg once daily";
  } else if (symptom.includes("migraine")) {
    prescription = "Sumatriptan 50mg at onset";
  } else if (symptom.includes("thyroid")) {
    prescription = "Levothyroxine 50mcg once daily";
  } else if (symptom.includes("gout")) {
    prescription = "Allopurinol 100mg once daily";
  } else if (symptom.includes("anemia")) {
    prescription = "Ferrous sulphate 325mg three times a day";
  } else if (symptom.includes("dehydration")) {
    prescription = "Oral rehydration solution 200ml every hour";
  } else if (symptom.includes("diarrhea")) {
    prescription = "Loperamide 2mg after each loose stool";
  } else if (symptom.includes("constipation")) {
    prescription = "Bisacodyl 10mg at bedtime";
  } else if (symptom.includes("nausea")) {
    prescription = "Ondansetron 4mg every 8 hours";
  } else if (symptom.includes("vomiting")) {
    prescription = "Metoclopramide 10mg every 8 hours";
  } else if (symptom.includes("eczema")) {
    prescription = "Hydrocortisone cream twice daily";
  } else if (symptom.includes("psoriasis")) {
    prescription = "Calcipotriol ointment twice daily";
  } else if (symptom.includes("otitis")) {
    prescription = "Amoxicillin 500mg three times a day";
  } else if (symptom.includes("bronchitis")) {
    prescription = "Azithromycin 500mg once daily for 3 days";
  } else if (symptom.includes("pneumonia")) {
    prescription = "Levofloxacin 500mg once daily";
  } else if (symptom.includes("sinusitis")) {
    prescription = "Pseudoephedrine 60mg every 6 hours";
  } else if (symptom.includes("throat")) {
    prescription = "Benzydamine lozenges every 2 hours";
  } else if (symptom.includes("uti")) {
    prescription = "Nitrofurantoin 100mg twice daily";
  } else if (symptom.includes("yeast")) {
    prescription = "Fluconazole 150mg single dose";
  } else if (symptom.includes("shingles")) {
    prescription = "Valacyclovir 1g three times a day";
  } else if (symptom.includes("herpes")) {
    prescription = "Acyclovir 400mg five times a day";
  } else if (symptom.includes("fatigue")) {
    prescription = "Multivitamin daily";
  } else if (symptom.includes("obesity")) {
    prescription = "Orlistat 120mg with meals";
  } else if (symptom.includes("osteoporosis")) {
    prescription = "Calcium + Vitamin D daily";
  } else if (symptom.includes("sciatica")) {
    prescription = "Ibuprofen 400mg every 8 hours";
  } else if (symptom.includes("acne")) {
    prescription = "Benzoyl peroxide cream once daily";
  } else if (symptom.includes("dermatitis")) {
    prescription = "Hydrocortisone cream twice daily";
  } else if (symptom.includes("bloating")) {
    prescription = "Simethicone 80mg after meals";
  } else if (symptom.includes("gastritis")) {
    prescription = "Pantoprazole 40mg before breakfast";
  } else if (symptom.includes("flu")) {
    prescription = "Oseltamivir 75mg twice daily";
  } else if (symptom.includes("chickenpox")) {
    prescription = "Acyclovir 800mg five times daily";
  } else if (symptom.includes("measles")) {
    prescription = "Vitamin A supplements";
  } else if (symptom.includes("mumps")) {
    prescription = "Supportive care, rest and hydration";
  } else if (symptom.includes("rubella")) {
    prescription = "Symptomatic treatment";
  } else if (symptom.includes("hepatitis")) {
    prescription = "Interferon alpha injections";
  } else if (symptom.includes("jaundice")) {
    prescription = "Rest, fluids and diet management";
  } else if (symptom.includes("liver")) {
    prescription = "Ursodeoxycholic acid 300mg twice daily";
  } else if (symptom.includes("kidney")) {
    prescription = "Sodium bicarbonate 500mg three times daily";
  } else if (symptom.includes("stones")) {
    prescription = "Tamsulosin 0.4mg once daily";
  } else if (symptom.includes("prostate")) {
    prescription = "Finasteride 5mg once daily";
  } else if (symptom.includes("erectile")) {
    prescription = "Sildenafil 50mg as needed";
  } else if (symptom.includes("infertility")) {
    prescription = "Clomiphene 50mg once daily";
  } else if (symptom.includes("pregnancy")) {
    prescription = "Folic acid 5mg once daily";
  } else if (symptom.includes("menopause")) {
    prescription = "Hormone Replacement Therapy";
  } else if (symptom.includes("pms")) {
    prescription = "Ibuprofen 400mg as needed";
  } else if (symptom.includes("dysmenorrhea")) {
    prescription = "Mefenamic acid 500mg as needed";
  } else if (symptom.includes("endometriosis")) {
    prescription = "Leuprolide 3.75mg monthly injection";
  } else if (symptom.includes("pcos")) {
    prescription = "Metformin 500mg twice daily";
  } else if (symptom.includes("fibroids")) {
    prescription = "Tranexamic acid 500mg during menstruation";
  } else if (symptom.includes("asthma attack")) {
    prescription = "Salbutamol nebulizer as needed";
  } else if (symptom.includes("pneumothorax")) {
    prescription = "Immediate medical intervention";
  } else if (symptom.includes("pleurisy")) {
    prescription = "Ibuprofen 400mg every 8 hours";
  } else if (symptom.includes("tb")) {
    prescription = "Rifampin 600mg daily";
  } else if (symptom.includes("covid")) {
    prescription = "Paracetamol 500mg every 6 hours + Rest";
  } else if (symptom.includes("ebola")) {
    prescription = "Supportive therapy with IV fluids";
  } else if (symptom.includes("malaria")) {
    prescription = "Artemether-Lumefantrine combination";
  } else if (symptom.includes("dengue")) {
    prescription = "Paracetamol 500mg every 6 hours + fluids";
  } else if (symptom.includes("chikungunya")) {
    prescription = "Paracetamol 500mg every 6 hours + rest";
  } else if (symptom.includes("zika")) {
    prescription = "Supportive treatment";
  } else if (symptom.includes("yellow fever")) {
    prescription = "Symptomatic management only";
  } else if (symptom.includes("rabies")) {
    prescription = "Rabies vaccine + immunoglobulin";
  } else if (symptom.includes("typhoid")) {
    prescription = "Ciprofloxacin 500mg twice daily";
  } else if (symptom.includes("cholera")) {
    prescription = "Doxycycline 300mg single dose";
  } else if (symptom.includes("plague")) {
    prescription = "Streptomycin 1g twice daily IM";
  } else if (symptom.includes("leprosy")) {
    prescription = "Dapsone 100mg daily + Rifampin";
  } else if (symptom.includes("anthrax")) {
    prescription = "Ciprofloxacin 500mg twice daily";
  } else if (symptom.includes("tetanus")) {
    prescription = "Tetanus immunoglobulin + metronidazole";
  } else if (symptom.includes("botulism")) {
    prescription = "Botulinum antitoxin IV";
  } else if (symptom.includes("lyme")) {
    prescription = "Doxycycline 100mg twice daily";
  } else if (symptom.includes("syphilis")) {
    prescription = "Benzathine penicillin 2.4 million units IM";
  } else if (symptom.includes("gonorrhea")) {
    prescription = "Ceftriaxone 500mg IM single dose";
  } else if (symptom.includes("chlamydia")) {
    prescription = "Azithromycin 1g single dose";
  } else if (symptom.includes("hiv")) {
    prescription = "Antiretroviral therapy (ART)";
  } else if (symptom.includes("warts")) {
    prescription = "Salicylic acid topical daily";
  } else if (symptom.includes("scabies")) {
    prescription = "Permethrin 5% cream overnight";
  } else if (symptom.includes("lice")) {
    prescription = "Permethrin 1% lotion";
  } else if (symptom.includes("ringworm")) {
    prescription = "Clotrimazole cream twice daily";
  } else if (symptom.includes("pinworm")) {
    prescription = "Mebendazole 100mg single dose";
  } else if (symptom.includes("tapeworm")) {
    prescription = "Praziquantel 600mg single dose";
  } else if (symptom.includes("filariasis")) {
    prescription = "Diethylcarbamazine 6mg/kg daily";
  } else if (symptom.includes("hydatid")) {
    prescription = "Albendazole 400mg twice daily";
  } else if (symptom.includes("schistosomiasis")) {
    prescription = "Praziquantel 40mg/kg single dose";
  } else if (symptom.includes("trichinosis")) {
    prescription = "Albendazole 400mg twice daily";
  } else if (symptom.includes("toxoplasmosis")) {
    prescription = "Pyrimethamine + sulfadiazine";
  } else if (symptom.includes("giardiasis")) {
    prescription = "Metronidazole 250mg three times daily";
  }   else if (symptom.includes("psittacosis")) {
    prescription = "Doxycycline 100mg twice daily";
  } else if (symptom.includes("q fever")) {
    prescription = "Doxycycline 100mg twice daily";
  } else if (symptom.includes("legionnaires")) {
    prescription = "Azithromycin 500mg once daily";
  } else if (symptom.includes("pertussis")) {
    prescription = "Azithromycin 500mg once daily";
  } else if (symptom.includes("diphtheria")) {
    prescription = "Erythromycin 500mg four times daily";
  } else if (symptom.includes("rickettsia")) {
    prescription = "Doxycycline 100mg twice daily";
  } else if (symptom.includes("tuberculosis")) {
    prescription = "RIPE therapy (Rifampin, Isoniazid, Pyrazinamide, Ethambutol)";
  } else if (symptom.includes("leptospirosis")) {
    prescription = "Doxycycline 100mg daily";
  } else if (symptom.includes("shigellosis")) {
    prescription = "Ciprofloxacin 500mg twice daily";
  } else if (symptom.includes("salmonellosis")) {
    prescription = "Ciprofloxacin 500mg twice daily";
  } else if (symptom.includes("campylobacter")) {
    prescription = "Azithromycin 500mg once daily";
  } else if (symptom.includes("helicobacter")) {
    prescription = "Omeprazole + Amoxicillin + Clarithromycin";
  } else if (symptom.includes("yersiniosis")) {
    prescription = "Doxycycline 100mg twice daily";
  } else if (symptom.includes("gardnerella")) {
    prescription = "Metronidazole 500mg twice daily";
  } else if (symptom.includes("trichomoniasis")) {
    prescription = "Metronidazole 2g single dose";
  } else if (symptom.includes("bacterial vaginosis")) {
    prescription = "Metronidazole 500mg twice daily";
  } else if (symptom.includes("otitis externa")) {
    prescription = "Neomycin-polymyxin B drops";
  } else if (symptom.includes("mastoiditis")) {
    prescription = "Cefuroxime 500mg twice daily";
  } else if (symptom.includes("epiglottitis")) {
    prescription = "Ceftriaxone 1g daily";
  } else if (symptom.includes("meningitis")) {
    prescription = "Ceftriaxone 2g every 12 hours";
  } else if (symptom.includes("encephalitis")) {
    prescription = "Acyclovir 10mg/kg every 8 hours";
  } else if (symptom.includes("brain abscess")) {
    prescription = "Metronidazole + Ceftriaxone";
  } else if (symptom.includes("osteomyelitis")) {
    prescription = "Flucloxacillin 1g four times daily";
  } else if (symptom.includes("sepsis")) {
    prescription = "Piperacillin‑tazobactam 4.5g every 6 hours";
  } else if (symptom.includes("endocarditis")) {
    prescription = "Vancomycin + Gentamicin";
  } else if (symptom.includes("urinary calculi")) {
    prescription = "Tamsulosin 0.4mg daily";
  } else if (symptom.includes("benign prostatic hyperplasia")) {
    prescription = "Tamsulosin 0.4mg daily";
  } else if (symptom.includes("pyelonephritis")) {
    prescription = "Ceftriaxone 1g daily";
  } else if (symptom.includes("nephrotic syndrome")) {
    prescription = "Prednisone 1mg/kg daily";
  } else if (symptom.includes("glomerulonephritis")) {
    prescription = "Prednisone + Cyclophosphamide";
  } else if (symptom.includes("urethritis")) {
    prescription = "Azithromycin 1g single dose";
  } else if (symptom.includes("orchitis")) {
    prescription = "Levofloxacin 500mg daily";
  } else if (symptom.includes("epididymitis")) {
    prescription = "Doxycycline 100mg twice daily";
  } else if (symptom.includes("cervicitis")) {
    prescription = "Azithromycin 1g single dose";
  } else if (symptom.includes("pelvic inflammatory disease")) {
    prescription = "Ceftriaxone + Doxycycline";
  } else if (symptom.includes("mastitis")) {
    prescription = "Dicloxacillin 500mg four times daily";
  } else if (symptom.includes("cellulitis")) {
    prescription = "Flucloxacillin 500mg four times daily";
  } else if (symptom.includes("erysipelas")) {
    prescription = "Penicillin V 500mg four times daily";
  } else if (symptom.includes("necrotizing fasciitis")) {
    prescription = "Clindamycin + Piperacillin‑tazobactam";
  } else if (symptom.includes("abscess")) {
    prescription = "Clindamycin 300mg four times daily";
  } else if (symptom.includes("impetigo")) {
    prescription = "Flucloxacillin 500mg four times daily";
  } else if (symptom.includes("folliculitis")) {
    prescription = "Dicloxacillin 500mg four times daily";
  } else if (symptom.includes("hidradenitis")) {
    prescription = "Clindamycin + Rifampin";
  } else if (symptom.includes("hidradenitis suppurativa")) {
    prescription = "Clindamycin + Rifampin";
  } else if (symptom.includes("onychomycosis")) {
    prescription = "Terbinafine 250mg daily";
  } else if (symptom.includes("tinea pedis")) {
    prescription = "Terbinafine cream once daily";
  } else if (symptom.includes("tinea corporis")) {
    prescription = "Terbinafine cream once daily";
  } else if (symptom.includes("tinea cruris")) {
    prescription = "Terbinafine cream once daily";
  } else if (symptom.includes("candida hyphae")) {
    prescription = "Fluconazole 150mg single dose";
  } else if (symptom.includes("oral thrush")) {
    prescription = "Nystatin oral suspension";
  } else if (symptom.includes("dental abscess")) {
    prescription = "Amoxicillin 500mg three times daily";
  } else if (symptom.includes("gingivitis")) {
    prescription = "Chlorhexidine mouthwash twice daily";
  } else if (symptom.includes("periodontitis")) {
    prescription = "Metronidazole + Amoxicillin";
  } else if (symptom.includes("peptic ulcer disease")) {
    prescription = "Omeprazole + Clarithromycin + Amoxicillin";
  } else if (symptom.includes("gastroenteritis")) {
    prescription = "Oral rehydration + Loperamide";
  } else if (symptom.includes("hepatitis a")) {
    prescription = "Supportive care";
  } else if (symptom.includes("hepatitis b")) {
    prescription = "Tenofovir 300mg daily";
  } else if (symptom.includes("hepatitis c")) {
    prescription = "Sofosbuvir + Ledipasvir";
  } else if (symptom.includes("cirrhosis")) {
    prescription = "Spironolactone + Furosemide";
  } else if (symptom.includes("pancreatitis")) {
    prescription = "NPO + IV fluids + Analgesia";
  } else if (symptom.includes("cholecystitis")) {
    prescription = "Ceftriaxone + Metronidazole";
  } else if (symptom.includes("cholelithiasis")) {
    prescription = "Ursodeoxycholic acid";
  } else if (symptom.includes("appendicitis")) {
    prescription = "Ceftriaxone + Metronidazole";
  } else if (symptom.includes("diverticulitis")) {
  prescription = "Ciprofloxacin + Metronidazole";
  } else if (symptom.includes("peritonitis")) {
    prescription = "Piperacillin‑tazobactam";
  } else if (symptom.includes("hernia")) {
    prescription = "Refer for surgical repair";
  } else if (symptom.includes("hemorrhoids")) {
    prescription = "Hydrocortisone cream + Fiber";
  } else if (symptom.includes("anal fissure")) {
    prescription = "Topical nitroglycerin ointment";
  } else if (symptom.includes("uveitis")) {
    prescription = "Prednisolone eye drops";
  } else if (symptom.includes("conjunctivitis")) {
    prescription = "Chloramphenicol eye drops";
  } else if (symptom.includes("keratitis")) {
    prescription = "Ofloxacin eye drops";
  } else if (symptom.includes("glaucoma")) {
    prescription = "Timolol eye drops";
  } else if (symptom.includes("cataract")) {
    prescription = "Refer for lens replacement";
  } else if (symptom.includes("macular degeneration")) {
    prescription = "Anti-VEGF intravitreal injections";
  } else if (symptom.includes("retinal detachment")) {
    prescription = "Refer immediately to ophthalmology";
  } else if (symptom.includes("strabismus")) {
    prescription = "Refer for surgical correction";
  } else if (symptom.includes("amblyopia")) {
    prescription = "Occlusion therapy (patching)";
  } else if (symptom.includes("tinnitus")) {
    prescription = "Masking devices + Cognitive therapy";
  } else if (symptom.includes("vertigo")) {
    prescription = "Meclizine 25mg three times daily";
  } else if (symptom.includes("meniere")) {
    prescription = "Betahistine 16mg three times daily";
  } else if (symptom.includes("ototoxicity")) {
    prescription = "Remove offending agent";
  } else if (symptom.includes("sensorineural deafness")) {
    prescription = "Refer for audiology";
  } else if (symptom.includes("conductive deafness")) {
    prescription = "Refer for ENT evaluation";
  } else if (symptom.includes("nasal polyps")) {
    prescription = "Prednisolone nasal spray";
  } else if (symptom.includes("rhinitis")) {
    prescription = "Cetirizine 10mg once daily";
  } else if (symptom.includes("epistaxis")) {
    prescription = "Oxymetazoline nasal spray";
  } else if (symptom.includes("sleep apnea")) {
    prescription = "CPAP referral";
  } else if (symptom.includes("snoring")) {
    prescription = "Refer for ENT review";
  } else if (symptom.includes("tonsillitis")) {
    prescription = "Penicillin V 500mg four times daily";
  } else if (symptom.includes("peritonsillar abscess")) {
    prescription = "Drain + Augmentin 875mg twice daily";
  } else if (symptom.includes("laryngitis")) {
    prescription = "Voice rest + NSAIDs";
  } else if (symptom.includes("aphthous ulcers")) {
    prescription = "Chlorhexidine mouthwash";
  } else if (symptom.includes("oral cancer")) {
    prescription = "Refer urgently to oncology";
  } else {
    prescription = "Consult a specialist.";
  }

  output.innerHTML = `<p><strong>Suggested Prescription:</strong><br>${prescription}</p>`;
}
