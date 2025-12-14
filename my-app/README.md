# HeroApp Store

## 📝 Description

HeroApp Store is a modern, responsive web application designed to mimic a digital app marketplace. It features a rich interface for browsing, searching, and installing mobile applications. The project demonstrates advanced frontend concepts including global state management (Context API), client-side routing, **responsive design with standard CSS**, data visualization with Recharts, and persistence using Local Storage for tracking installed applications.

## ✨ Technologies Used

* **Frontend Framework:** React (Vite)
* **Styling:** **Pure CSS (External `app.css`)**
* **Routing:** React Router DOM
* **State Management:** React Context API & Local Storage (for persistence)
* **Data Visualization:** Recharts (for the App Review Chart)
* **Notifications:** `react-hot-toast`
* **Icons:** React Icons

## 🚀 Basic Requirements Checklist

- [x] **Application Responsive for All Devices:** Achieved using standard CSS media queries and flexbox/grid layouts.
- [ ] **Minimum 5 Commits to GitHub Repository:** (To be completed by the developer).
- [x] **Meaningful Application Name:** HeroApp Store
- [x] **Production Application is Error-Free:** Code is structured to handle data correctly and routes robustly.
- [x] **README.md:** Complete with App Name, Description, and Technologies.

## 🛠️ Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone YOUR_REPOSITORY_URL
    cd hero-app-store
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:5173` (or a similar address provided by Vite).

## 💡 Main Features Implemented

1.  **Layout:** Custom Header with active route indication and a custom, responsive Footer.
2.  **Data Design:** A structured JSON array of 15 app objects is used for the entire application data.
3.  **Home Page:** Features a prominent Banner, a Stats Section, and a Top Apps display with navigation to the All Apps page.
4.  **All Apps Page:**
    * **Live Search:** Case-insensitive search filtering by app title.
    * **Sorting:** Dropdown to sort apps by Downloads (High-Low/Low-High).
5.  **App Details Page:**
    * **Install Button:** Dynamic button state ('Install' / 'Installed').
    * **App Review Chart:** Responsive Bar Chart implemented using Recharts to visualize review star counts.
6.  **Error Page:** Custom `NotFoundPage` for handling invalid routes (`*`).

## 🏆 Challenge Requirements Implemented

1.  **Local Storage Feature (App Installation):**
    * The `installApp` function saves the app ID to the browser's `localStorage`.
    * The App Details page checks `localStorage` to show a disabled **"Installed"** button if the app is already saved.
    * A **Success Toast** is shown upon installation.
2.  **My Installation Page:**
    * A dedicated page displays all apps saved in `localStorage`.
    * An **"Uninstall"** button is present on each installed app card.
    * The `uninstallApp` function removes the app ID from `localStorage` and the UI, showing a relevant **Toast message**.
3.  **Loading Animation:**
    * A simulated loading spinner is displayed during **page navigation** (`RouteWrapper` in `App.jsx`).
    * The spinner is also triggered during **search and sort operations** on the All Apps page.
4.  **Route Reload Handling:** The use of `BrowserRouter` and relative paths ensures that reloading any route after deployment does not cause a routing error.# App_store
