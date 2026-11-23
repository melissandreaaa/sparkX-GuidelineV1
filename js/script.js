/**
 * SparkX Self-Onboarding Guideline — Interactive Controller
 * Features:
 * - Categorized step hierarchy (Step 3, Step 4, Step 5 with 1..8 and sub a..e/a..b, Step 6)
 * - Sidebar nested navigation for Step 5 organization setup
 * - Bilingual support (English & Bahasa Indonesia) with persistent preference
 * - Reading progress bar & scroll-spy stepper
 * - Guided Previous/Next navigation controls
 * - Screenshot Lightbox modal for high-res inspection
 */

document.addEventListener('DOMContentLoaded', () => {
  const safeInit = (fn, name) => {
    try { fn(); } catch (err) { console.error(`Error initializing ${name}:`, err); }
  };
  safeInit(initLanguageToggle, 'LanguageToggle');
  safeInit(initPortalView, 'PortalView');
  safeInit(initScrollSpy, 'ScrollSpy');
  safeInit(initStepNavigation, 'StepNavigation');
  safeInit(initLightbox, 'Lightbox');
  safeInit(initSidebarDropdown, 'SidebarDropdown');
  safeInit(initShotTabs, 'ShotTabs');
  safeInit(initDeviceToggles, 'DeviceToggles');
  safeInit(initEmpManualSidebar, 'EmpManualSidebar');
});

/* --------------------------------------------------------------------------
   1. Bilingual Translations (EN / ID)
   -------------------------------------------------------------------------- */
