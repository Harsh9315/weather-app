# 🌤️ Live Weather Application

A clean, responsive, and minimalist web application built to fetch and display real-time weather data. This project features a custom-engineered **sliding ON/OFF toggle switch** to instantly convert temperature readings between Celsius and Fahrenheit dynamically without reloading the page.

---

## 🚀 Key Features

* **Live Data Fetching:** Integrates with the OpenWeatherMap API to retrieve current city weather data (Temperature, Humidity, and Wind Speed).
* **Custom Dynamic Toggle Switch:** Replacing standard buttons with a modern, smooth sliding switch ($^\circ\text{C} \leftrightarrow ^\circ\text{F}$) for enhanced user experience.
* **Accurate State Management:** Preserves the core API metric values to ensure zero mathematical rounding errors during repetitive unit switches.
* **Input Validation:** Prevents application crashes with safe error boundaries and select-city checks.

---

## 🛠️ Tech Stack

* **Frontend Structure:** HTML5
* **Styling & Components:** CSS3 (Custom slider mechanics)
* **Application Logic:** JavaScript (ES6+, Async/Await, Fetch API)
* **Data Source:** OpenWeatherMap API

---

## 📂 Project Directory

```text
├── index.html       # DOM Structure and drop-down selectors
├── styles.css       # Layout designs, responsive styling, and toggle transitions
└── script.js        # API handling, data binding, and conversion algorithms
