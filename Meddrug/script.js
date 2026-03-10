// Sample Drug Database setup for Pakistani market
const drugsDb = [
    {
        id: 1,
        genericName: "Paracetamol",
        formula: "Acetaminophen",
        brands: ["Panadol", "Calpol", "Disprol", "Febrol", "Novidat (Paracetamol Variant)"],
        category: "Painkillers",
        indications: [
            "Mild to moderate pain",
            "Fever (Pyrexia)",
            "Headache",
            "Toothache"
        ],
        contraindications: [
            "Severe hepatic (liver) impairment",
            "Hypersensitivity to paracetamol"
        ],
        interactions: [
            "Warfarin (prolonged use increases bleeding risk)",
            "Carbamazepine, Phenytoin (increases liver toxicity risk)"
        ],
        guidelines: "Adults: 500mg-1g every 4-6 hours as needed (Max 4g/day).\nChildren: Dose based on weight (typically 10-15mg/kg).\nDo not exceed recommended dose due to risk of liver damage."
    },
    {
        id: 2,
        genericName: "Amoxicillin + Clavulanic Acid",
        formula: "Co-amoxiclav",
        brands: ["Augmentin", "Amoxclav", "Clavulan", "Moxclav"],
        category: "Antibiotics",
        indications: [
            "Respiratory tract infections",
            "Urinary tract infections (UTI)",
            "Skin & soft tissue infections",
            "Dental infections"
        ],
        contraindications: [
            "Penicillin allergy",
            "History of co-amoxiclav associated jaundice/hepatic dysfunction"
        ],
        interactions: [
            "Allopurinol (increases risk of skin rash)",
            "Oral contraceptives (may reduce efficacy)",
            "Methotrexate (reduces excretion)"
        ],
        guidelines: "Adults: 625mg tablet every 12 hours for 5-7 days.\nSevere infections: 1g every 12 hours.\nTake at the start of a meal to minimize GI upset."
    },
    {
        id: 3,
        genericName: "Omeprazole",
        formula: "Proton Pump Inhibitor (PPI)",
        brands: ["Risek", "Omega", "Zol", "Omez"],
        category: "Gastrointestinal",
        indications: [
            "Gastro-esophageal reflux disease (GERD)",
            "Peptic ulcer disease",
            "Helicobacter pylori eradication",
            "Zollinger-Ellison syndrome"
        ],
        contraindications: [
            "Hypersensitivity to omeprazole or other PPIs",
            "Concurrent use with nelfinavir"
        ],
        interactions: [
            "Clopidogrel (decreases antiplatelet effect)",
            "Diazepam, Phenytoin (prolongs clearance)",
            "Ketoconazole (reduces absorption)"
        ],
        guidelines: "Adults: 20-40mg once daily before breakfast.\nTake 30-60 minutes before a meal.\nCapsules should be swallowed whole, not crushed or chewed."
    },
    {
        id: 4,
        genericName: "Ibuprofen",
        formula: "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
        brands: ["Brufen", "Profen", "Arinac (with Pseudoephedrine)"],
        category: "Painkillers",
        indications: [
            "Mild to moderate pain",
            "Inflammatory conditions (arthritis)",
            "Fever",
            "Dysmenorrhea (period pain)"
        ],
        contraindications: [
            "Active recurrent peptic ulcer/bleeding",
            "History of GI bleeding related to previous NSAIDs",
            "Severe heart failure",
            "Third trimester of pregnancy"
        ],
        interactions: [
            "Aspirin (reduces antiplatelet effect)",
            "Antihypertensives (reduces effect)",
            "Anticoagulants (increases bleeding risk)",
            "Corticosteroids (increase GI ulceration risk)"
        ],
        guidelines: "Adults: 200-400mg every 4-6 hours as needed (Max 1200mg/day without prescription, 3200mg/day with).\nTake with or after food to minimize stomach upset."
    },
    {
        id: 5,
        genericName: "Metformin",
        formula: "Biguanide",
        brands: ["Glucophage", "Neodipar", "Cetapin"],
        category: "Anti-diabetic",
        indications: [
            "Type 2 Diabetes Mellitus",
            "Polycystic Ovary Syndrome (PCOS) - off label"
        ],
        contraindications: [
            "Diabetic ketoacidosis",
            "Renal impairment (eGFR < 30 mL/min/1.73 m2)",
            "Acute conditions that alter renal function (e.g., severe infection)"
        ],
        interactions: [
            "Iodinated contrast media (risk of lactic acidosis)",
            "Cimetidine (increases metformin peak levels)",
            "Alcohol (increases risk of lactic acidosis)"
        ],
        guidelines: "Adults: Initially 500mg once or twice daily with meals. Gradually titrate up.\nMax dose: 2000mg/day.\nRegular monitoring of renal function is required."
    },
    {
        id: 6,
        genericName: "Ciprofloxacin",
        formula: "Fluoroquinolone Antibacterial",
        brands: ["Ciproxin", "Novidat", "Axcin"],
        category: "Antibiotics",
        indications: [
            "Urinary tract infections",
            "Typhoid fever",
            "Gastroenteritis",
            "Bone and joint infections"
        ],
        contraindications: [
            "Hypersensitivity to quinolones",
            "Concurrent administration with tizanidine"
        ],
        interactions: [
            "Antacids containing Al, Mg, Ca (reduces absorption)",
            "Theophylline (increases toxicity)",
            "NSAIDs (increases risk of CNS stimulation/seizures)"
        ],
        guidelines: "Adults: 250-750mg twice daily depending on infection severity.\nDo not take with dairy products or calcium-fortified juices alone.\nMay cause tendon rupture or phototoxicity."
    },
    {
        id: 7,
        genericName: "Azithromycin",
        formula: "Macrolide Antibiotic",
        brands: ["Azomax", "Zithromax", "Azit", "Mac"],
        category: "Antibiotics",
        indications: [
            "Lower respiratory tract infections (bronchitis, pneumonia)",
            "Upper respiratory tract infections (sinusitis, pharyngitis)",
            "Skin and soft tissue infections",
            "Chlamydia trachomatis infections"
        ],
        contraindications: [
            "Hypersensitivity to azithromycin, erythromycin, or any macrolide",
            "History of cholestatic jaundice/hepatic dysfunction associated with prior use"
        ],
        interactions: [
            "Antacids containing aluminum and magnesium (reduce absorption rate)",
            "Digoxin (may increase digoxin levels)",
            "Warfarin (enhances anticoagulant effect)"
        ],
        guidelines: "Adults: 500mg once daily for 3 days.\nTake at least 1 hour before or 2 hours after a meal if taking capsules, tablets can be taken with or without food."
    },
    {
        id: 8,
        genericName: "Diclofenac Sodium/Potassium",
        formula: "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
        brands: ["Voren", "Voltral", "Caflam", "Dicloran"],
        category: "Painkillers",
        indications: [
            "Rheumatoid arthritis, osteoarthritis",
            "Acute gout",
            "Post-operative pain",
            "Migraine attacks"
        ],
        contraindications: [
            "Known hypersensitivity (e.g., asthma, rhinitis) to aspirin or other NSAIDs",
            "Active peptic ulceration or bleeding",
            "Severe heart failure"
        ],
        interactions: [
            "Lithium, Digoxin (increases plasma concentration)",
            "Diuretics and Antihypertensives (decreases their efficacy)",
            "Other NSAIDs and Corticosteroids (increases risk of GI bleeding)"
        ],
        guidelines: "Adults: 75-150mg daily in divided doses.\nTake with or after food. Lowest effective dose should be used for the shortest duration."
    },
    {
        id: 9,
        genericName: "Cetirizine",
        formula: "Second-generation Antihistamine",
        brands: ["Rigix", "ZyrTEC", "Cetic", "Alerid"],
        category: "Allergy",
        indications: [
            "Seasonal and perennial allergic rhinitis",
            "Chronic idiopathic urticaria (hives)"
        ],
        contraindications: [
            "Severe renal impairment (creatinine clearance less than 10 ml/min)",
            "Hypersensitivity to cetirizine or hydroxyzine"
        ],
        interactions: [
            "Alcohol or CNS depressants (may increase drowsiness or impairment)",
            "Theophylline (may decrease cetirizine clearance)"
        ],
        guidelines: "Adults and Children > 6 years: 10mg once daily.\nMay be taken with or without food. Although non-drowsy for most, it can still cause somnolence in some individuals."
    },
    {
        id: 10,
        genericName: "Domperidone",
        formula: "Dopamine Antagonist",
        brands: ["Motilium", "Domel", "Gastilium"],
        category: "Gastrointestinal",
        indications: [
            "Nausea and vomiting",
            "Relief of symptoms of feeling full, bloating, or belching"
        ],
        contraindications: [
            "Prolonged QT interval on ECG",
            "Moderate or severe hepatic impairment",
            "Conditions where increased gastric motility could be harmful (e.g., GI hemorrhage, obstruction)"
        ],
        interactions: [
            "QT-prolonging drugs (e.g., erythromycin, ketoconazole) - extreme caution",
            "Potent CYP3A4 inhibitors (significantly increase domperidone levels)"
        ],
        guidelines: "Adults: 10mg up to 3 times a day.\nTake 15-30 minutes before meals. Maximum daily dose usually should not exceed 30mg. Use for shortest time necessary."
    },
    {
        id: 11,
        genericName: "Cefixime",
        formula: "Third-generation Cephalosporin Antibiotic",
        brands: ["Cefspan", "Carecef", "Fixx", "Cefim"],
        category: "Antibiotics",
        indications: [
            "Uncomplicated urinary tract infections",
            "Otitis media",
            "Pharyngitis and tonsillitis",
            "Acute exacerbations of chronic bronchitis"
        ],
        contraindications: [
            "Known allergy to cephalosporins",
            "Caution in severe penicillin hypersensitivity"
        ],
        interactions: [
            "Carbamazepine (elevated carbamazepine levels)",
            "Warfarin and Anticoagulants (increased prothrombin time)"
        ],
        guidelines: "Adults: 400mg daily as a single dose or in two divided doses.\nCan be taken with or without food. Complete the full prescribed period."
    },
    {
        id: 12,
        genericName: "Metronidazole",
        formula: "Nitroimidazole Antibacterial/Antiprotozoal",
        brands: ["Flagyl", "Nidazole", "Metro"],
        category: "Antibiotics",
        indications: [
            "Anaerobic infections",
            "Amoebiasis",
            "Trichomoniasis",
            "Giardiasis"
        ],
        contraindications: [
            "First trimester of pregnancy (relative contraindication)",
            "Hypersensitivity to metronidazole"
        ],
        interactions: [
            "Alcohol (causes severe disulfiram-like reaction: vomiting, flushing)",
            "Warfarin (potentiates anticoagulant effect)",
            "Phenytoin, Phenobarbital (accelerate metronidazole elimination)"
        ],
        guidelines: "Adults: Dosage widely varies by indication (e.g., 400mg every 8 hours for general anaerobic infections).\nABSOLUTELY NO ALCOHOL during treatment and for 48 hours after the last dose."
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const drugGrid = document.getElementById('drugGrid');
const noResults = document.getElementById('noResults');
const drugCount = document.getElementById('drugCount');
const filterBadges = document.querySelectorAll('.filter-badge');

// Modal Elements
const modal = document.getElementById('drugModal');
const closeModalBtn = document.getElementById('closeModal');

// Render Initial Drugs
function renderDrugs(drugs) {
    drugGrid.innerHTML = '';

    if (drugs.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');

        drugs.forEach((drug, index) => {
            const card = document.createElement('div');
            card.className = 'drug-card';
            card.style.animationDelay = `${index * 0.05}s`;

            // Format brands for display preview
            const brandStr = drug.brands.join(', ');

            card.innerHTML = `
                <div class="card-header">
                    <h3 class="card-title">${drug.genericName}</h3>
                </div>
                <div class="formula">${drug.formula}</div>
                <p class="card-brands"><strong>Pk Brands:</strong> ${brandStr}</p>
                <div class="card-footer">
                    <button class="view-btn">View Details <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            `;

            card.addEventListener('click', () => openModal(drug));

            drugGrid.appendChild(card);
        });
    }

    drugCount.textContent = drugs.length;
}

// Search Functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    // Toggle clear button
    if (searchTerm.length > 0) {
        clearBtn.classList.add('visible');
    } else {
        clearBtn.classList.remove('visible');
    }

    // Get active filter
    const activeFilter = document.querySelector('.filter-badge.active').textContent;

    filterDrugs(searchTerm, activeFilter);
}

function filterDrugs(searchTerm, category) {
    let filtered = drugsDb;

    // Filter by category
    if (category !== 'All') {
        filtered = filtered.filter(drug => drug.category === category);
    }

    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(drug => {
            const matchGeneric = drug.genericName.toLowerCase().includes(searchTerm);
            const matchBrands = drug.brands.some(b => b.toLowerCase().includes(searchTerm));
            const matchFormula = drug.formula.toLowerCase().includes(searchTerm);
            const matchIndications = drug.indications.some(i => i.toLowerCase().includes(searchTerm));

            return matchGeneric || matchBrands || matchFormula || matchIndications;
        });
    }

    renderDrugs(filtered);
}