const translations = {
  en: {
    guideBadge: "HR Admin Onboarding Guide",
    subnavPill: "8 Steps",
    showSidebarBtn: "Show Menu",
    stepOf: "Step {current} of {total}",
    helpTitle: "Need assistance?",
    helpDesc: "If a verification link has expired or approval is taking longer than expected, contact your SparkX support team.",
    prevBtn: "Previous Step",
    nextBtn: "Next Step",
    zoomHint: "Click image to zoom",
    instructionsTitle: "Step-by-Step Instructions",

    // Nav items
    nav1: "Welcome HR Admin",
    nav2: "Platform Modules",
    nav3: "Getting Started",
    nav4: "Create Account & Org",
    nav5: "Set Up Organization",
    nav6: "Dashboard",
    num1: "01 • Overview",
    num2: "02 • Modules",
    num3: "03 • Access",
    num4: "04 • Account Setup",
    num5: "05 • Org Wizard",
    num6: "06 • Dashboard",

    // Section 01
    s1Badge: "Step 01 • Introduction & Readiness",
    s1Title: "Welcome to SparkX for HR Administrators",
    s1Lead: "Your comprehensive self-onboarding guide to creating, verifying, configuring, and launching your company organization on SparkX.",
    s1HeroTitle: "A Unified, Modern Digital Workplace for Your Organization",
    s1HeroDesc: "SparkX equips HR leaders and organization administrators with complete autonomous control over human resources, automated attendance logs, multi-tier approval chains, and transparent company policy enforcement.",
    prop1Title: "Centralized Administration",
    prop1Desc: "Manage company entities, subsidiaries, job grades, and employee directories from a single master control dashboard.",
    prop2Title: "Automated Workflows & Approvals",
    prop2Desc: "Eliminate paper forms and manual email threads with automated multi-tier approval routing for leaves, overtime, and claims.",
    prop3Title: "Strict Policy & Spending Governance",
    prop3Desc: "Enforce customizable per-claim limits, monthly expense budgets, per diems, and transportation classes tailored to each job level.",

    prepTitle: "HR Admin Pre-Flight Checklist",
    prep1Title: "Company Legal Entity & NPWP",
    prep1Desc: "Official company legal name and corporate tax ID / registration number for formal registration.",
    prep2Title: "Corporate Work Email",
    prep2Desc: "The primary HR administrator email address that will act as the master workspace owner.",
    prep3Title: "Operating Currency (Permanent)",
    prep3Desc: "Confirm your primary currency (e.g. IDR). Note: Once submitted, the base currency cannot be modified!",
    prep4Title: "Organizational Hierarchy & Levels",
    prep4Desc: "Prepare your company divisions, departments, and job seniority levels (e.g. Staff, Manager, Director).",

    roadmapTitle: "The 4-Phase Onboarding Roadmap",
    rm1: "Phase 1: Owner Account Creation & Email Verification",
    rm2: "Phase 2: Organization Registration & Superadmin Approval",
    rm3: "Phase 3: The 8-Step Organization Setup Wizard",
    rm4: "Phase 4: Workspace Launch & Employee Rollout",

    // Section 02
    s2Badge: "Step 02 • Core Architecture",
    s2Title: "Understanding SparkX & Modules",
    s2Lead: "SparkX combines an intuitive Employee Self-Service (ESS) interface with a centralized HR Admin Control Hub.",
    essConceptTitle: "Employee Self-Service (ESS) with Administrative Oversight",
    essConceptDesc: "While employees enjoy autonomy to clock in/out, submit leave, and file reimbursement claims on any device, HR Administrators retain full governance over policy rules, spending caps, and multi-tier approval routing.",
    confirmedModulesTitle: "Available Platform Modules",
    mTime: "Time & Attendance",
    mTimeDesc: "Clock-in/out logs, geolocation tracking, shift scheduling, and attendance correction requests.",
    mOvertime: "Overtime Management",
    mOvertimeDesc: "Overtime pre-orders, actual work duration logging, and statutory pay rate multiplier formulas.",
    mLeave: "Leave & Time Off",
    mLeaveDesc: "Annual leave balances, sick leaves, public holiday substitutes (PHL), and collective leave calendars.",
    mMedical: "Medical Reimbursement",
    mMedicalDesc: "Direct employee medical claims audited against transparent annual benefit allowances per level.",
    mTravel: "Business Travel (Dinas)",
    mTravelDesc: "Travel requisitions, per diem meal allowances, hotel lodging ceilings, and flight/train booking classes.",
    mClaims: "Claim & Expenses",
    mClaimsDesc: "Operational reimbursement claims, digital receipt auditing, and monthly spending ceilings.",
    mDocs: "Document Center",
    mDocsDesc: "Self-service requests for employment verification letters, salary slips, and company announcements.",
    mAssets: "iShop & Assets",
    mAssetsDesc: "Company hardware inventory, laptop requisitions, and office equipment assignment tracking.",
    mMeeting: "Meeting Rooms",
    mMeetingDesc: "Real-time room availability calendar, reservations, and conference room booking management.",
    mOnboarding: "Onboarding",
    mOnboardingDesc: "New-hire documentation checklists, first-week milestones, and automated employee profile onboarding.",
    mOffboarding: "Offboarding",
    mOffboardingDesc: "Exit interview checklists, company asset return verification, and clearance handover tracking.",
    mt1: "Core Daily",
    mt2: "Operational",
    mt3: "Balance Tracking",
    mt4: "Benefits",
    mt5: "Dinas / Travel",
    mt6: "Finance",
    mt7: "Documents",
    mt8: "Equipment",
    mt9: "Facilities",
    mt10: "People",
    mt11: "People",

    // Section 03
    s3Badge: "Step 03 • Access",
    s3Title: "Getting Started & Login Access",
    s3Lead: "Access SparkX securely through any modern web browser without installing additional desktop software.",
    kLogin: "Step 03 • Getting Started",
    g3Title: "3.1 • Open the SparkX Sign-In Page",
    g3Desc: "SparkX runs in the browser. Bookmark your official workspace URL for convenient daily administration.",
    g3b1: "Open your browser (Chrome, Edge, Safari, Firefox) and navigate to the <code>/login</code> address.",
    g3b2: "Existing users sign in with their work email and password, or choose <strong>Continue with Google</strong>.",
    g3b3: "To register as a new organization administrator, click <strong>Create an account</strong> below the sign-in button.",
    g3Note: "Biometric sign-in (Face ID / Fingerprint) becomes available once you have logged in and enabled a passkey on your device.",
    g3cap: "The SparkX sign-in screen. New organization admins start with “Create an account”.",
    loginMethodsTitle: "Available Authentication Methods",
    loginMethod1: "Work Email & Password",
    loginMethod1Desc: "Standard corporate email authentication with encrypted credentials established during activation.",
    loginMethod2: "Google Workspace SSO",
    loginMethod2Desc: "One-click single sign-on integration for teams using Google Workspace corporate emails.",
    loginMethod3: "Biometrics / Passkeys",
    loginMethod3Desc: "FIDO-compliant biometric authentication for quick, passwordless sign-in on supported hardware.",

    // Section 04: Create Account & Org Registration (Screens 2 to 11)
    s4Badge: "Step 04 • Create Account",
    s4Title: "Step 4: Create Account & Organization Signup",
    s4Lead: "Follow the six sub-steps below to establish your administrator account, verify your email, register your company, and submit it for approval.",
    pathEmpTag: "Path 1",
    pathOrgTag: "Path 2 (You are here)",
    accPath1Title: "Invited Employee / Manager",
    accPath1Text: "Employees join an existing company via an email invitation. They set a password and access the Employee Self-Service dashboard directly.",
    accPath2Title: "HR Administrator / Organization Founder",
    accPath2Text: "You are creating a new company workspace. Follow the step-by-step screenshots below to create your account, register the company, and await approval.",

    // Steps 4.1 to 4.6 & Negative Case Rejection
    kAcc: "Step 04 • Create Account",
    kOrgReg: "Step 04 • Organization Registration",
    
    // Tab labels for multi-shot steps
    tabWebNotice: "Web Screen",
    tabEmailReceived: "Email Received",
    tabOrgForm: "Organization Form",
    tabCurrencyDialog: "Currency Lock Dialog",
    tabWaitingWeb: "Web Status",
    tabApprovalEmail: "Approval Email",
    tabRejectionWeb: "Web Alert Banner",
    tabRejectionEmail: "Rejection Email",
    tabEmptyForm: "Empty Form",
    tabFilledForm: "Filled Form",
    tabPwdRules: "Password Rules",
    tabPwdReady: "Password Set",
    tabInitial: "Initial",
    tabCodeAdded: "Short Code Added",
    tabBeforeSave: "Before Saving",
    tabAfterSave: "Saved",
    tabOptions: "Options",
    tabSelected: "Selected",
    tabInviteForm: "Invite Form",
    tabInviteFilled: "Invite Filled",

    // Step 4.1 (Combined 4.1 & 4.2)
    s4_step1_title: "4.1 • Enter Full Name and Corporate Email Address",
    s4_step1_lead: "The registration form requires only two essential profile details. Company legal entity information will be collected after email verification.",
    s4_step1_b1: "In the <strong>Full name</strong> field, type your legal name as it should appear on official approvals and documents.",
    s4_step1_b2: "In the <strong>Email</strong> field, enter your active company email address where you will receive the verification link.",
    s4_step1_b3: "Review both entries carefully, then click the purple <strong>Continue</strong> button to dispatch your verification link. (No password is created at this step).",
    s4_step1_note: "Use an administrator email address you can access immediately. The first registered account automatically becomes the Organization Owner.",
    s4_step1_cap: "Registration form filled with administrator full name and corporate email address.",
    capRegEmpty: "The registration form as it opens — SparkX asks for only a full name and an email address.",

    // Step 4.2 (Was 4.3 + new Confirmation Email)
    s4_step2_title: "4.2 • Check Your Work Inbox & Confirm Verification Email",
    s4_step2_lead: "SparkX immediately transmits a secure, time-limited verification email to your corporate address.",
    s4_step2_b1: "The on-screen confirmation indicates the recipient email address where the verification message was sent.",
    s4_step2_b2: "Open your corporate inbox and locate the email with subject line <strong>“Confirm your email for SparkX”</strong> sent from <code>no-reply@sparkx.life</code>.",
    s4_step2_b3: "Click the purple button <strong>“Confirm email & set password”</strong> (or copy the one-time link) to access the password creation portal.",
    s4_step2_b4: "If the email does not appear within 2 minutes, check your <strong>Spam</strong> or <strong>Promotions</strong> folder.",
    s4_step2_note: "The verification link expires in 24 hours and is valid for one-time use. If expired, request a new link from the login page.",
    s4_step2_cap1: "The “Check your inbox” confirmation screen in the SparkX web app.",
    s4_step2_cap2: "The official “Confirm your email for SparkX” verification email received in your corporate inbox.",

    // Step 4.3 (Combined 4.4 & 4.5)
    s4_step3_title: "4.3 • Set Secure Master Password & Complete Activation",
    s4_step3_lead: "Establish a strong password to protect administrative access to your company's employee data and financial claims.",
    s4_step3_b1: "The verification link opens the secure <code>/verify-email</code> portal displaying your verified email address.",
    s4_step3_b2: "Enter a strong password of at least <strong>8 characters</strong> (combining uppercase, lowercase, numbers, and symbols).",
    s4_step3_b3: "Re-enter the exact same password in the confirmation field to ensure accuracy.",
    s4_step3_b4: "Click <strong>Set password & continue</strong> to finalize activation — SparkX signs you into the platform automatically.",
    s4_step3_note: "Record your master credentials securely in your company's enterprise password manager.",
    s4_step3_cap: "Master password entered and confirmed meeting all enterprise security criteria.",
    capPwdEmpty: "The password screen as it opens, listing every requirement before you type.",

    // Step 4.4 (Was 4.6)
    s4_step4_title: "4.4 • Onboarding Launchpad — Choose “Create a New Organization”",
    s4_step4_lead: "Upon first sign-in, you land on the SparkX onboarding launchpad. Selecting the organization path starts corporate registration.",
    s4_step4_b1: "Confirm that the greeting header displays your verified name and administrator email address.",
    s4_step4_b2: "Click on the card titled <strong>“Create a new organization”</strong>.",
    s4_step4_b3: "If your company is already using SparkX under another department, do not proceed here — request an invitation from the existing administrator instead.",
    s4_step4_cap: "The start screen featuring the “Create a new organization” action card.",

    // Step 4.5 (Combined 4.7, 4.8 & 4.9)
    s4_step5_title: "4.5 • Complete Organization Profile & Confirm Currency Lock",
    s4_step5_lead: "Fill in your corporate entity details, tax identification, country, and confirm the permanent base currency.",
    s4_step5_b1: "In <strong>Organization name</strong>, type your public corporate brand or group name (e.g. <code>ABC Group</code>).",
    s4_step5_b2: "In <strong>First company (legal name)</strong>, enter the registered legal name of your first company (e.g. <code>PT ABC Solusi Global</code>). The short code is added in the setup wizard.",
    s4_step5_b3: "In <strong>NPWP / Reg. no.</strong> (optional), enter your tax ID or business licence number if you have it.",
    s4_step5_b4: "Select your <strong>Country</strong> (e.g. <code>Indonesia</code>) and primary operational <strong>Time zone</strong> (e.g. <code>Asia/Jakarta (GMT+7)</code>).",
    s4_step5_b5: "Choosing the country fills the fixed <strong>Currency</strong> automatically (e.g. <code>IDR</code>). Click <strong>Submit for approval</strong> when the form is complete.",
    s4_step5_b6: "In the dialog, click <strong>“I understand, use IDR”</strong> to confirm that the currency is permanent.",
    s4_step5_note: "CRITICAL: The operating currency is permanently locked for the lifetime of your organization. All future claim limits, allowances, and payroll workflows will operate in this currency.",
    s4_step5_cap1: "Organization registration form completed with legal entity name, NPWP, and timezone.",
    capOrgFormEmpty: "The organization form as it opens, before the name, country and time zone are entered.",
    s4_step5_cap2: "The permanent currency lock confirmation dialog requiring explicit administrator sign-off.",

    // Step 4.6 (Was 4.10 + Approval Email)
    s4_step6_title: "4.6 • Await Superadmin Review & Receive Approval Email",
    s4_step6_lead: "Every new organization is reviewed by SparkX superadmins for tenant security. Once approved, the 8-step setup wizard unlocks.",
    s4_step6_b1: "The status screen displays <strong>Waiting for approval</strong> along with your organization name and submission timestamp.",
    s4_step6_b2: "Verification typically completes within <strong>1 business day</strong>; you can safely close your browser while queued.",
    s4_step6_b3: "Upon approval, you will receive an official notification email titled: <strong>“[Company Name] is ready on SparkX”</strong> sent from <code>no-reply@sparkx.life</code>.",
    s4_step6_b4: "Click the purple button <strong>“Set up your organization”</strong> inside the email (or sign in to SparkX) to launch Step 5: The Setup Wizard.",
    s4_step6_note: "Signing in before approval will display the waiting screen. As soon as approved, your next sign-in directs straight into the 8-step setup wizard.",
    s4_step6_cap1: "Status screen confirming that the organization registration has been submitted and is awaiting approval.",
    s4_step6_cap2: "The official approval notification email confirming your organization is ready with a direct setup link.",

    // Negative Case (Rejection & Resubmission)
    s4_neg_badge: "Negative Case • Rejection & Resubmission",
    s4_neg_title: "What If Your Organization Request is Rejected?",
    s4_neg_lead: "If legal entity information cannot be verified, SparkX superadmins will decline the request and provide specific feedback for resubmission.",
    s4_neg_b1: "<strong>Why Rejection Occurs</strong>: Requests are rejected if the legal entity name does not match official tax records, the registration number (NPWP) is invalid, or details are insufficient to verify the organization.",
    s4_neg_b2: "<strong>Email Rejection Notice</strong>: You will receive an email titled <strong>“About your request for [Company Name]”</strong> with the explanation: <em>“We reviewed your request to set up [Company Name] on SparkX and couldn't approve it. The details weren't enough for us to verify the organization.”</em>",
    s4_neg_b3: "<strong>Web Portal Rejection Banner</strong>: Logging in to the SparkX web app displays an alert banner explaining the decision and inviting a new request.",
    s4_neg_b4: "<strong>How to Resubmit</strong>: Click <strong>Open SparkX</strong> (or log in), review the feedback, click <strong>Create a new organization</strong>, and re-submit your registration with complete, accurate legal documents and verified corporate credentials.",
    s4_neg_note: "Need assistance with verification? Contact the SparkX support team with your corporate registration documents for priority verification.",
    s4_neg_cap1: "Rejection notification banner displayed on the SparkX web portal with guidance to resubmit.",
    s4_neg_cap2: "Official rejection notification email explaining why the request could not be approved.",

    // Section 05: The 8-Step Setup Wizard (Screens 12 to 25)
    s5Badge: "Step 05 • Org Setup",
    s5Title: "Step 5: Set Up Organization (The 8-Step Wizard)",
    s5Lead: "Once approved, SparkX unlocks an eight-step setup wizard at /ess/setup. Follow the 8 categorized steps below to complete your company setup.",
    s5PrereqNotice: "Prerequisites: Your owner account is verified, and your organization is approved by SparkX superadmins. Sign in with the administrator account you created in Step 4.",
    kOrgWizard: "Step 05 • Set Up Organization",

    // Subnav items in Sidebar
    sn1: "1. Set up organization",
    sn2: "2. Set up modules",
    sn3: "3. Set up levels",
    sn4: "4. Set up policies",
    sn4a: "a. Leaves",
    sn4b: "b. Claim & expenses",
    sn4c: "c. Travel",
    sn4d: "d. Overtime",
    sn4e: "e. Approval routing",
    sn5: "5. Set up limits",
    sn5a: "a. Claim & expenses",
    sn5b: "b. Travel",
    sn6: "6. Set up structure",
    sn7: "7. Set up starting data",
    sn8: "8. Invite to team",

    // Step 5.1
    s5_step1_title: "5.1 • Set Up Organization Profile & Legal Entity",
    s5_step1_lead: "Verify the core company profile. Most fields are pre-populated from your registration submission in Step 4.",
    s5_step1_b1: "Confirm the <strong>Organization name</strong> and system-generated code shown at the top of the form.",
    s5_step1_b2: "Review the <strong>First company legal name</strong> and assign a short code abbreviation (e.g. <code>SGI</code>).",
    s5_step1_b3: "Check the optional <strong>NPWP / Reg. no.</strong> field — add your tax or business registration number if you have one.",
    s5_step1_b4: "Verify the <strong>Country</strong>, <strong>Time zone</strong>, and the permanently locked <strong>Currency</strong>.",
    s5_step1_b5: "Click <strong>Save & continue</strong> to proceed to module configuration.",
    s5_step1_note: "Additional subsidiary companies or entities can be added later under Admin Settings > Companies & Structure.",
    s5_step1_cap: "Step 5.1 — Organization profile and company legal entity confirmation.",
    capProfileFilled: "Step 1 once the short company code (TJG) is added — Save & continue is ready.",

    // Step 5.2
    s5_step2_title: "5.2 • Set Up Platform Modules",
    s5_step2_lead: "Enable only the features your company will utilize. Any disabled modules will be hidden from employee menus to prevent clutter.",
    s5_step2_b1: "Review the 11 modular toggles: Time & Attendance, Overtime, Leave, Medical Reimbursement, Travel, Claim & Expenses, Document Center, Onboarding, Offboarding, iShop & Assets, and Meeting Rooms.",
    s5_step2_b2: "Turn on your required modules. Mind feature dependencies: <strong>Overtime</strong> requires Time & Attendance; <strong>Offboarding</strong> requires Document Center.",
    s5_step2_b3: "Click <strong>Save modules</strong>, then click <strong>Continue</strong>.",
    s5_step2_note: "Modules can be activated at any time in the future without data loss.",
    s5_step2_cap: "Step 5.2 — Module selection with built-in dependency validation.",

    // Step 5.3
    s5_step3a_title: "5.3a • Set Up Career Hierarchy Layers (Initial)",
    s5_step3a_lead: "Job layers represent major seniority bands within your organization. Defining layers is required before creating specific job grades.",
    s5_step3a_b1: "Type a layer name (e.g. <em>Staff</em>) in the <strong>New layer, e.g. Staff</strong> box and click <strong>Layer</strong>. Repeat for <em>Management</em> or any other band.",
    s5_step3a_b2: "Layers provide high-level grouping for approval routing templates and policy governance.",
    s5_step3a_b3: "If your company has a flat structure, create at least one generic layer (e.g. <em>General</em>).",
    s5_step3a_note: "Mandatory Requirement: An organization without levels cannot pass the Limits step in this wizard.",
    s5_step3a_cap: "Step 5.3a — Layers and levels before configuration.",

    s5_step3b_title: "5.3b • Set Up Job Levels within Each Layer (Configured)",
    s5_step3b_lead: "Subdivide each layer into specific employee levels. Every employee in your organization will be assigned to one of these levels.",
    s5_step3b_b1: "Under a layer, type a grade in the <strong>New level, e.g. Staff 1</strong> box and click <strong>Level</strong> (e.g. Staff 1, Staff 2, Manager).",
    s5_step3b_b2: "Repeat the process for managerial and executive layers (e.g. <em>Manager 1</em>, <em>Manager 2</em>, <em>Director</em>).",
    s5_step3b_b3: "Remove unnecessary levels using the <strong>×</strong> icon, or delete an entire layer using the <strong>trash</strong> icon.",
    s5_step3b_b4: "Verify that every employee role in your company maps cleanly to a level, then click <strong>Continue</strong>.",
    s5_step3b_note: "The levels defined here govern expense claim ceilings and travel cabin class entitlements in Step 5.5.",
    s5_step3b_cap: "Step 5.3b — Career layers and job levels configured and ready to continue.",

    // Step 5.4 Category & Sub-steps
    s5_cat_policies_title: "5.4 • Set Up Company Policies (5 Tabs)",
    s5_cat_policies_desc: "Configure the 5 policy areas below (Leaves, Claims, Travel, Overtime, Approval Routing) before defining limits.",

    s5_step4a_title: "5.4a • Set Up Policies: Leave & Time Off",
    s5_step4a_lead: "Review the default Indonesian leave types and adjust quotas, then decide whether substitute leave (PHL) requests are allowed.",
    s5_step4a_b1: "In Step 5.4, open the <strong>Leave</strong> tab.",
    s5_step4a_b2: "Review the listed leave types — <em>Annual Leave</em> (12 days/year), <em>Sick Leave</em> (unlimited), <em>Maternity</em>, <em>Paternity</em> and others. Use the pencil icon to change a quota.",
    s5_step4a_b3: "Click <strong>+ Add leave type</strong> for anything missing, and switch <strong>Substitute leave (PHL) requests</strong> on if employees may claim it.",
    s5_step4a_b4: "Click <strong>Save settings</strong>.",
    s5_step4a_cap: "Step 5.4a — Default leave types and the PHL setting.",

    s5_step4b_title: "5.4b • Set Up Policies: Claim & Expenses",
    s5_step4b_lead: "Turn claims on, require receipts if you need them, and set how late an expense can be submitted.",
    s5_step4b_b1: "Switch to the <strong>Claim & Expenses</strong> tab.",
    s5_step4b_b2: "Keep <strong>Enable Claim & Expenses</strong> on, and <strong>Require receipt</strong> on if claims must include proof.",
    s5_step4b_b3: "Set the <strong>Submission deadline (days)</strong> — 0 means no deadline.",
    s5_step4b_b4: "Review the expense categories and their fields, then click <strong>Save and apply</strong>.",
    s5_step4b_cap: "Step 5.4b — Claim settings and expense categories.",

    s5_step4c_title: "5.4c • Set Up Policies: Business Travel",
    s5_step4c_lead: "Decide whether travel requests are enabled and maintain the activity and accommodation types employees can pick.",
    s5_step4c_b1: "Switch to the <strong>Travel</strong> tab.",
    s5_step4c_b2: "Keep <strong>Enable Travel Requests</strong> on if employees may submit trips.",
    s5_step4c_b3: "Review <strong>Activity types</strong> (Business Trip, Training / Seminar, Client Visit) and <strong>Accommodation types</strong> (Flight, Hotel, Car, Train); add or remove entries as needed.",
    s5_step4c_b4: "Click <strong>Save and apply</strong>. Daily allowances are set later under Limits — they are not part of these defaults.",
    s5_step4c_cap: "Step 5.4c — Travel policy: request toggle, activity and accommodation types.",

    s5_step4d_title: "5.4d • Set Up Policies: Overtime",
    s5_step4d_lead: "Choose the overtime types employees can request and the hourly caps that apply.",
    s5_step4d_b1: "Switch to the <strong>Overtime</strong> tab.",
    s5_step4d_b2: "Review <strong>Overtime types</strong> (Regular Overtime, PHL — Pengganti Hari Libur) and add any others.",
    s5_step4d_b3: "Set <strong>Per day</strong>, <strong>Per week (Monday–Sunday)</strong> and <strong>Per month</strong> limits in hours, or leave “No limit”.",
    s5_step4d_b4: "Pick what happens <strong>Over a limit</strong>, then click <strong>Save and apply</strong>.",
    s5_step4d_cap: "Step 5.4d — Overtime types and hourly limits.",

    s5_step4e_title: "5.4e • Set Up Policies: Multi-Tier Approval Routing",
    s5_step4e_lead: "Construct automated sequential approval chains for each operational module (Direct Manager -> Department Head -> HR/Finance).",
    s5_step4e_b1: "Switch to the <strong>Approval routing</strong> tab.",
    s5_step4e_b2: "Select each module from the dropdown to review and customize its multi-tier approval workflow.",
    s5_step4e_b3: "Templates can be shared across modules or tailored per department. Click <strong>Save</strong>, then select <strong>Continue</strong>.",
    s5_step4e_cap: "Step 5.4e — Multi-level approval routing workflow editor.",

    // Step 5.5 Category & Sub-steps
    s5_cat_limits_title: "5.5 • Set Up Spending & Travel Limits",
    s5_cat_limits_desc: "Define per-level ceilings for operational claims and authorized flight/train travel booking classes.",

    chip1: "Meals",
    chip2: "Transport",
    chip3: "Accommodation",
    chip4: "Parking",
    chip5: "Groceries",
    chip6: "Office supplies",
    chip7: "Other",

    s5_step5a_title: "5.5a • Set Up Limits: Claim & Expenses Caps per Level",
    s5_step5a_lead: "Enforce financial discipline by setting maximum claim amounts and monthly reimbursement budgets for each job level.",
    s5_step5a_b1: "Open the <strong>Claim & Expenses</strong> tab inside Step 5.5.",
    s5_step5a_b2: "For each category and level, enter the <strong>Max per claim</strong> and <strong>Monthly budget</strong> in IDR.",
    s5_step5a_b3: "Leave fields empty if a particular level has <strong>No limit</strong> (e.g. C-level executives).",
    s5_step5a_b4: "Select <strong>Save claim limits</strong> before proceeding to the Travel tab.",
    s5_step5a_note: "Every level must be reviewed. Inspect the yellow summary panel to see remaining unconfigured fields.",
    s5_step5a_cap: "Step 5.5a — Expense claim ceiling matrix per employee level.",
    capLimitsFilled: "Every level filled in — “Claim limits saved” appears, and only the travel rates remain.",

    s5_step5b_title: "5.5b • Set Up Limits: Travel Rates & International Rules",
    s5_step5b_lead: "Set the daily allowance per level and, if needed, add international rules for destinations outside the home country.",
    s5_step5b_b1: "Open the <strong>Travel</strong> tab inside Step 5.",
    s5_step5b_b2: "Set <strong>Home country</strong> to <strong>Company country (Indonesia)</strong> so domestic trips are judged correctly.",
    s5_step5b_b3: "Enter the <strong>Daily allowance</strong> for each level; an empty amount means no allowance.",
    s5_step5b_b4: "Add <strong>Other allowances</strong> or an <strong>International rule</strong> if needed, then click <strong>Save domestic rates</strong> and check that the yellow “Still to do” panel clears.",
    s5_step5b_note: "International trips stay “not configured” until you add a country rule. Empty limits are valid, but each level still needs an explicit save.",
    s5_step5b_cap: "Step 5.5b — Domestic allowance per level saved; the pending checklist is clear.",

    // Step 5.6
    s5_step6_title: "5.6 • Set Up Company Structure (Directorates & Divisions)",
    s5_step6_lead: "Establish your organization's departmental hierarchy to power managerial reporting and departmental visibility.",
    s5_step6_b1: "Click <strong>+ Add directorate</strong> to create top-level corporate divisions (e.g. <em>Operations</em>, <em>Technology</em>, <em>Finance</em>).",
    s5_step6_b2: "Under each directorate, type the names of departments separated by commas (e.g. <em>Accounting, Tax, Treasury</em>).",
    s5_step6_b3: "Use <strong>+ Add division (no directorate)</strong> for independent or cross-functional teams.",
    s5_step6_b4: "Select <strong>Save & continue</strong>. This step is optional and can be expanded anytime after launch.",
    s5_step6_note: "Departmental structure directly links to approval routing, allowing division-level approval routing.",
    s5_step6_cap: "Step 5.6 — Company hierarchy with directorates, divisions, and departments.",
    capStructureFilled: "A directorate with its division and comma-separated departments, ready to save.",

    // Step 5.7
    s5_step7_title: "5.7 • Set Up Starting Data Mode",
    s5_step7_lead: "Select whether to explore SparkX using sample test data or launch immediately with a blank production environment.",
    s5_step7_b1: "<strong>Start with sample data</strong>: loads about ten fictional employees with departments, courses, open positions and reviews, so every screen has something to show. They cannot sign in and receive no email.",
    s5_step7_b2: "<strong>Start blank</strong>: only your own records. Add employees by inviting them in the next step or importing a CSV.",
    s5_step7_b3: "Select your preferred option card, then click <strong>Continue</strong>.",
    s5_step7_note: "Sample records can be removed later with one click — exactly the sample data, nothing you added yourself.",
    s5_step7_cap: "Step 5.7 — Starting data options: Sample Data vs Clean Blank Workspace.",
    capDataSelected: "“Start with sample data” selected — the note confirms the sample records can be removed later.",

    // Step 5.8
    s5_step8_title: "5.8 • Invite Team & Finish Organization Setup",
    s5_step8_lead: "Invite the founding administrators, HR managers, and department heads who will assist in running the workspace.",
    s5_step8_b1: "Enter your colleague's <strong>Full name</strong> and corporate <strong>Work email</strong>.",
    s5_step8_b2: "Select their platform role: <code>EMPLOYEE</code>, <code>MANAGER</code>, <code>HR</code>, <code>CHRO</code>, <code>ADMIN BU</code>, or <code>ADMIN</code>.",
    s5_step8_b3: "Click <strong>Invite</strong> — each recipient immediately receives an automated onboarding email.",
    s5_step8_b4: "When the earlier steps are complete, click the purple <strong>Finish setup</strong> button. SparkX opens your live workspace at <code>/ess</code>.",
    s5_step8_note: "Finish setup unlocks the live dashboard. Need to invite many people? After setup, import a CSV under Employees and tick “send invitation” for each row.",
    s5_step8_cap: "Step 5.8 — Team invitation and the final “Finish setup” launch trigger.",
    capInviteFilled: "An HR colleague invited by work email — Finish setup stays available when you are ready.",

    finishBannerTitle: "Finish Setup Unlocks Your Live Workspace",
    finishBannerText: "When the prerequisite checklist displays no missing items, click Finish setup. SparkX will initialize your organization and redirect you to the live HR Admin Dashboard.",

    // Section 06: Dashboard (Image 26)
    s6Badge: "Step 06 • Dashboard",
    s6Title: "Step 6: Dashboard & Operations",
    s6Lead: "Organization setup is officially complete! The SparkX Admin Dashboard is now your daily operational center for HR management, attendance monitoring, and request approvals.",
    s6_step1_title: "6.1 • Welcome to Your Live SparkX Admin Dashboard",
    s6_step1_lead: "Your workspace is fully functional. Explore the real-time overview widgets, employee directories, and managerial approval queues.",
    s6_b1: "<strong>Pending Approvals Widget</strong>: Review incoming leave, overtime, and claim submissions requiring managerial sign-off.",
    s6_b2: "<strong>Attendance & Check-In Feed</strong>: Monitor real-time daily employee attendance logs, tardiness, and remote work statuses.",
    s6_b3: "<strong>Directory & Employee Profiles</strong>: Access centralized employee records, contact directories, and contract details.",
    s6_b4: "<strong>Admin Governance Settings</strong>: Adjust policy ceilings, manage job layers, or add corporate subsidiaries at any time.",
    s6cap: "The SparkX live dashboard immediately following successful organization setup.",

    recapTitle: "Onboarding Completion Summary",
    check1: "Owner account created, corporate email verified, and master password set.",
    check2: "Company legal profile registered and approved by SparkX Superadmin.",
    check3: "The 8-step setup wizard completed at /ess/setup.",
    check4: "Career layers, job levels, policy rules, and claim limits configured.",
    check5: "Company structure created, starting data mode selected, and initial team invited.",
    check6: "Admin Dashboard bookmarked for daily HR operations.",

    closingTitle: "Your Organization is Live on SparkX!",
    closingMsg: "Employees can now sign in, log attendance, and submit requests in accordance with your configured policies. As an HR Administrator, you maintain full control to refine workflows, review audit logs, and onboard new team members at scale.",
    launchBtn: "Open SparkX Login Page",

    // Documentation Portal (Home View)
    portalWelcomeBadge: "SparkX Documentation & Knowledge Hub",
    portalHeroTitle: "Welcome to SparkX Documentation",
    portalHeroLead: "The official guidance hub for the SparkX HR Intelligence & Self-Service Platform. Explore our interactive self-onboarding journeys and comprehensive operational user manuals below to get started.",
    portalStatVersion: "v2.4 Live Platform",
    portalStatMulti: "Enterprise Multi-Tenant HR",
    portalStatVerified: "26 Verified Real Screenshots",
    portalCatOnboarding: "Self-Onboarding Guides",
    portalCatOnboardingLead: "Interactive step-by-step onboarding walkthroughs tailored by account creation role.",
    portalHrCardBadge: "Primary Guide • Live & Interactive",
    portalHrCardTitle: "HR Admin & Founder Self-Onboarding",
    portalHrCardSub: "Create Account, Register Organization & Complete 8-Step Setup Wizard",
    portalHrCardDesc: "The complete self-onboarding journey: register your corporate legal profile, verify email, configure platform modules, establish job layers, customize leave/expense/travel policies, set per-level limits, and launch your organization workspace.",
    portalHrTag1: "Account & Org Registration",
    portalHrTag2: "8-Step Setup Wizard",
    portalHrTag3: "Negative Case & Approval",
    portalBtnHr: "Start HR Admin Onboarding →",
    portalEmpOnboardBadge: "Invite-Based Access",
    portalEmpOnboardTitle: "Invited Employee Onboarding",
    portalEmpOnboardSub: "Accept Invitation, Activate Account & Explore Employee Portal",
    portalEmpOnboardDesc: "Onboarding journey for team members joining an existing company via HR email invitation: activate your work credentials, set master password, configure biometrics/passkey, and tour your Employee Self-Service profile.",
    portalEmpOnboardTag1: "Email Invite Link",
    portalEmpOnboardTag2: "Password & Passkey",
    portalEmpOnboardTag3: "ESS Profile Setup",
    portalBtnEmpOnboard: "Start Employee Onboarding →",
    portalCatManuals: "Operational User Manuals",
    portalCatManualsLead: "Role-based operating guides covering daily workflows, policy rules, and system governance.",
    portalManualEmpBadge: "Daily Operations",
    portalManualEmpTitle: "Employee User Manual",
    portalManualEmpDesc: "Daily operational guide for employees: Clock-in/out attendance logs, annual & custom leave submissions, expense reimbursement claims, business travel requests, and overtime logging.",
    portalManualMgrBadge: "Leadership & Approvals",
    portalManualMgrTitle: "Manager User Manual",
    portalManualMgrDesc: "Operational leadership guide: Multi-tier approval workflows for leave, overtime, and claims, real-time team attendance feeds, delegation rules, and departmental budget controls.",
    portalManualHrBadge: "Governance & System Admin",
    portalManualHrTitle: "HR Administrator Manual",
    portalManualHrDesc: "In-depth administrative reference: Company legal profile management, corporate subsidiaries, salary grade tiers, approval routing templates, tax & statutory rules, and company policy governance.",
    portalBtnManual: "Open Manual Details →",
    portalBackBtn: "← Documentation Portal",

    // Invited Employee Onboarding Guide
    empGuideBadge: "Invited Employee Guide",
    empGuideBadgeFull: "Employee Self-Service (ESS) Onboarding Guide",
    empNavNum1: "01 • Overview",
    empNav1: "Access Rules",
    empNavNum2: "02 • Step 1",
    empNav2: "Invitation Email",
    empNavNum3: "03 • Step 2",
    empNav3: "Create Password",
    empNavNum4: "04 • Step 3",
    empNav4: "ESS Dashboard",
    empNavNum5: "05 • Ready",
    empNav5: "Completion",
    empHelpDesc: "If your invitation link has expired (7 days) or you haven't received an invitation email, contact your company's HR department.",

    empS1Badge: "Employee Onboarding • Access Requirements",
    empS1Title: "Welcome to SparkX Employee Self-Service (ESS)",
    empS1Lead: "Your official step-by-step guideline to activating your personal employee account, setting security credentials, and exploring the ESS platform.",
    empNoticeBadge: "Strict Access Policy • Invitation Only",
    empNoticeTitle: "Important: Access is Strictly by HR Invitation Only",
    empNoticeDesc: "Unlike HR Administrators or Company Founders who can register a new organization, <strong>regular employees cannot register directly on the SparkX website</strong>. If you attempt to sign up directly via the public registration screen, the system will assume you are creating a new company and will prompt you for corporate legal details, permanent operating currency, and corporate tax documents (NPWP). Regular employees cannot join an existing employer’s workspace through public sign-up.<br><br>To access your company’s Employee Self-Service (ESS) workspace, your company HR Administrator must first register your profile in the corporate employee directory and dispatch an official email invitation. Each invitation contains a secure, cryptographically signed one-time activation link that is strictly valid for <strong>7 calendar days</strong> and bound directly to your designated email address.",
    empNoticeTip: "Haven't received an invitation email yet? Check your spam/junk folder first. If still missing or your 7-day link has expired, contact your company HR Admin or direct manager to request a re-issued invitation.",
    empRule1Title: "No Public Sign-Up",
    empRule1Desc: "Direct registration is only for setting up new legal entities.",
    empRule2Title: "Issued by HR Admin",
    empRule2Desc: "Your corporate email must be registered in the company directory.",
    empRule3Title: "7-Day Expiration",
    empRule3Desc: "Tokens expire after 7 days and must be re-sent if unused.",
    empPrepTitle: "What You Need to Get Started",
    empPrep1Title: "Official HR Invitation Email",
    empPrep1Desc: "An active invitation email sent to your corporate or personal address with a 7-day validity token.",
    empPrep2Title: "Strong Master Password",
    empPrep2Desc: "Prepare a secure password of at least 8 characters (or prepare your company Google account for SSO).",
    empPrep3Title: "Browser or Smartphone",
    empPrep3Desc: "SparkX is fully responsive across mobile phones, tablets, and desktop workstations.",
    empRoadmapTitle: "The 3-Step Employee Activation Journey",
    empRm1: "Step 1: Open Official HR Invitation Email",
    empRm2: "Step 2: Create Password & Activate Account",
    empRm3: "Step 3: Tour Your ESS Dashboard & Start Daily Work",

    empStep1Badge: "Step 01 • Email Invitation",
    empStep1Title: "Receive & Open Your Official SparkX Invitation Email",
    empStep1Lead: "Your onboarding begins when your company HR Administrator invites you to join their organization workspace.",
    empStep1Cap: "SparkX invitation email showing inviter name, organization, 7-day expiration notice, and unique organization code.",
    empStep1PurposeTitle: "Step Purpose & Context",
    empStep1PurposeDesc: "Verify that the invitation originates from an authorized company officer and access your personalized single-use activation URL.",
    empStep1PrepareTitle: "What to Prepare",
    empStep1PrepareDesc: "Access to the inbox where HR sent your invite (check spam/junk folder if not found in inbox).",
    empStep1_b1: "Open your email inbox (e.g. Gmail, Outlook) and locate an email from <code>SparkX &lt;no-reply@sparkx.life&gt;</code> with the subject <strong>“You’re invited, [Your Name]”</strong>.",
    empStep1_b2: "Verify the sender and organization: The message explicitly states who invited you (e.g. <em>Diko Andriyanto</em>) to join your company (e.g. <em>Selalu Terang Group</em>).",
    empStep1_b3: "Review expiration details: The secure invitation link expires within <strong>7 days</strong>. Your unique <strong>Organization Code</strong> (e.g. <code>SELALUTERA-AX9D</code>) is also displayed.",
    empStep1_b4: "Click the purple <strong>“Accept invitation”</strong> button (or copy and paste the full token URL at the bottom into your browser) to open the account setup page.",

    empStep2Badge: "Step 02 • Security & Credentials",
    empStep2Title: "Set Your Work Password & Activate Account",
    empStep2Lead: "Establish your private security credentials or connect via Google Single Sign-On (SSO).",
    empStep2Cap: "Password creation and account activation interface for invited employee.",
    empStep2PurposeTitle: "Step Purpose & Security Standard",
    empStep2PurposeDesc: "Protect your personal employment records, attendance history, and payroll data with enterprise-grade credentials.",
    empStep2PrepareTitle: "Password Requirements",
    empStep2PrepareDesc: "Minimum 8 characters with a mix of letters, numbers, and symbols.",
    empStep2_b1: "The secure link directs you to <strong>“Welcome to [Company Name]”</strong> displaying your pre-verified email address (e.g. <code>melissaandrx@gmail.com</code>).",
    empStep2_b2: "In the <strong>“Choose a password”</strong> field, enter a secure password containing <strong>at least 8 characters</strong> (including uppercase, lowercase, numbers, and symbols).",
    empStep2_b3: "Type the exact same password into the <strong>“Confirm password”</strong> field to verify accuracy.",
    empStep2_b4: "<em>Google SSO Option</em>: If your company uses Google Workspace, you can alternatively click <strong>“Continue with Google”</strong> to activate your account password-free.",
    empStep2_b5: "Click the blue <strong>“Activate and sign in”</strong> button. Your account is immediately activated and authenticated into the system.",

    empStep3Badge: "Step 03 • Operational Hub",
    empStep3Title: "Explore Your Employee Self-Service (ESS) Dashboard",
    empStep3Lead: "Your central workspace for attendance clock-ins, leave submissions, reimbursement claims, and business travel.",
    empStep3Cap: "SparkX ESS Dashboard displaying live leave balances, attendance shortcuts, pending claims, and navigation modules.",
    empStep3PurposeTitle: "Daily ESS Capabilities",
    empStep3PurposeDesc: "Perform daily administrative actions independently from anywhere on desktop or mobile without physical paper forms.",
    empStep3PrepareTitle: "Next Actions",
    empStep3PrepareDesc: "Bookmark the dashboard URL and verify your profile details.",
    empStep3_b1: "<strong>Personal Welcome & Identity</strong>: You are greeted with <strong>“Hi, [Your Name]!”</strong> with your company entity (<em>Selalu Terang Group</em>) and user badge marked as <strong>Employee</strong>.",
    empStep3_b2: "<strong>Quick Metrics Bar</strong>: Instant visibility into your <strong>Pending Inbox</strong>, <strong>Leave Balance</strong> (with one-click <code>BOOK &gt;</code> link), <strong>Pending Claims</strong>, and <strong>Outpatient Medical Balance</strong>.",
    empStep3_b3: "<strong>Central Workspace Feeds</strong>: Review your <strong>Priority Tasks</strong>, stay updated via company <strong>Activity Feed</strong>, and see teammates currently on leave via <strong>Team on Leave</strong>.",
    empStep3_b4: "<strong>Left Navigation Modules</strong>: Access daily operational tools in one click:",
    empMod1: "<strong>Time & Attendance</strong>: Log daily geolocation clock-in/out, take verification selfie, and request attendance corrections.",
    empMod2: "<strong>Leave Request</strong>: Submit annual leave, public holiday substitute (PHL), or sick leave with doctor certificate upload.",
    empMod3: "<strong>Claim & Expenses / Medical</strong>: Submit operational expenses with receipt photos and track reimbursement payout status.",
    empMod4: "<strong>Travel Request & Overtime</strong>: Submit official business trips (dinas) with cash advance, or log pre-authorized overtime hours.",
    empMod5: "<strong>Document Center & My Profile</strong>: Download digital salary payslips, request employment verification letters, and manage bank accounts.",

    empRecapTitle: "Employee Onboarding Completed!",
    empCheck1: "Official HR email invitation received and verified within 7 days.",
    empCheck2: "Personal work password created (or linked with Google SSO).",
    empCheck3: "Employee Self-Service (ESS) dashboard explored and ready for daily operations.",
    empClosingTitle: "You’re Ready to Use SparkX!",
    empClosingMsg: "Your account is now fully active. You can sign in anytime on your computer or mobile browser to clock in, manage leave balances, and submit claims.",
    empLoginBtn: "Open SparkX Login Page"
  },
  id: {
    guideBadge: "Panduan Onboarding Admin HR",
    subnavPill: "8 Langkah",
    showSidebarBtn: "Buka Menu",
    stepOf: "Langkah {current} dari {total}",
    helpTitle: "Butuh bantuan?",
    helpDesc: "Jika tautan verifikasi kedaluwarsa atau persetujuan memakan waktu lebih lama, hubungi tim support SparkX Anda.",
    prevBtn: "Langkah Sebelumnya",
    nextBtn: "Langkah Berikutnya",
    zoomHint: "Klik gambar untuk memperbesar",
    instructionsTitle: "Petunjuk Tindakan Langkah demi Langkah",

    // Nav items
    nav1: "Selamat Datang Admin HR",
    nav2: "Modul Platform",
    nav3: "Memulai Akses",
    nav4: "Buat Akun & Org",
    nav5: "Penyiapan Organisasi",
    nav6: "Dashboard",
    num1: "01 • Ringkasan",
    num2: "02 • Modul",
    num3: "03 • Akses",
    num4: "04 • Buat Akun",
    num5: "05 • Wizard Org",
    num6: "06 • Dashboard",

    // Section 01
    s1Badge: "Langkah 01 • Pengenalan & Kesiapan",
    s1Title: "Selamat Datang di SparkX untuk Admin HR",
    s1Lead: "Panduan lengkap onboarding mandiri bagi Admin HR untuk membuat, memverifikasi, mengonfigurasi, dan meluncurkan organisasi perusahaan di SparkX.",
    s1HeroTitle: "Ruang Kerja Digital Terintegrasi & Modern untuk Perusahaan Anda",
    s1HeroDesc: "SparkX memberikan kendali mandiri penuh kepada pimpinan HR dan administrator organisasi atas operasional SDM, log absensi otomatis, alur persetujuan bertingkat, dan penegakan kebijakan perusahaan yang transparan.",
    prop1Title: "Administrasi Terpusat",
    prop1Desc: "Kelola profil entitas legal perusahaan, anak perusahaan, jenjang jabatan, dan direktori karyawan dari satu dashboard kendali utama.",
    prop2Title: "Alur Kerja & Persetujuan Otomatis",
    prop2Desc: "Hapus formulir kertas dan email manual dengan alur persetujuan bertingkat otomatis untuk cuti, lembur, dan klaim reimbursement.",
    prop3Title: "Tata Kelola Limit & Anggaran Ketat",
    prop3Desc: "Terapkan plafon pengeluaran per klaim, anggaran bulanan, uang saku dinas, dan kelas transportasi yang dapat disesuaikan untuk setiap level jabatan.",

    prepTitle: "Checklist Kesiapan Admin HR Sebelum Memulai",
    prep1Title: "Entitas Legal Perusahaan & NPWP",
    prep1Desc: "Nama resmi badan hukum perusahaan dan nomor registrasi pajak (NPWP/NIB) untuk pendaftaran legal.",
    prep2Title: "Email Kerja Resmi Perusahaan",
    prep2Desc: "Alamat email administrator HR yang akan bertindak sebagai pemilik utama (workspace owner).",
    prep3Title: "Mata Uang Operasional (Permanen)",
    prep3Desc: "Pastikan mata uang dasar (misalnya IDR). Perhatian: Setelah dikirim, mata uang terkunci permanen!",
    prep4Title: "Struktur Organisasi & Level Jabatan",
    prep4Desc: "Siapkan daftar direktorat, divisi, dan tingkatan jenjang karir (Staff, Manager, Director) untuk batas kebijakan.",

    roadmapTitle: "Peta Jalan Onboarding 4 Fase",
    rm1: "Fase 1: Pembuatan Akun Pemilik & Verifikasi Email",
    rm2: "Fase 2: Pendaftaran Organisasi & Persetujuan Superadmin",
    rm3: "Fase 3: Wizard Penyiapan Organisasi 8 Langkah",
    rm4: "Fase 4: Peluncuran Workspace & Sosialisasi Karyawan",

    // Section 02
    s2Badge: "Langkah 02 • Konsep Dasar",
    s2Title: "Mengenal SparkX & Modul Fitur",
    s2Lead: "SparkX menggabungkan antarmuka Employee Self-Service (ESS) yang intuitif dengan Pusat Kendali Administrasi HR.",
    essConceptTitle: "Employee Self-Service (ESS) dengan Pengawasan Administratif",
    essConceptDesc: "Karyawan menikmati kemandirian untuk absensi datang/pulang, mengajukan cuti, dan klaim pengeluaran di perangkat apa pun, sementara Admin HR memegang kendali penuh atas aturan kebijakan, plafon biaya, dan alur persetujuan.",
    confirmedModulesTitle: "Modul Platform yang Tersedia",
    mTime: "Time & Attendance",
    mTimeDesc: "Pencatatan check-in/out, pelacakan lokasi geolokasi, jadwal shift, dan pengajuan koreksi absensi.",
    mOvertime: "Overtime (Lembur)",
    mOvertimeDesc: "Surat perintah lembur, pencatatan durasi aktual, dan formula pengali upah lembur resmi pemerintah.",
    mLeave: "Leave (Cuti)",
    mLeaveDesc: "Saldo cuti tahunan, cuti sakit, izin pengganti hari libur (PHL), dan kalender cuti bersama.",
    mMedical: "Medical Reimbursement",
    mMedicalDesc: "Pengajuan klaim kuitansi medis langsung yang diaudit terhadap plafon plafon manfaat tahunan per level.",
    mTravel: "Travel (Perjalanan Dinas)",
    mTravelDesc: "Surat tugas dinas, uang harian (per diem), plafon hotel akomodasi, dan kelas tiket pesawat/kereta.",
    mClaims: "Claim & Expenses",
    mClaimsDesc: "Klaim operasional kantor, laporan nota pengeluaran digital, dan batas plafon belanja bulanan.",
    mDocs: "Document Center",
    mDocsDesc: "Pengajuan mandiri surat keterangan kerja, slip gaji digital, dan pengumuman resmi perusahaan.",
    mAssets: "iShop & Assets",
    mAssetsDesc: "Inventaris perangkat keras kantor, permohonan laptop kerja, dan pelacakan serah terima aset.",
    mMeeting: "Meeting Rooms",
    mMeetingDesc: "Kalender ketersediaan ruangan real-time dan sistem reservasi ruang rapat kantor secara langsung.",
    mOnboarding: "Onboarding",
    mOnboardingDesc: "Checklist dokumen karyawan baru, tugas minggu pertama, dan pengumpulan berkas digital.",
    mOffboarding: "Offboarding",
    mOffboardingDesc: "Checklist wawancara keluar, pengembalian aset kantor, dan verifikasi clearance penyelesaian akhir.",
    mt1: "Harian",
    mt2: "Operasional",
    mt3: "Saldo Cuti",
    mt4: "Benefit",
    mt5: "Dinas",
    mt6: "Keuangan",
    mt7: "Dokumen",
    mt8: "Aset",
    mt9: "Fasilitas",
    mt10: "SDM",
    mt11: "SDM",

    // Section 03
    s3Badge: "Langkah 03 • Akses Platform",
    s3Title: "Memulai & Akses Halaman Login",
    s3Lead: "Akses SparkX secara aman melalui browser web modern tanpa perlu instalasi aplikasi desktop tambahan.",
    kLogin: "Langkah 03 • Memulai Akses",
    g3Title: "3.1 • Buka Halaman Masuk (Login) SparkX",
    g3Desc: "SparkX berjalan langsung di browser. Simpan URL resmi workspace Anda sebagai bookmark untuk administrasi harian yang praktis.",
    g3b1: "Buka browser Anda (Chrome, Edge, Safari, Firefox) dan akses alamat <code>/login</code> perusahaan Anda.",
    g3b2: "Pengguna lama masuk dengan email kerja dan kata sandi, atau pilih <strong>Continue with Google</strong>.",
    g3b3: "Untuk mendaftar sebagai admin organisasi baru, klik tombol tautan <strong>Create an account</strong> di bawah tombol Sign in.",
    g3Note: "Login biometrik (Face ID / Sidik Jari) dapat diaktifkan setelah Anda masuk sekali dan mengaktifkan passkey pada perangkat tersebut.",
    g3cap: "Halaman masuk SparkX. Admin organisasi baru memulai dengan “Create an account”.",
    loginMethodsTitle: "Metode Autentikasi yang Tersedia",
    loginMethod1: "Email Kerja & Kata Sandi",
    loginMethod1Desc: "Autentikasi email resmi perusahaan dengan kata sandi terenkripsi yang dibuat saat aktivasi akun.",
    loginMethod2: "Google Workspace SSO",
    loginMethod2Desc: "Integrasi masuk cepat sekali klik untuk perusahaan yang menggunakan layanan email Google Workspace.",
    loginMethod3: "Biometrik / Passkey",
    loginMethod3Desc: "Autentikasi biometrik standar FIDO untuk login kilat tanpa kata sandi pada perangkat yang kompatibel.",

    // Section 04: Account & Org Signup (Images 02 to 11)
    s4Badge: "Langkah 04 • Buat Akun",
    s4Title: "Langkah 4: Pendaftaran Akun & Organisasi",
    s4Lead: "Ikuti enam sub-langkah di bawah ini untuk membuat akun administrator, memverifikasi email, mendaftarkan perusahaan, dan mengajukannya untuk persetujuan.",
    pathEmpTag: "Jalur 1",
    pathOrgTag: "Jalur 2 (Jalur Anda)",
    accPath1Title: "Karyawan / Manager yang Diundang",
    accPath1Text: "Karyawan bergabung ke perusahaan yang sudah ada melalui undangan email. Mereka mengatur kata sandi lalu langsung masuk ke dashboard Employee Self-Service.",
    accPath2Title: "Admin HR / Pembuat Organisasi",
    accPath2Text: "Anda sedang menyiapkan workspace baru untuk perusahaan. Ikuti tangkapan layar langkah demi langkah di bawah ini untuk membuat akun, mendaftar, dan menunggu persetujuan.",

    // Langkah 4.1 sampai 4.6 & Kasus Negatif Penolakan
    kAcc: "Langkah 04 • Buat Akun",
    kOrgReg: "Langkah 04 • Pendaftaran Organisasi",

    // Tab labels for multi-shot steps
    tabWebNotice: "Tampilan Web",
    tabEmailReceived: "Email Diterima",
    tabOrgForm: "Formulir Organisasi",
    tabCurrencyDialog: "Dialog Kunci Mata Uang",
    tabWaitingWeb: "Status Web",
    tabApprovalEmail: "Email Persetujuan",
    tabRejectionWeb: "Banner Peringatan Web",
    tabRejectionEmail: "Email Penolakan",
    tabEmptyForm: "Formulir Kosong",
    tabFilledForm: "Formulir Terisi",
    tabPwdRules: "Aturan Kata Sandi",
    tabPwdReady: "Kata Sandi Siap",
    tabInitial: "Awal",
    tabCodeAdded: "Kode Singkat Diisi",
    tabBeforeSave: "Sebelum Disimpan",
    tabAfterSave: "Tersimpan",
    tabOptions: "Pilihan",
    tabSelected: "Dipilih",
    tabInviteForm: "Formulir Undangan",
    tabInviteFilled: "Undangan Terisi",

    // Step 4.1 (Gabungan 4.1 & 4.2)
    s4_step1_title: "4.1 • Masukkan Nama Lengkap & Alamat Email Kantor",
    s4_step1_lead: "Formulir pendaftaran awal hanya membutuhkan dua data identitas penting. Informasi profil badan hukum perusahaan akan dikumpulkan setelah verifikasi email.",
    s4_step1_b1: "Pada kolom <strong>Full name</strong>, ketik nama resmi Anda sebagaimana tercantum pada dokumen dan persetujuan resmi.",
    s4_step1_b2: "Pada kolom <strong>Email</strong>, masukkan alamat email kantor aktif Anda tempat Anda akan menerima tautan verifikasi akun.",
    s4_step1_b3: "Periksa kembali kedua data tersebut, lalu klik tombol ungu <strong>Continue</strong> untuk mengirimkan tautan verifikasi. (Belum ada kata sandi yang dibuat di langkah ini).",
    s4_step1_note: "Gunakan email administrator yang dapat Anda akses langsung. Akun yang pertama kali didaftarkan otomatis menjadi Pemilik Organisasi (Organization Owner).",
    s4_step1_cap: "Formulir pendaftaran terisi dengan nama lengkap dan email kantor administrator.",
    capRegEmpty: "Formulir pendaftaran saat pertama dibuka — SparkX hanya meminta nama lengkap dan alamat email.",

    // Step 4.2 (Lama 4.3 + Email Konfirmasi Baru)
    s4_step2_title: "4.2 • Buka Kotak Masuk Email & Konfirmasi Tautan Verifikasi",
    s4_step2_lead: "SparkX segera mengirimkan email verifikasi aman berbatas waktu ke alamat email korporat yang Anda daftarkan.",
    s4_step2_b1: "Layar konfirmasi di web akan menampilkan alamat email tujuan pengiriman tautan verifikasi.",
    s4_step2_b2: "Buka email kantor Anda dan cari pesan dengan subjek <strong>“Confirm your email for SparkX”</strong> dari <code>no-reply@sparkx.life</code>.",
    s4_step2_b3: "Klik tombol ungu <strong>“Confirm email & set password”</strong> (atau salin tautan satu kali pakai yang tersedia) untuk membuka portal pembuatan password.",
    s4_step2_b4: "Jika email belum masuk dalam 2 menit, periksa folder <strong>Spam</strong> atau <strong>Promotions</strong> pada email Anda.",
    s4_step2_note: "Tautan verifikasi kedaluwarsa dalam 24 jam dan hanya berlaku untuk satu kali aktivasi. Jika kedaluwarsa, minta tautan baru melalui halaman login.",
    s4_step2_cap1: "Layar konfirmasi “Check your inbox” pada aplikasi web SparkX.",
    s4_step2_cap2: "Email verifikasi resmi “Confirm your email for SparkX” yang masuk di inbox email kantor Anda.",

    // Step 4.3 (Gabungan 4.4 & 4.5)
    s4_step3_title: "4.3 • Buat Kata Sandi Master yang Aman & Selesaikan Aktivasi",
    s4_step3_lead: "Tetapkan kata sandi yang kuat untuk mengamankan akses administratif ke data karyawan dan persetujuan klaim keuangan perusahaan.",
    s4_step3_b1: "Tautan verifikasi akan membuka portal aman <code>/verify-email</code> dengan alamat email Anda yang telah terverifikasi.",
    s4_step3_b2: "Ketik kata sandi yang kuat minimal <strong>8 karakter</strong> (kombinasi huruf besar, huruf kecil, angka, dan simbol khusus).",
    s4_step3_b3: "Ketik ulang kata sandi yang sama persis pada kolom konfirmasi untuk memastikan kesesuaian.",
    s4_step3_b4: "Klik <strong>Set password & continue</strong> untuk menyelesaikan aktivasi — SparkX akan otomatis memasukkan Anda ke sistem.",
    s4_step3_note: "Simpan kata sandi utama ini secara aman pada password manager korporat perusahaan Anda.",
    s4_step3_cap: "Kata sandi master terisi dan terkonfirmasi memenuhi seluruh standar keamanan korporat.",
    capPwdEmpty: "Layar kata sandi saat pertama dibuka, menampilkan seluruh persyaratan sebelum Anda mengetik.",

    // Step 4.4 (Lama 4.6)
    s4_step4_title: "4.4 • Halaman Awal Onboarding — Pilih “Create a New Organization”",
    s4_step4_lead: "Setelah login pertama kali, Anda tiba di beranda onboarding SparkX. Memilih opsi organisasi akan memulai pendaftaran badan hukum perusahaan.",
    s4_step4_b1: "Pastikan sapaan di bagian atas menampilkan nama lengkap dan alamat email administrator terverifikasi Anda.",
    s4_step4_b2: "Klik kartu tindakan utama berlabel <strong>“Create a new organization”</strong>.",
    s4_step4_b3: "Jika perusahaan Anda sudah terdaftar di unit kerja lain, jangan lanjutkan di sini — minta undangan tim dari admin yang sudah ada.",
    s4_step4_cap: "Halaman awal SparkX dengan kartu aksi “Create a new organization”.",

    // Step 4.5 (Gabungan 4.7, 4.8 & 4.9)
    s4_step5_title: "4.5 • Lengkapi Profil Organisasi & Konfirmasi Kunci Mata Uang",
    s4_step5_lead: "Isi detail badan usaha terdaftar, nomor pajak (NPWP), negara, zona waktu, dan konfirmasi mata uang operasional permanen.",
    s4_step5_b1: "Pada <strong>Organization name</strong>, isi nama publik atau grup perusahaan Anda (misalnya <code>ABC Group</code>).",
    s4_step5_b2: "Pada <strong>First company (legal name)</strong>, isi nama resmi badan hukum perusahaan pertama Anda (misalnya <code>PT ABC Solusi Global</code>). Kode singkat diisi di wizard penyiapan.",
    s4_step5_b3: "Pada <strong>NPWP / Reg. no.</strong> (opsional), masukkan NPWP atau nomor izin usaha bila ada.",
    s4_step5_b4: "Pilih <strong>Country</strong> (<code>Indonesia</code>) dan <strong>Time zone</strong> operasional utama kantor Anda (misalnya <code>Asia/Jakarta (GMT+7)</code>).",
    s4_step5_b5: "Memilih negara akan mengisi <strong>Currency</strong> tetap secara otomatis (misalnya <code>IDR</code>). Klik <strong>Submit for approval</strong> saat formulir lengkap.",
    s4_step5_b6: "Pada dialog, klik <strong>“I understand, use IDR”</strong> untuk mengonfirmasi bahwa mata uang bersifat permanen.",
    s4_step5_note: "PERINGATAN KRITIS: Mata uang operasional dasar terkunci permanen seumur hidup organisasi dan tidak dapat diubah nanti. Seluruh plafon klaim, anggaran perjalanan, dan modul keuangan akan dihitung dalam mata uang ini.",
    s4_step5_cap1: "Formulir pendaftaran organisasi terisi lengkap dengan nama badan hukum, NPWP, dan zona waktu.",
    capOrgFormEmpty: "Formulir organisasi saat pertama dibuka, sebelum nama, negara, dan zona waktu diisi.",
    s4_step5_cap2: "Kotak dialog konfirmasi penguncian mata uang permanen yang mewajibkan konfirmasi eksplisit dari administrator.",

    // Step 4.6 (Lama 4.10 + Email Persetujuan)
    s4_step6_title: "4.6 • Menunggu Persetujuan Superadmin & Penerimaan Email Persetujuan",
    s4_step6_lead: "Setiap organisasi baru ditinjau oleh tim superadmin SparkX untuk verifikasi keamanan. Wizard penyiapan terbuka setelah disetujui.",
    s4_step6_b1: "Layar status di web menampilkan <strong>Waiting for approval</strong> beserta nama organisasi dan tanggal pengajuan.",
    s4_step6_b2: "Verifikasi biasanya selesai dalam <strong>1 hari kerja</strong>; Anda dapat menutup browser dengan aman selama proses verifikasi berlangsung.",
    s4_step6_b3: "Begitu disetujui, Anda akan menerima email notifikasi resmi bertajuk: <strong>“[Nama Perusahaan] is ready on SparkX”</strong> dari <code>no-reply@sparkx.life</code>.",
    s4_step6_b4: "Klik tombol ungu <strong>“Set up your organization”</strong> di dalam email (atau login ke SparkX) untuk meluncurkan Step 5: Setup Wizard.",
    s4_step6_note: "Login sebelum disetujui akan menampilkan layar antrean tunggu. Begitu disetujui, login berikutnya akan langsung membuka wizard penyiapan 8 langkah.",
    s4_step6_cap1: "Layar status konfirmasi bahwa pendaftaran organisasi telah terkirim dan sedang menunggu persetujuan.",
    s4_step6_cap2: "Email pemberitahuan resmi bahwa organisasi telah disetujui dan siap dikonfigurasi melalui wizard setup.",

    // Kasus Negatif (Penolakan & Pengajuan Ulang)
    s4_neg_badge: "Kasus Negatif • Penolakan & Pengajuan Ulang",
    s4_neg_title: "Bagaimana Jika Permohonan Organisasi Ditolak?",
    s4_neg_lead: "Jika informasi badan hukum tidak dapat diverifikasi, superadmin SparkX akan menolak permohonan dan menyertakan catatan evaluasi untuk diajukan ulang.",
    s4_neg_b1: "<strong>Penyebab Permohonan Ditolak</strong>: Permohonan ditolak apabila nama badan usaha tidak sesuai dengan data perpajakan resmi, nomor NPWP tidak valid, atau data pendukung belum mencukupi untuk memverifikasi organisasi.",
    s4_neg_b2: "<strong>Email Pemberitahuan Penolakan</strong>: Anda akan menerima email bertajuk <strong>“About your request for [Nama Perusahaan]”</strong> dengan pesan: <em>“We reviewed your request to set up [Nama Perusahaan] on SparkX and couldn't approve it. The details weren't enough for us to verify the organization.”</em>",
    s4_neg_b3: "<strong>Banner Penolakan di Web Portal</strong>: Saat login kembali ke SparkX, dashboard menampilkan banner peringatan yang menjelaskan penolakan dan memberikan kesempatan untuk membuat permohonan baru.",
    s4_neg_b4: "<strong>Cara Mengajukan Ulang (Resubmit)</strong>: Klik <strong>Open SparkX</strong> (atau login ulang), pelajari catatan evaluasi, klik <strong>Create a new organization</strong>, dan ajukan kembali dengan data legalitas yang lengkap, NPWP yang valid, dan email korporat terverifikasi.",
    s4_neg_note: "Membutuhkan bantuan verifikasi? Hubungi tim support SparkX dengan menyertakan dokumen legalitas perusahaan Anda untuk verifikasi prioritas.",
    s4_neg_cap1: "Banner peringatan penolakan pada web portal SparkX dengan opsi untuk mengajukan ulang pendaftaran.",
    s4_neg_cap2: "Email resmi pemberitahuan penolakan yang menjelaskan alasan belum disetujuinya permohonan.",

    // Section 05: The 8-Step Setup Wizard (Screens 12 to 25)
    s5Badge: "Langkah 05 • Penyiapan Org",
    s5Title: "Langkah 5: Penyiapan Organisasi (Wizard 8 Langkah)",
    s5Lead: "Setelah disetujui, SparkX membuka wizard delapan langkah di /ess/setup. Ikuti 8 kategori langkah di bawah ini untuk menyelesaikan penyiapan perusahaan Anda.",
    s5PrereqNotice: "Prasyarat: Akun pemilik sudah terverifikasi, dan organisasi telah disetujui oleh superadmin SparkX. Masuk dengan akun administrator yang Anda buat di Langkah 4.",
    kOrgWizard: "Langkah 05 • Penyiapan Organisasi",

    // Subnav items in Sidebar
    sn1: "1. Set up organization",
    sn2: "2. Set up modules",
    sn3: "3. Set up levels",
    sn4: "4. Set up policies",
    sn4a: "a. Leaves (Cuti)",
    sn4b: "b. Claim & expenses",
    sn4c: "c. Travel (Dinas)",
    sn4d: "d. Overtime (Lembur)",
    sn4e: "e. Approval routing",
    sn5: "5. Set up limits",
    sn5a: "a. Claim & expenses",
    sn5b: "b. Travel (Dinas)",
    sn6: "6. Set up structure",
    sn7: "7. Set up starting data",
    sn8: "8. Invite to team",

    // Step 5.1
    s5_step1_title: "5.1 • Set Up Profil Organisasi & Badan Usaha",
    s5_step1_lead: "Verifikasi profil utama perusahaan. Sebagian besar data sudah terisi dari pendaftaran yang Anda kirimkan di Langkah 4.",
    s5_step1_b1: "Pastikan <strong>nama organisasi</strong> dan kode sistem otomatis di bagian atas sudah sesuai.",
    s5_step1_b2: "Periksa <strong>nama legal perusahaan pertama</strong> dan tentukan kode singkatan (misalnya <code>SGI</code>).",
    s5_step1_b3: "Periksa kolom opsional <strong>NPWP / Reg. no.</strong> — isi nomor pajak atau registrasi usaha bila ada.",
    s5_step1_b4: "Verifikasi <strong>negara</strong>, <strong>zona waktu</strong>, dan <strong>mata uang</strong> yang sudah terkunci.",
    s5_step1_b5: "Klik <strong>Save & continue</strong> untuk melanjutkan ke konfigurasi modul.",
    s5_step1_note: "Entitas anak perusahaan tambahan dapat ditambahkan nanti di menu Pengaturan Admin > Companies & Structure.",
    s5_step1_cap: "Langkah 5.1 — Profil organisasi dan konfirmasi entitas legal perusahaan.",
    capProfileFilled: "Langkah 1 setelah kode singkat perusahaan (TJG) diisi — tombol Save & continue siap digunakan.",

    // Step 5.2
    s5_step2_title: "5.2 • Set Up Modul Platform",
    s5_step2_lead: "Aktifkan hanya fitur yang benar-benar akan digunakan perusahaan. Modul yang dimatikan tidak akan tampil di menu karyawan.",
    s5_step2_b1: "Tinjau 11 tombol modul: Time & Attendance, Overtime, Leave, Medical Reimbursement, Travel, Claim & Expenses, Document Center, Onboarding, Offboarding, iShop & Assets, dan Meeting Rooms.",
    s5_step2_b2: "Aktifkan modul yang Anda butuhkan. Perhatikan dependensi: <strong>Overtime</strong> memerlukan Time & Attendance; <strong>Offboarding</strong> memerlukan Document Center.",
    s5_step2_b3: "Klik <strong>Save modules</strong>, lalu klik <strong>Continue</strong>.",
    s5_step2_note: "Modul dapat diaktifkan kapan saja di kemudian hari tanpa kehilangan data historis.",
    s5_step2_cap: "Langkah 5.2 — Pemilihan modul platform dengan validasi dependensi otomatis.",

    // Step 5.3
    s5_step3a_title: "5.3a • Set Up Layer Hierarki Karir (Awal)",
    s5_step3a_lead: "Layer karir mewakili kelompok senioritas utama dalam organisasi Anda. Menentukan layer diperlukan sebelum membuat tingkatan grade spesifik.",
    s5_step3a_b1: "Ketik nama layer (misalnya <em>Staff</em>) pada kolom <strong>New layer, e.g. Staff</strong> lalu klik <strong>Layer</strong>. Ulangi untuk <em>Management</em> atau kelompok lain.",
    s5_step3a_b2: "Layer menyediakan pengelompokan tingkat tinggi untuk template persetujuan dan aturan kebijakan.",
    s5_step3a_b3: "Jika perusahaan memiliki struktur datar, buat minimal satu layer umum (misalnya <em>General</em>).",
    s5_step3a_note: "Kewajiban Mutlak: Organisasi tanpa level tidak dapat melewati langkah Limit pada wizard ini.",
    s5_step3a_cap: "Langkah 5.3a — Tampilan awal layer dan level sebelum dikonfigurasi.",

    s5_step3b_title: "5.3b • Set Up Level Jabatan di Dalam Tiap Layer (Terkonfigurasi)",
    s5_step3b_lead: "Bagi setiap layer menjadi level grade spesifik. Setiap karyawan di perusahaan nantinya akan ditetapkan pada salah satu level ini.",
    s5_step3b_b1: "Di bawah layer, ketik grade pada kolom <strong>New level, e.g. Staff 1</strong> lalu klik <strong>Level</strong> (misalnya Staff 1, Staff 2, Manager).",
    s5_step3b_b2: "Ulangi proses ini untuk layer manajerial dan direksi (misalnya <em>Manager 1</em>, <em>Manager 2</em>, <em>Director</em>).",
    s5_step3b_b3: "Hapus level dengan tombol <strong>×</strong>, atau hapus seluruh layer dengan ikon <strong>tempat sampah</strong>.",
    s5_step3b_b4: "Pastikan setiap peran jabatan karyawan terpetakan dengan rapi ke dalam satu level, lalu klik <strong>Continue</strong>.",
    s5_step3b_note: "Level yang ditentukan di sini mengatur plafon klaim pengeluaran dan hak kelas transportasi dinas di Langkah 5.5.",
    s5_step3b_cap: "Langkah 5.3b — Layer dan level karir berhasil dikonfigurasi dan siap dilanjutkan.",

    // Step 5.4 Category & Sub-steps
    s5_cat_policies_title: "5.4 • Set Up Kebijakan Perusahaan (5 Tab)",
    s5_cat_policies_desc: "Atur kelima area kebijakan berikut (Cuti, Klaim, Dinas, Lembur, Approval Routing) sebelum mengatur limit.",

    s5_step4a_title: "5.4a • Set Up Kebijakan: Cuti & Hari Libur",
    s5_step4a_lead: "Tinjau jenis cuti bawaan Indonesia dan sesuaikan kuotanya, lalu tentukan apakah pengajuan cuti pengganti (PHL) diizinkan.",
    s5_step4a_b1: "Pada Langkah 5.4, buka tab <strong>Leave</strong>.",
    s5_step4a_b2: "Tinjau daftar jenis cuti — <em>Annual Leave</em> (12 hari/tahun), <em>Sick Leave</em> (tanpa batas), <em>Maternity</em>, <em>Paternity</em>, dan lainnya. Gunakan ikon pensil untuk mengubah kuota.",
    s5_step4a_b3: "Klik <strong>+ Add leave type</strong> untuk jenis yang belum ada, dan aktifkan <strong>Substitute leave (PHL) requests</strong> bila karyawan boleh mengajukannya.",
    s5_step4a_b4: "Klik <strong>Save settings</strong>.",
    s5_step4a_cap: "Langkah 5.4a — Jenis cuti bawaan dan pengaturan PHL.",

    s5_step4b_title: "5.4b • Set Up Kebijakan: Klaim & Reimbursement",
    s5_step4b_lead: "Aktifkan klaim, wajibkan nota bila perlu, dan tentukan batas waktu pengajuan pengeluaran.",
    s5_step4b_b1: "Pindah ke tab <strong>Claim & Expenses</strong>.",
    s5_step4b_b2: "Biarkan <strong>Enable Claim & Expenses</strong> aktif, dan <strong>Require receipt</strong> aktif bila klaim wajib disertai bukti.",
    s5_step4b_b3: "Atur <strong>Submission deadline (days)</strong> — 0 berarti tanpa batas waktu.",
    s5_step4b_b4: "Tinjau kategori pengeluaran dan kolomnya, lalu klik <strong>Save and apply</strong>.",
    s5_step4b_cap: "Langkah 5.4b — Pengaturan klaim dan kategori pengeluaran.",

    s5_step4c_title: "5.4c • Set Up Kebijakan: Perjalanan Dinas",
    s5_step4c_lead: "Tentukan apakah pengajuan dinas diaktifkan serta kelola jenis kegiatan dan akomodasi yang bisa dipilih karyawan.",
    s5_step4c_b1: "Pindah ke tab <strong>Travel</strong>.",
    s5_step4c_b2: "Biarkan <strong>Enable Travel Requests</strong> aktif bila karyawan boleh mengajukan perjalanan.",
    s5_step4c_b3: "Tinjau <strong>Activity types</strong> (Business Trip, Training / Seminar, Client Visit) dan <strong>Accommodation types</strong> (Flight, Hotel, Car, Train); tambah atau hapus sesuai kebutuhan.",
    s5_step4c_b4: "Klik <strong>Save and apply</strong>. Uang saku harian diatur nanti di langkah Limits — bukan bagian dari default ini.",
    s5_step4c_cap: "Langkah 5.4c — Kebijakan dinas: toggle pengajuan, jenis kegiatan dan akomodasi.",

    s5_step4d_title: "5.4d • Set Up Kebijakan: Pengelolaan Lembur",
    s5_step4d_lead: "Pilih jenis lembur yang bisa diajukan karyawan dan batas jam yang berlaku.",
    s5_step4d_b1: "Pindah ke tab <strong>Overtime</strong>.",
    s5_step4d_b2: "Tinjau <strong>Overtime types</strong> (Regular Overtime, PHL — Pengganti Hari Libur) dan tambahkan jenis lain bila perlu.",
    s5_step4d_b3: "Atur batas <strong>Per day</strong>, <strong>Per week (Monday–Sunday)</strong>, dan <strong>Per month</strong> dalam jam, atau biarkan “No limit”.",
    s5_step4d_b4: "Pilih tindakan <strong>Over a limit</strong>, lalu klik <strong>Save and apply</strong>.",
    s5_step4d_cap: "Langkah 5.4d — Jenis lembur dan batas jam.",

    s5_step4e_title: "5.4e • Set Up Kebijakan: Alur Persetujuan (Approval Routing)",
    s5_step4e_lead: "Bangun rantai persetujuan otomatis bertingkat untuk setiap modul operasional (Atasan Langsung -> Kepala Divisi -> HR/Finance).",
    s5_step4e_b1: "Pindah ke tab <strong>Approval routing</strong>.",
    s5_step4e_b2: "Pilih tiap modul dari dropdown untuk meninjau dan menyesuaikan alur persetujuan bertingkatnya.",
    s5_step4e_b3: "Template alur dapat dipakai bersama atau dibedakan per departemen. Klik <strong>Save</strong>, lalu klik <strong>Continue</strong>.",
    s5_step4e_cap: "Langkah 5.4e — Editor alur kerja persetujuan bertingkat.",

    // Step 5.5 Category & Sub-steps
    s5_cat_limits_title: "5.5 • Set Up Plafon Limit & Biaya Dinas",
    s5_cat_limits_desc: "Tentukan batas pengeluaran klaim operasional dan hak kelas tiket perjalanan dinas untuk setiap level.",

    chip1: "Makan",
    chip2: "Transport",
    chip3: "Akomodasi",
    chip4: "Parkir",
    chip5: "Belanja",
    chip6: "Perlengkapan Kantor",
    chip7: "Lainnya",

    s5_step5a_title: "5.5a • Set Up Limit: Plafon Klaim Pengeluaran per Level",
    s5_step5a_lead: "Tegakkan disiplin finansial perusahaan dengan menetapkan batas nominal klaim dan anggaran bulanan untuk setiap jenjang jabatan.",
    s5_step5a_b1: "Buka tab <strong>Claim & Expenses</strong> di dalam Langkah 5.5.",
    s5_step5a_b2: "Untuk setiap kategori biaya dan level, masukkan <strong>Max per claim</strong> dan <strong>Monthly budget</strong> dalam satuan IDR.",
    s5_step5a_b3: "Biarkan kolom kosong jika level tersebut memiliki hak <strong>No limit</strong> (misalnya jajaran Direksi).",
    s5_step5a_b4: "Klik tombol ungu <strong>Save claim limits</strong> sebelum beralih ke tab Travel.",
    s5_step5a_note: "Semua level wajib ditinjau. Periksa panel kuning di bawah untuk melihat kolom yang belum terisi.",
    s5_step5a_cap: "Langkah 5.5a — Matriks plafon pengeluaran reimbursement per level karyawan.",
    capLimitsFilled: "Semua level sudah terisi — notifikasi “Claim limits saved” muncul dan tinggal tarif perjalanan.",

    s5_step5b_title: "5.5b • Set Up Limit: Tarif Dinas & Aturan Internasional",
    s5_step5b_lead: "Atur uang saku harian per level dan, jika perlu, tambahkan aturan internasional untuk tujuan di luar negara asal.",
    s5_step5b_b1: "Buka tab <strong>Travel</strong> di dalam Langkah 5.",
    s5_step5b_b2: "Isi <strong>Home country</strong> dengan <strong>Company country (Indonesia)</strong> agar perjalanan domestik dinilai dengan benar.",
    s5_step5b_b3: "Isi <strong>Daily allowance</strong> untuk setiap level; kolom kosong berarti tanpa uang saku.",
    s5_step5b_b4: "Tambahkan <strong>Other allowances</strong> atau <strong>International rule</strong> bila perlu, lalu klik <strong>Save domestic rates</strong> dan pastikan panel kuning “Still to do” hilang.",
    s5_step5b_note: "Perjalanan internasional tetap “not configured” sampai Anda menambahkan aturan negara. Limit kosong tetap sah, tetapi setiap level perlu disimpan secara eksplisit.",
    s5_step5b_cap: "Langkah 5.5b — Uang saku domestik per level tersimpan; checklist prasyarat sudah bersih.",

    // Step 5.6
    s5_step6_title: "5.6 • Set Up Struktur Perusahaan (Direktorat & Divisi)",
    s5_step6_lead: "Bangun hierarki departemen organisasi untuk mendukung pelaporan struktural manajerial dan visibilitas persetujuan.",
    s5_step6_b1: "Klik <strong>+ Add directorate</strong> untuk membuat cabang divisi utama (misalnya <em>Operations</em>, <em>Technology</em>, <em>Finance</em>).",
    s5_step6_b2: "Di bawah tiap direktorat, ketik nama-nama departemen yang dipisahkan dengan tanda koma (misalnya <em>Accounting, Tax, Treasury</em>).",
    s5_step6_b3: "Gunakan <strong>+ Add division (no directorate)</strong> untuk tim fungsional mandiri.",
    s5_step6_b4: "Pilih <strong>Save & continue</strong>. Langkah ini opsional dan dapat dikembangkan lagi kapan saja setelah go-live.",
    s5_step6_note: "Struktur departemen terhubung langsung dengan alur persetujuan, memungkinkan perutean persetujuan spesifik tiap divisi.",
    s5_step6_cap: "Langkah 5.6 — Struktur hierarki perusahaan dengan direktorat, divisi, dan departemen.",
    capStructureFilled: "Direktorat beserta divisi dan departemen yang dipisahkan koma, siap disimpan.",

    // Step 5.7
    s5_step7_title: "5.7 • Set Up Mode Data Awal Workspace",
    s5_step7_lead: "Pilih apakah ingin mencoba fitur SparkX menggunakan data simulasi fiktif atau langsung memulai dengan workspace bersih.",
    s5_step7_b1: "<strong>Start with sample data</strong>: memuat sekitar sepuluh karyawan fiktif dengan departemen, kursus, lowongan, dan review, sehingga setiap layar punya contoh. Mereka tidak bisa login dan tidak menerima email.",
    s5_step7_b2: "<strong>Start blank</strong>: hanya data Anda sendiri. Tambahkan karyawan dengan mengundang mereka di langkah berikutnya atau mengimpor CSV.",
    s5_step7_b3: "Pilih kartu opsi yang Anda inginkan, lalu klik <strong>Continue</strong>.",
    s5_step7_note: "Data contoh dapat dihapus nanti dengan satu klik — hanya data contoh, bukan data yang Anda tambahkan sendiri.",
    s5_step7_cap: "Langkah 5.7 — Pilihan mode data awal: Data Simulasi Contoh vs Ruang Bersih (Blank).",
    capDataSelected: "“Start with sample data” dipilih — catatan menegaskan data contoh dapat dihapus nanti.",

    // Step 5.8
    s5_step8_title: "5.8 • Invite Team & Selesaikan Penyiapan Organisasi",
    s5_step8_lead: "Undang administrator awal, manajer HR, dan pimpinan divisi yang akan membantu mengoperasikan workspace.",
    s5_step8_b1: "Ketik <strong>nama lengkap</strong> dan <strong>email kerja</strong> resmi rekan Anda.",
    s5_step8_b2: "Tentukan hak akses perannya: <code>EMPLOYEE</code>, <code>MANAGER</code>, <code>HR</code>, <code>CHRO</code>, <code>ADMIN BU</code>, atau <code>ADMIN</code>.",
    s5_step8_b3: "Klik <strong>Invite</strong> — setiap orang yang diundang akan langsung menerima email aktivasi mandiri.",
    s5_step8_b4: "Saat langkah sebelumnya sudah lengkap, klik tombol ungu <strong>Finish setup</strong>. SparkX membuka workspace aktif Anda di <code>/ess</code>.",
    s5_step8_note: "Finish setup membuka dashboard aktif. Ingin mengundang banyak orang? Setelah penyiapan, impor CSV di menu Employees dan centang “send invitation” untuk setiap baris.",
    s5_step8_cap: "Langkah 5.8 — Undangan tim inti dan tombol peluncuran akhir “Finish setup”.",
    capInviteFilled: "Rekan HR diundang lewat email kantor — Finish setup tetap tersedia saat Anda siap.",

    finishBannerTitle: "Finish Setup Membuka Workspace Aktif",
    finishBannerText: "Ketika checklist prasyarat sudah tidak memiliki item yang tertunda, klik Finish setup. SparkX akan menginisialisasi organisasi Anda dan mengarahkan Anda ke Dashboard Admin HR yang aktif.",

    // Section 06: Dashboard (Image 26)
    s6Badge: "Langkah 06 • Dashboard",
    s6Title: "Langkah 6: Dashboard & Operasional",
    s6Lead: "Penyiapan organisasi Anda resmi selesai! Dashboard Admin SparkX kini menjadi pusat operasional harian untuk pengelolaan SDM, pemantauan absensi, dan persetujuan permohonan.",
    s6_step1_title: "6.1 • Selamat Datang di Dashboard Admin HR SparkX Anda",
    s6_step1_lead: "Workspace perusahaan Anda sudah aktif sepenuhnya. Jelajahi widget ringkasan real-time, direktori karyawan, dan antrean persetujuan atasan.",
    s6_b1: "<strong>Widget Pending Approvals</strong>: Tinjau pengajuan cuti, lembur, dan klaim masuk yang membutuhkan persetujuan atasan atau HR.",
    s6_b2: "<strong>Feed Log Absensi Real-Time</strong>: Pantau absensi harian karyawan yang masuk, keterlambatan, dan status kerja dari rumah (WFH).",
    s6_b3: "<strong>Direktori & Profil Karyawan</strong>: Akses pusat data berkas karyawan, direktori kontak, dan rincian penugasan kerja.",
    s6_b4: "<strong>Pengaturan Tata Kelola Admin</strong>: Sesuaikan plafon kebijakan, kelola layer jenjang jabatan, atau tambah anak perusahaan kapan saja.",
    s6cap: "Tampilan dashboard SparkX yang aktif tepat setelah penyiapan organisasi selesai.",

    recapTitle: "Ringkasan Penyelesaian Onboarding",
    check1: "Akun pemilik telah dibuat, email perusahaan terverifikasi, dan kata sandi master tersimpan.",
    check2: "Profil hukum perusahaan terdaftar dan telah disetujui Superadmin SparkX.",
    check3: "Wizard penyiapan 8 langkah di /ess/setup telah selesai tuntas.",
    check4: "Layer jenjang karir, level jabatan, kebijakan modul, dan plafon limit telah dikonfigurasi.",
    check5: "Struktur perusahaan terbuat, mode data awal dipilih, dan tim inti telah diundang.",
    check6: "Dashboard Admin telah disimpan sebagai bookmark untuk operasional harian HR.",

    closingTitle: "Organisasi Anda Sudah Siap Beroperasi di SparkX!",
    closingMsg: "Seluruh karyawan kini dapat masuk, melakukan absensi, dan mengajukan permohonan sesuai kebijakan yang telah Anda atur. Sebagai Administrator HR, Anda memegang kendali penuh untuk menyempurnakan alur kerja, memeriksa audit log, dan mengelola SDM perusahaan secara modern.",
    launchBtn: "Buka Halaman Login SparkX",

    // Documentation Portal (Home View)
    portalWelcomeBadge: "Pusat Dokumentasi & Panduan SparkX",
    portalHeroTitle: "Selamat Datang di Dokumentasi SparkX",
    portalHeroLead: "Pusat panduan resmi untuk SparkX HR Intelligence & Self-Service Platform. Jelajahi panduan orientasi mandiri interaktif dan buku manual operasional lengkap di bawah ini untuk memulai.",
    portalStatVersion: "v2.4 Platform Live",
    portalStatMulti: "HR Multi-Tenant Perusahaan",
    portalStatVerified: "26 Tangkapan Layar Asli Terverifikasi",
    portalCatOnboarding: "Panduan Orientasi Mandiri (Self-Onboarding)",
    portalCatOnboardingLead: "Panduan orientasi langkah demi langkah yang disesuaikan berdasarkan peran pembuatan akun.",
    portalHrCardBadge: "Panduan Utama • Interaktif & Terverifikasi",
    portalHrCardTitle: "Self-Onboarding Admin HR & Founder",
    portalHrCardSub: "Buat Akun, Daftarkan Organisasi & Selesaikan Wizard Penyiapan 8 Langkah",
    portalHrCardDesc: "Perjalanan onboarding lengkap: daftarkan profil legal perusahaan, verifikasi email, atur modul platform, susun layer jabatan, sesuaikan kebijakan cuti/klaim/dinas, tetapkan plafon limit per level, dan luncurkan workspace organisasi.",
    portalHrTag1: "Registrasi Akun & Organisasi",
    portalHrTag2: "8 Langkah Wizard Penyiapan",
    portalHrTag3: "Penanganan Kasus Penolakan & Approval",
    portalBtnHr: "Mulai Panduan Admin HR →",
    portalEmpOnboardBadge: "Akses Berbasis Undangan",
    portalEmpOnboardTitle: "Self-Onboarding Karyawan Undangan",
    portalEmpOnboardSub: "Terima Undangan, Aktivasi Akun & Jelajahi Portal Karyawan",
    portalEmpOnboardDesc: "Panduan orientasi bagi anggota tim yang bergabung ke perusahaan melalui undangan email HR: aktivasi akun kerja, buat kata sandi aman, konfigurasi biometrik/passkey, dan jelajahi profil Employee Self-Service Anda.",
    portalEmpOnboardTag1: "Tautan Undangan Email",
    portalEmpOnboardTag2: "Kata Sandi & Passkey",
    portalEmpOnboardTag3: "Pengaturan Profil ESS",
    portalBtnEmpOnboard: "Mulai Panduan Karyawan →",
    portalCatManuals: "Buku Manual Pengguna Operasional",
    portalCatManualsLead: "Buku panduan operasional harian berbasis peran yang mencakup alur kerja, aturan kebijakan, dan tata kelola sistem.",
    portalManualEmpBadge: "Operasional Harian",
    portalManualEmpTitle: "User Manual Karyawan",
    portalManualEmpDesc: "Panduan operasional harian karyawan: Presensi clock-in/out harian, pengajuan cuti tahunan & khusus, klaim penggantian biaya (reimbursement), permohonan dinas luar kota, dan pencatatan lembur.",
    portalManualMgrBadge: "Persetujuan & Manajemen Tim",
    portalManualMgrTitle: "User Manual Manajer",
    portalManualMgrDesc: "Panduan manajerial: Persetujuan bertingkat untuk cuti, lembur, dan klaim pengeluaran, pemantauan kehadiran tim secara real-time, aturan delegasi wewenang, dan kontrol anggaran departemen.",
    portalManualHrBadge: "Tata Kelola & Administrasi Sistem",
    portalManualHrTitle: "User Manual Administrator HR",
    portalManualHrDesc: "Referensi mendalam untuk HR: Pengelolaan profil legal entitas, struktur anak perusahaan, grading gaji, template rute persetujuan bertingkat, perpajakan & regulasi ketenagakerjaan, serta kepatuhan kebijakan.",
    portalBtnManual: "Buka Detail Manual →",
    portalBackBtn: "← Portal Dokumentasi",

    // Invited Employee Onboarding Guide
    empGuideBadge: "Panduan Onboarding Karyawan",
    empGuideBadgeFull: "Panduan Onboarding Employee Self-Service (ESS)",
    empNavNum1: "01 • Pengantar",
    empNav1: "Aturan Akses",
    empNavNum2: "02 • Langkah 1",
    empNav2: "Email Undangan",
    empNavNum3: "03 • Langkah 2",
    empNav3: "Buat Password",
    empNavNum4: "04 • Langkah 3",
    empNav4: "Dasbor ESS",
    empNavNum5: "05 • Selesai",
    empNav5: "Kesiapan Kerja",
    empHelpDesc: "Jika tautan undangan Anda telah kedaluwarsa (7 hari) atau Anda belum menerima email undangan, hubungi departemen HR perusahaan Anda.",

    empS1Badge: "Onboarding Karyawan • Persyaratan Akses",
    empS1Title: "Selamat Datang di Employee Self-Service (ESS) SparkX",
    empS1Lead: "Panduan resmi langkah demi langkah untuk mengaktifkan akun karyawan Anda, mengatur kredensial keamanan, dan menjelajahi platform ESS.",
    empNoticeBadge: "Kebijakan Akses Ketat • Khusus Karyawan Undangan",
    empNoticeTitle: "Penting: Akses Hanya Melalui Undangan Resmi dari HR",
    empNoticeDesc: "Berbeda dengan Administrator HR atau Founder yang dapat mendaftarkan organisasi baru, <strong>karyawan biasa tidak dapat mendaftar mandiri secara langsung di situs web SparkX</strong>. Jika Anda mencoba mendaftar secara mandiri melalui halaman registrasi publik, sistem akan mengira Anda sedang mendirikan perusahaan baru dan akan meminta dokumen legalitas, mata uang operasional permanen, serta NPWP perusahaan. Karyawan tidak dapat bergabung ke workspace perusahaan yang sudah ada melalui pendaftaran mandiri biasa.<br><br>Untuk dapat masuk ke portal Employee Self-Service (ESS) tempat kerja Anda, Admin HR perusahaan wajib mendaftarkan data Anda terlebih dahulu ke direktori karyawan dan mengirimkan email undangan resmi. Setiap undangan memuat tautan aktivasi unik terenkripsi satu kali pakai yang berlaku secara ketat selama <strong>7 hari kalender</strong> dan terikat khusus ke alamat email Anda.",
    empNoticeTip: "Belum menerima email undangan? Periksa folder spam/junk email Anda terlebih dahulu. Jika tetap tidak ditemukan atau tautan 7 hari telah kedaluwarsa, hubungi Admin HR atau manajer Anda untuk mengirim ulang undangan baru.",
    empRule1Title: "Tidak Ada Pendaftaran Publik",
    empRule1Desc: "Pendaftaran mandiri langsung hanya untuk mendirikan badan usaha baru.",
    empRule2Title: "Diterbitkan oleh Admin HR",
    empRule2Desc: "Email kerja Anda wajib didaftarkan oleh HR ke direktori perusahaan.",
    empRule3Title: "Masa Berlaku 7 Hari",
    empRule3Desc: "Tautan kedaluwarsa setelah 7 hari dan harus dikirim ulang jika hangus.",
    empPrepTitle: "Hal yang Perlu Disiapkan",
    empPrep1Title: "Email Undangan Resmi dari HR",
    empPrep1Desc: "Email undangan aktif yang dikirim ke alamat email kantor atau pribadi Anda dengan masa berlaku 7 hari.",
    empPrep2Title: "Kata Sandi Akun yang Aman",
    empPrep2Desc: "Siapkan kata sandi minimal 8 karakter (atau siapkan akun Google perusahaan Anda jika menggunakan SSO).",
    empPrep3Title: "Browser Komputer atau Ponsel",
    empPrep3Desc: "SparkX dapat diakses dengan responsif melalui ponsel, tablet, maupun komputer kerja.",
    empRoadmapTitle: "3 Langkah Alur Aktivasi Karyawan",
    empRm1: "Langkah 1: Buka Email Undangan Resmi dari HR",
    empRm2: "Langkah 2: Buat Kata Sandi & Aktivasi Akun",
    empRm3: "Langkah 3: Jelajahi Dasbor ESS & Mulai Aktivitas Kerja",

    empStep1Badge: "Langkah 01 • Email Undangan",
    empStep1Title: "Terima & Buka Email Undangan Resmi dari SparkX",
    empStep1Lead: "Proses onboarding Anda dimulai saat Admin HR perusahaan mengundang Anda untuk bergabung ke workspace organisasi.",
    empStep1Cap: "Tampilan email undangan SparkX memuat nama pengundang, nama organisasi, masa berlaku 7 hari, dan kode organisasi unik.",
    empStep1PurposeTitle: "Tujuan & Konteks Langkah",
    empStep1PurposeDesc: "Memverifikasi bahwa undangan berasal dari perwakilan resmi perusahaan dan mengakses tautan aktivasi unik satu kali pakai.",
    empStep1PrepareTitle: "Persiapan",
    empStep1PrepareDesc: "Akses ke kotak masuk email tempat HR mengirim undangan (periksa folder spam jika tidak ada di kotak masuk).",
    empStep1_b1: "Buka kotak masuk email Anda (mis. Gmail, Outlook) dan cari email dari <code>SparkX &lt;no-reply@sparkx.life&gt;</code> dengan subjek <strong>“You’re invited, [Nama Anda]”</strong>.",
    empStep1_b2: "Periksa pengirim dan organisasi: Pesan secara jelas mencantumkan nama pengundang (mis. <em>Diko Andriyanto</em>) dan perusahaan yang Anda ikuti (mis. <em>Selalu Terang Group</em>).",
    empStep1_b3: "Perhatikan masa berlaku: Tautan undangan aman berlaku selama <strong>7 hari</strong>. Kode unik organisasi Anda (mis. <code>SELALUTERA-AX9D</code>) juga ditampilkan di email.",
    empStep1_b4: "Klik tombol ungu <strong>“Accept invitation”</strong> (atau salin dan tempelkan tautan token di bagian bawah ke browser Anda) untuk membuka halaman aktivasi akun.",

    empStep2Badge: "Langkah 02 • Keamanan & Kata Sandi",
    empStep2Title: "Buat Kata Sandi Kerja & Aktivasi Akun Anda",
    empStep2Lead: "Tetapkan kata sandi pribadi Anda atau hubungkan akun melalui Google Single Sign-On (SSO).",
    empStep2Cap: "Antarmuka pembuatan kata sandi dan aktivasi akun karyawan undangan.",
    empStep2PurposeTitle: "Tujuan Langkah & Standar Keamanan",
    empStep2PurposeDesc: "Melindungi catatan kepegawaian pribadi, data kehadiran, dan informasi penggajian dengan kredensial berstandar keamanan tinggi.",
    empStep2PrepareTitle: "Syarat Kata Sandi",
    empStep2PrepareDesc: "Minimal 8 karakter dengan kombinasi huruf, angka, dan simbol.",
    empStep2_b1: "Tautan verifikasi akan membuka halaman <strong>“Welcome to [Nama Perusahaan]”</strong> dengan alamat email Anda yang telah terverifikasi (mis. <code>melissaandrx@gmail.com</code>).",
    empStep2_b2: "Pada kolom <strong>“Choose a password”</strong>, masukkan kata sandi aman minimal <strong>8 karakter</strong> (kombinasi huruf besar, huruf kecil, angka, dan simbol).",
    empStep2_b3: "Ketikkan ulang kata sandi yang sama persis pada kolom <strong>“Confirm password”</strong> untuk menghindari kesalahan pengetikan.",
    empStep2_b4: "<em>Opsi Google SSO</em>: Jika kantor Anda menggunakan Google Workspace, Anda dapat mengklik tombol <strong>“Continue with Google”</strong> untuk masuk tanpa perlu mengingat password.",
    empStep2_b5: "Klik tombol biru <strong>“Activate and sign in”</strong>. Akun Anda seketika aktif dan langsung masuk ke dalam sistem.",

    empStep3Badge: "Langkah 03 • Pusat Operasional",
    empStep3Title: "Jelajahi Dasbor Employee Self-Service (ESS) Anda",
    empStep3Lead: "Pusat aktivitas kerja harian Anda untuk presensi kehadiran, pengajuan cuti, klaim reimbursement, dan dinas luar kota.",
    empStep3Cap: "Tampilan Dasbor ESS SparkX memuat saldo cuti real-time, ringkasan klaim pending, dan modul menu navigasi lengkap.",
    empStep3PurposeTitle: "Kemampuan Layanan Mandiri Harian",
    empStep3PurposeDesc: "Menjalankan seluruh administrasi kerja secara mandiri dari mana saja melalui komputer atau ponsel tanpa formulir manual.",
    empStep3PrepareTitle: "Tindakan Berikutnya",
    empStep3PrepareDesc: "Simpan alamat dasbor sebagai bookmark dan periksa kelengkapan profil Anda.",
    empStep3_b1: "<strong>Salam Pembuka & Identitas</strong>: Dasbor menyapa dengan <strong>“Hi, [Nama Anda]!”</strong>, menampilkan entitas perusahaan (<em>Selalu Terang Group</em>) serta badge peran sebagai <strong>Employee</strong>.",
    empStep3_b2: "<strong>Ringkasan Metrik Cepat</strong>: Pantau langsung status <strong>Pending Inbox</strong>, saldo <strong>Leave Balance</strong> (dengan tombol cepat <code>BOOK &gt;</code>), status klaim <strong>Pending Claims</strong>, dan plafon <strong>Outpatient Balance</strong> rawat jalan.",
    empStep3_b3: "<strong>Feed Aktivitas Utama</strong>: Pantau tugas tertunda di <strong>Priority Tasks</strong>, ikuti pengumuman kantor di <strong>Activity Feed</strong>, dan lihat rekan kerja yang sedang cuti di <strong>Team on Leave</strong>.",
    empStep3_b4: "<strong>Menu Modul Navigasi Kiri</strong>: Akses perangkat operasional harian Anda dalam satu klik:",
    empMod1: "<strong>Time & Attendance</strong>: Presensi harian berbasis lokasi GPS, foto selfie verifikasi, dan permohonan koreksi absensi.",
    empMod2: "<strong>Leave Request</strong>: Pengajuan cuti tahunan, pengganti hari libur (PHL), atau cuti sakit dengan lampiran surat dokter.",
    empMod3: "<strong>Claim & Expenses / Medical</strong>: Pengajuan klaim biaya operasional dengan foto struk dan pantau status pencairan.",
    empMod4: "<strong>Travel Request & Overtime</strong>: Permohonan perjalanan dinas dengan uang muka, atau pencatatan jam kerja lembur.",
    empMod5: "<strong>Document Center & My Profile</strong>: Unduh slip gaji digital, minta surat keterangan kerja, dan kelola nomor rekening payroll.",

    empRecapTitle: "Onboarding Karyawan Selesai!",
    empCheck1: "Email undangan resmi dari HR telah diterima dan diverifikasi dalam batas 7 hari.",
    empCheck2: "Kata sandi akun kerja telah dibuat (atau dihubungkan dengan Google SSO).",
    empCheck3: "Dasbor Employee Self-Service (ESS) telah dipelajari dan siap digunakan untuk kerja harian.",
    empClosingTitle: "Anda Siap Menggunakan SparkX!",
    empClosingMsg: "Akun Anda kini telah aktif sepenuhnya. Anda dapat masuk kapan saja melalui peramban komputer maupun ponsel pintar untuk absensi, memeriksa saldo cuti, dan mengajukan klaim.",
    empLoginBtn: "Buka Halaman Login SparkX"
  }
};

