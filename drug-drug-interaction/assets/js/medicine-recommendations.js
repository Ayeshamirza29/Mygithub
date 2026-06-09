/**
 * Medicine Recommendation Engine - Comprehensive Database
 * Database of 60 medicines with disease mapping, benefits, interactions, and elderly considerations
 */

const medicineDatabase = {
  // Analgesics
  "Paracetamol": {
    diseases: ["Pain", "Fever", "Headache"],
    benefits: ["Mild to moderate pain relief", "Fever reduction", "Well-tolerated", "No anti-inflammatory effect"],
    interactions: ["Alcohol (increased liver toxicity)", "Warfarin (possible interaction)", "Methotrexate (toxicity risk)"],
    elderlyConsideration: "Safe; use recommended doses, monitor liver function",
    category: "Analgesic"
  },
  "Ibuprofen": {
    diseases: ["Pain", "Fever", "Inflammation", "Arthritis"],
    benefits: ["Pain relief", "Anti-inflammatory", "Fever reduction", "Arthritis symptom relief"],
    interactions: ["Warfarin (bleeding risk)", "NSAIDs - avoid combining", "ACE inhibitors (reduced effect)", "Diuretics (reduced effect)"],
    elderlyConsideration: "Avoid if possible; increased GI bleeding and kidney risk",
    category: "NSAID"
  },
  "Aspirin": {
    diseases: ["Pain", "Heart Disease", "Stroke Prevention", "Blood Clots"],
    benefits: ["Pain relief", "Reduces clot formation", "Anti-inflammatory", "Cardioprotective"],
    interactions: ["Warfarin (increases bleeding risk)", "NSAIDs (GI bleeding risk)", "Methotrexate (increased toxicity)"],
    elderlyConsideration: "Bleeding risk increases; use lowest effective dose",
    category: "Antiplatelet/Analgesic"
  },
  "Morphine": {
    diseases: ["Severe Pain", "Pain Relief"],
    benefits: ["Strong pain relief", "Anxiety reduction", "Shortness of breath relief"],
    interactions: ["Benzodiazepines (respiratory depression)", "Alcohol (CNS depression)", "Other opioids (overdose risk)"],
    elderlyConsideration: "Higher overdose risk; start with lower doses",
    category: "Opioid"
  },
  "Tramadol": {
    diseases: ["Moderate to Severe Pain"],
    benefits: ["Pain relief", "Lower abuse potential than other opioids"],
    interactions: ["SSRIs (serotonin syndrome risk)", "MAOIs (contraindicated)", "CNS depressants (increased effect)"],
    elderlyConsideration: "Increased seizure risk; use caution",
    category: "Opioid"
  },
  "Codeine": {
    diseases: ["Pain", "Cough Suppression"],
    benefits: ["Moderate pain relief", "Cough suppression", "Lower addiction risk than morphine"],
    interactions: ["Alcohol (CNS depression)", "Sedatives (increased depression)", "NSAIDs (combined pain relief)"],
    elderlyConsideration: "Risk of constipation and respiratory depression",
    category: "Opioid"
  },
  "Amitriptyline": {
    diseases: ["Depression", "Chronic Pain", "Anxiety"],
    benefits: ["Mood improvement", "Pain management", "Sleep aid", "Migraine prevention"],
    interactions: ["Alcohol (CNS depression)", "Anticholinergics (increased effects)", "MAOIs (contraindicated)"],
    elderlyConsideration: "Increased fall risk; anticholinergic side effects",
    category: "Tricyclic Antidepressant"
  },

  // Diabetes Medications
  "Metformin": {
    diseases: ["Type 2 Diabetes", "Prediabetes", "PCOS"],
    benefits: ["Lowers blood sugar", "Reduces cardiovascular risk", "Weight-neutral", "May aid weight loss"],
    interactions: ["Alcohol (lactic acidosis risk)", "Iodinated contrast dye", "NSAIDs (kidney risk)"],
    elderlyConsideration: "Check kidney function; adjust dose if eGFR < 45",
    category: "Biguanide"
  },
  "Insulin": {
    diseases: ["Type 1 Diabetes", "Type 2 Diabetes (advanced)"],
    benefits: ["Controls blood glucose", "Essential for Type 1 diabetes", "Flexible dosing"],
    interactions: ["Corticosteroids (reduce effect)", "Beta-blockers (mask hypoglycemia)", "Alcohol (hypoglycemia risk)"],
    elderlyConsideration: "Increased hypoglycemia risk; frequent monitoring needed",
    category: "Antidiabetic Hormone"
  },

  // Antibiotics
  "Amoxicillin": {
    diseases: ["Bacterial Infection", "Ear Infections", "Throat Infections"],
    benefits: ["Broad-spectrum antibiotic", "Well-absorbed orally", "Good tissue penetration"],
    interactions: ["Warfarin (increased INR)", "Methotrexate (toxicity risk)", "Allopurinol (rash risk)"],
    elderlyConsideration: "Generally safe; check kidney function for dosing",
    category: "Beta-lactam Antibiotic"
  },
  "Azithromycin": {
    diseases: ["Bacterial Infection", "Respiratory Infection", "STIs"],
    benefits: ["Broad-spectrum coverage", "Good lung penetration", "Convenient once-daily dosing"],
    interactions: ["Warfarin (increased INR)", "Statins (myopathy risk)", "QT-prolonging drugs (arrhythmia risk)"],
    elderlyConsideration: "Monitor QT interval; check for drug interactions",
    category: "Macrolide Antibiotic"
  },
  "Ciprofloxacin": {
    diseases: ["Urinary Tract Infection", "Bacterial Infection", "Respiratory Infection"],
    benefits: ["Broad-spectrum coverage", "Good urinary penetration", "Oral and IV forms"],
    interactions: ["Warfarin (increased INR)", "Antacids/iron (reduced absorption)", "Theophylline (increased levels)"],
    elderlyConsideration: "Increased tendon rupture risk; avoid if possible",
    category: "Fluoroquinolone"
  },
  "Doxycycline": {
    diseases: ["Acne", "Bacterial Infection", "Respiratory Infection", "Lyme Disease"],
    benefits: ["Broad-spectrum antibiotic", "Acne treatment", "Good tissue penetration"],
    interactions: ["Milk/iron supplements (reduced absorption)", "Warfarin (increased bleeding)", "Phenytoin (reduced levels)"],
    elderlyConsideration: "Increased esophageal ulcer risk; take with water",
    category: "Tetracycline Antibiotic"
  },
  "Cephalexin": {
    diseases: ["Bacterial Infection", "Skin Infection", "UTI"],
    benefits: ["Broad-spectrum antibiotic", "Good oral absorption", "Safe in pregnancy"],
    interactions: ["Probenecid (increased levels)", "Warfarin (possible interaction)"],
    elderlyConsideration: "Generally safe; monitor kidney function",
    category: "Cephalosporin"
  },
  "Metronidazole": {
    diseases: ["Parasitic Infection", "Bacterial Infection", "C. difficile Infection"],
    benefits: ["Effective against anaerobes", "Rapid absorption", "Multiple dosing options"],
    interactions: ["Alcohol (disulfiram reaction)", "Warfarin (increased INR)", "Lithium (toxicity risk)"],
    elderlyConsideration: "Increased neuropathy risk; monitor closely",
    category: "Nitroimidazole"
  },
  "Rifampin": {
    diseases: ["Tuberculosis", "Mycobacterial Infection"],
    benefits: ["TB treatment", "Broad antimicrobial activity"],
    interactions: ["Oral contraceptives (reduced effect)", "Warfarin (reduced effect)", "Statins (reduced effect)"],
    elderlyConsideration: "Check liver function; may interact with many drugs",
    category: "Antitubercular"
  },

  // Gastrointestinal Medications
  "Omeprazole": {
    diseases: ["GERD", "Peptic Ulcer Disease", "Acid Reflux"],
    benefits: ["Reduces stomach acid", "Heals ulcers", "Long-acting", "Symptom relief"],
    interactions: ["Clopidogrel (reduced effectiveness)", "Warfarin (variable INR)", "Atazanavir (reduced levels)"],
    elderlyConsideration: "Long-term use may reduce B12/calcium; monitor",
    category: "Proton Pump Inhibitor"
  },
  "Pantoprazole": {
    diseases: ["GERD", "Peptic Ulcer Disease", "Acid Reflux"],
    benefits: ["Reduces stomach acid", "Heals ulcers", "IV or oral forms available"],
    interactions: ["Clopidogrel (reduced effectiveness)", "Warfarin (variable INR)"],
    elderlyConsideration: "Similar to omeprazole; monitor B12/calcium long-term",
    category: "Proton Pump Inhibitor"
  },
  "Ranitidine": {
    diseases: ["GERD", "Peptic Ulcer", "Acid Reflux"],
    benefits: ["Reduces stomach acid", "Symptom relief", "Shorter duration than PPIs"],
    interactions: ["Alcohol (CNS effects)", "Warfarin (possible interaction)", "Anticholinergics (additive effects)"],
    elderlyConsideration: "Generally safe; monitor for drug interactions",
    category: "H2-Receptor Antagonist"
  },
  "Ondansetron": {
    diseases: ["Nausea", "Vomiting", "Chemotherapy Side Effects"],
    benefits: ["Effective anti-nausea", "Well-tolerated", "Prevents nausea from chemo"],
    interactions: ["QT-prolonging drugs (arrhythmia risk)", "Tramadol (serotonin syndrome risk)"],
    elderlyConsideration: "Generally safe; monitor electrolytes",
    category: "5-HT3 Antagonist"
  },

  // Cardiovascular Medications
  "Losartan": {
    diseases: ["Hypertension", "Heart Failure", "Kidney Protection"],
    benefits: ["Blood pressure reduction", "Kidney protection", "Well-tolerated"],
    interactions: ["Potassium-sparing diuretics (hyperkalemia risk)", "NSAIDs (reduced effect/kidney risk)", "ACE inhibitors (usually avoided)"],
    elderlyConsideration: "Safe option; monitor kidney function and potassium",
    category: "ARB"
  },
  "Lisinopril": {
    diseases: ["Hypertension", "Heart Failure", "Kidney Protection"],
    benefits: ["Blood pressure reduction", "Heart failure management", "Kidney protection"],
    interactions: ["Potassium supplements (hyperkalemia risk)", "NSAIDs (reduced effect)", "Diuretics (hypotension risk)"],
    elderlyConsideration: "Monitor blood pressure; may cause dizziness",
    category: "ACE Inhibitor"
  },
  "Amlodipine": {
    diseases: ["Hypertension", "Angina", "Coronary Artery Disease"],
    benefits: ["Blood pressure reduction", "Symptom relief in angina", "Once-daily dosing"],
    interactions: ["Strong CYP3A4 inhibitors (increased levels)", "Simvastatin (myopathy risk)"],
    elderlyConsideration: "Generally safe; may cause ankle swelling",
    category: "Calcium Channel Blocker"
  },
  "Verapamil": {
    diseases: ["Hypertension", "Angina", "Arrhythmias"],
    benefits: ["Blood pressure and heart rate reduction", "Anti-arrhythmic", "Anti-anginal"],
    interactions: ["Beta-blockers (severe bradycardia)", "Statins (myopathy risk)", "Digoxin (increased toxicity)"],
    elderlyConsideration: "Risk of bradycardia; monitor heart rate",
    category: "Calcium Channel Blocker"
  },
  "Diltiazem": {
    diseases: ["Hypertension", "Angina", "Heart Rhythm Problems"],
    benefits: ["Blood pressure reduction", "Anti-arrhythmic", "Symptom relief"],
    interactions: ["Beta-blockers (bradycardia risk)", "Statins (interaction)", "Digoxin (increased levels)"],
    elderlyConsideration: "Monitor heart rate; may cause constipation",
    category: "Calcium Channel Blocker"
  },
  "Metoprolol": {
    diseases: ["Hypertension", "Heart Disease", "Angina", "Heart Failure"],
    benefits: ["Blood pressure and heart rate reduction", "Cardioprotective", "Post-MI protection"],
    interactions: ["Calcium channel blockers (severe bradycardia)", "NSAIDs (reduced effect)", "Clonidine (rebound hypertension)"],
    elderlyConsideration: "Risk of fatigue; caution in asthma/COPD",
    category: "Beta-blocker"
  },
  "Propranolol": {
    diseases: ["Hypertension", "Angina", "Arrhythmias", "Anxiety"],
    benefits: ["Blood pressure and heart rate reduction", "Anti-anxiety effect", "Multiple formulations"],
    interactions: ["Salbutamol (reduced bronchodilation)", "Verapamil (severe bradycardia)", "NSAIDs (reduced effect)"],
    elderlyConsideration: "May mask hypoglycemia; avoid in asthma/COPD",
    category: "Beta-blocker"
  },
  "Warfarin": {
    diseases: ["Atrial Fibrillation", "Venous Thromboembolism", "Heart Valve Replacement"],
    benefits: ["Prevents blood clots", "Reduces stroke risk", "Long-acting anticoagulant"],
    interactions: ["Aspirin (bleeding risk)", "NSAIDs (bleeding risk)", "Antibiotics (increase INR)", "Alcohol (inconsistent effect)"],
    elderlyConsideration: "Requires frequent INR monitoring; higher bleeding risk",
    category: "Anticoagulant"
  },
  "Heparin": {
    diseases: ["Acute Venous Thromboembolism", "Acute Coronary Syndrome"],
    benefits: ["Rapid anticoagulation", "Short-acting", "Injectable form"],
    interactions: ["Aspirin (bleeding risk)", "NSAIDs (bleeding risk)", "Warfarin (overlapping therapy)"],
    elderlyConsideration: "Monitor closely; adjust for kidney function",
    category: "Anticoagulant"
  },
  "Clopidogrel": {
    diseases: ["Acute Coronary Syndrome", "Stroke Prevention", "Blood Clots"],
    benefits: ["Prevents blood clots", "Post-stent protection", "Stroke prevention"],
    interactions: ["Omeprazole (reduced effectiveness)", "NSAIDs (bleeding risk)", "Warfarin (increased bleeding)"],
    elderlyConsideration: "Bleeding risk increases with age",
    category: "Antiplatelet"
  },
  "Enoxaparin": {
    diseases: ["Venous Thromboembolism", "Acute Coronary Syndrome"],
    benefits: ["Blood thinner", "Predictable anticoagulation", "Subcutaneous administration"],
    interactions: ["Aspirin (bleeding risk)", "NSAIDs (bleeding risk)", "Warfarin (increased effect)"],
    elderlyConsideration: "Monitor renal function; adjust if needed",
    category: "Anticoagulant"
  },
  "Digoxin": {
    diseases: ["Heart Failure", "Atrial Fibrillation", "Arrhythmias"],
    benefits: ["Heart rate control", "Improves heart contractility", "Symptom relief"],
    interactions: ["Diuretics (low potassium increases toxicity)", "Verapamil (increased toxicity)", "NSAIDs (increased levels)"],
    elderlyConsideration: "Narrow therapeutic window; frequent monitoring needed",
    category: "Cardiac Glycoside"
  },
  "Amiodarone": {
    diseases: ["Arrhythmias", "Atrial Fibrillation"],
    benefits: ["Potent anti-arrhythmic", "Prevents dangerous rhythms"],
    interactions: ["Warfarin (increased INR)", "Statins (myopathy risk)", "Beta-blockers (increased bradycardia)"],
    elderlyConsideration: "Multiple drug interactions; requires careful monitoring",
    category: "Antiarrhythmic"
  },
  "Nitroglycerin": {
    diseases: ["Angina", "Heart Attack", "Heart Failure"],
    benefits: ["Rapid symptom relief", "Vasodilation", "Short-acting"],
    interactions: ["PDE5 inhibitors - contraindicated (dangerous BP drop)", "Alcohol (hypotension risk)"],
    elderlyConsideration: "Risk of hypotension and headaches",
    category: "Nitrate"
  },
  "Furosemide": {
    diseases: ["Hypertension", "Edema", "Heart Failure"],
    benefits: ["Potent diuretic", "Rapid fluid removal", "Multiple routes"],
    interactions: ["NSAIDs (reduced effect)", "Lithium (lithium toxicity)", "Aminoglycosides (ototoxicity risk)"],
    elderlyConsideration: "Risk of dehydration and electrolyte imbalance",
    category: "Loop Diuretic"
  },
  "Hydrochlorothiazide": {
    diseases: ["Hypertension", "Edema"],
    benefits: ["Blood pressure reduction", "Mild diuretic effect", "Once-daily dosing"],
    interactions: ["Lithium (increased levels)", "NSAIDs (reduced effect)", "Potassium supplements (contraindicated)"],
    elderlyConsideration: "May increase glucose and lipids; monitor closely",
    category: "Thiazide Diuretic"
  },
  "Spironolactone": {
    diseases: ["Hypertension", "Heart Failure", "Edema"],
    benefits: ["Potassium-sparing diuretic", "Heart failure management", "Reduces aldosterone"],
    interactions: ["ACE inhibitors (hyperkalemia risk)", "NSAIDs (reduced effect/hyperkalemia)", "Potassium supplements (contraindicated)"],
    elderlyConsideration: "Monitor potassium levels; increased hyperkalemia risk",
    category: "Potassium-sparing Diuretic"
  },

  // Lipid-Lowering Medications
  "Atorvastatin": {
    diseases: ["High Cholesterol", "Cardiovascular Disease Prevention"],
    benefits: ["Lowers LDL cholesterol", "Raises HDL", "Cardiovascular protection"],
    interactions: ["Grapefruit juice (increased levels)", "Amiodarone (myopathy risk)", "Clarithromycin (toxicity risk)"],
    elderlyConsideration: "Generally safe; monitor for muscle pain",
    category: "Statin"
  },
  "Simvastatin": {
    diseases: ["High Cholesterol", "Cardiovascular Disease Prevention"],
    benefits: ["Lowers LDL cholesterol", "Reduces triglycerides", "Prevents heart disease"],
    interactions: ["Grapefruit juice (high interaction)", "Macrolides (interaction)", "Amlodipine (increased levels)"],
    elderlyConsideration: "Higher risk of muscle damage; monitor closely",
    category: "Statin"
  },

  // Respiratory Medications
  "Salbutamol": {
    diseases: ["Asthma", "COPD", "Acute Bronchospasm"],
    benefits: ["Rapid bronchodilation", "Relieves shortness of breath", "Fast-acting"],
    interactions: ["Beta-blockers (reduced effectiveness)", "Tricyclic antidepressants (increased cardiac effects)"],
    elderlyConsideration: "Monitor heart rate; use caution in heart disease",
    category: "Beta-2 Agonist"
  },
  "Montelukast": {
    diseases: ["Asthma", "Allergic Rhinitis"],
    benefits: ["Asthma control", "Allergy symptom relief", "Oral tablet"],
    interactions: ["Phenobarbital (reduced effectiveness)"],
    elderlyConsideration: "Generally safe; behavioral changes rare",
    category: "Leukotriene Inhibitor"
  },
  "Theophylline": {
    diseases: ["Asthma", "COPD"],
    benefits: ["Bronchodilation", "Anti-inflammatory", "Oral form"],
    interactions: ["Ciprofloxacin (increased levels)", "Erythromycin (increased toxicity)", "Smoking (reduced effect)"],
    elderlyConsideration: "Narrow therapeutic window; frequent monitoring",
    category: "Xanthine Bronchodilator"
  },

  // Corticosteroids
  "Prednisone": {
    diseases: ["Inflammation", "Autoimmune Disease", "Asthma Exacerbation"],
    benefits: ["Powerful anti-inflammatory", "Immunosuppressive", "Multiple formulations"],
    interactions: ["NSAIDs (GI bleeding risk)", "Diabetic drugs (reduced control)", "Diuretics (hypokalemia risk)"],
    elderlyConsideration: "Increased infection risk; monitor glucose and BP",
    category: "Corticosteroid"
  },
  "Dexamethasone": {
    diseases: ["Severe Inflammation", "Adrenal Crisis", "Brain Edema"],
    benefits: ["Long-acting corticosteroid", "Potent anti-inflammatory", "Multiple routes"],
    interactions: ["NSAIDs (GI bleeding risk)", "Diabetic drugs (reduced control)", "Vaccines - avoid with live vaccines"],
    elderlyConsideration: "Risk of infections, hypertension; close monitoring needed",
    category: "Corticosteroid"
  },

  // Antihistamines
  "Cetirizine": {
    diseases: ["Allergies", "Allergic Rhinitis", "Urticaria"],
    benefits: ["Allergy symptom relief", "Non-sedating", "Long-acting"],
    interactions: ["Alcohol (increased drowsiness)", "CNS depressants (additive effects)"],
    elderlyConsideration: "Generally safe; minimal side effects",
    category: "Second-generation Antihistamine"
  },
  "Loratadine": {
    diseases: ["Allergies", "Allergic Rhinitis", "Urticaria"],
    benefits: ["Allergy relief", "Non-sedating", "Once-daily dosing"],
    interactions: ["CNS depressants (additive effects)", "Ketoconazole (increased levels)"],
    elderlyConsideration: "Safe; minimal sedation",
    category: "Second-generation Antihistamine"
  },

  // Psychiatric Medications
  "Fluoxetine": {
    diseases: ["Depression", "Anxiety", "OCD", "Panic Disorder"],
    benefits: ["Mood improvement", "Anxiety reduction", "Long half-life"],
    interactions: ["MAOIs (serotonin syndrome risk)", "Tramadol (serotonin syndrome)", "NSAIDs (bleeding risk)"],
    elderlyConsideration: "Risk of hyponatremia; monitor sodium levels",
    category: "SSRI"
  },
  "Sertraline": {
    diseases: ["Depression", "Anxiety", "OCD", "PTSD"],
    benefits: ["Mood improvement", "Anxiety control", "Lower drug interactions than fluoxetine"],
    interactions: ["NSAIDs (bleeding risk)", "Tramadol (serotonin syndrome)", "MAOIs (contraindicated)"],
    elderlyConsideration: "Generally well-tolerated; monitor for hyponatremia",
    category: "SSRI"
  },
  "Escitalopram": {
    diseases: ["Depression", "Anxiety", "Panic Disorder"],
    benefits: ["Effective mood elevation", "Anxiety reduction", "Good tolerability"],
    interactions: ["QT-prolonging drugs (arrhythmia risk)", "Tramadol (serotonin syndrome)", "MAOIs (contraindicated)"],
    elderlyConsideration: "Risk of QT prolongation; monitor ECG",
    category: "SSRI"
  },
  "Diazepam": {
    diseases: ["Anxiety", "Panic Disorder", "Muscle Spasm", "Alcohol Withdrawal"],
    benefits: ["Rapid anxiety relief", "Muscle relaxation", "Seizure prevention"],
    interactions: ["Alcohol (severe CNS depression)", "Opioids (respiratory depression)", "CNS depressants (additive)"],
    elderlyConsideration: "High fall risk; increased dependency risk",
    category: "Benzodiazepine"
  },
  "Alprazolam": {
    diseases: ["Anxiety", "Panic Disorder"],
    benefits: ["Rapid anxiety relief", "Short-acting", "Effective for panic"],
    interactions: ["Alcohol (CNS depression)", "Opioids (respiratory depression)", "CNS depressants (additive effects)"],
    elderlyConsideration: "High addiction potential; shorter course recommended",
    category: "Benzodiazepine"
  },

  // Endocrine Medications
  "Levothyroxine": {
    diseases: ["Hypothyroidism", "Thyroid Hormone Replacement"],
    benefits: ["Thyroid hormone replacement", "TSH normalization", "Long-acting"],
    interactions: ["Iron supplements (reduced absorption)", "Calcium (reduced absorption)", "Coffee/tea (reduced absorption)"],
    elderlyConsideration: "Requires dose adjustment; monitor TSH",
    category: "Thyroid Hormone"
  },

  // Erectile Dysfunction Medications
  "Sildenafil": {
    diseases: ["Erectile Dysfunction", "Pulmonary Hypertension"],
    benefits: ["Erectile function improvement", "Symptom relief", "Rapid onset"],
    interactions: ["Nitrates (dangerous BP drop - contraindicated)", "Alpha-blockers (hypotension risk)"],
    elderlyConsideration: "Risk of hypotension; contraindicated with nitrates",
    category: "PDE5 Inhibitor"
  },
  "Tadalafil": {
    diseases: ["Erectile Dysfunction", "Benign Prostate Hyperplasia"],
    benefits: ["Erectile function improvement", "Long-acting (36 hours)", "BPH symptom relief"],
    interactions: ["Nitrates (contraindicated)", "Alpha-blockers (hypotension risk)"],
    elderlyConsideration: "Risk of hypotension; careful patient selection",
    category: "PDE5 Inhibitor"
  },

  // Rheumatology/Immunology
  "Methotrexate": {
    diseases: ["Rheumatoid Arthritis", "Cancer", "Autoimmune Disease"],
    benefits: ["Reduces inflammation", "Slows disease progression", "Immunosuppressive"],
    interactions: ["NSAIDs (toxicity risk)", "Penicillins (increased toxicity)", "Trimethoprim (toxicity risk)"],
    elderlyConsideration: "Requires regular monitoring; check liver and kidney function",
    category: "Immunosuppressant"
  },
  "Allopurinol": {
    diseases: ["Gout", "Gout Prophylaxis", "Hyperuricemia"],
    benefits: ["Uric acid reduction", "Gout prevention", "Long-term management"],
    interactions: ["Azathioprine (toxicity risk)", "Amoxicillin (rash risk)", "Thiazide diuretics (interaction)"],
    elderlyConsideration: "Increased hypersensitivity risk; start low dose",
    category: "Xanthine Oxidase Inhibitor"
  },
  "Colchicine": {
    diseases: ["Gout", "Acute Gout Attack", "Pericarditis"],
    benefits: ["Acute gout symptom relief", "Gout prevention", "Anti-inflammatory"],
    interactions: ["Macrolides (toxicity risk)", "NSAIDs (GI risk)", "Diuretics (hyperuricemia)"],
    elderlyConsideration: "Increased GI side effects; monitor kidney function",
    category: "Anti-inflammatory"
  },
  "Azathioprine": {
    diseases: ["Autoimmune Disease", "Transplant Rejection Prevention"],
    benefits: ["Immunosuppression", "Autoimmune disease management"],
    interactions: ["Allopurinol (toxicity risk)", "NSAIDs (interaction)"],
    elderlyConsideration: "Increased infection risk; monitor blood counts",
    category: "Immunosuppressant"
  },
  "Tacrolimus": {
    diseases: ["Transplant Rejection Prevention", "Autoimmune Disease"],
    benefits: ["Potent immunosuppression", "Prevents organ rejection"],
    interactions: ["Grapefruit juice (increased levels)", "Macrolides (toxicity risk)", "Azoles (interaction)"],
    elderlyConsideration: "Requires therapeutic drug monitoring",
    category: "Calcineurin Inhibitor"
  },
  "Cyclosporine": {
    diseases: ["Transplant Rejection Prevention", "Autoimmune Disease"],
    benefits: ["Effective immunosuppression", "Organ rejection prevention"],
    interactions: ["Grapefruit juice (increased levels)", "Macrolides (toxicity)", "Statins (myopathy risk)"],
    elderlyConsideration: "Monitor kidney function and blood pressure",
    category: "Immunosuppressant"
  },
  "Diclofenac": {
    diseases: ["Pain", "Inflammation", "Arthritis"],
    benefits: ["Pain relief", "Reduces inflammation", "Improves joint mobility"],
    interactions: ["Warfarin (bleeding risk)", "ACE inhibitors (reduced effect)", "Corticosteroids (GI risk)"],
    elderlyConsideration: "Higher GI bleeding and kidney risk; use with caution",
    category: "NSAID"
  },
  "Naproxen": {
    diseases: ["Pain", "Inflammation", "Arthritis"],
    benefits: ["Pain relief", "Anti-inflammatory", "Longer action than ibuprofen"],
    interactions: ["Warfarin (bleeding risk)", "SSRIs (bleeding risk)", "Diuretics (reduced effect)"],
    elderlyConsideration: "Use caution in older adults; gastrointestinal protection may be needed",
    category: "NSAID"
  },
  "Ketorolac": {
    diseases: ["Severe Pain", "Postoperative Pain"],
    benefits: ["Strong short-term pain relief", "Useful after surgery"],
    interactions: ["Anticoagulants (bleeding risk)", "Other NSAIDs (increased toxicity)", "SSRIs (bleeding risk)"],
    elderlyConsideration: "Not recommended for long-term use; high bleeding risk",
    category: "NSAID"
  },
  "Mefenamic Acid": {
    diseases: ["Pain", "Dysmenorrhea", "Headache"],
    benefits: ["Pain relief", "Reduces menstrual cramps", "Anti-inflammatory"],
    interactions: ["Warfarin (bleeding risk)", "Other NSAIDs (increased toxicity)", "SSRIs (bleeding risk)"],
    elderlyConsideration: "Increased GI bleeding risk; use short-term only",
    category: "NSAID"
  },
  "Pregabalin": {
    diseases: ["Neuropathic Pain", "Chronic Pain", "Fibromyalgia"],
    benefits: ["Reduces nerve pain", "Improves sleep", "Less risk of respiratory depression than opioids"],
    interactions: ["Benzodiazepines (sedation)", "Opioids (respiratory depression)", "Alcohol (sedation)"],
    elderlyConsideration: "Dosing may need reduction; monitor for dizziness",
    category: "Neuropathic Analgesic"
  },
  "Gabapentin": {
    diseases: ["Neuropathic Pain", "Chronic Pain", "Fibromyalgia"],
    benefits: ["Reduces nerve pain", "Improves sleep quality", "Non-opioid"],
    interactions: ["Antacids (reduced absorption)", "Alcohol (sedation)", "CNS depressants (additive effects)"],
    elderlyConsideration: "Start low and slow; watch for dizziness/falls",
    category: "Neuropathic Analgesic"
  },
  "Glibenclamide": {
    diseases: ["Type 2 Diabetes", "Diabetes"],
    benefits: ["Lowers blood sugar", "Useful in oral therapy", "Long-acting"],
    interactions: ["Alcohol (hypoglycemia risk)", "Beta-blockers (mask hypoglycemia)", "Corticosteroids (hyperglycemia)"],
    elderlyConsideration: "Higher hypoglycemia risk; use with care",
    category: "Sulfonylurea"
  },
  "Glimepiride": {
    diseases: ["Type 2 Diabetes", "Diabetes"],
    benefits: ["Lowers blood sugar", "Once-daily dosing", "Improves insulin secretion"],
    interactions: ["Alcohol (hypoglycemia)", "Beta-blockers (mask signs of hypoglycemia)", "Corticosteroids (reduced effect)"],
    elderlyConsideration: "Start with low dose; monitor glucose levels",
    category: "Sulfonylurea"
  },
  "Sitagliptin": {
    diseases: ["Type 2 Diabetes", "Diabetes"],
    benefits: ["Improves blood sugar control", "Low hypoglycemia risk", "Weight neutral"],
    interactions: ["Corticosteroids (reduced effect)", "Diuretics (electrolyte changes)"],
    elderlyConsideration: "Generally well tolerated in older adults",
    category: "DPP-4 Inhibitor"
  },
  "Pioglitazone": {
    diseases: ["Type 2 Diabetes", "Diabetes"],
    benefits: ["Improves insulin sensitivity", "Lowers blood sugar", "Cardiovascular benefits in some patients"],
    interactions: ["Insulin (hypoglycemia risk)", "Corticosteroids (reduced effect)"],
    elderlyConsideration: "Monitor for fluid retention and heart failure",
    category: "Thiazolidinedione"
  },
  "Empagliflozin": {
    diseases: ["Type 2 Diabetes", "Diabetes"],
    benefits: ["Lowers blood sugar", "May reduce cardiovascular risk", "Weight loss benefit"],
    interactions: ["Diuretics (dehydration)", "Insulin (hypoglycemia risk)"],
    elderlyConsideration: "Watch for dehydration and kidney function",
    category: "SGLT2 Inhibitor"
  },
  "Carvedilol": {
    diseases: ["Hypertension", "Heart Failure", "Angina"],
    benefits: ["Blood pressure control", "Heart failure benefit", "Anti-anginal"],
    interactions: ["Calcium channel blockers (bradycardia)", "Insulin (hypoglycemia mask)", "Digoxin (bradycardia)"],
    elderlyConsideration: "May cause dizziness; monitor blood pressure",
    category: "Beta-blocker"
  },
  "Bisoprolol": {
    diseases: ["Hypertension", "Heart Failure", "Angina"],
    benefits: ["Blood pressure reduction", "Cardioprotective", "Long-acting dosing"],
    interactions: ["Calcium channel blockers (bradycardia)", "NSAIDs (reduced effect)", "Insulin (masked hypoglycemia)"],
    elderlyConsideration: "Use cautiously in asthma/COPD; monitor heart rate",
    category: "Beta-blocker"
  },
  "Hydralazine": {
    diseases: ["Hypertension", "Heart Failure"],
    benefits: ["Strong blood pressure reduction", "Useful in resistant hypertension"],
    interactions: ["Beta-blockers (tachycardia)", "Diuretics (electrolyte imbalance)"],
    elderlyConsideration: "May cause headache and tachycardia; use with caution",
    category: "Vasodilator"
  },
  "Dabigatran": {
    diseases: ["Atrial Fibrillation", "Venous Thromboembolism", "Stroke Prevention"],
    benefits: ["Oral anticoagulation", "No routine INR monitoring", "Predictable effect"],
    interactions: ["P-gp inhibitors (increased levels)", "NSAIDs (bleeding risk)", "Anticoagulants (bleeding risk)"],
    elderlyConsideration: "Higher bleeding risk; monitor kidney function",
    category: "Direct Thrombin Inhibitor"
  },
  "Rivaroxaban": {
    diseases: ["Atrial Fibrillation", "Venous Thromboembolism", "Stroke Prevention"],
    benefits: ["Oral anticoagulation", "Fixed dosing", "Rapid onset"],
    interactions: ["CYP3A4 inhibitors (increased bleeding)", "NSAIDs (bleeding risk)", "Antiplatelets (bleeding risk)"],
    elderlyConsideration: "Monitor for bleeding; adjust with renal impairment",
    category: "Factor Xa Inhibitor"
  },
  "Esomeprazole": {
    diseases: ["GERD", "Peptic Ulcer Disease", "Acid Reflux"],
    benefits: ["Reduces stomach acid", "Improves healing", "Longer duration"],
    interactions: ["Clopidogrel (reduced effectiveness)", "Warfarin (variable INR)", "Ketoconazole (reduced absorption)"],
    elderlyConsideration: "Monitor long-term use for B12/calcium depletion",
    category: "Proton Pump Inhibitor"
  },
  "Co-amoxiclav": {
    diseases: ["Bacterial Infection", "Respiratory Infection", "UTI"],
    benefits: ["Broad-spectrum coverage", "Beta-lactamase protection", "Good oral absorption"],
    interactions: ["Warfarin (INR changes)", "Allopurinol (rash risk)", "Methotrexate (toxicity)"],
    elderlyConsideration: "Adjust dose by kidney function; monitor GI tolerance",
    category: "Beta-lactam/Beta-lactamase Inhibitor"
  },
  "Cefixime": {
    diseases: ["Bacterial Infection", "Respiratory Infection", "UTI"],
    benefits: ["Good oral coverage", "Convenient dosing", "Well-tolerated"],
    interactions: ["Probenecid (increased levels)", "Antacids (reduced absorption)"],
    elderlyConsideration: "Adjust dose for renal impairment",
    category: "Third-generation Cephalosporin"
  },
  "Ceftriaxone": {
    diseases: ["Bacterial Infection", "Respiratory Infection", "Sepsis"],
    benefits: ["Strong broad-spectrum coverage", "Once-daily dosing", "IV/IM use"],
    interactions: ["Calcium-containing solutions (precipitation)", "Loop diuretics (renal risk)"],
    elderlyConsideration: "Use with caution in kidney impairment",
    category: "Third-generation Cephalosporin"
  },
  "Cefuroxime": {
    diseases: ["Bacterial Infection", "Respiratory Infection", "Throat Infections"],
    benefits: ["Effective oral or IV option", "Good respiratory coverage"],
    interactions: ["Probenecid (increased levels)", "Antacids (reduced absorption)"],
    elderlyConsideration: "Adjust dose if renal function is reduced",
    category: "Second-generation Cephalosporin"
  },
  "Clarithromycin": {
    diseases: ["Respiratory Infection", "Bacterial Infection", "Skin Infection"],
    benefits: ["Good respiratory coverage", "Once- or twice-daily dosing"],
    interactions: ["Statins (myopathy risk)", "Warfarin (INR changes)", "Rifampin (reduced levels)"],
    elderlyConsideration: "Monitor for QT prolongation",
    category: "Macrolide Antibiotic"
  },
  "Levofloxacin": {
    diseases: ["Respiratory Infection", "UTI", "Bacterial Infection"],
    benefits: ["Broad-spectrum coverage", "Good tissue penetration"],
    interactions: ["Antacids (reduced absorption)", "Warfarin (INR changes)", "Corticosteroids (tendon risk)"],
    elderlyConsideration: "Avoid if possible; tendon rupture risk",
    category: "Fluoroquinolone"
  },
  "Moxifloxacin": {
    diseases: ["Respiratory Infection", "Bacterial Infection"],
    benefits: ["Broad respiratory coverage", "Once-daily dosing"],
    interactions: ["QT-prolonging drugs (arrhythmia risk)", "Antacids (reduced absorption)"],
    elderlyConsideration: "Monitor for QT prolongation",
    category: "Fluoroquinolone"
  },
  "Amikacin": {
    diseases: ["Serious Bacterial Infection", "Sepsis", "Resistant UTI"],
    benefits: ["Powerful gram-negative coverage", "Useful in resistant infections"],
    interactions: ["Loop diuretics (ototoxicity)", "Muscle relaxants (enhanced effect)"],
    elderlyConsideration: "Monitor kidney function and hearing",
    category: "Aminoglycoside"
  },
  "Vancomycin": {
    diseases: ["Serious Bacterial Infection", "MRSA", "Sepsis"],
    benefits: ["Effective against resistant gram-positive bacteria", "IV therapy for severe infections"],
    interactions: ["Aminoglycosides (ototoxicity)", "Loop diuretics (kidney risk)"],
    elderlyConsideration: "Requires kidney function monitoring",
    category: "Glycopeptide Antibiotic"
  },
  "Fluconazole": {
    diseases: ["Fungal Infection", "Yeast Infection"],
    benefits: ["Oral antifungal", "Good systemic coverage"],
    interactions: ["Warfarin (INR changes)", "Statins (myopathy risk)", "Rifampin (reduced levels)"],
    elderlyConsideration: "Monitor liver function",
    category: "Azole Antifungal"
  },
  "Nystatin": {
    diseases: ["Fungal Infection", "Oral Thrush", "Skin Yeast Infection"],
    benefits: ["Topical/oral antifungal", "Minimal systemic absorption"],
    interactions: ["None notable due to low absorption"],
    elderlyConsideration: "Generally safe",
    category: "Polyene Antifungal"
  },
  "Terbinafine": {
    diseases: ["Fungal Infection", "Tinea", "Dermatophytosis"],
    benefits: ["Effective against dermatophytes", "Oral or topical use"],
    interactions: ["Statins (myopathy risk)", "CYP inhibitors (level changes)"],
    elderlyConsideration: "Monitor liver function",
    category: "Allylamine Antifungal"
  },
  "Itraconazole": {
    diseases: ["Fungal Infection", "Onychomycosis"],
    benefits: ["Systemic antifungal", "Effective for deep infections"],
    interactions: ["Statins (myopathy)", "Warfarin (INR changes)", "CYP3A4 inhibitors"],
    elderlyConsideration: "Monitor liver function and heart failure risk",
    category: "Azole Antifungal"
  },
  "Albendazole": {
    diseases: ["Parasitic Infection", "Helminth Infection"],
    benefits: ["Broad anti-parasitic coverage", "Useful for multiple worms"],
    interactions: ["Cimetidine (increased levels)", "Dexamethasone (increased toxicity)"],
    elderlyConsideration: "Generally safe; monitor liver enzymes if prolonged use",
    category: "Antiparasitic"
  },
  "Ivermectin": {
    diseases: ["Parasitic Infection", "Strongyloidiasis", "Scabies"],
    benefits: ["Powerful antiparasitic", "Single-dose option for many infections"],
    interactions: ["Warfarin (INR changes)", "CNS depressants (added sedation)"],
    elderlyConsideration: "Use caution with neurologic disease",
    category: "Antiparasitic"
  },
  "Hydrocortisone": {
    diseases: ["Inflammation", "Allergic Reaction", "Adrenal Insufficiency"],
    benefits: ["Mild anti-inflammatory", "Useful for skin and systemic disease"],
    interactions: ["NSAIDs (GI risk)", "Diabetic drugs (reduced control)"],
    elderlyConsideration: "Use lowest effective dose; monitor glucose",
    category: "Corticosteroid"
  },
  "Budesonide": {
    diseases: ["Asthma", "COPD", "Allergic Rhinitis"],
    benefits: ["Inhaled anti-inflammatory", "Reduces airway swelling", "Low systemic exposure"],
    interactions: ["CYP3A4 inhibitors (increased levels)"],
    elderlyConsideration: "Generally safe; monitor for oral candidiasis",
    category: "Inhaled Corticosteroid"
  },
  "Tiotropium": {
    diseases: ["COPD", "Asthma"],
    benefits: ["Long-acting bronchodilation", "Improves breathing and reduces exacerbations"],
    interactions: ["Other anticholinergics (additive effects)"],
    elderlyConsideration: "May cause dry mouth and urinary retention",
    category: "Long-acting Muscarinic Antagonist"
  },
  "Fluticasone": {
    diseases: ["Asthma", "COPD", "Allergic Rhinitis"],
    benefits: ["Inhaled anti-inflammatory", "Reduces airway inflammation"],
    interactions: ["CYP3A4 inhibitors (increased levels)"],
    elderlyConsideration: "Generally safe; monitor for oral candidiasis",
    category: "Inhaled Corticosteroid"
  },
  "Salmeterol": {
    diseases: ["Asthma", "COPD"],
    benefits: ["Long-acting bronchodilation", "Improves airflow"],
    interactions: ["Beta-blockers (reduced effect)", "MAOIs (hypertension risk)"],
    elderlyConsideration: "Monitor heart rate and tremor",
    category: "Long-acting Beta-2 Agonist"
  },
  "Formoterol": {
    diseases: ["Asthma", "COPD"],
    benefits: ["Long-acting bronchodilation", "Fast onset and long duration"],
    interactions: ["Beta-blockers (reduced effect)", "MAOIs (hypertension risk)"],
    elderlyConsideration: "Monitor for tremor and palpitations",
    category: "Long-acting Beta-2 Agonist"
  },
  "Fexofenadine": {
    diseases: ["Allergies", "Allergic Rhinitis", "Urticaria"],
    benefits: ["Non-sedating allergy relief", "Once-daily dosing"],
    interactions: ["Antacids (reduced absorption)", "Erythromycin (increased levels)"],
    elderlyConsideration: "Generally well-tolerated",
    category: "Second-generation Antihistamine"
  },
  "Levocetirizine": {
    diseases: ["Allergies", "Allergic Rhinitis", "Urticaria"],
    benefits: ["Non-sedating allergy relief", "Fast onset", "Once-daily dosing"],
    interactions: ["Alcohol (increased drowsiness)", "CNS depressants (additive)"],
    elderlyConsideration: "Generally safe; watch for mild drowsiness",
    category: "Second-generation Antihistamine"
  },
  "Clonazepam": {
    diseases: ["Anxiety", "Panic Disorder", "Seizure Disorder"],
    benefits: ["Reduces panic symptoms", "Seizure control", "Long-acting"],
    interactions: ["Alcohol (sedation)", "Opioids (respiratory depression)", "CNS depressants (additive)"],
    elderlyConsideration: "Higher risk of falls and confusion",
    category: "Benzodiazepine"
  },
  "Olanzapine": {
    diseases: ["Schizophrenia", "Bipolar Disorder", "Psychosis"],
    benefits: ["Reduces psychotic symptoms", "Mood stabilization"],
    interactions: ["CNS depressants (sedation)", "Antihypertensives (hypotension)"],
    elderlyConsideration: "Risk of metabolic changes and sedation",
    category: "Atypical Antipsychotic"
  },
  "Risperidone": {
    diseases: ["Schizophrenia", "Bipolar Disorder", "Irritability"],
    benefits: ["Improves mood and behavior", "Reduces psychotic symptoms"],
    interactions: ["CNS depressants (sedation)", "Antihypertensives (hypotension)"],
    elderlyConsideration: "Monitor for movement disorders",
    category: "Atypical Antipsychotic"
  },
  "Haloperidol": {
    diseases: ["Psychosis", "Delirium", "Acute Mania"],
    benefits: ["Rapid reduction in agitation", "Treats psychotic symptoms"],
    interactions: ["CNS depressants (sedation)", "QT-prolonging drugs (arrhythmia risk)"],
    elderlyConsideration: "Increased fall risk and sedation",
    category: "Typical Antipsychotic"
  },
  "Nitrofurantoin": {
    diseases: ["UTI", "Urinary Tract Infection"],
    benefits: ["Targeted UTI therapy", "Low resistance in many cases"],
    interactions: ["Antacids (reduced absorption)", "Probenecid (decreased elimination)"],
    elderlyConsideration: "Avoid in severe kidney impairment",
    category: "Urinary Antibacterial"
  }
};

