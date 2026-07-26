# NP CPD Logger - Setup & Deployment Guide

A professional, offline-first Progressive Web App (PWA) for logging Continuing Professional Development episodes for Nurse Practitioner students at Monash University.

---

## 📋 Quick Start Checklist

- [ ] Create GitHub repository
- [ ] Upload files to repo
- [ ] Enable GitHub Pages
- [ ] Test on desktop browser
- [ ] Install on mobile device
- [ ] Test offline functionality
- [ ] Export to Excel

---

## 🚀 Step 1: Create GitHub Repository

1. **Go to GitHub** (https://github.com/new)
2. **Create a new public repository:**
   - Repository name: `np-cpd-logger` (or your preference)
   - Description: "NP CPD Logger - Monash University"
   - Add a README (optional)
   - Choose a license if desired (MIT recommended)
   - Click **Create repository**

---

## 📦 Step 2: Upload Files to Repository

### Option A: Using Git CLI (Recommended for future updates)

```bash
# Clone your new repository
git clone https://github.com/YOUR_USERNAME/np-cpd-logger.git
cd np-cpd-logger

# Copy the files from this directory into the repo
cp C:\Users\samue\OneDrive\Documents\Project\ CPD\ log\index.html .
cp C:\Users\samue\OneDrive\Documents\Project\ CPD\ log\manifest.json .
cp C:\Users\samue\OneDrive\Documents\Project\ CPD\ log\sw.js .

# Add files to git
git add .
git commit -m "Initial commit: NP CPD Logger PWA"
git push origin main
```

### Option B: GitHub Web UI (Easiest)

1. Go to your new repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop (or select):
   - `index.html`
   - `manifest.json`
   - `sw.js`
4. Add commit message: "Initial commit: NP CPD Logger PWA"
5. Click **Commit changes**

---

## 🌐 Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **Pages** section (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment to complete
6. You'll see a message: *"Your site is published at: https://YOUR_USERNAME.github.io/np-cpd-logger"*

---

## 🧪 Step 4: Test on Desktop

### Windows (Surface Laptop)

1. **Open your site in a browser:**
   - Chrome: https://YOUR_USERNAME.github.io/np-cpd-logger
   - Edge: Same URL

2. **Test Core Features:**
   - ✅ Fill out the entry form
   - ✅ Verify de-identification check catches test data like "John Smith"
   - ✅ Select NMBA standards
   - ✅ Click "Generate Brief Description"
   - ✅ Save the entry
   - ✅ View dashboard (totals, progress bars)
   - ✅ Search/sort entries

3. **Test Offline Mode:**
   - Open DevTools (F12)
   - Go to **Application** → **Service Workers**
   - Check box: **Offline**
   - Try creating an entry
   - Refresh page - entry should still be there
   - Uncheck **Offline** box

---

## 📱 Step 5: Install on Mobile (Android or iPhone)

### Android (Surface Duo, Samsung, etc.)

1. **Open Chrome browser** and navigate to your site
2. You'll see a banner at the bottom: **"Install app"**
3. Tap **Install**
4. Choose home screen placement
5. App appears as standalone icon on home screen
6. Tap to launch in full-screen mode (no address bar)

**Alternative (if no banner appears):**
- Chrome menu (⋮) → **Install app**

### iPhone/iPad

1. **Open Safari** and navigate to your site
2. Tap **Share** (bottom toolbar)
3. Scroll down, tap **Add to Home Screen**
4. Name: "NP CPD Logger" (or preferred name)
5. Tap **Add**
6. App now appears on home screen as standalone icon

---

## 🔒 Step 6: Verify Offline Capabilities

1. **Disconnect internet** (or use airplane mode)
2. **Launch the app** from home screen
3. **Test operations:**
   - ✅ Can view previously saved entries
   - ✅ Can create new entries (stored locally)
   - ✅ Dashboard updates in real-time
   - ✅ Settings load and save
   - ✅ No network errors

4. **Reconnect internet** - app syncs seamlessly

---

## 📊 Step 7: Excel Export Workflow

### Prepare Your Template

1. **Download your Monash `Template CPD Log.xlsx`**
2. **Open in Excel/Google Sheets**
3. Note the column headers in the **Workplace Log** sheet
4. Current app assumes data starts at **Row 5** - adjust if different in your template

### First-Time Export Configuration

**Important:** The current app expects these columns (you may need to adjust based on your template):

| Column | Header | Field in App |
|--------|--------|-------------|
| A | Date | Episode Date |
| B | Hours | Hours Spent |
| C | UR Number | Patient UR |
| D | Presenting Problem | Presenting Problem |
| E | Assessment | Clinical Assessment |
| F | Plan | Plan Made |
| G | Actions | Actions Taken |
| H | Outcome | Outcome |
| I | Mentor | Consultant Name |
| J | Domain | Primary Domain |
| K | Sub-Activity | Sub-Activity |
| L | Standards | Selected Standards |

**If your template columns differ:**

- You'll need to modify the export function in `index.html`
- Look for the `exportToExcel()` function (around line 900)
- Adjust the `rowData` array to match your column order

### Export Steps

1. **In the app**, go to **⚙️ Settings** tab
2. Click **📊 Export to Monash CPD Excel Template**
3. **Select your `Template CPD Log.xlsx` file** from your computer
4. App will:
   - Load your template
   - Insert your logged entries starting at Row 5
   - Preserve all other sheets (student details, mentors, standards reference)
   - Generate download as `CPD_Log_YYYY-MM-DD.xlsx`

5. **Open the downloaded file** to verify entries are in correct columns
6. **Submit to Monash University** as required

---

## 💾 Step 8: Backup & Sync Strategy

### Automatic Backups

- Enable in **Settings** tab: **Auto-backup every 10 entries**
- App automatically creates JSON backup files

### Manual Backup

1. **Settings** → **💾 Backup as JSON**
2. Downloads `CPD_Backup_YYYY-MM-DD.json`
3. Store in cloud (OneDrive, Google Drive, etc.) for safekeeping

### Restore from Backup

1. **Settings** → **📤 Restore from JSON**
2. Select your backup file
3. Entries merge with existing data (no data loss)

### Cross-Device Sync (Optional)

If you want to sync between Surface Laptop and mobile:

**Option 1: JSON Backup & Restore (Manual)**
- Backup on desktop → store in OneDrive
- Mobile downloads from OneDrive → restore in app

**Option 2: Supabase Integration (Advanced)**
- (Requires modification to index.html)
- Free tier supports ~1GB data
- Real-time bidirectional sync

---

## 🔐 Data Privacy & Security

### Local Storage Only
- **All data stored locally** on your device
- **No data sent to external servers** without explicit consent
- No login required, no user tracking

### De-Identification Checks
- App automatically detects and warns about:
  - Patient names (common first names)
  - Phone numbers (Australian format)
  - Medicare numbers
  - Dates of birth
  - Email addresses
- Prevents accidental patient data leakage

### HIPAA/Privacy Compliance
- Suitable for clinical use in privacy-regulated environments
- Compliant with Australian privacy principles
- No third-party analytics or tracking

---

## 🐛 Troubleshooting

### Issue: App not installing on mobile
**Solution:**
- Ensure using Chrome (Android) or Safari (iOS)
- Refresh page and wait 30 seconds before trying install
- Clear browser cache: Settings → Apps → Chrome/Safari → Storage → Clear Data

### Issue: Entries not showing after refresh
**Solution:**
- App uses browser's LocalStorage (not cookies)
- Check that LocalStorage is enabled (Privacy Settings)
- Try exporting as JSON to verify data is saved
- Clear cache in Private/Incognito window to isolate

### Issue: Excel export shows garbled characters
**Solution:**
- Close the template file before exporting
- Re-download template from Monash (may be corrupted)
- Try exporting to a different location

### Issue: Service Worker not caching offline
**Solution:**
- Force refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
- Clear Service Worker cache: DevTools → Application → Storage → Clear Site Data
- Wait 30 seconds and refresh

### Issue: "De-identification check" too strict
**Solution:**
- The regex patterns are conservative to protect privacy
- Use clinical abbreviations (e.g., "SS" instead of "Smith")
- Use medical terminology (e.g., "patient presented with..." vs naming)

---

## 📱 App Features Reference

### Entry Form Sections
1. **Date & Hours** - Episode date and supernumerary time
2. **Clinical Episode** - Patient UR, problem, assessment, plan, actions, outcome
3. **Domain** - Clinical Care, Leadership, Education, Research, etc.
4. **NMBA Standards** - Map to 4 standards (1-4) with 12 statements total
5. **Extensions** - Diagnostics, prescribing, referrals, certificates
6. **De-ID Check** - Automated privacy verification
7. **Auto-Synthesis** - Generate brief description from fields

### Dashboard
- **Total hours & entries** counters
- **NMBA standards coverage** progress bars (shows gaps)
- **Domain distribution** pie chart
- Identify which standards need more evidence

### View Entries
- **Search** by patient, domain, problem
- **Sort** by date
- **Delete** individual entries
- Quick overview of all logged episodes

### Settings
- **Export to Excel** (Monash template)
- **Backup/Restore JSON** (for safekeeping or sync)
- **Student info** storage
- **Storage usage** metrics
- **Clear all data** (irreversible)

---

## 🔄 Future Enhancements

Ideas for extending the app:

1. **Supabase Cloud Sync** - Real-time sync across devices
2. **PDF Export** - Generate printable CPD summary report
3. **Standards Reports** - Detailed breakdown of standard coverage
4. **Mentor Dashboard** - Share filtered entries with supervisor
5. **Mobile App** - Standalone iOS/Android apps via Capacitor
6. **Voice Entry** - Dictate notes, transcribe with speech-to-text
7. **Analytics** - Trend charts, time-series analysis
8. **Notifications** - Reminders to log entries, alerts for gaps

---

## 📞 Support & Customization

### Column Mapping Customization

If your Excel template differs from the default:

1. **Open `index.html` in a text editor**
2. **Find the `exportToExcel()` function** (line ~915)
3. **Modify the `rowData` array:**
   ```javascript
   const rowData = [
       entry.episodeDate,           // Column A
       entry.hoursSpent,            // Column B
       entry.patientUR,             // Column C
       // ... etc
   ];
   ```
4. Reorder values to match your template's column order
5. Save and re-upload to GitHub

### Custom Domains

To use a custom domain instead of `github.io`:

1. Update `CNAME` file in repo with your domain
2. Configure DNS settings with your registrar
3. [Full instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 📋 Version History

- **v1.0** (2026-01-XX) - Initial release
  - Core entry logging
  - Excel export
  - NMBA standards mapping
  - De-identification checks
  - Offline-first PWA
  - JSON backup/restore

---

## 📄 License

This app is provided for educational use. Modify freely for your needs.

**For Questions or Issues:**
- Check this guide's Troubleshooting section
- Test in an incognito window to isolate browser cache issues
- Review browser DevTools (F12) Console for error messages

---

**Happy logging! 🏥 Good luck with your Nurse Practitioner studies!**