let currentLang = localStorage.getItem('sparkx_onboarding_lang') || 'en';
let activeModalKey = null;

function initLanguageToggle() {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (!toggleBtn) return;

  updateLanguageUI(currentLang);

  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('sparkx_onboarding_lang', currentLang);
    updateLanguageUI(currentLang);
    updateProgressText();
  });
}

function updateLanguageUI(lang) {
  // Update toggle button pills
  const enPill = document.getElementById('langPillEn');
  const idPill = document.getElementById('langPillId');
  if (enPill && idPill) {
    if (lang === 'en') {
      enPill.classList.add('active');
      idPill.classList.remove('active');
    } else {
      idPill.classList.add('active');
      enPill.classList.remove('active');
    }
  }

  const dict = translations[lang] || {};

  // Plain-text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Nodes that intentionally contain inline markup (strong, code, em)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  if (typeof activeModalKey !== 'undefined' && activeModalKey) {
    renderPortalModal(activeModalKey);
  }

  document.documentElement.lang = lang;
}

/* --------------------------------------------------------------------------
   2. Scroll Spy & Stepper Synchronization
   -------------------------------------------------------------------------- */
const mainSections = ['section-01', 'section-02', 'section-03', 'section-04', 'section-05', 'section-06'];
const empSections = ['emp-section-01', 'emp-step-01', 'emp-step-02', 'emp-step-03', 'emp-section-recap'];
const empManualSections = ['emp-manual-overview', 'emp-manual-s2', 'emp-manual-s3', 'emp-manual-s4', 'emp-manual-s5', 'emp-manual-s6', 'emp-manual-s7', 'emp-manual-troubleshoot', 'emp-manual-locations'];

