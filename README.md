# SparkX — Documentation & Self-Onboarding Portal

A modern, responsive, static documentation website for the **SparkX HR Intelligence & Self-Service Platform**. Designed as a unified Documentation Hub featuring a welcoming home portal, role-based onboarding journeys, operational user manuals, and the interactive 26-step HR Admin self-onboarding guide.

---

## 🌟 Documentation Hub & Portal Architecture

When opening `index.html`, visitors are greeted by the **SparkX Documentation & Knowledge Hub**:

### 1. **Home Portal View (`#portal`)**
- **Welcome Hero Section**: Warm greeting explaining the SparkX platform and guidance hub with key platform badges (v2.4 Live Platform, Enterprise Multi-Tenant HR, 26 Verified Real Screenshots).
- **Category 1: Self-Onboarding Guides**:
  1. **HR Admin & Founder Self-Onboarding** (*Primary Live Guide*): Complete 26-step interactive walkthrough to create account, verify email, register corporate profile, complete the 8-step organization setup wizard, and launch workspace. Clicking the card immediately switches to the live guide view (`#section-01`).
  2. **Invited Employee Onboarding** (*Interactive Live Guide*): Complete 3-step walkthrough tailored for team members joining an existing workspace via HR invitation. Includes strict access policy notice, invitation email verification, password activation, and ESS dashboard exploration. Clicking the card immediately switches to the live employee guide view (`#emp-section-01`).
- **Category 2: Operational User Manuals**:
  1. **Employee User Manual (ESS)** (*Interactive Live Manual*): Daily operational workflows (getting started & login with negative validation cases, dashboard & metrics customization, central inbox & request tracking, attendance, leaves, claims). Clicking the card switches directly to the live Employee User Manual view (`#emp-manual-overview`).
  2. **Manager User Manual**: Leadership workflows (central approvals inbox, multi-tier routing, team attendance tracking, overtime auditing, delegation of authority, and budget controls).
  3. **HR Administrator Manual**: Governance reference (entity management, job grading, leave/travel policy governance, approval routing matrixes, and audit compliance).
- **Seamless View Switching**: Instant zero-latency switching between Portal View (`#portal`), HR Admin Guide (`#section-01`), Invited Employee Guide (`#emp-section-01`), and Employee User Manual (`#emp-manual-overview`) via JavaScript, with top-bar and sidebar return buttons (`← Documentation Portal`), persistent hash routing, and browser history support.

---

## 👥 Invited Employee Self-Onboarding Guide (`#employeeGuideView`)

Features the exact same polished top-image / bottom-instruction layout, sticky sidebar stepper, and ambient lighting as the HR Admin guide:

### **Overview & Strict Access Policy (`#emp-section-01`)**
- **Strict Access Warning**: Explicitly clarifies that **direct registration is disabled for regular employees**. Access is strictly invite-only; users must receive an official HR email invitation with a valid 7-day activation token.
- **Pre-flight Requirements**: Invitation email, master password, and browser/smartphone.
- **3-Step Roadmap**: Email Invitation → Create Password → ESS Dashboard.

### **Step 1: Receive & Open Official Invitation Email (`#emp-step-01`)**
- **Image**: `Email Employee Invitation.png` (or `email-employee-invitation.png`)
- **Key Details**: Identifying sender (`SparkX <no-reply@sparkx.life>`), inviter name (*Diko Andriyanto*), organization (*Selalu Terang Group*), 7-day expiration limit, unique organization code (`SELALUTERA-AX9D`), and the purple **“Accept invitation”** button.

### **Step 2: Set Work Password & Activate Account (`#emp-step-02`)**
- **Image**: `Create Password Employee.jpg` (or `create-password-employee.jpg`)
- **Key Details**: Reviewing verified email (`melissaandrx@gmail.com`), setting an 8+ character master password, confirming password, optional *“Continue with Google”* SSO option, and clicking **“Activate and sign in”**.

