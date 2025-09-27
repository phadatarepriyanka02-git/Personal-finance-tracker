# Personal Finance Tracker

## Project Overview
The **Personal Finance Tracker** is a web application that allows users to manage their income and expenses, track balances, and view analytics. It is built using **Angular 16** for the frontend and uses **JSON Server** as a mock backend.

---

## Features
- **User Authentication**
  - Login and Registration
  - JWT-based authentication (dummy token for testing)
  - **Trial login credentials**:
    - Username: `priyanka@gmail.com`
    - Password: `hashed123`
- **Dashboard**
  - Summary of total income, expenses, and balance
  - Recent transactions list
  - Line chart showing monthly income vs expense
- **Transactions**
  - Add, edit, delete transactions
  - Categories: Income / Expense
  - Fields: Amount, Date, Description
- **Code Quality**
  - Modular architecture
  - Separation of concerns (services, models, components)
  - Use of Reactive Forms and TypeScript interfaces
- **Design**
  - Bootstrap-based responsive UI (basic layout, can be improved)

---

## Prerequisites
- Node.js >= 20
- Angular CLI >= 16
- JSON Server (for mock backend)

---

## Setup Instructions

### 1. Clone Repository

git clone <your-repo-link>
cd personal-finance-tracker
2. Install Dependencies
bash
Copy code
npm install
3. Start JSON Server

npx json-server --watch db.json --port 3000
4. Start Angular App

ng serve
The app will run at http://localhost:4200

### Usage
Use the trial credentials or register a new user.

Login to access the dashboard.

Add transactions using the Add Transaction modal form.

View analytics charts on the dashboard.

Edit or delete existing transactions.

### Technologies Used
Angular 16 (Frontend)

TypeScript

Bootstrap 5

ng-apexcharts (Charts)

JSON Server (Mock backend)

### Notes
--- JWT token is dummy for testing purposes.

Design is functional but minimal due to time constraints.

## Future improvements could include:

Enhanced UI/UX

Persistent backend (Node.js / Express / MongoDB)

User-specific analytics