/**
 * Disease to suitable medicines mapping
 */
const diseaseToMedicines = {
  "Pain": ["Paracetamol", "Ibuprofen", "Aspirin", "Diclofenac", "Naproxen", "Ketorolac", "Mefenamic Acid", "Tramadol", "Morphine", "Codeine", "Pregabalin", "Gabapentin"],
  "Fever": ["Paracetamol", "Ibuprofen"],
  "Headache": ["Paracetamol", "Ibuprofen", "Aspirin"],
  "Inflammation": ["Ibuprofen", "Aspirin", "Diclofenac", "Naproxen", "Prednisone", "Dexamethasone", "Budesonide", "Fluticasone", "Hydrocortisone"],
  "Arthritis": ["Ibuprofen", "Diclofenac", "Prednisone", "Methotrexate", "Allopurinol", "Colchicine", "Pregabalin", "Gabapentin"],
  "Diabetes": ["Metformin", "Glibenclamide", "Glimepiride", "Sitagliptin", "Pioglitazone", "Empagliflozin", "Insulin"],
  "Type 2 Diabetes": ["Metformin", "Glibenclamide", "Glimepiride", "Sitagliptin", "Pioglitazone", "Empagliflozin", "Insulin"],
  "Type 1 Diabetes": ["Insulin"],
  "Hypertension": ["Losartan", "Lisinopril", "Amlodipine", "Metoprolol", "Propranolol", "Carvedilol", "Bisoprolol", "Hydralazine", "Clonidine", "Furosemide", "Hydrochlorothiazide", "Spironolactone"],
  "Heart Disease": ["Aspirin", "Metoprolol", "Propranolol", "Carvedilol", "Bisoprolol", "Atorvastatin", "Rosuvastatin", "Simvastatin", "Clopidogrel", "Nitroglycerin", "Verapamil", "Diltiazem", "Digoxin", "Amiodarone"],
  "Heart Failure": ["Digoxin", "Spironolactone", "Losartan", "Lisinopril", "Furosemide", "Carvedilol", "Bisoprolol"],
  "Atrial Fibrillation": ["Warfarin", "Digoxin", "Metoprolol", "Amiodarone", "Dabigatran", "Rivaroxaban", "Bisoprolol"],
  "Arrhythmias": ["Digoxin", "Amiodarone", "Verapamil", "Diltiazem", "Metoprolol", "Propranolol"],
  "Angina": ["Nitroglycerin", "Amlodipine", "Metoprolol", "Propranolol", "Carvedilol", "Bisoprolol"],
  "Blood Clots": ["Warfarin", "Heparin", "Clopidogrel", "Enoxaparin", "Aspirin", "Dabigatran", "Rivaroxaban"],
  "Stroke Prevention": ["Aspirin", "Warfarin", "Clopidogrel", "Dabigatran", "Rivaroxaban"],
  "GERD": ["Omeprazole", "Pantoprazole", "Ranitidine", "Esomeprazole"],
  "Peptic Ulcer": ["Omeprazole", "Pantoprazole", "Ranitidine", "Esomeprazole"],
  "Acid Reflux": ["Omeprazole", "Pantoprazole", "Ranitidine", "Esomeprazole"],
  "Bacterial Infection": ["Amoxicillin", "Co-amoxiclav", "Azithromycin", "Ciprofloxacin", "Cefixime", "Ceftriaxone", "Doxycycline", "Metronidazole", "Cefuroxime", "Clarithromycin", "Levofloxacin", "Moxifloxacin", "Cephalexin", "Amikacin", "Vancomycin"],
  "Ear Infections": ["Amoxicillin", "Azithromycin", "Cefixime", "Cephalexin"],
  "Throat Infections": ["Amoxicillin", "Azithromycin", "Cefixime", "Cefuroxime"],
  "Respiratory Infection": ["Azithromycin", "Ciprofloxacin", "Doxycycline", "Levofloxacin", "Moxifloxacin", "Ceftriaxone", "Clarithromycin"],
  "UTI": ["Ciprofloxacin", "Cephalexin", "Co-amoxiclav", "Nitrofurantoin", "Amikacin"],
  "Urinary Tract Infection": ["Ciprofloxacin", "Cephalexin", "Co-amoxiclav", "Nitrofurantoin", "Amikacin"],
  "Asthma": ["Salbutamol", "Montelukast", "Theophylline", "Budesonide", "Tiotropium", "Fluticasone", "Salmeterol", "Formoterol"],
  "COPD": ["Salbutamol", "Theophylline", "Tiotropium", "Budesonide", "Fluticasone", "Salmeterol", "Formoterol"],
  "High Cholesterol": ["Atorvastatin", "Simvastatin", "Rosuvastatin"],
  "Allergies": ["Cetirizine", "Loratadine", "Fexofenadine", "Levocetirizine"],
  "Allergic Rhinitis": ["Cetirizine", "Loratadine", "Fexofenadine", "Levocetirizine", "Montelukast"],
  "Urticaria": ["Cetirizine", "Loratadine", "Fexofenadine", "Levocetirizine"],
  "Nausea": ["Ondansetron", "Domperidone"],
  "Vomiting": ["Ondansetron", "Domperidone"],
  "Depression": ["Fluoxetine", "Sertraline", "Escitalopram", "Amitriptyline"],
  "Anxiety": ["Escitalopram", "Diazepam", "Alprazolam", "Sertraline", "Propranolol"],
  "OCD": ["Fluoxetine", "Sertraline", "Escitalopram"],
  "Panic Disorder": ["Sertraline", "Escitalopram", "Alprazolam", "Propranolol"],
  "PTSD": ["Sertraline", "Fluoxetine"],
  "Muscle Spasm": ["Diazepam", "Tramadol", "Diclofenac"],
  "Alcohol Withdrawal": ["Diazepam"],
  "Gout": ["Allopurinol", "Colchicine", "Prednisone"],
  "Gout Prophylaxis": ["Allopurinol"],
  "Hyperuricemia": ["Allopurinol"],
  "Hypothyroidism": ["Levothyroxine"],
  "Thyroid Hormone Replacement": ["Levothyroxine"],
  "Erectile Dysfunction": ["Sildenafil", "Tadalafil"],
  "Pulmonary Hypertension": ["Sildenafil"],
  "Benign Prostate Hyperplasia": ["Tadalafil"],
  "Rheumatoid Arthritis": ["Methotrexate", "Allopurinol", "Prednisone"],
  "Autoimmune Disease": ["Methotrexate", "Azathioprine", "Tacrolimus", "Cyclosporine", "Prednisone"],
  "Acne": ["Doxycycline"],
  "Tuberculosis": ["Rifampin"],
  "Parasitic Infection": ["Metronidazole", "Albendazole", "Ivermectin"],
  "C. difficile Infection": ["Metronidazole"],
  "Lyme Disease": ["Doxycycline"],
  "Cancer": ["Methotrexate"],
  "Transplant Rejection Prevention": ["Tacrolimus", "Cyclosporine", "Azathioprine"],
  "Pericarditis": ["Colchicine", "Prednisone"],
  "Kidney Protection": ["Losartan", "Lisinopril"],
  "Edema": ["Furosemide", "Hydrochlorothiazide", "Spironolactone"],
  "Adrenal Crisis": ["Dexamethasone"],
  "Brain Edema": ["Dexamethasone"],
  "Acute Bronchospasm": ["Salbutamol", "Formoterol", "Salmeterol"],
  "Acute Coronary Syndrome": ["Aspirin", "Heparin", "Clopidogrel", "Enoxaparin"],
  "Venous Thromboembolism": ["Warfarin", "Heparin", "Enoxaparin", "Dabigatran", "Rivaroxaban"],
  "Heart Valve Replacement": ["Warfarin"],
  "Acute Gout Attack": ["Colchicine"],
  "Chronic Pain": ["Amitriptyline", "Morphine", "Tramadol", "Pregabalin", "Gabapentin", "Diclofenac", "Naproxen"],
  "Migraine Prevention": ["Amitriptyline"],
  "Acidity": ["Omeprazole", "Pantoprazole", "Ranitidine", "Esomeprazole"],
  "Fungal Infection": ["Fluconazole", "Nystatin", "Terbinafine", "Itraconazole"],
  "Skin Infection": ["Cephalexin", "Clarithromycin", "Amoxicillin", "Cefixime"],
  "Urinary Tract Infection": ["Ciprofloxacin", "Cephalexin", "Co-amoxiclav", "Nitrofurantoin", "Amikacin"]
};