/* Employee User Manual: dropdown sidebar (7 steps + Troubleshooting & Where Things Are) */
function initEmpManualSidebar() {
  const nav = document.getElementById('emnNav');
  if (!nav) return;
  const groups = Array.from(nav.querySelectorAll('.emn-group'));
  const links = Array.from(nav.querySelectorAll('.emn-sub a'));

  function setOpen(group, open) {
    group.classList.toggle('is-open', open);
    const head = group.querySelector('.emn-head');
    if (head) head.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  groups.forEach(group => {
    const head = group.querySelector('.emn-head');
    if (!head) return;
    head.addEventListener('click', () => {
      const willOpen = !group.classList.contains('is-open');
      setOpen(group, willOpen);
      if (group.dataset.target) {
        const targetEl = document.querySelector(group.dataset.target);
        if (targetEl) {
          smoothScrollTo(targetEl);
          history.pushState(null, '', group.dataset.target);
        }
      }
    });
  });

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl) {
          smoothScrollTo(targetEl);
          history.pushState(null, '', href);
        }
      }
    });
  });

  function onScroll() {
    if (currentViewMode !== 'employee-manual') return;
    let active = null;
    links.forEach(link => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target && target.getBoundingClientRect().top <= 140) active = link;
    });
    if (!active) active = links[0];
    links.forEach(link => link.classList.toggle('is-active', link === active));
    const activeGroup = active && active.closest('.emn-group');
    if (activeGroup && !activeGroup.classList.contains('is-open')) setOpen(activeGroup, true);
    if (typeof window.scrollSidebarToActive === 'function') window.scrollSidebarToActive(active);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('hashchange', () => setTimeout(onScroll, 400));
  onScroll();
}
let currentViewMode = 'portal';
let currentStepIndex = 1;

