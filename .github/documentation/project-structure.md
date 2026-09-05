# Project Structure

This document outlines the project structure for the application. It follows a clear separation of concerns between the Next.js App Router and the core application logic.

```
my-project/
├── app/                             # Next.js App Router (Routing, Layouts, SSG/RSC Entry)
│   ├── layout.tsx                   # Root HTML wrapper, global providers & fonts
│   ├── template.tsx                 # Root template for route transitions
│   ├── loading.tsx                  # Global fallback skeleton
│   ├── page.tsx                     # Landing page
│   │
│   ├── payment/                     # Payment route segment
│   │   └── page.tsx                 # Route handler (calls @/repositories & renders PaymentPage)
│   │
│   └── profile/                     # Profile route segment
│       ├── layout.tsx               # Profile-specific nested layout (optional)
│       └── page.tsx                 # Route handler (calls @/repositories & renders ProfilePage)
│
└── src/                             # Core Application Source & Logic
    ├── common/                      # Pure, domain-agnostic design system & utilities
    │   ├── components/              # Generic UI primitives (Button, Modal, Input, Card)
    │   ├── hooks/                   # Pure React hooks (useDebounce, useMediaQuery)
    │   └── utilities/               # Pure helper functions (formatCurrency, formatDate)
    │
    ├── data/                        # Raw static JSON, dictionaries, and constants
    │   ├── payment/
    │   │   └── mode.ts              # Const dictionary of payment modes
    │   └── profile/
    │       └── mock-user.json       # Static JSON data
    │
    ├── repositories/                # Pure functions to parse, transform, and read /data
    │   ├── payment/
    │   │   └── mode.ts              # Parsers for payment data
    │   └── profile/
    │       ├── username.ts          # Parsers for user data
    │       └── avatar.ts
    │
    ├── features/                    # Shared domain elements used across multiple domains
    │   ├── payment/                 # Cross-domain payment elements (e.g., CurrencyTag, PaymentBadge)
    │   └── profile/                 # Cross-domain profile elements (e.g., Avatar, UserBadge)
    │
    └── domains/                     # High-level business feature screens & workflows
        ├── payment/                 # Checkout screens, payment forms, payment flow
        │   ├── components/
        │   ├── hooks/
        │   ├── PaymentPage.tsx      # Entry point component for /app/payment/page.tsx
        │   └── index.ts             # Public API export
        │
        └── profile/                 # Profile management screens and local state
            ├── components/
            ├── hooks/
            ├── ProfilePage.tsx      # Entry point component for /app/profile/page.tsx
            └── index.ts             # Public API export
```

Clean Import & Dependency Rules
With this hierarchy, your dependency flow remains strictly unidirectional to prevent circular imports:
$$\text{common / data} \longrightarrow \text{repositories} \longrightarrow \text{features} \longrightarrow \text{domains} \longrightarrow \text{app}$$