// Filter Clicks
filterBadges.forEach(badge => {
    badge.addEventListener('click', () => {
        // Remove active class from all
        filterBadges.forEach(b => b.classList.remove('active'));
        // Add to clicked
        badge.classList.add('active');

        // Re-run search
        handleSearch();
    });
});

// Modal Logic
function openModal(drug) {
    document.getElementById('modalGenericName').textContent = drug.genericName;
    document.getElementById('modalFormula').textContent = drug.formula;

    // Render Brands
    const brandsContainer = document.getElementById('modalBrands');
    brandsContainer.innerHTML = '';
    drug.brands.forEach(brand => {
        const span = document.createElement('span');
        span.className = 'brand-tag';
        span.textContent = brand;
        brandsContainer.appendChild(span);
    });

    // Render Lists
    renderList('modalIndications', drug.indications);
    renderList('modalContraindications', drug.contraindications);
    renderList('modalInteractions', drug.interactions);

    // Render Guidelines
    document.getElementById('modalGuidelines').textContent = drug.guidelines;

    // Show Modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function renderList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Event Listeners
searchInput.addEventListener('input', handleSearch);

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    handleSearch();
    searchInput.focus();
});

closeModalBtn.addEventListener('click', closeModal);

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Init
renderDrugs(drugsDb);