const subnavElements = [
  { id: 'setup-step-1', selector: '.sidebar-sub-item[href="#setup-step-1"]' },
  { id: 'setup-step-2', selector: '.sidebar-sub-item[href="#setup-step-2"]' },
  { id: 'setup-step-3', selector: '.sidebar-sub-item[href="#setup-step-3"]' },
  { id: 'setup-step-4', selector: '.sidebar-sub-item[href="#setup-step-4"]' },
  { id: 'setup-step-4a', selector: '.sidebar-nested-item[href="#setup-step-4a"]' },
  { id: 'setup-step-4b', selector: '.sidebar-nested-item[href="#setup-step-4b"]' },
  { id: 'setup-step-4c', selector: '.sidebar-nested-item[href="#setup-step-4c"]' },
  { id: 'setup-step-4d', selector: '.sidebar-nested-item[href="#setup-step-4d"]' },
  { id: 'setup-step-4e', selector: '.sidebar-nested-item[href="#setup-step-4e"]' },
  { id: 'setup-step-5', selector: '.sidebar-sub-item[href="#setup-step-5"]' },
  { id: 'setup-step-5a', selector: '.sidebar-nested-item[href="#setup-step-5a"]' },
  { id: 'setup-step-5b', selector: '.sidebar-nested-item[href="#setup-step-5b"]' },
  { id: 'setup-step-6', selector: '.sidebar-sub-item[href="#setup-step-6"]' },
  { id: 'setup-step-7', selector: '.sidebar-sub-item[href="#setup-step-7"]' },
  { id: 'setup-step-8', selector: '.sidebar-sub-item[href="#setup-step-8"]' }
];

