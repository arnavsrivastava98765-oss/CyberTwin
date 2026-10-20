# CyberTwin Max ✨

> **"Most tools tell you you're at risk. CyberTwin shows you the hack, then helps you stop it."**

[![Deploy CyberTwin to GitHub Pages](https://github.com/arnavsrivastava98765-oss/CyberTwin/actions/workflows/pages.yml/badge.svg)](https://github.com/arnavsrivastava98765-oss/CyberTwin/actions/workflows/pages.yml)
[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20GitHub%20Pages-brightgreen?style=flat&logo=github)](https://arnavsrivastava98765-oss.github.io/CyberTwin/)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**CyberTwin Max** is an interactive, defensive-and-offensive cybersecurity digital twin platform. It dynamically models how real-world adversaries chain exposed breach intelligence and human phishing vulnerabilities into full account takeover, maps each step directly to the industry-standard **MITRE ATT&CK** framework, and visually demonstrates how specific defensive layers (Defense-in-Depth) sever the attack chain.

---

## 🌐 Live Application

- **Live URL**: [https://arnavsrivastava98765-oss.github.io/CyberTwin/](https://arnavsrivastava98765-oss.github.io/CyberTwin/)
- **Repository**: [https://github.com/arnavsrivastava98765-oss/CyberTwin](https://github.com/arnavsrivastava98765-oss/CyberTwin)

---

## ✨ Key Features

### 1. ⚡ Live Identity Threat Scanner
- Input **any email address** or account ID to simulate and model identity breach exposures in real time with **zero PII retention**.
- 1-Click **Judge Mode Demo** (`Alex Chen` preset) preconfigured for lightning-fast hackathon and competition evaluations.

### 2. 🛡️ MITRE ATT&CK Chained Attack Graph
- Multi-hop interactive visual attack path showing adversary progression:
  - Initial Compromise & Phishing (`T1566`)
  - Valid Accounts & Leaked Password Chains (`T1078`, `T1110.004`)
  - Session Hijacking & Privilege Escalation (`T1539`)
- Real-time defense toggles: See the attack link shatter when MFA, passkeys, or DMARC are deployed.

### 3. 🔴 Red Team vs 🔵 Blue Team Dual Mode
- Switch between attacker telemetry terminal (live exploit scripts, credential spraying logs) and defensive SOC alerts (telemetry signals, mitigation playbooks).

### 4. 🔬 Deep-Dive Forensics & Defensive Labs
- **Email Header Analyzer**: Parse SPF, DKIM, and DMARC authentication verdicts.
- **Typosquatting & Lookalike Link Scanner**: Levenshtein distance calculations against target domains.
- **Password Strength & Crack Simulator**: Shannon entropy and brute-force time estimates.

### 5. ☁️ Dazy — Minimal Cute Cyber Companion
- A calm, minimalist, cute floating companion who guides you across CyberTwin.
- **Interactive**: Drag Dazy anywhere on your screen, click for sweet affectionate reactions (`💖 Pet Me`), or ask for contextual security tips (`💡 Guide Tip`).
- **Peaceful & Non-Intrusive**: Clean pastel design with soft kawaii eyes, natural blinking, and subtle float physics.

### 6. 🏆 Deterministic Risk Posture & Gamified Quests
- Transparent mathematical scoring formula (0–100) based on weighted breach severity, credential exposure, and active mitigations.
- Complete security quests to level up your digital twin from high risk to hardened posture.

---

## 🚀 Running Locally

CyberTwin runs purely client-side with no complex dependencies required:

```bash
# Clone the repository
git clone https://github.com/arnavsrivastava98765-oss/CyberTwin.git

# Enter the directory
cd CyberTwin

# Start any local HTTP server (e.g. Python)
python -m http.server 8000
```

Open your browser at:
`http://localhost:8000/`

---

## 🛠️ Architecture & Tech Stack

- **Frontend**: Vanilla HTML5, Modern CSS3 with custom properties and glassmorphism, Modular Vanilla JavaScript (ES6+).
- **Sound Engine**: Web Audio API Procedural Synthesizer (pure synthesis, zero external sound files).
- **Graphics**: Lightweight Vector SVGs with CSS keyframe animation and GPU-accelerated transforms.
- **CI/CD**: GitHub Actions auto-deployment to GitHub Pages on push to `main`.
- **Privacy & Zero-Trust**: Pure client-side simulation. No user passwords or private queries are logged or transmitted.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
