# Gaurav Store - E-Commerce Platform

![Gaurav Store](assets/images/Gaurav_store.png)

A modern, responsive e-commerce platform built with vanilla HTML, CSS, and JavaScript. This project demonstrates a fully functional online storefront with product management, shopping cart functionality, and customer contact capabilities.

🔗 **Live Demo:** [https://gauravstore.vercel.app](https://gauravstore.vercel.app)
📂 **Repository:** [https://github.com/eclipse-dev3/Gaurav-Store](https://github.com/eclipse-dev3/Gaurav-Store)
👤 **Author:** Gaurav Kumar

> **Note:** This is a 100% frontend project — built with plain HTML, CSS, and JavaScript only. There is no backend or server-side code. Cart data persists using browser LocalStorage, and the contact form is a static form (not connected to a server).

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Product Catalog](#product-catalog)
- [File Descriptions](#file-descriptions)
- [Browser Compatibility](#browser-compatibility)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Connect With Me](#connect-with-me)

## Overview

Gaurav Store is a comprehensive e-commerce web application designed to provide users with a seamless shopping experience. The platform features a responsive design, dynamic product loading, interactive shopping cart, and user-friendly navigation. Built entirely with vanilla JavaScript, it offers fast performance without heavy dependencies.

**Store Name:** Gaurav Store
**Type:** E-Commerce Platform (Frontend only, no backend)
**Target Audience:** Electronics & Tech Accessories Shoppers

## ✨ Features

### 🏠 Home Page
- **Hero Section** with promotional messaging
- **Dynamic Product Catalog** loaded from a local JSON file
- **Interactive Product Cards** featuring:
  - Product images and descriptions
  - Real-time price display with discount calculation
  - Quantity selectors for custom orders
  - "Add to Cart" functionality
  - Stock availability indicators
- **Responsive Navigation Bar** with:
  - Brand logo and store name
  - Navigation links to all sections
  - Shopping cart icon with item counter
  - Theme toggle (light/dark mode ready)
- **Top Information Bar** with:
  - Promotional messages
  - Sign In/Sign Up links
  - Theme toggle button

### 🛒 Shopping Cart
- **Cart Summary Page** displaying all added items
- **LocalStorage Integration** for persistent cart data (client-side only)
- **Item Management** with:
  - Quantity adjustment controls
  - Remove item functionality
  - Real-time price recalculation
- **Order Summary** including:
  - Subtotal calculation
  - Tax calculation
  - Total amount due
- **Continue Shopping** functionality

### 📞 Contact Page
- **Contact Form** for customer inquiries (static, frontend-only — not wired to a backend)
- **Google Maps Embed** for store location
- **Responsive Contact Layout**

### 🎨 Design Features
- **Responsive Design** optimized for all screen sizes
- **Modern UI/UX** with clean typography
- **Font Awesome Icons** for enhanced visual appeal
- **Smooth Navigation** between pages
- **Professional Color Scheme**

## 📁 Project Structure

```
ecomerse/
├── index.html                 # Main storefront page
├── cartpage.html              # Shopping cart page
├── contact.html               # Contact page
├── ecomerse.css               # Primary styling
├── ecomerse2.css              # Additional layout styles
├── cartpage.css               # Cart page specific styles
├── ecomerse.js                # Main application logic
├── cartpage.js                # Cart page functionality
├── api/
│   └── products.json          # Product database (static JSON, no server)
├── assets/
│   └── images/                # All images and icons
│       ├── Gaurav_store.png   # Logo
│       ├── lapi.png           # Laptop product image
│       ├── iphone.png         # Smartphone product image
│       ├── headphone (1).png   # Headphones product image
│       ├── speakers.png       # Speakers product image
│       ├── watch.png          # Watch product image
│       ├── tv.png             # Television product image
│       ├── moon.svg           # Dark mode icon
│       ├── sun.svg            # Light mode icon
│       └── [other assets]
└── README.md                  # Documentation

```

## 🛠 Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Icons:** Font Awesome 6.7.2
- **Storage:** Browser LocalStorage API
- **Data:** Static JSON file (no backend/API server)
- **Responsive Design:** CSS Media Queries
- **Styling:** Custom CSS with modern practices

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- A local web server or live server extension

### Option 1: VS Code Live Server (Recommended)

1. **Install Live Server Extension:**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install by Ritwick Dey

2. **Run the Project:**
   - Open the project folder in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser will automatically open to `http://localhost:5500`

### Option 2: Python HTTP Server

**Python 3.x:**
```bash
cd path/to/ecomerse
python -m http.server 8000
```

**Python 2.x:**
```bash
cd path/to/ecomerse
python -m SimpleHTTPServer 8000
```

Visit `http://localhost:8000` in your browser.

### Option 3: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd path/to/ecomerse

# Start server
http-server
```

Visit `http://localhost:8080` in your browser.

### Option 4: Direct File Opening (Not Recommended)
- Locate `index.html` in your file explorer
- Double-click to open in your browser
- **Note:** Product data may not load due to CORS restrictions when opening files directly

## 📖 Usage Guide

### Browsing Products
1. Open the application by visiting the home page
2. Scroll through the product catalog
3. Each product card displays:
   - Product image
   - Product name and description
   - Original and discounted price
   - Available stock quantity
   - Current discount percentage

### Adding Items to Cart
1. Select a product you wish to purchase
2. Use the quantity input field to choose the desired quantity
3. Click the **"Add to Cart"** button
4. The item is added to your shopping cart
5. Cart icon updates with new item count

### Managing Your Cart
1. Click the **shopping cart icon** in the navigation bar
2. View all items in your cart
3. **Adjust quantities** using the +/- buttons
4. **Remove items** by clicking the remove button
5. View the **price breakdown:**
   - Subtotal
   - Tax amount
   - Total amount due
6. Click **"Continue Shopping"** to return to the store

### Contacting Support
1. Navigate to the **Contact** page from the main navigation
2. Fill out the contact form with your inquiry
3. View the store location on the embedded map
4. (Form is static/demo only — no backend is connected to receive submissions)

## 🛍 Product Catalog

The store currently offers 6 premium product categories:

| Product | Price | Discount | Category | Stock |
|---------|-------|----------|----------|-------|
| Laptop | ₹39,999 | 22% | Computers | 50 |
| Smartphone | ₹9,999 | 52% | Mobile | 100 |
| Wireless Headphones | ₹599 | 54% | Audio | 70 |
| Speakers | ₹3,999 | 33% | Audio | 30 |
| Smartwatch | ₹599 | 54% | Wearables | 20 |
| Television | ₹9,999 | 38% | Video | 20 |

All prices are in Indian Rupees (₹). Products are sourced from the `api/products.json` file.

## 📄 File Descriptions

### HTML Files
- **index.html** - Main landing page with hero section, product grid, and navigation
- **cartpage.html** - Dedicated shopping cart display and management page
- **contact.html** - Contact form and store location information

### CSS Files
- **ecomerse.css** - Primary stylesheet containing base styles, layout, and typography
- **ecomerse2.css** - Additional styling rules, animations, and layout refinements
- **cartpage.css** - Cart-specific styling for optimal display on cart page

### JavaScript Files
- **ecomerse.js** - Main application logic handling:
  - Product fetching from the local JSON file
  - DOM manipulation and rendering
  - Cart operations (add/remove/update)
  - LocalStorage cart persistence
  - Event listeners for user interactions

- **cartpage.js** - Cart page functionality managing:
  - Cart data retrieval from LocalStorage
  - Cart item rendering
  - Quantity updates
  - Item removal
  - Total price calculations

### Data
- **api/products.json** - Static JSON file containing:
  - Product ID, name, category
  - Pricing (regular and discounted)
  - Stock quantity
  - Product descriptions
  - Image paths

### Assets
- **assets/images/** - Directory containing:
  - Product images (500x500px PNG format)
  - Logo and branding assets
  - Theme toggle icons (light/dark mode)
  - Additional UI icons

## 🌐 Browser Compatibility

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ Full | Latest |
| Firefox | ✅ Full | Latest |
| Safari | ✅ Full | Latest |
| Edge | ✅ Full | Latest |
| IE 11 | ⚠️ Partial | - |

## 🔄 How LocalStorage Works

The application uses browser LocalStorage to persist cart data:
- **Key:** `cart`
- **Storage:** JSON stringified array of cart items
- **Persistence:** Data remains even after closing the browser
- **Capacity:** Up to 5-10MB per domain

### Clearing Cart
To clear all cart data, open browser console and run:
```javascript
localStorage.removeItem('cart');
```

## 🚀 Future Enhancements

- [ ] **Backend Integration** - Add a real server (Node.js/Express) for orders and contact form
- [ ] **User Authentication System** - Login/Register functionality
- [ ] **Payment Gateway Integration** - Razorpay/Stripe integration
- [ ] **Order Management** - Order history and tracking
- [ ] **Product Filtering & Search** - Advanced search capabilities
- [ ] **Dark Mode** - Complete dark theme implementation
- [ ] **Reviews & Ratings** - Customer review system
- [ ] **Wishlist Feature** - Save favorite products
- [ ] **Admin Dashboard** - Product management interface
- [ ] **Multi-language Support** - International localization

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing style and structure.

## 📝 License

This project is open source and available under the MIT License. See LICENSE file for details.

## 📧 Support & Contact

For questions, bug reports, or feature requests:
- Visit the Contact page in the application
- Create an issue in the repository

## 🔗 Connect With Me

- **GitHub:** [https://github.com/eclipse-dev3](https://github.com/eclipse-dev3)
- **LinkedIn:** [https://www.linkedin.com/in/gaurav-kumar-5b678437a/](https://www.linkedin.com/in/gaurav-kumar-5b678437a/)
- **Portfolio:** [https://gauravk.vercel.app/](https://gauravk.vercel.app/)
- **Twitter/X:** [https://x.com/eclipse_devX](https://x.com/eclipse_devX)

---

**Made with ❤️ by Gaurav Kumar**

*Last Updated: July 2026*