/**
 * Resolve typed disease or symptom input into a list of recommended medicine names.
 */
function resolveMedicineNamesFromDiseaseInput(diseaseInput) {
  const query = diseaseInput.trim().toLowerCase();
  if (!query) {
    return [];
  }

  // Exact key match first
  const exactKey = Object.keys(diseaseToMedicines).find(key => key.toLowerCase() === query);
  if (exactKey) {
    return Array.from(new Set(diseaseToMedicines[exactKey].filter(name => medicineDatabase[name])));
  }

  const matchedNames = new Set();
  Object.entries(diseaseToMedicines).forEach(([key, medicines]) => {
    const keyLower = key.toLowerCase();
    if (keyLower.includes(query) || query.includes(keyLower)) {
      medicines.forEach(name => {
        if (medicineDatabase[name]) {
          matchedNames.add(name);
        }
      });
    }
  });

  if (matchedNames.size === 0) {
    Object.entries(medicineDatabase).forEach(([name, info]) => {
      if (info.diseases.some(d => d.toLowerCase().includes(query))) {
        matchedNames.add(name);
      }
    });
  }

  return Array.from(matchedNames);
}

/**
 * Get medicine recommendations based on age, disease, weight, and blood pressure
 */
function getMedicineRecommendations(age, disease, weight, bp) {
  const isElderly = age !== null && age > 60;
  const lowWeight = weight !== null && weight < 60; // heuristic: <60kg labelled as low
  const highWeight = weight !== null && weight > 120; // heuristic: >120kg labelled as high

  let recommendedMedicines = resolveMedicineNamesFromDiseaseInput(disease);

  if (isElderly) {
    const elderlyHighRisk = ["Diazepam", "Alprazolam", "Ibuprofen", "Morphine"];
    recommendedMedicines = recommendedMedicines.filter(med => !elderlyHighRisk.includes(med));
  }

  // Filter or annotate based on low weight
  const lowWeightHighRisk = ["Morphine", "Tramadol", "Codeine"];
  const results = recommendedMedicines.map(medicineName => {
    const base = medicineDatabase[medicineName] || {};
    const item = {
      name: medicineName,
      ...base,
      isElderly: isElderly,
      weightNote: null
    };

    if (lowWeight && lowWeightHighRisk.includes(medicineName)) {
      item.weightNote = 'Caution: low body weight (<60 kg) — may require lower starting dose or increased monitoring.';
    }

    if (highWeight) {
      item.weightNote = item.weightNote || 'Note: higher body weight (>120 kg) may require dose adjustments; consult a clinician.';
    }

    return item;
  });

  return results;
}