let lastAutoScrolledSidebarEl = null;
window.scrollSidebarToActive = function(activeEl) {
  if (!activeEl || activeEl === lastAutoScrolledSidebarEl) return;
  lastAutoScrolledSidebarEl = activeEl;
  const sidebar = activeEl.closest('.sidebar-sticky');
  if (!sidebar || sidebar.scrollHeight <= sidebar.clientHeight) return;
  const sRect = sidebar.getBoundingClientRect();
  const aRect = activeEl.getBoundingClientRect();
  const offsetTop = aRect.top - sRect.top + sidebar.scrollTop;
  const target = offsetTop - (sidebar.clientHeight / 2) + (aRect.height / 2);
  sidebar.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
};

function initScrollSpy() {
  const progressBar = document.getElementById('readingProgressBar');
  const hrNavItems = document.querySelectorAll('#guideView .step-nav-item');
  const empNavItems = document.querySelectorAll('#employeeGuideView .step-nav-item');
  const empManualNavItems = document.querySelectorAll('#employeeManualView .step-nav-item');

  function onScroll() {
    if (currentViewMode === 'portal') return;

    const winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = docHeight > 0 ? (winScroll / docHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    }

    const scrollMid = winScroll + (window.innerHeight / 3);

    // Employee Manual Spying
    if (currentViewMode === 'employee-manual') {
      let currentSectionIdx = 0;
      if (winScroll + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        currentSectionIdx = empManualSections.length - 1;
      } else {
        empManualSections.forEach((secId, idx) => {
          const sectionEl = document.getElementById(secId);
          if (sectionEl) {
            const top = sectionEl.getBoundingClientRect().top + winScroll;
            if (scrollMid >= top) {
              currentSectionIdx = idx;
            }
          }
        });
      }

      empManualNavItems.forEach((item, idx) => {
        if (idx === currentSectionIdx) {
          item.classList.add('active');
          window.scrollSidebarToActive(item);
        } else {
          item.classList.remove('active');
        }

        if (idx < currentSectionIdx) {
          item.classList.add('completed');
        } else {
          item.classList.remove('completed');
        }
      });

      currentStepIndex = currentSectionIdx + 1;
      updateProgressText();
      return;
    }

    // Employee Guide Spying
    if (currentViewMode === 'employee-guide') {
      let currentSectionIdx = 0;
      if (winScroll + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        currentSectionIdx = empSections.length - 1;
      } else {
        empSections.forEach((secId, idx) => {
          const sectionEl = document.getElementById(secId);
          if (sectionEl) {
            const top = sectionEl.getBoundingClientRect().top + winScroll;
            if (scrollMid >= top) {
              currentSectionIdx = idx;
            }
          }
        });
      }

      empNavItems.forEach((item, idx) => {
        if (idx === currentSectionIdx) {
          item.classList.add('active');
          window.scrollSidebarToActive(item);
        } else {
          item.classList.remove('active');
        }

        if (idx < currentSectionIdx) {
          item.classList.add('completed');
        } else {
          item.classList.remove('completed');
        }
      });

      currentStepIndex = currentSectionIdx + 1;
      updateProgressText();
      return;
    }

    // HR Admin Guide Spying
    let currentSectionIdx = 0;
    if (winScroll + window.innerHeight >= document.documentElement.scrollHeight - 50) {
      currentSectionIdx = mainSections.length - 1;
    } else {
      mainSections.forEach((secId, idx) => {
        const sectionEl = document.getElementById(secId);
        if (sectionEl) {
          const top = sectionEl.getBoundingClientRect().top + winScroll;
          if (scrollMid >= top) {
            currentSectionIdx = idx;
          }
        }
      });
    }

    hrNavItems.forEach((item, idx) => {
      if (idx === currentSectionIdx) {
        item.classList.add('active');
        if (mainSections[currentSectionIdx] !== 'section-05') {
          window.scrollSidebarToActive(item);
        }
      } else {
        item.classList.remove('active');
      }

      if (idx < currentSectionIdx) {
        item.classList.add('completed');
      } else {
        item.classList.remove('completed');
      }
    });

    // Synchronize subnav items inside Step 5
    if (mainSections[currentSectionIdx] === 'section-05') {
      let activeSubId = null;
      subnavElements.forEach(item => {
        const targetEl = document.getElementById(item.id);
        if (targetEl) {
          const top = targetEl.getBoundingClientRect().top + winScroll;
          if (winScroll + 200 >= top) {
            activeSubId = item.id;
          }
        }
      });

      subnavElements.forEach(item => {
        const linkEl = document.querySelector(item.selector);
        if (linkEl) {
          if (item.id === activeSubId) {
            linkEl.classList.add('active');
            window.scrollSidebarToActive(linkEl);
          } else {
            linkEl.classList.remove('active');
          }
        }
      });
    } else {
      document.querySelectorAll('.sidebar-sub-item, .sidebar-nested-item').forEach(el => {
        el.classList.remove('active');
      });
    }

    currentStepIndex = currentSectionIdx + 1;
    updateProgressText();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function updateProgressText() {
  const countEl = document.getElementById('stepCounterText');
  if (countEl) {
    const template = translations[currentLang]?.stepOf || "Step {current} of {total}";
    const total = currentViewMode === 'employee-manual' ? empManualSections.length : (currentViewMode === 'employee-guide' ? empSections.length : mainSections.length);
    countEl.textContent = template.replace('{current}', currentStepIndex).replace('{total}', total);
  }
}

/* --------------------------------------------------------------------------
   3. Guided Navigation & Precision Smooth Scrolling
   -------------------------------------------------------------------------- */
function smoothScrollTo(targetEl) {
  if (!targetEl) return;

  const getTargetPosition = () => {
    const header = document.querySelector('.top-header');
    const headerHeight = header ? header.offsetHeight : 72;
    const computedMargin = parseFloat(window.getComputedStyle(targetEl).scrollMarginTop);
    const offset = (!isNaN(computedMargin) && computedMargin > 0) ? computedMargin : (headerHeight + 24);
    const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
    return Math.max(0, targetTop);
  };

  const targetY = getTargetPosition();
  window.scrollTo({
    top: targetY,
    behavior: 'smooth'
  });

  const verificationDelays = [150, 350, 600, 950];
  verificationDelays.forEach(delay => {
    setTimeout(() => {
      const currentTargetY = getTargetPosition();
      if (Math.abs(window.pageYOffset - currentTargetY) > 20) {
        window.scrollTo({
          top: currentTargetY,
          behavior: 'smooth'
        });
      }
    }, delay);
  });
}

function initStepNavigation() {
  // Main Stepper Nav items
  document.querySelectorAll('.step-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          smoothScrollTo(targetEl);
          if (history.pushState) {
            history.pushState(null, '', href);
          }
        }
      }
    });
  });

  // Sidebar Sub-items & Nested items (5.1..5.8, 5.4a..e, 5.5a..b)
  document.querySelectorAll('.sidebar-sub-item, .sidebar-nested-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          smoothScrollTo(targetEl);
          if (history.pushState) {
            history.pushState(null, '', href);
          }
        }
      }
    });
  });

  // Prev / Next buttons
  document.querySelectorAll('[data-nav-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-nav-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        smoothScrollTo(targetEl);
        if (history.pushState) {
          history.pushState(null, '', '#' + targetId);
        }
      }
    });
  });

  // Generic hash anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.classList.contains('step-nav-item') || anchor.classList.contains('sidebar-sub-item') || anchor.classList.contains('sidebar-nested-item')) return;
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        smoothScrollTo(targetEl);
        if (history.pushState) {
          history.pushState(null, '', href);
        }
      }
    });
  });

  const finishBtn = document.getElementById('finishOnboardingBtn');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      window.open('https://nautilus-staging-645716388397.asia-southeast2.run.app/login', '_blank');
    });
  }
}

