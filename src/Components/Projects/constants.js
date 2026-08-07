import novahireHiringDashboard from "../../assets/projects/novahire/hiring-dashboard.jpg";
import novahireApplicantKanban from "../../assets/projects/novahire/applicant-kanban.jpg";
import novahireCandidateDashboard from "../../assets/projects/novahire/candidate-dashboard.jpg";
import novahireHiringAnalytics from "../../assets/projects/novahire/hiring-analytics.jpg";
import novahireMessaging from "../../assets/projects/novahire/messaging.jpg";

import novaflowPlatformDashboard from "../../assets/projects/novaflow/platform-dashboard.jpg";
import novaflowOrgDashboard from "../../assets/projects/novaflow/org-dashboard.jpg";
import novaflowInventoryCatalogue from "../../assets/projects/novaflow/inventory-catalogue.jpg";
import novaflowAssetApproval from "../../assets/projects/novaflow/asset-approval.jpg";
import novaflowComplaintTracking from "../../assets/projects/novaflow/complaint-tracking.jpg";

import novacartStorefrontHome from "../../assets/projects/novacart/storefront-home.jpg";
import novacartProductDetail from "../../assets/projects/novacart/product-detail.jpg";
import novacartMerchantDashboard from "../../assets/projects/novacart/merchant-dashboard.jpg";
import novacartAnalytics from "../../assets/projects/novacart/analytics.jpg";
import novacartOrderManagement from "../../assets/projects/novacart/order-management.jpg";

import novastoreCatalogueHome from "../../assets/projects/novastore/catalogue-home.jpg";
import novastoreCheckoutPayment from "../../assets/projects/novastore/checkout-payment.jpg";
import novastoreWallet from "../../assets/projects/novastore/wallet.jpg";
import novastoreAdminPanel from "../../assets/projects/novastore/admin-panel.jpg";
import novastoreOrderManagement from "../../assets/projects/novastore/order-management.jpg";

