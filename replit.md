# Marini Associates Luxury Business Website

## Overview

Marini Associates is a modern luxury business website built for a consulting firm that specializes in expanding European luxury brands into South East Asia and the Middle East. The application is a full-stack React application with Express.js backend, featuring elegant design, responsive layout, and contact form functionality. The site showcases services in F&B and Real Estate & Retail sectors with a sophisticated, minimalist aesthetic targeting high-end clientele.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: TailwindCSS with shadcn/ui components for consistent, luxury-themed design system
- **Animation**: Framer Motion for smooth transitions and elegant interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks for local state, TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Session Management**: Express sessions with PostgreSQL storage using connect-pg-simple
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development**: Hot reload with tsx for seamless development experience

### Data Storage
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Contact submissions table for storing form data, user authentication schema
- **Migrations**: Drizzle Kit for database schema versioning and deployment
- **Connection**: Neon Database serverless PostgreSQL for scalable cloud hosting

### Authentication & Security
- **Validation**: Zod schemas for runtime type checking and API request validation
- **Session Storage**: PostgreSQL-backed sessions for secure user state persistence
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **CORS**: Configured for secure cross-origin requests

### External Dependencies
- **Database Hosting**: Neon Database (@neondatabase/serverless) for managed PostgreSQL
- **UI Components**: Radix UI primitives for accessible, unstyled component foundation
- **Form Handling**: React Hook Form with Zod resolvers for robust form validation
- **Icons**: Lucide React for consistent iconography
- **Email**: Mailto links for contact form submissions to lorenzo@mariniassociates.com
- **Fonts**: Google Fonts integration (Playfair Display for headings, Inter for body text)
- **Images**: External image sources for luxury lifestyle photography
- **Development Tools**: Replit-specific plugins for enhanced development experience