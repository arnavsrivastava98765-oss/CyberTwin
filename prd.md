# Product Requirements Document: CyberTwin Max

* **Product Owner:** Arnav Srivastava
* **Status:** Approved  
* **Version:** 1.0  
* **Last Updated:** 2026-10-19  

---

## 1. Summary / Overview
* **What is it?**  
  **CyberTwin Max** is an interactive, defensive-and-offensive cybersecurity digital twin platform. It models how real-world adversaries chain exposed breach intelligence and human phishing vulnerabilities into full account takeover, maps every step to the industry-standard **MITRE ATT&CK** framework, and visually demonstrates how specific defensive layers (Defense-in-Depth) sever the attack chain.
* **What problem does it solve?**  
  Traditional awareness training is abstract, boring, and disconnected; users and evaluators see breach checks (e.g., HaveIBeenPwned) or phishing tests in isolated silos. They fail to understand how an adversary correlates multiple disparate data leaks into an attack path. CyberTwin bridges threat modeling, breach intelligence, behavioral phishing detection, and blue team defense into a cohesive, interactive simulation.
* **What is the goal?**  
  Provide an educational, hackathon-winning, portfolio-ready platform that teaches threat modeling, security hygiene, and SOC detection engineering through dynamic attack graphs, red/blue team toggles, automated email/link analysis, and transparent risk scoring.

---

## 2. Problem Statement
* **Who has the problem?**  
  * Everyday digital citizens, students, and employees who underestimate credential reuse and social engineering risk.  
  * Cybersecurity students and junior analysts seeking an intuitive way to demonstrate MITRE ATT&CK attack path modeling, defense-in-depth, and secure software development.  
  * Competition judges and recruiters evaluating practical security tool development and defensive architecture skills.
* **What happens today?**  
  Users check an email on HaveIBeenPwned and get a static list of breached sites. They receive phishing simulations with no explanation of headers, lookalike domain indicators, or mitigation mechanics. There is zero visibility into how leaked data fuels subsequent attack steps.
* **Why does it matter?**  
  Over 80% of web application breaches involve compromised credentials or phishing (Verizon DBIR). Without understanding chained attacks, users cannot prioritize defenses (e.g., why passkeys or MFA negate breached passwords).
* **Evidence:**  
  * CISA and MITRE ATT&CK community guidance emphasizing chained adversary techniques.  
  * High user drop-off in conventional corporate training vs. high retention in gamified, interactive attack/defense visualizers.

---

## 3. Goals & Non-Goals

### Goals (In Scope)
* **Chained Attack Graph & Simulation:** Dynamically model credential exposure and phishing weakness into multi-hop attack graphs with verified MITRE ATT&CK technique IDs (e.g., T1566, T1078, T1110.004).
* **Interactive Red / Blue Team Experience:** Toggle between Red Team (attacker terminal animation, exploit vectors) and Blue Team (SOC detection alerts, telemetry logs, mitigation rules).
* **Multi-Vector Scenario Coverage:** Support three realistic scenarios: Credential Stuffing, Phishing Takeover, and SIM-Swap / Session Hijacking.
* **Defensive Tool Suite:** Built-in Email Header Analyzer (SPF/DKIM/DMARC parser), Link Typosquatting Checker (Levenshtein distance), and Password Lab (zxcvbn entropy + k-anonymity breach lookup).
* **Transparent Risk Score & Fix-it Quests:** Compute an explainable risk score (0–100) with visible weightings, gamified quests, and downloadable executive PDF pentest reports.
* **Judge / Demo Mode:** Seamless "Try with Persona Alex" preloaded scenario enabling stage demonstrations without entering sensitive live data.
* **DevSecOps & Zero-Trust Privacy:** Pure client/ephemeral processing with zero storage or logging of user emails/passwords, Pydantic validation, SlowAPI rate limiting, security headers, and automated SAST/SCA CI pipelines.

### Non-Goals (Out of Scope)
* **Real Offensive Exploitation:** CyberTwin does not perform actual network attacks, password cracking against third parties, or exploit delivery. All attack paths are simulated models.
* **Full Enterprise SIEM / EDR Agent:** Not a persistent host-level sensor or commercial SIEM replacement; blue team logs are realistic mock telemetry feeds.
* **Monetization or User Account Management:** No paid tiers, persistent user databases, or OAuth logins required for core functionality.
* **Native Mobile Apps:** Initial delivery focused on responsive web application and PDF export (browser-first).

---

## 4. Users and Use Cases