/**
 * Format recommendations as HTML
 */
function formatRecommendationsHTML(recommendations, age, disease, weight, bp) {
  if (!recommendations || recommendations.length === 0) {
    const agePart = age !== null ? ` aged ${age}` : '';
    return `<div class="alert alert-warning">
      <strong>No specific recommendations found for "${disease}"${agePart}.</strong><br>
      Please consult a healthcare provider for personalized medicine recommendations.
    </div>`;
  }

  const parts = [];
  if (age !== null) parts.push(`Age ${age}`);
  if (weight !== null) parts.push(`Weight ${weight} kg`);
  if (bp !== null) parts.push(`BP ${bp} mmHg`);
  const patientContext = parts.length ? ` (${parts.join(', ')})` : '';
  let html = `<div class="alert alert-info">
    <strong>✓ Medicine Recommendations for Condition: ${disease}${patientContext}</strong>`;
  
  if (age !== null && age > 60) {
    html += `<br><span style="color: #ff9800;">⚠ Elderly-adjusted recommendations (age > 60) - Safer alternatives prioritized</span>`;
  }
  html += `</div>`;

  recommendations.forEach((med, index) => {
    html += `
      <div class="medicine-card" style="border: 1px solid #3fbbc0; border-radius: 8px; padding: 18px; margin-bottom: 18px; background-color: #f0f8f9; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h5 style="color: #1a73e8; margin-bottom: 12px;"><strong>${index + 1}. ${med.name}</strong> <span style="font-size: 0.85em; color: #666; background: #e3f2fd; padding: 3px 8px; border-radius: 4px;">${med.category}</span></h5>
        
        <p style="margin-bottom: 10px;"><strong style="color: #0d47a1;">📋 Used For:</strong> ${med.diseases.join(", ")}</p>
        
        <p style="margin-bottom: 10px;"><strong style="color: #0d47a1;">✓ Main Benefits:</strong></p>
        <ul style="margin: 8px 0; padding-left: 20px; color: #2e7d32;">
          ${med.benefits.map(benefit => `<li style="margin-bottom: 5px;">${benefit}</li>`).join("")}
        </ul>
        
        <p style="margin-bottom: 10px;"><strong style="color: #d32f2f;">⚠ Drug Interactions (Avoid With):</strong></p>
        <ul style="margin: 8px 0; padding-left: 20px; color: #b71c1c;">
          ${med.interactions.map(interaction => `<li style="margin-bottom: 5px;">${interaction}</li>`).join("")}
        </ul>
        
        ${med.isElderly ? `<div style="background-color: #fff3cd; padding: 12px; border-radius: 5px; margin-top: 12px; border-left: 4px solid #ff9800;">
          <strong style="color: #ff6f00;">👴 Elderly Consideration (Age > 60):</strong><br>
          <span style="color: #e65100;">${med.elderlyConsideration}</span>
        </div>` : ""}

        ${med.weightNote ? `<div style="background-color: #e8f5e9; padding: 10px; border-radius: 5px; margin-top: 12px; border-left: 4px solid #2e7d32;">
          <strong style="color: #2e7d32;">⚖ Weight Note:</strong> <span style="color: #1b5e20;">${med.weightNote}</span>
        </div>` : ""}
      </div>
    `;
  });

  html += `<div class="alert alert-danger" style="margin-top: 20px; border-left: 4px solid #d32f2f;">
    <strong>⚠ IMPORTANT DISCLAIMER:</strong><br>
    This information is for educational purposes only. <strong>Always consult a licensed healthcare provider</strong> before starting any new medication. Do not use this as a substitute for professional medical advice. Individual medical conditions and contraindications may require alternative treatments.
  </div>`;

  return html;
}