### **Step 3: Explore ESS Dashboard & Start Daily Operations (`#emp-step-03`)**
- **Image**: `Dashboard Employee.jpg` (or `dashboard-employee.jpg`)
- **Key Details**: Tour of the Employee Self-Service workspace:
  - Personal greeting (*Mel Andrea, Employee* at *Selalu Terang Group*).
  - Quick metrics bar: Pending Inbox, Leave Balance (with `BOOK >` shortcut), Pending Claims, and Outpatient Balance.
  - Central feeds: Priority Tasks, Activity Feed, and Team on Leave.
  - Left navigation module tour: Time & Attendance (GPS clock-in/out), Leave Request, Claim & Expenses, Medical, Travel Request, Overtime, and Document Center (payslips & letters).

### **Completion & Readiness (`#emp-section-recap`)**
- 3-point verification checklist, button to open the SparkX live login page, and return link to Documentation Portal.

---

## 📖 Categorized Step Hierarchy & Structure (HR Admin Guide)

The guide features a streamlined, non-redundant step flow matching real-world administrative operations:

### **Step 3: Getting Started & Access**
- **Step 3.1** — Open the SparkX sign-in page (`01-login.jpg`) & choose *Create an account*.

### **Step 4: Create Account & Organization Registration (Streamlined 6-Step Flow + Negative Case)**
- **Step 4.1** — **Enter Full Name & Corporate Work Email** (`03-register-filled.jpg`): Complete the initial registration form without duplicate empty/filled steps.
- **Step 4.2** — **Check Your Work Inbox & Verification Email** (*Dual-View Tabs*):
  - *Tab 1*: Web Confirmation Notice (`04-check-inbox.jpg`).
  - *Tab 2*: Official Verification Email in inbox (`create-account-confirmation-email.png` / *“Create Account Confirmation Email”*).
- **Step 4.3** — **Set Master Password & Complete Activation** (`06-password-filled.jpg`): Access the secure password portal, set an 8+ character enterprise password, and complete initial sign-in.
- **Step 4.4** — **Onboarding Launchpad: Select “Create a New Organization”** (`07-start.jpg`): Choose the company creator journey.
- **Step 4.5** — **Complete Company Legal Profile & Confirm Currency Lock** (*Dual-View Tabs*):
  - *Tab 1*: Organization Registration Form with NPWP, Legal Name, Country & Timezone (`09-org-form-filled.jpg`).
  - *Tab 2*: Permanent Currency Lock Confirmation Dialog (`10-currency-dialog.jpg`).
- **Step 4.6** — **Await Superadmin Approval & Receive Approval Email** (*Dual-View Tabs*):
  - *Tab 1*: Web Queue Status Screen (`11-waiting-approval.jpg`).
  - *Tab 2*: Official Approval Notification Email (`approve-berhasil-email.png` / *“approve berhasil email”*).
- **Negative Case (Alternate Scenario) — Application Rejection & Resubmission** (*Dual-View Tabs*):
  - *Tab 1*: Rejection Banner on Web Portal (`rejection message from web.jpg`).
  - *Tab 2*: Rejection Notification Email from SparkX (`rejection email.jpg`).
  - *Guidance*: Explanation of common rejection causes (incomplete entity details, NPWP issues) and a 4-step resubmission walkthrough.

### **Step 5: Set Up Organization (The 8-Step Setup Wizard)**
*Persistently accessible in the left sticky sidebar with collapsible dropdown accordion controls:*
1. **Set up organization** (Step 5.1) — Organization legal profile & entity code (`12-setup-organization.jpg`).
2. **Set up modules** (Step 5.2) — Platform module toggles & feature activation (`13-setup-modules.jpg`).
3. **Set up levels** (Step 5.3a & 5.3b) — Career layers, job levels & granular grades (`14-setup-levels-empty.jpg`, `15-setup-levels-added.jpg`).
4. **Set up policies** (Step 5.4 Category Banner):
   - **a. Leaves** (Step 5.4a) — Annual leave quotas, carry-overs, and custom leave types (`16-policies-leave.jpg`).
   - **b. Claim & expenses** (Step 5.4b) — Receipt upload rules & claim submission windows (`17-policies-claims.jpg`).
   - **c. Travel** (Step 5.4c) — Travel request workflows & daily allowances (`18-policies-travel.jpg`).
   - **d. Overtime** (Step 5.4d) — Overtime request rules & manager authorizations (`19-policies-overtime.jpg`).
   - **e. Approval routing** (Step 5.4e) — Multi-tier manager approval chains (`20-policies-routing.jpg`).
