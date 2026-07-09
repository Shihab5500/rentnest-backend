# RentNest - Rental House Management System (Backend)

RentNest is a comprehensive backend API for a Rental House Management System. It facilitates interactions between Admins, Landlords, and Tenants, allowing property listings, rental requests, and secure payment processing.

## 🌐 Live URL
**Live API Link:** [Insert Your Vercel Live Link Here]

## 🛠️ Technology Stack
*   **Backend Framework:** Node.js, Express.js
*   **Language:** TypeScript
*   **Database ORM:** Prisma
*   **Database:** PostgreSQL
*   **Authentication:** JSON Web Token (JWT)
*   **Payment Gateway:** Stripe
*   **Validation:** Zod

## ✨ Key Features
*   **Role-Based Access Control:** Secure routes for `ADMIN`, `LANDLORD`, and `TENANT`.
*   **User Authentication:** Secure login and registration system with JWT.
*   **Property Management:** Landlords can add and manage property listings with specific categories.
*   **Rental Requests:** Tenants can send rental requests for properties, and Landlords can approve or reject them.
*   **Payment Integration:** Secure payment processing using Stripe for approved rental requests.
*   **Admin Dashboard:** Admins can manage users (Active/Ban).
*   **Data Validation:** Request body validation using Zod schemas.
*   **Error Handling:** Global error handling mechanism for consistent API responses.

## 🚀 Getting Started (Local Setup)

Follow these steps to run the project locally on your machine.

### Prerequisites
*   Node.js installed
*   PostgreSQL database set up

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone <your-github-repo-link>
    cd rentnest-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/YOUR_DB_NAME"
    PORT=5000
    JWT_SECRET="your_super_secret_jwt_key"
    STRIPE_SECRET_KEY="your_stripe_secret_key"
    ```

4.  **Run Prisma Migrations:**
    ```bash
    npx prisma migrate dev
    ```

5.  **Start the Server:**
    ```bash
    npm run dev
    ```
    The server will start running on `http://localhost:5000`.

## 📚 API Endpoints Overview

*   **Auth:** `/api/auth/register`, `/api/auth/login`
*   **Properties:** `/api/properties`, `/api/landlord/properties`
*   **Categories:** `/api/categories`
*   **Rental Requests:** `/api/rentals`, `/api/landlord/requests/:id`
*   **Payments:** `/api/payments/create-payment-intent`
*   **Admin:** `/api/admin/users`, `/api/admin/users/:id`

---
*Developed for Assignment 4 Submission.*