function createOption(value) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = value;
  return option;
}

function populateMedicineSelectors() {
  const select1 = document.getElementById('medicine-1');
  const select2 = document.getElementById('medicine-2');
  const medicineList = document.getElementById('medicine-list');
  if (!select1 || !select2) return;

  const medicines = Object.keys(medicineDatabase).sort((a, b) => a.localeCompare(b));

  medicines.forEach((name) => {
    select1.appendChild(createOption(name));
    select2.appendChild(createOption(name));
    if (medicineList) {
      const item = document.createElement('li');
      item.textContent = name;
      medicineList.appendChild(item);
    }
  });
}

function updateSelectedMedicineBoxes() {
  const selected1 = document.getElementById('selected-medicine-1');
  const selected2 = document.getElementById('selected-medicine-2');
  const medicine1 = document.getElementById('medicine-1');
  const medicine2 = document.getElementById('medicine-2');

  if (selected1 && medicine1) {
    const hasValue = Boolean(medicine1.value);
    selected1.textContent = hasValue ? medicine1.value : 'No medicine selected yet.';
    selected1.classList.toggle('text-muted', !hasValue);
    const card1 = selected1.closest('.border');
    if (card1) {
      card1.style.borderColor = hasValue ? '#28a745' : '#dee2e6';
      card1.style.backgroundColor = hasValue ? '#e9f7ee' : '#ffffff';
    }
  }

  if (selected2 && medicine2) {
    const hasValue = Boolean(medicine2.value);
    selected2.textContent = hasValue ? medicine2.value : 'No medicine selected yet.';
    selected2.classList.toggle('text-muted', !hasValue);
    const card2 = selected2.closest('.border');
    if (card2) {
      card2.style.borderColor = hasValue ? '#28a745' : '#dee2e6';
      card2.style.backgroundColor = hasValue ? '#e9f7ee' : '#ffffff';
    }
  }
}

