# Fiscal Reform Nigeria

A modern web application for the **Presidential Fiscal Policy and Tax Reforms Committee** of Nigeria. This site provides information about fiscal reform initiatives, tax policy updates, and an interactive personal income tax calculator.

## Features

- **Personal Income Tax Calculator** - Calculate PAYE taxes based on proposed and current Nigerian tax rates
- **Committee Information** - Learn about the committee's mandate, composition, and subcommittees
- **Guiding Principles** - Understand the core principles driving the fiscal reform agenda
- **Terms of Reference** - View the detailed pillars, dimensions, and deliverables
- **FAQ Section** - Common questions about the fiscal reform initiative
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── FAQ.jsx              # FAQ accordion component
│   ├── Footer.jsx           # Footer with social links and contact info
│   ├── Header.jsx           # Site header with logo
│   ├── Navbar.jsx           # Navigation bar with mobile menu
│   └── Statement.jsx        # Tabbed statement component
├── pages/
│   ├── About.jsx            # Committee background and overview
│   ├── Contact.jsx          # Contact form and information
│   ├── Commitee.jsx         # Subcommittees structure and roles
│   ├── Guide.jsx            # Guiding principles page
│   ├── Home.jsx             # Tax calculator and hero section
│   └── Terms.jsx            # Terms of reference table
├── assets/                  # Images and static assets
├── App.jsx                  # Main app component with routing
├── main.jsx                 # React entry point
└── index.css                # Tailwind CSS imports
```

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites
- Node.js 16+ installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kingsleychinecheremibeh/fiscal-reform.git
cd fiscal-reform
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Lint

Run ESLint to check code quality:
```bash
npm run lint
```

## Key Pages

- **Home** (`/`) - Tax calculator and introduction
- **About** (`/about`) - Committee background and statement of purpose
- **Terms of Reference** (`/terms`) - Deliverables and outcomes table
- **Guiding Principles** (`/guide`) - Core principles guiding the work
- **Subcommittees** (`/commitee`) - Committee structure and roles
- **Contact** (`/contact`) - Contact form and location information

## Deployment

This project is configured for deployment on Vercel with URL rewrites configured in `vercel.json` for single-page application routing.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Contact & Support

- **Email:** info@fiscalreform.org
- **WhatsApp:** +234 810 975 3151
- **Abuja:** Revenue House, 15 Sokode Crescent, Wuse Zone 5, FCT Abuja
- **Lagos:** Floor 7 Mulliner Towers, 39 Alfred Rewane Road, Ikoyi, Lagos

## License

© 2025 Fiscal Reforms. All rights reserved.