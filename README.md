# 🏪 Vaultmart

> **Secure. Scalable. Seamless Shopping.**

Vaultmart is a full-featured E-Commerce Web Application built with **ASP.NET, C#, Entity Framework, and SQL Server**, following a clean and scalable **MVC / N-Tier architecture**. From browsing products to completing checkout, Vaultmart delivers a structured, production-minded shopping experience backed by robust REST APIs and a powerful admin panel.

---

## 📌 Overview

Vaultmart was designed to demonstrate end-to-end implementation of a real-world online shopping system using the .NET ecosystem. It separates UI, business logic, and data access layers for maintainability and scalability — making it an ideal portfolio and resume project showcasing strong **.NET backend development** skills.

Whether you're exploring ASP.NET architecture or looking for a reference implementation of a clean MVC e-commerce app, Vaultmart provides a solid, well-structured foundation.

---

## 🚀 Key Features

### 👤 User Features
- User registration & login with authentication
- Browse and search product catalog
- Add to cart, update cart items
- Place orders with full checkout flow
- REST API-based data communication
- Dummy payment gateway integration
- Responsive, mobile-friendly UI

### 🛠️ Admin Features
- Secure admin login
- Add, update, and delete products
- Manage product listings
- Full CRUD operations on application data

### ⚙️ System & Architecture
- Clean **MVC / N-Tier architecture** with separation of concerns
- **Entity Framework ORM** for database operations
- **REST API** integration for structured data communication
- **SQL Server** database connectivity
- Session-based authentication & route protection
- Scalable, maintainable project structure
- Structured error handling

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **C#** | Core backend language |
| **ASP.NET MVC** | Web framework — routing, controllers, server logic |
| **Entity Framework** | ORM for database operations |
| **SQL Server** | Relational database for users, products, orders |
| **REST API** | Structured client-server communication |
| **HTML5 / CSS3** | Page structure and custom styling |
| **Bootstrap** | Responsive, mobile-first UI components |
| **JavaScript** | Client-side interactivity |
| **Visual Studio** | Primary IDE |

---

## 📂 Project Structure

```
ecom_with_dotnet/
│
├── Controllers/           # Handles request logic & routing
├── Models/                # Business logic and entity definitions
├── Views/                 # Razor UI pages
├── Data/                  # Database context (EF)
├── Services/              # Business service layer
├── API/                   # REST API endpoints
├── wwwroot/               # Static assets (CSS, JS, images)
├── appsettings.json       # App configuration & connection strings
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Dev-Mufaddal/Vaultmart_dotnet.git
cd Vaultmart_dotnet
```

### 2. Open in Visual Studio

Open the solution file (`.sln`) using **Visual Studio 2019 or later**.

### 3. Configure the Database

Update the connection string in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=.;Database=VaultmartDB;Trusted_Connection=True;"
}
```

### 4. Apply Migrations

In the **Package Manager Console**, run:

```bash
Update-Database
```

### 5. Run the Application

Press **F5** or run via IIS Express / Kestrel from Visual Studio.

Visit `http://localhost:{port}` in your browser.

---

## 🌐 Application Routes

| Route | Description | Access |
|---|---|---|
| `/` | Home / product listing | Public |
| `/Account/Register` | User registration | Public |
| `/Account/Login` | User login | Public |
| `/Products` | Browse product catalog | Authenticated |
| `/Cart` | View and manage cart | Authenticated |
| `/Orders` | Place and view orders | Authenticated |
| `/Account/Logout` | End session | Authenticated |
| `/Admin` | Admin control panel | Admin only |
| `/Admin/Products` | Manage products | Admin only |

---

## 🔒 Security Practices

- **Session Authentication** — Route protection for authenticated and admin-only pages
- **Entity Framework Parameterization** — ORM queries prevent SQL injection by default
- **Input Validation** — Both client-side (JS) and server-side (C#) validation
- **Separation of Concerns** — Business logic isolated from UI and data layers
- **Clean Architecture** — Repository pattern keeps data access maintainable and testable

---

## 🎯 Skills Demonstrated

This project demonstrates practical understanding of:

- ASP.NET MVC application architecture and routing
- Entity Framework ORM and database-first / code-first workflows
- REST API design and integration
- SQL Server database integration with C#
- Session handling and authentication patterns
- Responsive frontend development with Bootstrap
- N-Tier architecture and clean code principles
- GitHub version control workflow

---

## 📈 Roadmap & Future Improvements

- [ ] JWT-based API authentication
- [ ] Microservices architecture
- [ ] Cloud deployment (Azure / AWS)
- [ ] Docker containerization
- [ ] Advanced caching with Redis
- [ ] Product search and filtering enhancements
- [ ] Real payment gateway integration
- [ ] Inventory management in admin panel

---

## 👨‍💻 Author

**Mufaddal Kanchwala**
GitHub: [@Dev-Mufaddal](https://github.com/Dev-Mufaddal)
Email: mufaddalabbaskanchwala99@gmail.com

---

## 📜 License

This project is created for educational and portfolio purposes.

---

⭐ If you found this project useful or interesting, consider starring the repository!