| Persona | Context / Situation | User Need | Desired Outcome |
| :--- | :--- | :--- | :--- |
| **Hackathon Judge / Tech Recruiter** | Evaluating live demo on stage or reviewing GitHub repository. | Rapidly grasp project depth without typing personal credentials or configuring complex setups. | Clicks "Judge Mode (Alex)", views animated terminal attack, inspects MITRE graph, and audits green CI/security badges within 90 seconds. |
| **Cybersecurity Student / Analyst** | Studying threat modeling, adversary emulation, and defense-in-depth. | Wants to see how MITRE techniques tie together and how specific controls sever the attack tree. | Toggles Red/Blue views, analyzes raw email headers, inspects defense layers breaking attack nodes, and downloads pentest PDF report. |
| **Everyday User / Non-Technical Peer** | Concerned about recent data breaches and suspicious emails received. | Wants clear, non-condescending risk assessment and actionable remediation steps. | Tests email address, checks lookalike links, explores Password Lab, and receives prioritized Fix-It Quests with rank progression. |

---

## 5. Functional Requirements

| ID | Requirement Description | Priority | Acceptance Criteria (Given / When / Then) |
| :--- | :--- | :--- | :--- |
| **FR-01** | **Judge Mode (Demo Persona 'Alex')**<br>System must provide a one-click demo persona with preloaded breach profiles and email scenarios. | **Must** | **Given** the user is on the landing screen, **when** clicking "Try Live / Demo as Alex", **then** the system immediately loads Alex's preconfigured breach history, risk score, and attack graph without typing credentials. |
| **FR-02** | **Breach Intelligence Query & Fallback**<br>Query public breach APIs (e.g. XposedOrNot / Pwned Passwords) with graceful fallback to mock data if offline or rate limited. | **Must** | **Given** an email input, **when** submitted, **then** query breach API using k-anonymity/safe endpoints; if API fails/times out, seamlessly fallback to deterministic simulated breach records with notice. |
| **FR-03** | **MITRE ATT&CK Attack Graph**<br>Render an interactive visual node graph mapping the adversary path with verified MITRE technique IDs. | **Must** | **Given** breach and phishing findings, **when** viewing the attack graph, **then** display chained nodes (Initial Access -> Credential Access -> Lateral Movement) labeled with official MITRE IDs (e.g., T1566, T1110.004, T1078). |
| **FR-04** | **Terminal Hack Simulation Animation**<br>Display a realistic terminal animation illustrating the attacker executing commands against exposed data. | **Must** | **Given** scenario selection, **when** "Simulate Attack" is triggered, **then** an animated terminal displays realistic CLI logs, port probes, credential spray attempts, and success banners. |
| **FR-05** | **Multi-Scenario Switcher**<br>Support 3 distinct attack scenarios: Credential Stuffing, Phishing Takeover, and SIM-Swap. | **Must** | **Given** scenario selector, **when** switching scenario, **then** update the terminal animation, MITRE node chain, and defense recommendations to reflect that specific threat vector. |
| **FR-06** | **Red Team / Blue Team Toggle**<br>Provide a dual-perspective toggle between adversary execution and defender telemetry/SOC view. | **Must** | **Given** any attack stage, **when** switching from Red to Blue mode, **then** view shifts from exploit mechanics to SOC alerts, detection rule matches (Sigma/YARA hints), and SIEM logs. |
| **FR-07** | **Defense-in-Depth Layer Mapping**<br>Visually demonstrate how specific security controls break specific nodes in the attack graph. | **Must** | **Given** an active attack graph, **when** user toggles controls (e.g., Hardware MFA, Password Manager, DMARC), **then** highlight the severed edge and update the risk score downwards. |
| **FR-08** | **Transparent Risk Scoring Formula**<br>Calculate an explainable security posture score (0–100) with visible weight breakdown. | **Must** | **Given** user evaluation metrics, **when** inspecting the risk score, **then** display an itemized breakdown formula (e.g., plaintext password leaked: +30, breach < 2 yrs: +15, phishing susceptibility: +25). |
| **FR-09** | **Phishing Text Detector with Keyword Highlighting**<br>Analyze suspicious email text, flag social engineering cues, and highlight urgency/coercion terms. | **Must** | **Given** raw email text, **when** analyzed, **then** calculate a phishing probability score and visually highlight suspicious trigger words (e.g., "Urgent", "Account Suspended", "Wire Transfer"). |
| **FR-10** | **Email Header Forensic Analyzer**<br>Parse raw RFC 822 email headers for SPF, DKIM, DMARC, From/Reply-To discrepancies, and Received hops. | **Should** | **Given** pasted raw email headers, **when** submitted, **then** parse authentication results (SPF pass/fail, DKIM signature, DMARC alignment) and flag sender spoofing warnings. |
| **FR-11** | **Typosquatting & Suspicious Link Checker**<br>Analyze URLs for lookalike domains (Levenshtein distance), shortened links, suspicious TLDs, and raw IP links. | **Should** | **Given** a URL input (e.g., `paypa1.com` or `http://192.168.1.1/login`), **when** checked, **then** flag homoglyphs/typosquats, dangerous TLDs, or IP targets using pure Python/JS logic without third-party API exposure. |
| **FR-12** | **Password Lab (zxcvbn & k-Anonymity)**<br>Evaluate password strength using zxcvbn and query HIBP Pwned Passwords via k-anonymity SHA-1 prefixing. | **Should** | **Given** password input, **when** typed, **then** calculate entropy, estimate crack time, check breach occurrence via 5-character SHA-1 hash prefix, and explain why length beats complexity. |
| **FR-13** | **Interactive Quiz & Gamified Fix-It Quests**<br>Provide tailored remediation quests and security quizzes that level up user rank cards. | **Should** | **Given** identified attack vulnerabilities, **when** completing corresponding quests/quiz questions, **then** award security badges, update user rank (e.g., "Script Kiddie Bait" -> "Hardened Guardian"). |
| **FR-14** | **Downloadable Pentest PDF Report**<br>Generate an exportable, executive-style PDF summary of the user's digital twin risk assessment. | **Should** | **Given** completed simulation, **when** user clicks "Download Report", **then** generate a branded PDF containing executive risk score, MITRE attack tree diagram, and prioritized remediations. |
| **FR-15** | **Zero-Logging & DevSecOps Hardening**<br>Enforce strict application security standards (CORS, CSP headers, rate limiting, no email persistence). | **Must** | **Given** incoming API requests, **when** processed, **then** enforce SlowAPI rate limits, validate via Pydantic, set secure headers, and store zero PII in disks or databases. |

