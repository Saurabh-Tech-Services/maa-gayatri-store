<div align="center">

# 🛒 Maa Gayatri General Store — Next-Gen Full-Stack E-Commerce Platform

<p align="center">
  <strong>An intelligent, scalable, and high-performance MERN & Python ML powered e-commerce ecosystem.</strong>
</p>

[![Live Demo](https://img.shields.io/badge/Live_Demo-maagayatristore.vercel.app-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://maagayatristore.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Saurabhtbj1201/Maa Gayatri General Store-E-commerce-Platform)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Build & Deploy](https://img.shields.io/github/actions/workflow/status/Saurabhtbj1201/Maa Gayatri General Store-E-commerce-Platform/master_maagayatristore-ecommerce.yml?branch=master&style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/Saurabhtbj1201/Maa Gayatri General Store-E-commerce-Platform/actions)

<p align="center">
  <a href="#-live-demo--quick-links">Live Demo</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-system-architecture">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-customer-support--legal">Support & Legal</a> •
  <a href="#-developer">Developer</a>
</p>

---

</div>

## 🌐 Live Demo & Quick Links

- 🚀 **Production Application:** [https://maagayatristore.vercel.app/](https://maagayatristore.vercel.app/)
- 💻 **Source Code Repository:** [https://github.com/Saurabhtbj1201/Maa Gayatri General Store-E-commerce-Platform](https://github.com/Saurabhtbj1201/Maa Gayatri General Store-E-commerce-Platform)
- 🏢 **About Us:** [About Maa Gayatri General Store](https://maagayatristore.vercel.app/about)
- 📬 **Contact Us:** [Get in Touch](https://maagayatristore.vercel.app/contact)
- 📧 **Direct Inquiries:** [maagayatristore@gmail.com](mailto:maagayatristore@gmail.com)

---

## 📖 About Maa Gayatri General Store

**Maa Gayatri General Store** is an enterprise-grade, full-stack digital commerce platform engineered to offer lightning-fast browsing, intelligent product discovery, and friction-free checkout for shoppers, coupled with an all-inclusive administration control center for store managers.

Built upon modern cloud architectures and microservices, Maa Gayatri General Store integrates a **React 18** client, a resilient **Node.js/Express** RESTful API, a **Python-powered Machine Learning recommendation service**, and cloud object storage on **Amazon Web Services (AWS S3)**.

---

## ✨ Key Features

### 🛍️ Customer Experience
- 🔐 **Dual Authentication:** Secure password authentication with [JWT](https://jwt.io/) and single-click social login via [Google OAuth 2.0](https://developers.google.com/identity).
- 🔍 **Intelligent Search & Filtering:** Dynamic real-time search, price range filtering, brand criteria, category facets, and sorting algorithms.
- 📦 **Dynamic Product Catalog:** Multi-image carousels, specification breakdowns, real-time inventory tracking, and discount badges.
- 🛒 **Interactive Shopping Cart:** Persistent shopping cart, quantity controls, coupon code validation, and shipping fee calculation.
- 💳 **Seamless Checkout Flow:** Multi-step guided checkout with address management and payment integrations.
- 👤 **Account & Orders Portal:** Customer profile administration, order history with tracking statuses, and personal details management.
- 🤖 **Smart Product Recommendations:** Content-based and collaborative machine learning recommendations tailored to user interest.
- 📱 **Mobile-First Responsive Design:** Fluid layouts optimized across smartphones, tablets, and ultrawide monitors.

### 🛡️ Admin & Store Management
- 📊 **Executive Analytics Dashboard:** Visual revenue metrics, order velocity, inventory health, and customer growth powered by [Chart.js](https://www.chartjs.org/).
- 🏷️ **Product Lifecycle Management:** Full CRUD engine with rich-text descriptions via [React Quill](https://github.com/zenoamaro/react-quill), image cropping via [React Image Crop](https://github.com/DominicTobias/react-image-crop), and batch uploads via CSV.
- 📂 **Multi-Level Category Hierarchy:** Hierarchical main and sub-category management with dedicated cloud image assets.
- 📑 **Order Fulfillment Pipeline:** Live tracking, status transitions (Pending, Processing, Shipped, Delivered, Cancelled), and customer notifications.
- 👥 **Customer Account Management:** User directory, role-based access control (RBAC), and status verification.
- 🎨 **Hero Banner & Campaign Manager:** Dynamic homepage banner scheduling and promotional announcements.

---

## 🛠️ Tech Stack & Integrations

### Frontend
| Technology | Description | Reference Link |
| :--- | :--- | :--- |
| **React.js (v18)** | Frontend UI Library | [react.dev](https://react.dev/) |
| **Vite** | Next Generation Frontend Tooling & Bundler | [vitejs.dev](https://vitejs.dev/) |
| **React Router v6** | Declarative Client-side Routing | [reactrouter.com](https://reactrouter.com/) |
| **Axios** | Promise-based HTTP Client | [axios-http.com](https://axios-http.com/) |
| **Chart.js** & **React-Chartjs-2** | Interactive Analytics & Visualizations | [chartjs.org](https://www.chartjs.org/) |
| **Swiper** | Touch-enabled Hardware Accelerated Slider | [swiperjs.com](https://swiperjs.com/) |
| **React Icons** | Popular Icon Packs for React | [react-icons.github.io](https://react-icons.github.io/react-icons/) |
| **React Toastify** | Elegant Notifications System | [fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/) |
| **React Helmet Async** | Head Document & SEO Management | [github.com/staylor/react-helmet-async](https://github.com/staylor/react-helmet-async) |
| **Vercel** | Edge Hosting & Continuous Deployment | [vercel.com](https://vercel.com/) |

### Backend & Cloud Services
| Technology | Description | Reference Link |
| :--- | :--- | :--- |
| **Node.js** | JavaScript Server Runtime Engine | [nodejs.org](https://nodejs.org/) |
| **Express.js** | Fast, Unopinionated Web Framework | [expressjs.com](https://expressjs.com/) |
| **MongoDB** | Distributed NoSQL Document Database | [mongodb.com](https://www.mongodb.com/) |
| **Mongoose** | Elegant MongoDB Object Modeling for Node.js | [mongoosejs.com](https://mongoosejs.com/) |
| **JSON Web Tokens (JWT)** | Stateless Industry Standard Authentication | [jwt.io](https://jwt.io/) |
| **Google Cloud Identity** | OAuth 2.0 Social Sign-In | [developers.google.com/identity](https://developers.google.com/identity) |
| **Amazon Web Services (AWS S3)** | Highly Scalable Cloud Object Storage | [aws.amazon.com/s3](https://aws.amazon.com/s3/) |
| **Multer & Multer-S3** | Multi-part Form Data & Direct Cloud Uploads | [github.com/expressjs/multer](https://github.com/expressjs/multer) |
| **Nodemailer** | Secure SMTP Email Delivery Engine | [nodemailer.com](https://nodemailer.com/) |
| **Microsoft Azure App Service** | Enterprise Cloud Application Hosting & CI/CD | [azure.microsoft.com](https://azure.microsoft.com/en-us/products/app-service/) |

### Machine Learning & Intelligence Service
| Technology | Description | Reference Link |
| :--- | :--- | :--- |
| **Python 3** | High-level ML & Scripting Language | [python.org](https://www.python.org/) |
| **Flask** | Micro Web Framework for ML Endpoints | [flask.palletsprojects.com](https://flask.palletsprojects.com/) |
| **Scikit-Learn** | Machine Learning Modeling & Cosine Similarity | [scikit-learn.org](https://scikit-learn.org/) |
| **Pandas** & **NumPy** | High-Performance Data Analysis & Manipulation | [pandas.pydata.org](https://pandas.pydata.org/) |
| **PyMongo** | Python Driver for MongoDB Collections | [pymongo.readthedocs.io](https://pymongo.readthedocs.io/) |

---

## 🏛️ System Architecture

```text
                     ┌────────────────────────────────────────┐
                     │          Client Browser / App          │
                     │    https://maagayatristore.vercel.app/     │
                     └───────────────────┬────────────────────┘
                                         │
                                         ▼ HTTPS / REST
                     ┌────────────────────────────────────────┐
                     │          Node.js Express API           │
                     │         (Azure Web App Service)        │
                     └───────┬───────────┬────────────┬───────┘
                             │           │            │
       ┌─────────────────────┘           │            └──────────────────────┐
       ▼                                 ▼                                   ▼
┌──────────────┐              ┌─────────────────────┐              ┌───────────────────┐
│ MongoDB      │              │ Amazon AWS S3       │              │                    │
│ Atlas Cloud  │              │ Asset Bucket        │              │ Recommendation API│
│ (Products/   │              │ (Product Images &   │              │ (Cosine Similarity│
│  Users/Orders)              │  Category Media)    │              │  & Hybrid Models) │
└──────────────┘              └─────────────────────┘              └───────────────────┘
```

---

## 📂 Project Directory Structure

```plaintext
Maa Gayatri General Store-E-commerce-Platform/
├── .github/
│   └── workflows/
│       └── master_maagayatristore-ecommerce.yml   # Azure CI/CD deployment pipeline
├── backend/
│   ├── config/                               # Database & S3 configuration
│   ├── controllers/                          # Express request & business logic
│   ├── middleware/                           # JWT auth & error handling middlewares
│   ├── models/                               # Mongoose Schemas (User, Product, Order, etc.)
│   ├── routes/                               # Express modular API routes
│   ├── .env.example                          # Environment template for backend
│   ├── package.json                          # Backend dependencies & scripts
│   └── server.js                             # API gateway entry point
├── frontend/
│   ├── public/                               # Favicon, assets, and branding
│   ├── src/
│   │   ├── components/                       # Modular UI components (Navbar, Cart, Cards)
│   │   ├── layouts/                          # Root, Admin, and User dashboard layouts
│   │   ├── pages/                            # Routed pages (Home, Shop, ProductDetails, Checkout)
│   │   ├── App.jsx                           # Primary router & context providers
│   │   └── main.jsx                          # React DOM initialization
│   ├── package.json                          # Frontend dependencies & scripts
│   └── vite.config.js                        # Vite bundler configuration
│   ├── app.py                                # Flask recommendation server
│   ├── requirements.txt                      # Python ML dependencies
│   └── .env                                  # ML microservice configuration
├── CODE_OF_CONDUCT.md                        # Contributor guidelines
├── CONTRIBUTING.md                           # Guide for submitting code
├── SECURITY.md                               # Vulnerability reporting policy
├── LICENSE                                   # MIT open-source license
└── README.md                                 # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to set up the entire Maa Gayatri General Store platform locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or v20.x+)
- [Git](https://git-scm.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account or a local MongoDB database instance
- [Amazon Web Services (AWS)](https://aws.amazon.com/) account with an active S3 bucket
- [Python](https://www.python.org/) 3.9+ (Optional: only needed for the ML recommendation service)

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/Saurabhtbj1201/Maa Gayatri General Store-E-commerce-Platform.git
cd Maa Gayatri General Store-E-commerce-Platform
```

---

### Step 2: Backend Configuration & Launch

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` configuration file:
   ```bash
   cp .env.example .env
   ```

4. Populate your `.env` file with appropriate credentials:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/maagayatristore?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key_here
   
   # AWS S3 Storage
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_BUCKET_NAME=your_s3_bucket_name
   AWS_REGION=us-east-1

   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   
   # Email Service (Nodemailer)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ```

5. Launch the backend server:
   ```bash
   npm run dev
   ```
   *The backend will be running at [http://localhost:5000](http://localhost:5000).*

---

### Step 3: Frontend Setup & Launch

1. In a new terminal window, navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install client dependencies:
   ```bash
   npm install
   ```

3. Configure frontend environment variables:
   Create a `.env` file in the `frontend` folder:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
   ```

4. Launch the Vite development server:
   ```bash
   npm run dev
   ```
   *The client application will open at [http://localhost:5173](http://localhost:5173).*

---

## 🤝 Community & Contributing

Contributions are the cornerstone of the open-source community. Any contribution you make is **greatly appreciated**!

- 📜 Read our [Code of Conduct](CODE_OF_CONDUCT.md)
- 💡 Check our [Contributing Guidelines](CONTRIBUTING.md) to submit Pull Requests
- 🔒 Review our [Security Policy](SECURITY.md) to report vulnerabilities

---

## 📞 Customer Support & Legal

| Category | Helpful Links |
| :--- | :--- |
| **🏢 Company Information** | • [About Us](https://maagayatristore.vercel.app/about)<br>• [Contact Us](https://maagayatristore.vercel.app/contact) |
| **🎧 Customer Support** | • [Help Center & FAQs](https://maagayatristore.vercel.app/faq)<br>• [Return & Refund Policy](https://maagayatristore.vercel.app/return-policy)<br>• [Order Cancellation Policy](https://maagayatristore.vercel.app/cancellation-policy) |
| **⚖️ Legal & Compliance** | • [Terms & Conditions](https://maagayatristore.vercel.app/terms)<br>• [Privacy Policy](https://maagayatristore.vercel.app/privacy)<br>• [Cookie Policy](https://maagayatristore.vercel.app/cookie-policy) |
| **✉️ Direct Support Contact** | • Email: **[maagayatristore@gmail.com](mailto:maagayatristore@gmail.com)** |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for complete details.

---

## 👨💻 Developer
<div align="center">

### © Made with ❤️ by Saurabh Kumar. All Rights Reserved 2026

<a href="https://github.com/Saurabhtbj1201">
  <img src="https://www.gu-saurabh.tech/portfolio.png" width="500" alt="Saurabh Profile"/>
</a>

### [Saurabh Kumar](https://github.com/Saurabhtbj1201)

<a href="https://github.com/Saurabhtbj1201">
  <img src="https://img.shields.io/github/followers/Saurabhtbj1201?label=Follow&style=social" alt="GitHub Follow"/>
</a>

### 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saurabhtbj1201)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/saurabhtbj1201)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/saurabhtbj1201)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/saurabh.tbj)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://gu-saurabh.site)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/9798024301)

---

<p align="center">
  <strong>Made with ❤️ by <a href="https://github.com/Saurabhtbj1201">Saurabh Kumar</a></strong>
  <br>
  ⭐ Star this repo on <a href="https://github.com/Saurabhtbj1201/Maa Gayatri General Store-E-commerce-Platform">GitHub</a> if you find it helpful!
</p>

[![Repo Views](https://komarev.com/ghpvc/?username=Saurabhtbj1201&style=flat-square&color=red)](https://github.com/Saurabhtbj1201/Maa Gayatri General Store-E-commerce-Platform)

</div>
