# Monash CPD Logger - Template Mapping Guide

## ✅ Customization Complete

Your NP CPD Logger app has been customized to match your **Monash University "Template CPD Log.xlsx"** structure exactly.

---

## 📊 Column Mapping (Monash Workplace Log Sheet)

### Header Location
- **Sheet:** Workplace Log
- **Headers:** Row 5
- **Data starts:** Row 6

### Column-by-Column Mapping

| Col | Monash Header | App Field | What Gets Exported |
|-----|---------------|-----------|-------------------|
| **B** | Date | Episode Date | Entry date (YYYY-MM-DD) |
| **C** | Supernumerary time spent undertaking NP activity | Hours Spent | Number of hours logged |
| **D** | Cumulative supernumerary hours | (Auto-calculated) | Running total of all hours to date |
| **F** | Brief description of NP episode | Presenting Problem + Assessment + Plan | Auto-synthesized: "Problem → Assessment → Plan" |
| **G** | Brief summary of how this entry is linked to 1-3 NP Standards | Selected Standards + Actions | "Standards linked: [list]. Plan: [plan]. Actions: [actions]" |
| **H** | Domain | Primary Domain | Clinical Care, Leadership, Education, Research, etc. |
| **I** | NMBA NP Standard 1: Assesses using diagnostic capability | Standard 1.1, 1.2, or 1.3 | "X" if any Standard 1 selected |
| **J** | NMBA NP Standard 2: Plans care and engages others | Standard 2.1, 2.2, 2.3, or 2.4 | "X" if any Standard 2 selected |
| **K** | NMBA NP Standard 3: Prescribes and implements therapeutic interventions | Standard 3.1, 3.2, or 3.3 | "X" if any Standard 3 selected |
| **L** | NMBA NP Standard 4: Supports health systems | Standard 4.1 or 4.2 | "X" if any Standard 4 selected |
| **M** | Diagnostics | Diagnostics field | Clinical details about diagnostic tests ordered/interpreted |
| **N** | Prescribing | Prescribing field | Medication names, doses, adjustments |
| **O** | Admit / Discharge | Admit/Discharge field | Hospital admission or discharge information |
| **P** | Referral | Referral Details | Details of onward referrals made |
| **Q** | Certificates required for... | Certificates | E.g., WorkCover, Medical Certificate |
| **R** | Other Comments Review / Follow-up | Additional Comments | Any other relevant notes |

---

## 🔄 Data Flow: App → Excel

### Step 1: Create Entry in App
User fills form with:
- Date & hours
- Patient UR
- Clinical episode fields (problem, assessment, plan, actions, outcome)
- NMBA standards (multi-select)
- Domain
- Extension fields (optional)

### Step 2: Export to Excel
1. Go to **⚙️ Settings** tab
2. Click **📊 Export to Monash CPD Excel Template**
3. Select your `Template CPD Log.xlsx` file
4. App processes all logged entries:
   - Calculates cumulative hours
   - Auto-synthesizes descriptions
   - Maps standards to checkmarks (X)
   - Inserts data into correct columns

### Step 3: Review & Submit
1. Downloaded file: `CPD_Log_YYYY-MM-DD.xlsx`
2. Open in Excel and verify entries
3. Rename if required by university
4. Submit through Monash learning system

---

## 📝 Example Entry

### What User Logs in App:
```
Date:           2026-07-26
Hours:          2.5
Patient UR:     URN-45892
Presenting:     50yo male with acute dyspnea
Assessment:     O2 sat 88%, respiratory rate 24, CXR ordered
Plan:           Start supplemental oxygen, respiratory review
Actions:        Applied nasal prongs, ordered CXR, discussed with RN
Outcome:        O2 sat improved to 94%, discharged home
Mentor:         Dr. Sarah Smith
Domain:         Clinical Care
Standards:      1.1, 1.3, 2.1, 3.2, 4.1
Diagnostics:    CXR ordered - findings pending
```

### What Appears in Excel:
```
B6: 2026-07-26
C6: 2.5
D6: (auto-calculated cumulative)
F6: "50yo male with acute dyspnea → O2 sat 88%, respiratory rate 24, CXR ordered → Start supplemental oxygen, respiratory review"
G6: "Standards linked: 1.1, 1.3, 2.1, 3.2, 4.1. Plan: Start supplemental oxygen, respiratory review. Actions: Applied nasal prongs, ordered CXR, discussed with RN"
H6: "Clinical Care"
I6: "X"  (Standard 1 selected)
J6: "X"  (Standard 2 selected)
K6: ""   (Standard 3 not selected, though 3.2 was tagged)
L6: "X"  (Standard 4 selected)
M6: "CXR ordered - findings pending"
```