---

## 6. Edge Cases & Error States
* **Network Failure / API Rate Limits:**  
  * If external breach or password APIs (XposedOrNot, HIBP) return 429 (Rate Limit) or 503 (Offline), the system automatically toggles an alert: *"External threat feeds unreachable. Running in local deterministic simulation mode."* The user experience remains uninterrupted.
* **Empty / Invalid Email or Header Inputs:**  
  * Submitting malformed email addresses or incomplete header text displays clear, inline validation errors with regex explanations without crashing backend parsers.
* **Malicious Payloads in Input Fields (XSS / SQLi / Injection):**  
  * All input fields (URL checker, header parser, phishing box) treat inputs as unescaped raw strings. UI frameworks sanitize output to prevent client-side XSS; backend uses parameterized, non-evaluating parsers.
* **Extremely Long Header Chains (> 50 Received Hops):**  
  * Header parser truncates display to the most critical origin and terminal hops with an expander, preventing UI layout breaks.
* **Zero Breach Findings:**  
  * If an entered email has no recorded breaches, display a clean state congratulating the user, while still offering the Phishing, Header, and Password Lab modules to test other hygiene vectors.

---

## 7. Design & UX Considerations
* **Aesthetic & Theme:**  
  * **Cyberpunk / Modern SOC Aesthetics:** Dark-mode primary (`#0a0e17`, `#111827`), high-contrast neon accents (Cyber Cyan `#00f3ff`, Alert Crimson `#ff0055`, Neon Emerald `#00ff9d`, Amber Warning `#ffb703`).
  * Glassmorphism cards with subtle border glows, modern monospace fonts for terminals (`JetBrains Mono` or `Fira Code`), and clean sans-serif for UI (`Inter` or `Outfit`).
* **Micro-Interactions & Animations:**  
  * Glowing attack tree connection lines, pulse effects on compromised nodes, fluid transition on Red/Blue toggle, animated score gauge, and typewriter effect in the hack terminal.
* **Accessibility & Responsiveness:**  
  * Full desktop and mobile tablet responsiveness. Visual color-coding is accompanied by icons and descriptive text badges (WCAG 2.1 AA compliant contrast ratios).
* **Information Architecture:**  
  * Top navigation bar with Quick Persona Switcher (`Demo: Alex`), Red/Blue Toggle, and Risk Score Pill.
  * Modular tabbed workspace:
    1. **Overview & Twin Dashboard** (Score Gauge, Attack Graph, Mitigations)
    2. **Attack Simulator** (Terminal Hack Animation, Scenario Selector)
    3. **Threat Analyzers** (Email Header Inspector, Phishing Analyzer, Link Checker)
    4. **Password Lab & Quests** (Entropy Lab, Remediation Quests, Rank Card)

---