/* --------------------------------------------------------------------------
   4. High-Res Screenshot Lightbox Modal
   -------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  if (!modal || !modalImg) return;

  document.querySelectorAll('.mockup-viewport').forEach(viewport => {
    viewport.addEventListener('click', () => {
      const shotContainer = viewport.closest('.g-shot-top');
      const isMobile = shotContainer && shotContainer.classList.contains('is-mobile');
      const img = (isMobile ? viewport.querySelector('img.shot-mobile') : viewport.querySelector('img.shot-desktop')) || viewport.querySelector('img');
      const captionEl = (shotContainer ? shotContainer.querySelector('.g-shot-caption span') : null) || viewport.parentElement.querySelector('.g-shot-caption span') || viewport.parentElement.querySelector('figcaption');
      if (img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || "SparkX Screenshot Preview";
        if (modalCaption) {
          modalCaption.textContent = captionEl ? captionEl.textContent : (img.alt || "");
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   5. Sidebar Collapsible Dropdown & Full Sidebar Toggle Controller
   -------------------------------------------------------------------------- */
function initSidebarDropdown() {
  const step5Group = document.getElementById('step5Group');
  const step5Toggle = document.getElementById('step5DropdownToggle');
  const step5Subnav = document.getElementById('sidebarStep5Subnav');
  const step5NavItem = document.getElementById('step5NavItem');

  // Toggle Step 5 Dropdown
  function toggleStep5(forceOpen) {
    if (!step5Group || !step5Subnav) return;
    const isCurrentlyCollapsed = step5Group.classList.contains('is-collapsed');
    const shouldOpen = forceOpen !== undefined ? forceOpen : isCurrentlyCollapsed;

    if (shouldOpen) {
      step5Group.classList.remove('is-collapsed');
      step5Subnav.classList.remove('is-collapsed');
      if (step5Toggle) {
        step5Toggle.setAttribute('aria-expanded', 'true');
      }
      try { localStorage.setItem('sparkx_step5_collapsed', 'false'); } catch (e) {}
    } else {
      step5Group.classList.add('is-collapsed');
      step5Subnav.classList.add('is-collapsed');
      if (step5Toggle) {
        step5Toggle.setAttribute('aria-expanded', 'false');
      }
      try { localStorage.setItem('sparkx_step5_collapsed', 'true'); } catch (e) {}
    }
  }

  if (step5Toggle) {
    step5Toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleStep5();
    });
  }

  // If user clicks the Step 5 main link while it is collapsed, auto-expand so they see sub-steps
  if (step5NavItem) {
    step5NavItem.addEventListener('click', () => {
      toggleStep5(true);
    });
  }

  // Nested dropdown: 4. Policies
  const polToggle = document.getElementById('policiesDropdownToggle');
  const polGroup = document.getElementById('policiesSubgroup');
  const polSubnav = document.getElementById('policiesNestedSubnav');
  if (polToggle && polGroup && polSubnav) {
    polToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isCollapsed = polGroup.classList.toggle('is-collapsed');
      polSubnav.classList.toggle('is-collapsed', isCollapsed);
      polToggle.setAttribute('aria-expanded', String(!isCollapsed));
    });
  }

  // Nested dropdown: 5. Limits
  const limToggle = document.getElementById('limitsDropdownToggle');
  const limGroup = document.getElementById('limitsSubgroup');
  const limSubnav = document.getElementById('limitsNestedSubnav');
  if (limToggle && limGroup && limSubnav) {
    limToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isCollapsed = limGroup.classList.toggle('is-collapsed');
      limSubnav.classList.toggle('is-collapsed', isCollapsed);
      limToggle.setAttribute('aria-expanded', String(!isCollapsed));
    });
  }

  // Global Sidebar Collapse / Expand Toggle
  const sidebarToggle = document.getElementById('sidebarCollapseToggle');
  const floatingBtn = document.getElementById('floatingSidebarBtn');

  function isMobileViewport() {
    return window.innerWidth <= 1024;
  }

  function setSidebarCollapsed(collapsed) {
    if (isMobileViewport()) {
      document.body.classList.toggle('mobile-menu-open', !collapsed);
      return;
    }
    if (collapsed) {
      document.body.classList.add('sidebar-is-collapsed');
      try { localStorage.setItem('sparkx_sidebar_collapsed', 'true'); } catch (e) {}
    } else {
      document.body.classList.remove('sidebar-is-collapsed');
      try { localStorage.setItem('sparkx_sidebar_collapsed', 'false'); } catch (e) {}
    }
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => setSidebarCollapsed(true));
  }
  if (floatingBtn) {
    floatingBtn.addEventListener('click', () => setSidebarCollapsed(false));
  }

  // Close mobile drawer when clicking a sidebar link or outside the drawer
  document.querySelectorAll('.sidebar-sticky a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (isMobileViewport()) {
        document.body.classList.remove('mobile-menu-open');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!isMobileViewport() || !document.body.classList.contains('mobile-menu-open')) return;
    if (!e.target.closest('.sidebar-sticky') && !e.target.closest('.floating-sidebar-btn')) {
      document.body.classList.remove('mobile-menu-open');
    }
  });

  // Restore saved states if previously collapsed
  try {
    const savedStep5Collapsed = localStorage.getItem('sparkx_step5_collapsed');
    if (savedStep5Collapsed === 'true') {
      toggleStep5(false);
    }
    const savedSidebarCollapsed = localStorage.getItem('sparkx_sidebar_collapsed');
    if (savedSidebarCollapsed === 'true') {
      setSidebarCollapsed(true);
    }
  } catch (e) {}
}
/* --------------------------------------------------------------------------
   6. Screenshot Tabs Switcher (Web View vs Email View)
   -------------------------------------------------------------------------- */
function initShotTabs() {
  document.querySelectorAll('.g-shot-top').forEach(shotContainer => {
    const tabBtns = shotContainer.querySelectorAll('.shot-tab-btn');
    const panels = shotContainer.querySelectorAll('.shot-tab-panel');
    if (tabBtns.length === 0 || panels.length === 0) return;

    tabBtns.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        tabBtns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (panels[index]) {
          panels[index].classList.add('active');
        }
      });
    });
  });
}