function formatBenefitSection(med, partnerName) {
  const directPartnerWarnings = med.interactions.filter(i => i.toLowerCase().includes(partnerName.toLowerCase()));
  const partnerNote = directPartnerWarnings.length
    ? `<div style="margin-bottom: 12px; padding: 12px; background: #fff3cd; border: 1px solid #ffeeba; border-radius: 6px;"><strong style="color: #856404;">Direct partner warning for ${partnerName}:</strong><ul style="margin: 8px 0 0 20px; color: #856404;">${directPartnerWarnings.map(w => `<li>${w}</li>`).join('')}</ul></div>`
    : '';

  return `
    <div class="medicine-card" style="border: 1px solid #3fbbc0; border-radius: 8px; padding: 18px; margin-bottom: 18px; background-color: #f0f8f9; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h5 style="color: #1a73e8; margin-bottom: 12px;"><strong>${med.name}</strong> <span style="font-size: 0.85em; color: #666; background: #e3f2fd; padding: 3px 8px; border-radius: 4px;">${med.category}</span></h5>
      <p style="margin-bottom: 10px;"><strong style="color: #0d47a1;">📋 Used For:</strong> ${med.diseases.join(', ')}</p>
      <p style="margin-bottom: 10px;"><strong style="color: #0d47a1;">✓ Benefits:</strong></p>
      <ul style="margin: 8px 0; padding-left: 20px; color: #2e7d32;">
        ${med.benefits.map(benefit => `<li style="margin-bottom: 5px;">${benefit}</li>`).join('')}
      </ul>
      ${partnerNote}
      <p style="margin-bottom: 10px;"><strong style="color: #d32f2f;">⚠ Avoid With:</strong></p>
      <ul style="margin: 8px 0; padding-left: 20px; color: #b71c1c;">
        ${med.interactions.map(interaction => `<li style="margin-bottom: 5px;">${interaction}</li>`).join('')}
      </ul>
    </div>
  `;
}

