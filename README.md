# 🏥 NP CPD Logger - Professional Monash University CPD Application

A modern, offline-first Progressive Web App (PWA) for Nurse Practitioner students to log Continuing Professional Development episodes and export directly to Excel in Monash University's template format.

**🌐 Live Demo:** https://YOUR_USERNAME.github.io/np-cpd-logger  
**📱 Install on Mobile:** Add to home screen (iOS Safari or Android Chrome)  
**💾 Data Storage:** 100% Local - Zero cloud dependency

---

## ✨ Key Features

### 📝 Structured CPD Entry Form
- **Clinical Episode Data:** Patient UR, presenting problem, assessment, plan, actions, outcome
- **Domain Categorization:** Clinical Care, Leadership, Education, Research, Professional Mentoring, etc.
- **NMBA Standards Mapping:** Interactive selection of all 12 NP competency statements
- **Extension Fields:** Diagnostics, prescribing, admissions, referrals, certificates
- **Auto-Synthesis:** Generate brief descriptions from structured fields

### 🛡️ Healthcare Compliance
- **De-Identification Guard:** Automated regex checks detect patient names, phone numbers, Medicare numbers, DOBs
- **Privacy Alert Banners:** HIPAA/Australian Privacy Principles enforcement
- **Clinical-Grade UI:** Built for clinicians, designed for efficiency

### 📊 NMBA Standards Dashboard
- **Coverage Tracking:** Visual progress bars for each of the 12 NP standards
- **Evidence Distribution:** See which standards need more logged episodes
- **Domain Analytics:** CPD distribution across clinical and professional categories
- **Cumulative Hours Tracker:** Monitor supernumerary hours progress

### 📥 Excel Export to Monash Template
- **Template Integration:** Load your `Template CPD Log.xlsx` file
- **Automated Population:** Inserts logged entries into "Workplace Log" sheet
- **Preserves Metadata:** Keeps all other sheets intact (student details, mentors, reference standards)
- **Ready for Submission:** Download Excel file, submit to university

### 📱 Mobile-First PWA
- **Installable:** Add to home screen on any device (iOS, Android, Windows)
- **Offline-First:** Full functionality without internet connection
- **Fast & Lightweight:** <100KB, loads in seconds
- **Service Worker:** Intelligent caching, background sync ready

### 💾 Backup & Sync
- **JSON Export:** Download complete backup of all entries
- **JSON Import:** Restore from backup or sync between devices
- **Auto-Backup:** Optional automatic backup every 10 entries
- **No Third-Party:** All storage on your device, you control sync

---

## 🚀 Quick Start

### 1. **Access the App**
Open your browser and visit: `https://YOUR_USERNAME.github.io/np-cpd-logger`

### 2. **Install on Mobile**
- **Android:** Chrome menu (⋮) → Install app
- **iPhone:** Safari Share → Add to Home Screen

### 3. **Log Your First Entry**
1. Click **➕ New Entry** tab
2. Fill in date and supernumerary hours
3. Enter patient UR (de-identified only!)
4. Complete clinical episode fields
5. Select NMBA standards (at least 1)
6. Optional: Run de-identification check
7. Click **💾 Save CPD Entry**

### 4. **Export to Excel**
1. Go to **⚙️ Settings** tab
2. Click **📊 Export to Monash CPD Excel Template**
3. Select your `Template CPD Log.xlsx` file
4. App generates download with your entries inserted
5. Submit to Monash

---

## 📋 System Requirements

| Device | Browser | Notes |
|--------|---------|-------|
| **Windows (Surface Laptop)** | Chrome, Edge, Firefox | Desktop PWA install available |
| **Android** | Chrome | Recommended; Samsung Internet also works |
| **iPhone/iPad** | Safari | iOS 12.2+ required for PWA |
| **Mac** | Chrome, Safari | Works; PWA install recommended |

**Storage:** Requires ~5MB free space (varies by entry count)

---

## 🔐 Privacy & Security

✅ **100% Local Storage** - Data never leaves your device  
✅ **No Server Uploads** - No external API calls (except Excel download)  
✅ **No Analytics** - No user tracking or telemetry  
✅ **No Login Required** - No accounts, no passwords  
✅ **De-ID Enforcement** - Prevents accidental patient data entry  
✅ **HIPAA Ready** - Suitable for regulated healthcare environments

---

## 📚 Excel Template Mapping

### Default Column Order (Adjust if Different)

| Col | Header | App Field |
|-----|--------|-----------|
| A | Episode Date | episodeDate |
| B | Hours | hoursSpent |
| C | Patient UR | patientUR |
| D | Presenting Problem | presentingProblem |
| E | Assessment | clinicalAssessment |
| F | Plan | planMade |
| G | Actions | actionsTaken |
| H | Outcome | outcome |
| I | Mentor | mentorName |
| J | Domain | primaryDomain |
| K | Sub-Activity | subActivity |
| L | Standards | selectedStandards |
| M | Diagnostics | diagnostics |
| N | Prescribing | prescribing |
| O | Admit/Discharge | admitDischarge |
| P | Referral | referralDetails |
| Q | Certificates | certificates |
| R | Comments | additionalComments |

**Customize:** See [SETUP.md](./SETUP.md) for column mapping modifications.

---

## 🎯 NMBA Standards Quick Reference

