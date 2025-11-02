# SkillSwap – A Local Skill Exchange Platform 🤝

### 🔗 Live Demo: https://skill-swap-d0afd.web.app

---

## 🎯 Project Purpose

**SkillSwap** is an interactive, modern **Single-Page Application (SPA)** designed to facilitate the exchange of skills within a local community. It connects individuals who want to offer their expertise (e.g., guitar lessons, coding help, language exchange) with those looking to learn. The platform emphasizes a **minimalist, approach-focused design** to ensure a seamless and clear user experience.

---

## ✨ Key Features

This platform is built around core functionalities to ensure a robust and user-friendly skill exchange environment:

### 1. Skill & Listing Management
* **Skill Listings:** Displays a minimum of 6 skills fetched from a local JSON dataset.
* **Skill Details (Protected Route):** A detailed view of a specific skill, accessible only after **successful login**. Users are redirected to the login page if not authenticated, and then back to this page upon login.
* **Session Booking:** Includes a simple booking form on the detail page; upon submission, a **success toast** notification (`react-hot-toast`) is displayed.

### 2. Secure Authentication
* **Comprehensive Auth:** Dedicated Login and Sign-up pages integrated with **Firebase Authentication**.
* **Social Login:** Quick login option using **Google**.
* **Robust Password Validation:** Sign-up requires a password of at least 6 characters, including one **uppercase** and one **lowercase** letter.
* **Password Toggle:** An eye icon is implemented on password fields for visibility control.
* **Functional Forgot Password:** Feature allows users to reset passwords via an email link.

### 3. User Experience & Design
* **Fully Responsive:** Optimized layout for **mobile, tablet, and desktop** screen sizes.
* **Unique Modern Design:** Clean, minimalist UI focused on clarity and approachability.
* **Subtle Animations:** Enhanced experience using **AOS (Animate On Scroll)** for scroll animations and **Swiper.js** for the Hero slider. **Animate.css** is also used for additional visual effects.
* **SPA Integrity:** Routes are correctly configured to prevent errors upon **direct URL access or page reload**.
* **Persistent Layout:** Navbar and Footer remain visible across all main routes.

### 4. User Profile
* **My Profile Page:** Displays the user's name, email, and profile picture.
* **Profile Update (Challenge):** A functional button allows users to **update their name and photo URL** using Firebase's `updateProfile()` method.

### 5. Deployment & Security
* **Environment Variables:** Sensitive Firebase configuration keys are stored securely using `.env` files.

---

## 🛠️ Technologies & Packages Used

| Category | Technology/Package | Purpose |
| :--- | :--- | :--- |
| **Core Technology** | **React JS** | Primary library for building the client-side user interface and logic. |
| **Styling** | Tailwind CSS / DaisyUI | Utility-first CSS framework for rapid development and responsive design. |
| **Authentication** | Firebase (Auth) | User authentication and state management. |
| **Animations** | **AOS (Animate On Scroll)** | Scroll-triggered visual effects and animations. |
| **Animations** | **Animate.css** | Adding pre-built, effective CSS animations. |
| **Slider/Carousel** | **Swiper.js** | Used for creating the dynamic Hero section slider. |
| **Notifications** | **react-hot-toast** | Displaying success/error messages and alerts. |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* npm (or yarn/pnpm)
* Node.js (Required to run the project)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [Your GitHub Repo Link]
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd skillswap-platform
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Set up Environment Variables:**
    Create a file named **`.env.local`** (or `.env`) in the root directory and add your Firebase configuration:

    ```bash
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    # ... other Firebase config variables
    ```
5.  **Run the application:**
    ```bash
    npm run dev
    ```

The application will start on `http://localhost:5173` (or the port specified in your console).