function getPairWarnings(med1, med2) {
  const warnings = [];
  const directPartnerWarnings = [];
  let directInteraction = false;

  const directMatch1 = med1.interactions.filter(i => i.toLowerCase().includes(med2.name.toLowerCase()));
  const directMatch2 = med2.interactions.filter(i => i.toLowerCase().includes(med1.name.toLowerCase()));

  directMatch1.forEach(i => {
    const message = `• ${med1.name} may interact with ${med2.name}: ${i}`;
    warnings.push(message);
    directPartnerWarnings.push(message);
    directInteraction = true;
  });
  directMatch2.forEach(i => {
    const message = `• ${med2.name} may interact with ${med1.name}: ${i}`;
    warnings.push(message);
    directPartnerWarnings.push(message);
    directInteraction = true;
  });

  const sameCategoryRisk = [
    'NSAID', 'Anticoagulant', 'Antiplatelet', 'Beta-blocker', 'Calcium Channel Blocker', 'Benzodiazepine', 'Opioid', 'PDE5 Inhibitor'
  ];

  if (med1.category === med2.category && med1.category && sameCategoryRisk.includes(med1.category)) {
    warnings.push(`• Both medicines are ${med1.category}s. Combining two drugs from the same class may increase side effect risk, such as bleeding, blood pressure changes, or sedation.`);
    directInteraction = true;
  }

  const highRiskPairs = [
    { a: 'Nitrate', b: 'PDE5 Inhibitor', message: 'This combination can cause a dangerous drop in blood pressure; avoid using nitrates with PDE5 inhibitors.' },
    { a: 'Anticoagulant', b: 'NSAID', message: 'Anticoagulants plus NSAIDs increase bleeding risk.' },
    { a: 'Anticoagulant', b: 'Antiplatelet', message: 'Anticoagulants combined with antiplatelets raise bleeding risk significantly.' },
    { a: 'Opioid', b: 'Benzodiazepine', message: 'Opioids plus benzodiazepines greatly increase sedation and respiratory depression risk.' },
    { a: 'Beta-blocker', b: 'Beta-2 Agonist', message: 'Beta-blockers may reduce the effect of beta-2 agonists and affect breathing.' },
    { a: 'Beta-blocker', b: 'Calcium Channel Blocker', message: 'Beta-blockers with calcium channel blockers may cause slow heart rate and low blood pressure.' }
  ];

  highRiskPairs.forEach(pair => {
    if ((med1.category === pair.a && med2.category === pair.b) || (med1.category === pair.b && med2.category === pair.a)) {
      warnings.push(`• ${pair.message}`);
      directInteraction = true;
    }
  });

  if (warnings.length === 0) {
    warnings.push('• No direct interaction warning was found in this dataset for the selected medicine pair. Always consult a healthcare provider before combining medications.');
  }

  return { warnings, directInteraction, directPartnerWarnings };
}

