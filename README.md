# 🎓 B.Tech Attendance & CGPA Calculator

A responsive **Progressive Web App (PWA)** built specifically for B.Tech students to track their 75% attendance requirement and predict the SGPA needed in upcoming semesters to hit their target CGPA.

🔗 **Live Demo & Installable App:** [https://github.io](https://github.io)

---

## ✨ Key Features
- **75% Attendance Bunk & Recovery Calculator:** Instantly calculates how many classes you can safely skip while staying above 75% (or any custom threshold), or how many consecutive classes you need to attend to recover from a shortage.
- **Credit-Weighted CGPA Predictor:** Supports up to 8 semesters with individual SGPA and credit weightings, accurately predicting the average SGPA required across remaining credits.
- **Installable Progressive Web App (PWA):** Configured with a Web App Manifest and Service Worker caching so students can install it on Android, iOS, or Windows and use it offline.
- **Edge-Case Validation:** Prevents invalid inputs (attended > total classes, division by zero) and flags mathematically unreachable targets (> 10.0 required SGPA).

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Grid & Flexbox), Vanilla JavaScript (ES6+)
- **PWA & Offline Support:** Web App Manifest (`manifest.json`), Service Workers (`sw.js`)
- **Version Control & Hosting:** Git, GitHub, GitHub Pages

---

## 📐 Core Mathematical Logic
- **Classes You Can Safely Skip ($\ge 75\%$):**
  $$\text{Skippable Classes} = \left\lfloor \frac{\text{Attended} - 0.75 \times \text{Total}}{0.75} \right\rfloor$$
- **Consecutive Classes Needed to Recover ($< 75\%$):**
  $$\text{Classes Needed} = \left\lceil \frac{0.75 \times \text{Total} - \text{Attended}}{0.25} \right\rceil$$
- **Required SGPA for Target CGPA:**
  $$\text{Required SGPA} = \frac{(\text{Target CGPA} \times \text{Total Degree Credits}) - \text{Earned Grade Points}}{\text{Remaining Credits}}$$

---

## 🚀 How to Install as an App
1. Open the [Live Demo](https://github.io) in Chrome, Edge, or Safari.
2. Click **Install App** in the browser address bar (or **Add to Home Screen** on mobile) to launch it in a standalone window.