5. **Set up limits** (Step 5.5 Category Banner):
   - **a. Claim & expenses** (Step 5.5a) — Per-level claim ceilings & monthly reimbursement caps (`21-limits-claims.jpg`).
   - **b. Travel** (Step 5.5b) — Per-level domestic/international flight cabin classes & hotel tiers (`25-limits-travel.jpg`).
6. **Set up structure** (Step 5.6) — Company organizational hierarchy & departments (`22-structure.jpg`).
7. **Set up starting data** (Step 5.7) — Sample demo template vs. blank production workspace (`23-starting-data.jpg`).
8. **Invite to team** (Step 5.8) — Bulk email invitations & role assignments (`24-invite-team.jpg`).

### **Step 6: Dashboard & Next Steps**
- **Step 6.1** — Live Workspace & Admin Dashboard operational tour (`26-dashboard.jpg`).

---

## 🎨 Key Design & Interaction Features

1. **Dual-View Screenshot Tabs (`.shot-tabs-header`):**
   - Steps with multiple related screenshots (e.g. Web screen vs. Email notification, or Form vs. Modal dialog) feature clean interactive tab switchers. Users can seamlessly toggle between what happens in the web application and what arrives in their email client.
2. **Dedicated Negative Case Handling:**
   - Visual and practical guidance for administrative rejection scenarios, showing both the web alert message and the rejection email, accompanied by actionable resubmission instructions.
3. **Collapsible Sidebar Dropdowns:**
   - The Step 5 subnav features an accordion dropdown toggle (`8 Steps`) to collapse the 15 wizard steps at will.
   - Nested dropdowns for `4. Policies` and `5. Limits`.
   - Global sidebar minimize button for distraction-free reading.
4. **Top-Image & Bottom-Instruction Architecture ("Atas Gambar, Bawahnya Instruction Steps"):**
   - Every single step features a full-width high-resolution browser mockup on top (`.g-shot-top`).
   - Step-by-step instructions are cleanly structured directly underneath (`.g-step-instructions`).
5. **Bilingual Support (English & Bahasa Indonesia):**
   - Complete 452-key bilingual dictionary with instant language toggling and persistent `localStorage` preference across the Documentation Portal, HR Admin Guide, and Invited Employee Guide.
6. **Documentation Hub & Dedicated Guide Views:**
   - Unified Home Portal with one-click routing to the interactive HR Admin Guide, Invited Employee Guide, and modal previews for operational User Manuals.
7. **High-Res Lightbox Inspection:**
   - Click any screenshot mockup to view the full-resolution capture in an accessible modal dialog.

---

## 📁 File Structure

```text
Default Project/
├── index.html                     # Semantic HTML5 guideline with categorized steps, tabs & lightbox
├── css/
│   └── style.css                  # Design tokens, stacked layout, shot tabs, negative case styling
├── js/
│   └── script.js                  # Complete bilingual dictionary, dual-tier scroll spy, tabs controller, lightbox
├── assets/
│   └── screenshots/
│       ├── flow/                  # Verified product screenshots and email captures
│       ├── rejection email and rejection message from web/ # Rejection email and web alert captures
│       └── ...
└── README.md                      # Documentation & architecture overview
```

---

## 🚀 How to Run

Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox). No build step, package manager, or web server is required.