function formatPairInteractionHTML(med1Name, med2Name) {
  const med1 = medicineDatabase[med1Name];
  const med2 = medicineDatabase[med2Name];
  if (!med1 || !med2) {
    return `<div class="alert alert-danger">Selected medicines are not available in the dataset. Please choose two different medicines from the list.</div>`;
  }

  const { warnings, directInteraction, directPartnerWarnings } = getPairWarnings({ name: med1Name, ...med1 }, { name: med2Name, ...med2 });
  const summaryText = directInteraction
    ? 'Yes — these medicines may interact when taken together. Do not use them together without medical supervision.'
    : 'No direct interaction warning was found in this dataset for this pair. However, always consult a healthcare provider before combining medications.';
  const summaryStyle = directInteraction ? 'color: #d32f2f;' : 'color: #2e7d32;';

  return `
    <div class="alert alert-primary" style="border-left: 4px solid #0d6efd;">
      <h3 style="margin-top: 0;">Interaction Results</h3>
      <p><strong>${med1Name}</strong> and <strong>${med2Name}</strong></p>
      <div style="display: grid; gap: 12px; margin-bottom: 16px;">
        <div style="padding: 14px; background: ${directInteraction ? '#fdecea' : '#e8f8f5'}; border-radius: 8px; border: 1px solid ${directInteraction ? '#f5c2c7' : '#cfe7dc'};">
          <strong style="color: #0d6efd;">Direct pairwise interaction:</strong>
          <p style="margin: 8px 0 0 0; font-size: 1rem; ${summaryStyle}">${summaryText}</p>
        </div>
        <div style="padding: 14px; background: #fff; border-radius: 8px; border: 1px solid #d1ecf1;">
          <strong style="color: #0b5ed7;">What this means</strong>
          <p style="margin: 8px 0 0 0;">${directInteraction ? 'This pair should be avoided or reviewed with a doctor because the dataset indicates a possible interaction.' : 'There is no explicit interaction noted in the dataset, but each medicine still has its own avoid-with profile below.'}</p>
        </div>
      </div>
      <div style="margin-top: 15px; padding: 14px; background: #e9f6ff; border-radius: 8px;">
        <strong style="color: #0b5ed7;">Interaction Summary:</strong>
        <ul style="margin: 10px 0 0 20px; color: #0b5ed7;">
          ${warnings.map(item => `<li style="margin-bottom: 8px;">${item}</li>`).join('')}
        </ul>
      </div>
      ${directPartnerWarnings.length ? `<div style="margin-top: 15px; padding: 14px; background: #fff3cd; border-radius: 8px; border: 1px solid #ffecb5;"><strong style="color: #856404;">Direct partner-specific warnings:</strong><ul style="margin: 10px 0 0 20px; color: #856404;">${directPartnerWarnings.map(item => `<li style="margin-bottom: 8px;">${item}</li>`).join('')}</ul></div>` : ''}
      <div style="margin-top: 20px; padding: 14px; background: #fff8e1; border-radius: 8px; border: 1px solid #ffecb3;">
        <strong style="color: #d17f00;">What to know:</strong>
        <p style="margin: 10px 0 0 0;">${directInteraction ? 'These two medicines have evidence of interaction in the dataset. Review the reasons above and avoid taking them together unless a qualified healthcare professional advises otherwise.' : 'This dataset does not show a direct pairwise interaction, but each medicine still has its own avoid-with profile below. Consult your doctor before taking them together.'}</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin-top: 18px;">
        ${formatBenefitSection({ name: med1Name, ...med1 }, med2Name)}
        ${formatBenefitSection({ name: med2Name, ...med2 }, med1Name)}
      </div>
      <div class="alert alert-warning" style="margin-top: 20px; border-left: 4px solid #ffc107;">
        <strong>⚠ Important:</strong> This interaction summary is dataset-driven and for educational use only. Always verify with a licensed healthcare provider before combining any medicines.
      </div>
    </div>
  `;
}

/**
 * Initialize the recommendation form
 */
function initMedicineRecommender() {
  populateMedicineSelectors();
  updateSelectedMedicineBoxes();

  const medicine1 = document.getElementById('medicine-1');
  const medicine2 = document.getElementById('medicine-2');
  if (medicine1) medicine1.addEventListener('change', updateSelectedMedicineBoxes);
  if (medicine2) medicine2.addEventListener('change', updateSelectedMedicineBoxes);

  const form = document.getElementById('interaction-form');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const ageInput = document.getElementById('age').value.trim();
    const age = ageInput ? parseInt(ageInput, 10) : null;
    const weightInput = document.getElementById('weight').value.trim();
    const weight = weightInput ? parseFloat(weightInput) : null;
    const disease = document.getElementById('disease').value.trim();
    const results = document.getElementById('interaction-results');

    if (age !== null && (age < 20 || age > 100)) {
      results.innerHTML = `<div class="alert alert-danger" style="border: 2px solid #d63031; padding: 15px; border-radius: 5px;">
        <strong>❌ Invalid Age</strong><br>
        Please enter an age between <strong>20</strong> and <strong>100</strong> years.
      </div>`;
      return;
    }

    if (weight !== null && (weight < 40 || weight > 200)) {
      results.innerHTML = `<div class="alert alert-danger" style="border: 2px solid #d63031; padding: 15px; border-radius: 5px;">
        <strong>❌ Invalid Weight</strong><br>
        Please enter a weight between <strong>40</strong> and <strong>200</strong> kg.
      </div>`;
      return;
    }

    const medicine1 = document.getElementById('medicine-1');
    const medicine2 = document.getElementById('medicine-2');
    const medicine1Name = medicine1 ? medicine1.value : '';
    const medicine2Name = medicine2 ? medicine2.value : '';

    if (!medicine1Name || !medicine2Name) {
      results.innerHTML = `<div class="alert alert-danger" style="border-left: 4px solid #d32f2f;">Please select two medicines from the list before analyzing interactions.</div>`;
      return;
    }

    if (medicine1Name === medicine2Name) {
      results.innerHTML = `<div class="alert alert-warning" style="border-left: 4px solid #ffc107;">You selected the same medicine twice. For a drug-drug interaction report, select two different medicines.</div>`;
      return;
    }

    let outputHTML = formatPairInteractionHTML(medicine1Name, medicine2Name);

    if (disease) {
      const recommendations = getMedicineRecommendations(age, disease, weight, null);
      outputHTML += `<div class="mt-4">${formatRecommendationsHTML(recommendations, age, disease, weight, null)}</div>`;
    }

    results.innerHTML = outputHTML;
  });
}

// Initialize on page load
window.addEventListener('load', initMedicineRecommender);