function initDeviceToggles() {
  document.querySelectorAll('.g-shot-top').forEach(shotContainer => {
    const deviceBtns = shotContainer.querySelectorAll('.g-device-btn');
    if (deviceBtns.length === 0) return;

    deviceBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const mode = btn.getAttribute('data-device');
        deviceBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        shotContainer.classList.toggle('is-mobile', mode === 'mobile');
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Documentation Portal & View Routing Controller
   -------------------------------------------------------------------------- */
const portalModalData = {
  'emp-onboard': {
    badge: { en: "Onboarding Walkthrough", id: "Panduan Onboarding" },
    title: { en: "Invited Employee Onboarding Journey", id: "Alur Orientasi Karyawan Undangan" },
    desc: {
      en: "A step-by-step onboarding guide for newly hired or invited team members joining their company workspace on SparkX.",
      id: "Panduan orientasi langkah demi langkah untuk karyawan yang bergabung ke workspace perusahaan di SparkX melalui undangan email."
    },
    topics: {
      en: [
        "Opening the secure email invitation link sent by HR Admin",
        "Setting your master work password and enabling biometrics / passkey login",
        "Reviewing and updating your personal ESS profile, emergency contacts & bank details",
        "First-time walkthrough of the SparkX mobile-friendly web dashboard",
        "How to perform your first clock-in/out and check your assigned shift"
      ],
      id: [
        "Membuka tautan undangan resmi yang dikirimkan oleh Admin HR perusahaan",
        "Membuat kata sandi akun kerja dan mengaktifkan login biometrik / passkey",
        "Memeriksa dan memperbarui profil ESS pribadi, kontak darurat & data rekening bank",
        "Tur pertama dasbor SparkX yang responsif di ponsel maupun laptop",
        "Cara melakukan presensi kehadiran (clock-in/out) pertama dan cek jadwal shift"
      ]
    }
  },
  'manual-emp': {
    badge: { en: "User Manual • ESS", id: "User Manual • ESS" },
    title: { en: "Employee User Manual (ESS)", id: "User Manual Karyawan (ESS)" },
    desc: {
      en: "Daily operational instructions for employees navigating self-service features in SparkX.",
      id: "Instruksi operasional harian bagi karyawan dalam menggunakan fitur mandiri di SparkX."
    },
    topics: {
      en: [
        "Daily Attendance: Geolocation clock-in/out, selfie verification, and shift schedules",
        "Attendance Corrections: Submitting missed clock-in/out requests with supporting reasons",
        "Leave Management: Submitting annual leave, sick leave (with MC upload), and tracking balances",
        "Expense Reimbursement: Filing operational receipts, meal vouchers, and mileage claims",
        "Business Travel (Dinas): Submitting travel requests, cash advances, and settlement reports",
        "Overtime Logging: Submitting pre-overtime approval and final actual hour reports"
      ],
      id: [
        "Presensi Harian: Clock-in/out dengan GPS geolocation, verifikasi foto, dan jadwal shift",
        "Koreksi Kehadiran: Pengajuan lupa absen/koreksi jam hadir dengan bukti pendukung",
        "Manajemen Cuti: Pengajuan cuti tahunan, cuti sakit (unggah surat dokter), & cek saldo sisa cuti",
        "Klaim & Pengeluaran: Pengajuan reimbursement operasional, nota makan, & transport",
        "Perjalanan Dinas: Pengajuan permohonan dinas, uang muka (cash advance), & laporan pertanggungjawaban",
        "Lembur (Overtime): Pengajuan izin lembur pra-kerja dan pelaporan realisasi jam lembur"
      ]
    }
  },
  'manual-mgr': {
    badge: { en: "User Manual • Management", id: "User Manual • Manajemen" },
    title: { en: "Manager & Approver User Manual", id: "User Manual Manajer & Penyetuju" },
    desc: {
      en: "Guidelines for team leads, department heads, and approvers reviewing requests and managing team attendance.",
      id: "Panduan untuk team lead, kepala divisi, dan approver dalam meninjau permohonan dan memantau tim."
    },
    topics: {
      en: [
        "Central Approvals Inbox: Reviewing, approving, or rejecting leave, overtime, and claim requests",
        "Multi-tier Approval Chains: Understanding sequential vs parallel routing steps",
        "Team Attendance Oversight: Real-time dashboard of who is in office, working remote, or on leave",
        "Overtime Auditing: Validating statutory rate multipliers against actual logged work hours",
        "Delegation of Authority: Temporarily assigning approval privileges during manager leave periods",
        "Department Budget Alerts: Monitoring monthly departmental claim and travel spend against caps"
      ],
      id: [
        "Kotak Masuk Persetujuan: Menyetujui atau menolak pengajuan cuti, lembur, dan klaim tim",
        "Alur Persetujuan Bertingkat: Memahami rantai approval berurutan (sequential) maupun paralel",
        "Pemantauan Tim: Dasbor kehadiran real-time siapa yang hadir, WFH, atau sedang cuti",
        "Audit Lembur: Memvalidasi pengali upah lembur resmi terhadap realisasi kerja aktual",
        "Pendelegasian Wewenang: Menyerahkan hak approval sementara saat manajer cuti",
        "Peringatan Anggaran Departemen: Memantau plafon limit pengeluaran klaim & dinas tim"
      ]
    }
  },
  'manual-hr': {
    badge: { en: "User Manual • HR Governance", id: "User Manual • Tata Kelola HR" },
    title: { en: "HR Administrator System Manual", id: "User Manual Administrator HR" },
    desc: {
      en: "Comprehensive administrative manual covering system configuration, policy rules, and compliance.",
      id: "Panduan komprehensif administrasi sistem yang mencakup konfigurasi kebijakan dan tata kelola."
    },
    topics: {
      en: [
        "Organization & Legal Entities: Managing company profiles, subsidiaries, and NPWP settings",
        "Job Grading Architecture: Creating career layers, job levels, and organizational hierarchy",
        "Leave Policy Governance: Setting annual quotas, prorate rules, carry-over limits, and PHL substitutes",
        "Expense & Travel Policies: Defining mileage rates, per diems, and per-level expense caps",
        "Approval Routing Rules: Designing conditional approval matrixes by department, level, and amount",
        "Employee Master Directory: Managing employee profiles, contracts, and role permissions",
        "Audit Trail & Compliance: Exporting attendance logs, tax deduction data, and payroll readiness reports"
      ],
      id: [
        "Entitas Legal & Organisasi: Pengelolaan profil perusahaan, anak perusahaan, dan NPWP",
        "Arsitektur Job Grading: Pembuatan layer karir, level jabatan, dan struktur organisasi",
        "Kebijakan Cuti: Pengaturan kuota tahunan, prorata, batas hangus, dan pengganti hari libur (PHL)",
        "Kebijakan Klaim & Dinas: Penentuan tarif transport, uang saku harian, dan plafon per level",
        "Matriks Alur Approval: Merancang rute persetujuan bersyarat berdasarkan divisi dan nominal",
        "Master Direktori Karyawan: Pengelolaan data pegawai, status kontrak, dan hak akses peran",
        "Audit Trail & Kepatuhan: Ekspor log presensi, rekap klaim, dan kesiapan penggajian (payroll)"
      ]
    }
  }
};

function renderPortalModal(key) {
  const data = portalModalData[key];
  if (!data) return;
  activeModalKey = key;
  const modal = document.getElementById('portalInfoModal');
  const badgeEl = document.getElementById('modalInfoBadge');
  const titleEl = document.getElementById('modalInfoTitle');
  const descEl = document.getElementById('modalInfoDesc');
  const listEl = document.getElementById('modalInfoChecklist');
  if (!modal || !badgeEl || !titleEl || !descEl || !listEl) return;

  const lang = currentLang === 'id' ? 'id' : 'en';
  badgeEl.textContent = data.badge[lang];
  titleEl.textContent = data.title[lang];
  descEl.textContent = data.desc[lang];

  listEl.innerHTML = '';
  data.topics[lang].forEach(topicText => {
    const li = document.createElement('li');
    li.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${topicText}</span>
    `;
    listEl.appendChild(li);
  });
}

function initPortalView() {
  const homePortalView = document.getElementById('homePortalView');
  const guideView = document.getElementById('guideView');
  const employeeGuideView = document.getElementById('employeeGuideView');
  const employeeManualView = document.getElementById('employeeManualView');
  const openHrBtn = document.getElementById('openHrOnboardingBtn');
  const openEmpBtn = document.getElementById('openEmpOnboardingBtn');
  const openEmpManualBtn = document.getElementById('openEmpManualBtn');
  const portalCardManualEmp = document.getElementById('portalCardManualEmp');
  const modalOpenEmpManualBtn = document.getElementById('modalOpenEmpManualBtn');
  const backToPortalBtn = document.getElementById('backToPortalBtn');
  const sidebarBackPortal = document.getElementById('sidebarBackPortal');
  const sidebarBackPortalEmp = document.getElementById('sidebarBackPortalEmp');
  const sidebarBackPortalManual = document.getElementById('sidebarBackPortalManual');
  const empManualBottomBackPortal = document.getElementById('empManualBottomBackPortal');
  const empNavBackPortal = document.getElementById('empNavBackPortal');
  const recapBackPortalEmp = document.getElementById('recapBackPortalEmp');
  const empFinishBtn = document.getElementById('empFinishBtn');
  const brandHomeLink = document.getElementById('brandHomeLink');
  const brandBadgeText = document.querySelector('.brand-badge [data-i18n]');
  const stepCounter = document.querySelector('.progress-pill');
  const progressBar = document.querySelector('.reading-progress-track');
  const portalModal = document.getElementById('portalInfoModal');
  const portalModalClose = document.getElementById('portalInfoClose');

  // Employee Sidebar Collapse controls
  const sidebarCollapseEmp = document.getElementById('sidebarCollapseToggleEmp');
  const floatingSidebarBtnEmp = document.getElementById('floatingSidebarBtnEmp');
  const sidebarCollapseEmpManual = document.getElementById('sidebarCollapseToggleEmpManual');
  const floatingSidebarBtnEmpManual = document.getElementById('floatingSidebarBtnEmpManual');

  if (sidebarCollapseEmp) {
    sidebarCollapseEmp.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        document.body.classList.remove('mobile-menu-open');
        return;
      }
      document.body.classList.add('sidebar-is-collapsed');
      try { localStorage.setItem('sparkx_sidebar_collapsed', 'true'); } catch (e) {}
    });
  }
  if (floatingSidebarBtnEmp) {
    floatingSidebarBtnEmp.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        document.body.classList.add('mobile-menu-open');
        return;
      }
      document.body.classList.remove('sidebar-is-collapsed');
      try { localStorage.setItem('sparkx_sidebar_collapsed', 'false'); } catch (e) {}
    });
  }

  if (sidebarCollapseEmpManual) {
    sidebarCollapseEmpManual.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        document.body.classList.remove('mobile-menu-open');
        return;
      }
      document.body.classList.add('sidebar-is-collapsed');
      try { localStorage.setItem('sparkx_sidebar_collapsed', 'true'); } catch (e) {}
    });
  }
  if (floatingSidebarBtnEmpManual) {
    floatingSidebarBtnEmpManual.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        document.body.classList.add('mobile-menu-open');
        return;
      }
      document.body.classList.remove('sidebar-is-collapsed');
      try { localStorage.setItem('sparkx_sidebar_collapsed', 'false'); } catch (e) {}
    });
  }

  if (!homePortalView || !guideView) return;

  function setView(view, targetHash) {
    currentViewMode = view;

    if (view === 'employee-manual') {
      homePortalView.style.display = 'none';
      guideView.style.display = 'none';
      if (employeeGuideView) employeeGuideView.style.display = 'none';
      if (employeeManualView) employeeManualView.style.display = 'block';
      if (backToPortalBtn) backToPortalBtn.style.display = 'inline-flex';
      if (stepCounter) stepCounter.style.display = 'inline-flex';
      if (progressBar) progressBar.style.display = 'block';
      if (brandBadgeText) {
        brandBadgeText.textContent = "Employee User Manual (ESS)";
      }

      updateProgressText();

      if (targetHash && targetHash !== '#employee-manual' && targetHash !== '#manual-emp') {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'employee-guide') {
      homePortalView.style.display = 'none';
      guideView.style.display = 'none';
      if (employeeManualView) employeeManualView.style.display = 'none';
      if (employeeGuideView) employeeGuideView.style.display = 'block';
      if (backToPortalBtn) backToPortalBtn.style.display = 'inline-flex';
      if (stepCounter) stepCounter.style.display = 'inline-flex';
      if (progressBar) progressBar.style.display = 'block';
      if (brandBadgeText) {
        brandBadgeText.setAttribute('data-i18n', 'empGuideBadge');
        brandBadgeText.textContent = translations[currentLang]?.empGuideBadge || "Invited Employee Guide";
      }

      updateProgressText();

      if (targetHash && targetHash !== '#employee-guide') {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'guide') {
      homePortalView.style.display = 'none';
      guideView.style.display = 'block';
      if (employeeGuideView) employeeGuideView.style.display = 'none';
      if (employeeManualView) employeeManualView.style.display = 'none';
      if (backToPortalBtn) backToPortalBtn.style.display = 'inline-flex';
      if (stepCounter) stepCounter.style.display = 'inline-flex';
      if (progressBar) progressBar.style.display = 'block';
      if (brandBadgeText) {
        brandBadgeText.setAttribute('data-i18n', 'guideBadge');
        brandBadgeText.textContent = translations[currentLang]?.guideBadge || "HR Admin Onboarding Guide";
      }

      updateProgressText();

      if (targetHash && targetHash !== '#guide') {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      homePortalView.style.display = 'block';
      guideView.style.display = 'none';
      if (employeeGuideView) employeeGuideView.style.display = 'none';
      if (employeeManualView) employeeManualView.style.display = 'none';
      if (backToPortalBtn) backToPortalBtn.style.display = 'none';
      if (stepCounter) stepCounter.style.display = 'none';
      if (progressBar) progressBar.style.display = 'none';
      if (brandBadgeText) {
        brandBadgeText.setAttribute('data-i18n', 'guideBadge');
        brandBadgeText.textContent = translations[currentLang]?.guideBadge || "HR Admin Onboarding Guide";
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Expose global navigation helpers
  window.setView = setView;
  window.openEmployeeManual = function() {
    history.pushState(null, '', '#emp-manual-overview');
    setView('employee-manual', '#emp-manual-overview');
  };
  window.openEmployeeOnboarding = function() {
    history.pushState(null, '', '#emp-section-01');
    setView('employee-guide', '#emp-section-01');
  };
  window.openHrOnboarding = function() {
    history.pushState(null, '', '#section-01');
    setView('guide', '#section-01');
  };
  window.backToPortal = function() {
    history.pushState(null, '', '#portal');
    setView('portal');
  };

  // Initial Route Check
  const initialHash = window.location.hash;
  if (initialHash && (initialHash.startsWith('#emp-manual-') || initialHash === '#manual-emp' || initialHash === '#employee-manual')) {
    setView('employee-manual', initialHash);
  } else if (initialHash && (initialHash.startsWith('#emp-') || initialHash === '#employee-guide')) {
    setView('employee-guide', initialHash);
  } else if (initialHash && (initialHash.startsWith('#section-') || initialHash.startsWith('#setup-step-') || initialHash === '#guide')) {
    setView('guide', initialHash);
  } else {
    setView('portal');
  }

  // Navigation Event Listeners
  if (openHrBtn) {
    openHrBtn.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', '#section-01');
      setView('guide', '#section-01');
    });
  }

  if (openEmpBtn) {
    openEmpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', '#emp-section-01');
      setView('employee-guide', '#emp-section-01');
    });
  }

  if (openEmpManualBtn) {
    openEmpManualBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      history.pushState(null, '', '#emp-manual-overview');
      setView('employee-manual', '#emp-manual-overview');
    });
  }

  if (portalCardManualEmp) {
    portalCardManualEmp.addEventListener('click', (e) => {
      if (!e.target.closest('[data-portal-modal]')) {
        e.preventDefault();
        history.pushState(null, '', '#emp-manual-overview');
        setView('employee-manual', '#emp-manual-overview');
      }
    });
  }

  if (modalOpenEmpManualBtn) {
    modalOpenEmpManualBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closePortalModal();
      history.pushState(null, '', '#emp-manual-overview');
      setView('employee-manual', '#emp-manual-overview');
    });
  }

  const portalReturnLinks = [backToPortalBtn, sidebarBackPortal, sidebarBackPortalEmp, sidebarBackPortalManual, empManualBottomBackPortal, empNavBackPortal, recapBackPortalEmp, empFinishBtn, brandHomeLink];
  portalReturnLinks.forEach(link => {
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState(null, '', '#portal');
        setView('portal');
      });
    }
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#emp-manual-') || hash === '#manual-emp' || hash === '#employee-manual') {
      setView('employee-manual', hash);
    } else if (hash.startsWith('#emp-') || hash === '#employee-guide') {
      setView('employee-guide', hash);
    } else if (hash.startsWith('#section-') || hash.startsWith('#setup-step-') || hash === '#guide') {
      setView('guide', hash);
    } else if (hash === '#portal' || hash === '' || hash === '#home') {
      setView('portal');
    }
  });

  // Modal triggers
  document.querySelectorAll('[data-portal-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = trigger.getAttribute('data-portal-modal');
      renderPortalModal(modalKey);
      if (portalModal) {
        portalModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closePortalModal() {
    if (portalModal) {
      portalModal.classList.remove('active');
      document.body.style.overflow = '';
      activeModalKey = null;
    }
  }

  if (portalModalClose) {
    portalModalClose.addEventListener('click', closePortalModal);
  }

  if (portalModal) {
    portalModal.addEventListener('click', (e) => {
      if (e.target === portalModal) {
        closePortalModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && portalModal && portalModal.classList.contains('active')) {
      closePortalModal();
    }
  });
}