### Standard 1: Assesses using diagnostic capability
- 1.1 Collects comprehensive patient information
- 1.2 Performs appropriate physical examination
- 1.3 Requests and interprets diagnostic investigations

### Standard 2: Plans care and engages others
- 2.1 Synthesizes assessment findings
- 2.2 Develops patient-centered management plan
- 2.3 Engages with patient and carers
- 2.4 Considers organizational, professional and legal context

### Standard 3: Prescribes & implements interventions
- 3.1 Applies evidence-based best practice
- 3.2 Performs procedures and treatments
- 3.3 Prescribes medicines and therapeutic agents

### Standard 4: Supports health systems
- 4.1 Contributes to the improvement of quality and safety
- 4.2 Champions patient safety and advocates for quality

---

## 💡 Usage Tips

### Maximizing NMBA Standard Coverage
1. Aim for **at least 3-5 entries per standard** for balanced portfolio
2. Use the **Dashboard** to identify gaps
3. Seek mentorship opportunities in under-represented areas
4. Vary domains (Clinical Care, Leadership, Education, etc.)

### De-Identification Best Practices
- ✅ Use patient UR numbers only
- ✅ Use clinical abbreviations (UR-12345, not "John Smith, DOB 01/01/1985")
- ✅ Describe presentations clinically ("50-year-old with acute dyspnea" vs naming)
- ✅ Run de-ID check before exporting
- ⚠️ Avoid exact dates of birth (use "50-year-old" instead)

### Efficient Data Entry
- **Template Entries:** Save time by reusing similar entries (copy-paste from View Entries)
- **Mentor Discussion:** Always record who you discussed the case with
- **Synthesize Actively:** Use the auto-synthesis feature to generate required text
- **Export Often:** Export to Excel weekly to catch any issues early

### Backup Strategy
- **Weekly:** Export as JSON to OneDrive/Google Drive
- **Before Major Submissions:** Full backup + Excel export
- **Device Changes:** Import JSON to migrate to new device

---

## 🐛 Troubleshooting

### "Entries disappear after refresh"
- **Issue:** Browser cleared site data or LocalStorage is disabled
- **Fix:** Check Privacy Settings → Allow LocalStorage for this site

### "De-ID check is too strict"
- **By Design:** Conservative to protect privacy
- **Workaround:** Use clinical language, avoid naming

### "Excel export has wrong columns"
- **Issue:** Your template layout differs from default
- **Fix:** See [SETUP.md - Column Mapping Customization](./SETUP.md#column-mapping-customization)

### "App won't install on mobile"
- **Issue:** Service Worker not registered
- **Fix:** Force refresh (Ctrl+Shift+R), clear cache, try again in 30 seconds

### "Can't select multiple standards"
- **Feature:** Standards selection uses toggle buttons
- **How To:** Click each standard button to toggle on/off

---

## 📞 Support Resources

- **Setup & Deployment:** See [SETUP.md](./SETUP.md)
- **Feature Walkthrough:** In-app UI has tooltips and help text
- **Offline Testing:** Use DevTools → Application → Service Workers → Offline checkbox
- **Browser Issues:** Test in Incognito window to isolate cache problems

---

## 🔄 Version Updates

When updates are released:

1. Open the app
2. Click **Check for updates** (footer)
3. Service Worker will update automatically
4. Refresh page to see changes
5. **All your data persists** across updates

---

## 🛠️ For Developers

### File Structure
```
np-cpd-logger/
├── index.html          # Main app (all-in-one)
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── SETUP.md           # Deployment guide
└── README.md          # This file
```

### Technologies
- **Vanilla JavaScript** (no dependencies except SheetJS for Excel)
- **Tailwind CSS** (CDN-loaded)
- **Service Worker API** (offline support)
- **LocalStorage & IndexedDB** (data persistence)
- **SheetJS** (xlsx.js) for Excel export

### Customization
- **Colors:** Edit CSS variables at top of `index.html` (`:root` section)
- **Fields:** Modify form in `index.html` (keep matching app state in JS)
- **Export Columns:** Edit `exportToExcel()` function to match your template
- **Standards:** Modify `STANDARDS` array and form section

### Adding New Features
1. Add form field in HTML
2. Capture in `saveEntry()` function
3. Store in `appState.entries` object
4. Include in Excel export rowData
5. Save to localStorage

---

## 📄 License

Free to use, modify, and distribute for educational purposes.

---

## 🎓 About Monash University NP Program

This app is designed specifically for Monash University's Nurse Practitioner Master's program, with features tailored to:
- **Monash CPD Log Template** (Excel format)
- **NMBA Standards** (Australian nursing regulations)
- **Supernumerary Hour Tracking** (program requirement)
- **De-Identification Compliance** (Australian privacy laws)

---

## ✅ Checklist for First Use

- [ ] Install app on mobile device
- [ ] Create first CPD entry with real episode
- [ ] Run de-identification check
- [ ] Select NMBA standards
- [ ] View dashboard (check totals)
- [ ] Export to JSON for backup
- [ ] Test offline mode (DevTools → Offline)
- [ ] Export to Excel (if template ready)
- [ ] Share feedback / report issues

---

**Happy logging! Your clinical learning matters. 🏥**

Questions? See [SETUP.md](./SETUP.md) for detailed deployment and troubleshooting guide.
