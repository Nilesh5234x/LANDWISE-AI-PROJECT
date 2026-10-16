# LandWise AI - Smart Agriculture & Land Monitoring Platform
> **Project Team: GeoGuard**  
> Students: Renuka Prafull Shinde, Pranav Prakash Sathe, Nilesh Birudev Vagare, Tejaswini Sanjay Patil

---

## 🌾 Overview
**LandWise AI** is an intelligent decision-support platform designed to solve the critical problem of fragmented land records in India (specifically Maharashtra 7/12, Ferfar, Cadastral Maps, and Encumbrances).

This application was engineered directly from the **LANDWISE AI** project proposal and block diagram:
1. **Multi-Source Ingestion**:
   - Administrative Search: District, Taluka, Village, and Survey / Gat Number.
   - Live Camera / Photo & GPS Geolocation: Geotagged land scan with auto-pinpoint coordinates.
   - Interactive GIS Map: Pinpoint parcels directly on satellite imagery.
2. **7/12 Extract & Ownership Verification**:
   - Primary & Joint Khatedars (Names, shares, Aadhaar-linked status, Khata numbers).
   - Area distribution: Hectares, Are, Guntha, Acres, Pot-Kharaba, and Cultivable land.
3. **Legal Risk, Dispute & Illegal Property Check**:
   - Area mismatch detection between GIS Satellite boundaries and registered 7/12 area.
   - Unauthorized plotting / Non-Agricultural (NA) violation alerts.
   - Pending Civil Court disputes, Lis Pendens notices, and stay orders.
   - Forest & ecological buffer reservations.
4. **Encumbrance & Bank Loan Registry (बोजा)**:
   - Active bank loans (Bank, Branch, Amount, Loan Type, Sanction Date, Ferfar link).
   - Status: Active vs Nil Encumbrance Certificate (बोजा निरंक).
   - Formal Bank NOC requirement indicators.
5. **Historical Mutation Chain (फेरफार नोंदी)**:
   - Chronological timeline tracing provenance back decades (खरेदीखत, वारस नोंद, वाटप, बोजा नोंद, बोजा कमी नोंद).
   - Certified status by Talathi and Circle Officer.
6. **Soil Health & Precision Agriculture (Block Diagram Slide 10)**:
   - Soil Classification (Deep Black Cotton, Medium Black, Red Gravelly).
   - pH meter, Moisture %, and N-P-K nutrient status meters.
   - Satellite NDVI vegetation canopy index.
   - AI Agronomic recommendations: Best suited crops, fertilizer formulation, and smart micro-drip irrigation scheduling.
7. **Official Land Verification Dossier & Certificate**:
   - One-click printable official summary certificate with QR verification code and audit ID.

---

## 🚀 How to Run

1. Open a terminal in the project directory:
   ```bash
   cd C:\Users\niles\.gemini\antigravity\scratch\landwise-ai
   ```
2. Run the Vite development server:
   ```cmd
   npm run dev
   ```
3. Open your browser at:
   ```
   http://127.0.0.1:3000/
   ```

---

## 🛠️ Tech Stack (from PPT Slide 12)
- **Frontend**: React 18, Tailwind CSS, Lucide React Icons
- **GIS & Mapping**: Leaflet.js, OpenStreetMap, Esri World Imagery (Satellite)
- **Design System**: Emerald/Teal Agritech Theme, Bilingual English & Marathi support
- **Verification Engine**: Multi-criteria explainable risk scoring algorithm