const projects = [
  {
    id: "novahire",
    name: "NovaHire",
    tagline: "Recruitment and applicant-tracking platform",
    stack: "React 19 · NestJS · Prisma · PostgreSQL",
    description: [
      "NovaHire is an end-to-end hiring platform serving three distinct audiences from a single codebase. Candidates search a public job board, build a profile, upload a resume and track applications through to interview. Recruiters publish roles and move applicants through a configurable six-stage pipeline on a drag-and-drop board, compare shortlisted candidates side by side, schedule interviews and review hiring analytics. Administrators oversee users, companies, jobs and permissions across the platform.",
      "An integrated AI layer parses and scores resumes, generates job descriptions and cover letters, and produces candidate-to-job match scores. The provider is pluggable (OpenAI, Anthropic or Groq) and the AI module is fully decoupled from the database — controllers load structured data and pass DTOs into the service, keeping the boundary clean and testable. Messaging and notifications are delivered in real time over a Socket.IO gateway.",
    ],
    features: [
      "Public — Landing page, searchable job board, job detail pages, company profiles, light and dark themes.",
      "Candidate — Dashboard, profile builder, resume upload, saved jobs, application tracking, interview calendar, AI resume review, AI cover-letter generation, direct messaging.",
      "Recruiter — Hiring dashboard with pipeline metrics, job creation and publishing, Kanban applicant tracking (Applied → Screening → Interview → Technical → Offer → Hired), side-by-side candidate comparison, interview scheduling, hiring analytics and exportable reports.",
      "Admin — User, company and job management, granular permission management, system settings and platform-wide analytics.",
      "Platform — JWT access and refresh tokens, role-based access control with permission guards, email verification and password reset, real-time notifications, background job queues, Swagger API documentation.",
    ],
    techStack: [
      { label: "Frontend", value: "React 19, TypeScript, Vite, Ant Design v5, Redux Toolkit + RTK Query, React Router, React Hook Form + Zod, Framer Motion, Recharts, Socket.IO client" },
      { label: "Backend", value: "NestJS, TypeScript, feature-based clean architecture with dependency injection" },
      { label: "Database", value: "PostgreSQL with Prisma ORM and versioned migrations" },
      { label: "Auth & security", value: "JWT + refresh tokens, RBAC, permission guards, env validation via class-validator" },
      { label: "Real-time & jobs", value: "Socket.IO gateway (notifications, messaging, typing), BullMQ queues" },
      { label: "AI layer", value: "Pluggable providers — OpenAI, Anthropic, Groq" },
      { label: "Infrastructure", value: "Docker, Railway (API), Vercel (frontend), Winston logging, Swagger, Resend email" },
    ],
    links: {
      liveDemo: "https://nov-hire-fe-psi.vercel.app/",
      frontendRepo: "https://github.com/muaazazhar/NovHire-FE",
      backendRepo: "https://github.com/muaazazhar/NovHire-BE",
    },
    demoNote: "Sign in at the live URL above. Each account opens a different role-based experience.",
    demoAccounts: [
      { role: "Recruiter", email: "recruiter1@novahire.app", password: "Password123!", access: "Recruiter" },
      { role: "Candidate", email: "candidate1@novahire.app", password: "Password123!", access: "Candidate" },
      { role: "Administrator", email: "admin@novahire.app", password: "Admin123!", access: "Admin" },
    ],
    screenshots: [
      { src: novahireHiringDashboard, caption: "Recruiter hiring dashboard — open roles, application volume and pipeline distribution by stage" },
      { src: novahireApplicantKanban, caption: "Applicant tracking — drag-and-drop Kanban board across the six-stage hiring pipeline" },
      { src: novahireCandidateDashboard, caption: "Candidate dashboard — active applications, saved jobs and upcoming interviews" },
      { src: novahireHiringAnalytics, caption: "Hiring analytics — funnel conversion and time-to-hire reporting" },
      { src: novahireMessaging, caption: "Real-time messaging between recruiters and candidates over WebSockets" },
    ],
  },
  {
    id: "novaflow",
    name: "NovaFlow",
    tagline: "Multi-tenant inventory and asset operations platform",
    stack: "React · NestJS · TypeORM · PostgreSQL",
    description: [
      "NovaFlow is a multi-tenant platform for organisations that need to track physical and licensed assets across departments and employees. It operates on two tiers. At the platform tier, super admins onboard tenant organisations, provision their administrators, triage inbound access requests and handle escalated complaints, with analytics on organisation and admin growth. At the tenant tier, each organisation's administrators manage their own departments, employees, vendors and inventory in complete isolation from other tenants.",
      "The asset lifecycle is modelled explicitly: items are catalogued by category and sub-category, assigned to employees, requested through an approval workflow, returned when no longer needed, and escalated via complaints when faulty. Dashboards surface assigned versus unassigned stock by category and complaint resolution trends over time, so operations leads can see where equipment and attention are going.",
    ],
    features: [
      "Super admin — Organisation and administrator management, tenant onboarding via access requests, cross-tenant complaint handling, growth analytics.",
      "Organisation admin — Dashboard covering employees, inventory, vendors and categories; searchable inventory catalogue with category and sub-category filters; employee directory; department structure; vendor management.",
      "Asset lifecycle — Assignment to employees, request and approval workflow, returns handling, complaint tracking with pending and resolved states.",
      "Reporting — Assigned versus unassigned assets by category, complaint resolution trends by month.",
      "Platform — Role-based dashboards and navigation, image uploads, light and dark themes.",
    ],
    techStack: [
      { label: "Frontend", value: "React, TypeScript, Ant Design and MUI with a shared theming provider, Redux, Recharts" },
      { label: "Backend", value: "NestJS, TypeScript, modular service architecture" },
      { label: "Database", value: "PostgreSQL with TypeORM and versioned migrations" },
      { label: "Auth", value: "JWT with role-based authorisation (Super Admin / Organisation Admin) and tenant scoping" },
      { label: "Media", value: "Cloudinary image uploads" },
      { label: "Infrastructure", value: "Railway (API), Vercel (frontend), Swagger documentation, health-check endpoints" },
    ],
    links: {
      liveDemo: "https://nova-flow-fe.vercel.app/",
      frontendRepo: "https://github.com/muaazazhar/NovaFlow-FE",
      backendRepo: "https://github.com/muaazazhar/NovaFlow-BE",
    },
    demoNote: "The super admin account shows the platform tier. The two organisation admin accounts belong to different tenants — signing into each demonstrates data isolation between organisations.",
    demoAccounts: [
      { role: "Super Admin", email: "admin@novaflow.app", password: "NovaFlowAdmin1!", access: "Platform" },
      { role: "Org Admin", email: "maya.chen@northwind-logistics.com", password: "Password123!", access: "Northwind" },
      { role: "Org Admin", email: "owen.blake@cascadefleet.com", password: "Password123!", access: "Cascade Fleet" },
    ],
    screenshots: [
      { src: novaflowPlatformDashboard, caption: "Platform dashboard — organisations, administrators, complaints and access requests with growth analytics" },
      { src: novaflowOrgDashboard, caption: "Organisation dashboard — assigned versus unassigned assets by category and complaint trends" },
      { src: novaflowInventoryCatalogue, caption: "Inventory catalogue with search, category and sub-category filtering" },
      { src: novaflowAssetApproval, caption: "Asset request and approval workflow" },
      { src: novaflowComplaintTracking, caption: "Employee complaint tracking with resolution status" },
    ],
  },
  {
    id: "novacart",
    name: "NovaCart",
    tagline: "E-commerce storefront and admin console",
    stack: "React 19 · NestJS 11 · Prisma · PostgreSQL",
    description: [
      "NovaCart pairs a customer-facing storefront with a complete merchant admin console. Shoppers browse a hundred-product catalogue organised by category, brand and curated collection, open product pages with image galleries, variant selection, stock levels and customer reviews, then move through wishlist, cart and checkout to an order history with delivery status and receipts.",
      "On the merchant side, the admin console reports revenue, order volume, customer counts and low-stock alerts, with analytics covering sales by day, average order value and order status distribution. Administrators manage the product catalogue, fulfil and update orders, manage customers, issue coupons and configure store settings. The storefront also carries an AI shopping assistant that streams responses over server-sent events to find products, answer questions, compare items and suggest cart add-ons.",
    ],
    features: [
      "Storefront — Home with featured products and collections, product listing with filters, product detail with gallery, variants, stock and reviews, category and brand browsing, search, wishlist, cart, checkout, profile, order history with delivery status, notifications, light and dark themes.",
      "Admin console — Dashboard with revenue, orders, customers and low-stock alerts; analytics for sales by day, average order value and order status; product, order, customer and coupon management; store settings.",
      "AI assistant — Streaming shopping assistant for product discovery, comparison, Q&A and cart add-on suggestions.",
      "Platform — JWT with refresh tokens, RBAC and permission guards, Sharp image optimisation pipeline, rate limiting, activity logs, Swagger documentation and a Postman collection.",
    ],
    techStack: [
      { label: "Frontend", value: "React 19, TypeScript, Vite, Ant Design v5, Redux Toolkit + RTK Query, React Hook Form + Zod, Framer Motion, Lucide icons" },
      { label: "Backend", value: "NestJS 11, TypeScript, feature-based modules with global exception filter and response interceptor" },
      { label: "Database", value: "PostgreSQL (Neon compatible) with Prisma 7, migrations and a deterministic seed" },
      { label: "Auth & security", value: "JWT + refresh tokens, Passport, role and permission guards, request throttling" },
      { label: "Media", value: "Multer uploads with Sharp optimisation" },
      { label: "Infrastructure", value: "Docker, Railway / Render (API), Vercel (frontend), Winston logging, Swagger" },
    ],
    links: {
      liveDemo: "https://nova-cart-fe.vercel.app/",
      frontendRepo: "https://github.com/muaazazhar/NovaCart-FE",
      backendRepo: "https://github.com/muaazazhar/NovaCart-BE",
    },
    demoNote: "The customer account has existing orders and reviews already seeded. The administrator account opens the merchant console at /admin.",
    demoAccounts: [
      { role: "Customer", email: "michael.miller7@example.com", password: "Customer@123", access: "Storefront" },
      { role: "Administrator", email: "admin@novacart.com", password: "Admin@123456", access: "Admin console" },
    ],
    screenshots: [
      { src: novacartStorefrontHome, caption: "Storefront home with featured products and curated collections" },
      { src: novacartProductDetail, caption: "Product detail — gallery, variants, stock, reviews and wishlist" },
      { src: novacartMerchantDashboard, caption: "Merchant dashboard — revenue, orders, customers, recent transactions and low-stock alerts" },
      { src: novacartAnalytics, caption: "Analytics — revenue trend, average order value and order status distribution" },
      { src: novacartOrderManagement, caption: "Order management and fulfilment" },
    ],
  },
  {
    id: "novastore",
    name: "NovaStore",
    tagline: "Cross-platform mobile commerce app for iOS and Android",
    stack: "React Native (Expo) · NestJS · TypeORM",
    description: [
      "NovaStore is a React Native retail app that puts the storefront and the back office in the same binary. Customers browse a categorised catalogue with discount pricing, build a cart with quantity controls and live savings totals, and check out using payment methods suited to the local market — cash on delivery, bank transfer with uploaded proof, or Easypaisa and JazzCash mobile wallets — with a delivery address that can be filled from the device's current location. Orders produce receipts, and a wallet plus custom-order request flow covers items not in the standard catalogue.",
      "Store owners sign in to the same app and get an admin panel: product and category management with image attachments, order management showing customer details and status, and store settings controlling payment options, delivery charges and which products are featured. Authentication tokens are held in the device secure store, with email OTP verification and password reset handled over transactional email.",
    ],
    features: [
      "Customer — Categorised catalogue with discount pricing, cart with quantity controls and savings total, checkout with multiple payment methods and current-location delivery address, order history and receipts, wallet, custom-order requests, profile and password management, WhatsApp support shortcut.",
      "Admin — Product management, category management with image attachments, order management with customer detail and status control, store settings for payments, delivery charges and featured products.",
      "Platform — JWT authentication persisted in device secure storage, email OTP verification and password reset, bank-transfer payment proof upload, light and dark themes, file-based routing with native gestures and animations.",
    ],
    techStack: [
      { label: "Mobile app", value: "React Native with Expo, TypeScript, Expo Router (file-based navigation), Redux Toolkit, Axios, React Native Reanimated, Gesture Handler" },
      { label: "Device APIs", value: "Expo SecureStore (token storage), Image Picker, Location, Haptics, Splash Screen" },
      { label: "Backend", value: "NestJS, TypeScript, Passport JWT strategy" },
      { label: "Database", value: "PostgreSQL with TypeORM and versioned migrations" },
      { label: "Auth & email", value: "JWT + bcrypt password hashing, Nodemailer transactional email for OTP verification and password reset" },
      { label: "Build & release", value: "EAS build pipeline for iOS and Android; Expo web export also supported" },
    ],
    links: {
      frontendRepo: "https://github.com/muaazazhar/NovaStore-FE",
      backendRepo: "https://github.com/muaazazhar/NovaStore-BE",
    },
    liveNote: "As a native mobile application, NovaStore has no public web URL. A build can be provided on request for device testing, and the screenshots below are captured from the running application against a seeded database.",
    demoNote: "These credentials apply to the mobile build. The administrator account unlocks the in-app admin panel.",
    demoAccounts: [
      { role: "Customer", email: "customer@store.com", password: "customer123", access: "Shopper" },
      { role: "Administrator", email: "admin@store.com", password: "admin123", access: "Admin panel" },
    ],
    screenshots: [
      { src: novastoreCatalogueHome, caption: "Catalogue home" },
      { src: novastoreCheckoutPayment, caption: "Checkout & payment methods" },
      { src: novastoreWallet, caption: "Wallet" },
      { src: novastoreAdminPanel, caption: "In-app admin panel" },
      { src: novastoreOrderManagement, caption: "Order management" },
    ],
  },
];

export { projects };