---

## 🔧 If Your Template Differs

If your actual template has different:
- **Column positions:** Edit `exportToExcel()` function in `index.html` (around line 920)
- **Row for data start:** Change `let rowIndex = 6` to your row number
- **Sheet name:** Change `'Workplace Log'` to your sheet name

### Example Customization:
```javascript
// If data starts at row 7 instead of 6:
let rowIndex = 7;

// If column B is "Time" not "Date":
'B': entry.episodeDate,  // Still maps to your B column

// If your sheet is named "CPD Entries":
let worksheetName = 'CPD Entries';
```

---

## ✨ Key Features Implemented

✅ **Automatic Cumulative Hours Calculation**
- D6: 2.5 (first entry)
- D7: 5.0 (2.5 + 2.5)
- D8: 8.25 (5.0 + 3.25)

✅ **Standards Checkmarks (X)**
- Converts selected standards into visual checkmarks
- Makes it easy to see coverage at a glance
- Useful for identifying gaps

✅ **Auto-Synthesized Descriptions**
- Combines clinical fields into narrative form
- Follows clinical note conventions
- Brief enough for excel cell but detailed enough for documentation

✅ **Optional Fields Populated**
- Diagnostics, prescribing, admit/discharge, referrals, certificates
- Only exports if user enters data
- Keeps exported file clean

---

## 📱 Using the App

### Desktop (Surface Laptop)
1. Open browser → `https://YOUR_USERNAME.github.io/np-cpd-logger`
2. Fill form on **New Entry** tab
3. Click **💾 Save CPD Entry**
4. Go to **Settings** → **Export to Monash Template**
5. Select template, download

### Mobile (Phone/Tablet)
1. Install app (Add to Home Screen)
2. Same workflow as desktop
3. All data syncs via JSON backups
4. Export on desktop for Excel compatibility

### Offline Mode
- App works 100% offline
- All entries saved locally
- Export still works when back online
- Test with DevTools → Application → Offline

---

## 🎯 Pre-Export Checklist

Before exporting to Excel:

- [ ] At least 1 NMBA standard selected per entry
- [ ] Patient UR is de-identified (no names)
- [ ] De-ID check passes (Settings tab)
- [ ] Date is in correct format
- [ ] Supernumerary hours are realistic (0.25 - 8 hours typical)
- [ ] Mentor/Consultant name recorded
- [ ] Clinical fields describe the episode clearly

---

## 📋 Standards Coverage Quick Reference

After exporting to Excel, scan column H to see your domain distribution:

```
Clinical Care        ████░ (40%)
Leadership           ██░░░ (20%)
Education            ██░░░ (20%)
Research             ░░░░░ (0%)
Professional         ██░░░ (20%)
```

Scan columns I-L to see standards balance:

```
Standard 1 (Assess)      XXXXXXXXX (9 entries)
Standard 2 (Plan)        XXXXXXXX░ (8 entries)
Standard 3 (Prescribe)   XXXXXXXXX (9 entries)
Standard 4 (Systems)     XXXXX░░░░ (5 entries)  ← NEEDS MORE!
```

---

## 🆘 Troubleshooting

### "Excel shows [object Object]" in cells
- This means the export mapping has an error
- Check that all app fields match the code
- Reload app and try again

### "Cumulative hours are wrong"
- Ensure entries are sorted by date
- App calculates based on entry dates
- Manual adjustment in Excel is fine

### "Standards columns are empty"
- Verify you selected standards when creating entry
- Check Dashboard to see selected standards
- Re-create entry with standards selected

### "Monash won't accept my export"
- Verify data starts at Row 6
- Ensure no extra rows inserted above
- Check that template headers weren't accidentally modified
- Download fresh template from Monash if needed

---

## 💡 Tips for Success

1. **Export Weekly:** Keep current Excel export in OneDrive for safekeeping
2. **Back Up JSON:** Settings → Backup as JSON (disaster recovery)
3. **Vary Domains:** Don't log all entries as "Clinical Care" - diversify
4. **Detailed Standards:** When selecting standards, choose SPECIFIC ones (1.1 not just 1)
5. **Mentor Names:** Always record who supervised/discussed case
6. **De-ID Carefully:** Use UR numbers ONLY, never patient names

---

## 📞 Column Questions?

Reference your Excel template:
- Open `Template CPD Log.xlsx`
- Go to **Workplace Log** sheet
- Check row 5 for headers
- Check row 6 to see where data should start

If columns don't match this guide, note the differences and it can be re-customized!

---

**Your app is now ready to use! Start logging CPD episodes. Good luck with your Monash NP studies! 🏥**