## 8. Technical Considerations & Dependencies
* **Core Architecture:**  
  * **Frontend:** Modern interactive UI (Single-Page Application with responsive CSS, glassmorphism, dynamic SVG/Canvas graph rendering for MITRE node trees).
  * **Backend API:** Lightweight, asynchronous Python service (FastAPI) utilizing Pydantic models for input validation and strict type safety.
* **Security & Privacy by Design:**  
  * **Privacy Guarantee:** Zero database storage for submitted emails, passwords, or headers. All analysis is in-memory and ephemeral.
  * **k-Anonymity for Passwords:** Passwords hashed with SHA-1 client-side or in-memory; only first 5 characters queried against HIBP Pwned Passwords API.
  * **Security Middleware:** SlowAPI rate-limiting (e.g., 20 requests/minute per IP), strict CORS policy, Content Security Policy (CSP), HSTS, and X-Content-Type-Options headers.
  * **Code Quality & DevSecOps:** GitHub Actions executing `bandit` (SAST), `pip-audit` (dependency vulnerabilities), and `pytest` test suite on every pull request.
* **Dependencies & Libraries:**  
  * **Backend:** `fastapi`, `uvicorn`, `pydantic`, `slowapi`, `httpx` (async HTTP client), `dnspython` (for MX/SPF DNS lookups if enabled).
  * **Analysis Algorithms:** Pure Python Levenshtein distance for typosquatting, standard Python `email.parser` for RFC headers, regex-based keyword extraction for phishing heuristics.
  * **Client Tools:** `zxcvbn` (client-side password entropy engine).

---

## 9. Analytics & Success Measures

| Event or Metric | Definition / Calculation | Baseline | Target |
| :--- | :--- | :--- | :--- |
| **Demo Setup Time** | Time required for an evaluator or judge to reach a populated attack graph via Judge Mode. | > 60 seconds | **< 5 seconds** (1 click) |
| **Attack Graph Comprehension** | User comprehension of MITRE technique mapping after exploring the twin (measured in usability tests). | 20% | **> 85%** |
| **Analysis Latency** | Time to parse raw email headers + analyze phishing text + calculate risk score. | 3.5s | **< 600ms** |
| **Automated Security Scan Pass Rate** | Zero High/Critical severity issues in CI scans (`bandit` and `pip-audit`). | N/A | **100% Pass** (Green Badge) |
| **Zero Data Leakage** | Confirmed zero persistence of user query inputs in server logs or databases. | 100% | **100% Zero-Storage** |

---

## 10. Rollout & Rollback Plan
* **Rollout Strategy:**  
  * **Phase 1 (Core Foundation):** Deploy skeleton UI with Daisy dashboard, Alex demo profile, simulated breach generator, and SVG MITRE attack graph.  
  * **Phase 2 (Threat Tools Integration):** Wire real breach API lookup (with fallback), Email Header Analyzer, Link Typosquatting Checker, and Phishing text detector.  
  * **Phase 3 (Depth & Gamification):** Deploy Red/Blue Team toggle, Password Lab with zxcvbn, Fix-It Quests, and PDF report generator.  
  * **Phase 4 (DevSecOps Hardening & CI):** Integrate `bandit`, `pip-audit`, rate limiting, STRIDE threat model, and GitHub Actions CI.
* **Rollback Triggers:**  
  * Any unhandled crash in header parsing on malformed emails.  
  * External API downtime causing UI hanging (must revert immediately to offline fallback mode).  
  * Rate-limiting false positives blocking legitimate demo usage.
* **Rollback Method:**  
  * Deterministic fallback switches in code (feature flag `USE_MOCK_THREAT_FEEDS = True`); Git tag-based hotfix deployment.

---

## 11. Open Questions

| Question | Owner | Status | Due Date |
| :--- | :--- | :--- | :--- |
| What are the exact rate limits for free tier XposedOrNot / Pwned Passwords APIs during live demos? | Engineering | Open | Day 1 |
| Should PDF generation be performed client-side (e.g. via html2pdf / jsPDF) or server-side (WeasyPrint/ReportLab)? | Engineering | Open (Recommend client-side for zero-PII transmission) | Day 2 |
| Do we support user-uploaded `.eml` files or only raw text paste in the Email Header Analyzer? | Product | Resolved (Support raw text paste first, optional drag-and-drop .eml) | Day 3 |

---

## 12. Approval Sign-Off

| Role | Name | Status | Date |
| :--- | :--- | :--- | :--- |
| **Product / Security Lead** | CyberTwin Max Lead | Approved | 2026-10-19 |
| **Engineering Lead** | Full-Stack Security Dev | Approved | 2026-10-19 |
| **Academic / Competition Advisor** | Project Mentor | Approved | 2026-10-19 |



