# Hub Market — Projet Angular (Standalone, Tailwind, Auth JWT, Panier)

E-commerce de révision couvrant les notions vues en cours : **routing avec layouts**, **composants standalone**, **nouvelle syntaxe de contrôle Angular** (`@if`, `@for`), **Reactive Forms**, **interceptors/guards**, **state léger via RxJS + signals**, **Tailwind CSS**.

---

## Sommaire

- [Hub Market — Projet Angular (Standalone, Tailwind, Auth JWT, Panier)](#hub-market--projet-angular-standalone-tailwind-auth-jwt-panier)
  - [Sommaire](#sommaire)
  - [Stack \& prérequis](#stack--prérequis)
  - [Structure des dossiers](#structure-des-dossiers)
  - [Démarrage rapide](#démarrage-rapide)
  - [Configuration (API, Tailwind)](#configuration-api-tailwind)
    - [API](#api)
    - [Tailwind (rappel)](#tailwind-rappel)
  - [Routing \& Layouts](#routing--layouts)

---

## Stack & prérequis

- **Angular 17+** (composants **standalone** & **built-in control flow** `@if`, `@for`)
- **TypeScript**
- **Tailwind CSS**
- **Node.js 18+**  
- Backend **JWT** prêt : `https://node-eemi.vercel.app`  
  Endpoints utilisés : `/auth/register`, `/auth/login`, `/auth/me`

---

## Structure des dossiers

```
src/app/
├── app.routes.ts
├── layouts/
│   ├── shop-layout/
│   │   ├── components/
│   │   │   ├── shop-header/
│   │   │   └── shop-footer/ (optionnel)
│   │   ├── shop-layout.component.ts/html/scss
│   ├── auth-layout/
│   │   ├── components/
│   │   │   └── auth-header/ (optionnel)
│   │   └── auth-layout.component.ts/html/scss
│   └── checkout-layout/
│       ├── components/
│       │   └── checkout-summary/ (optionnel)
│       └── checkout-layout.component.ts/html/scss
├── services/
│   └── cart.service.ts
├── models/
│   ├── product.ts
│   └── user.ts
├── features/
│   ├── shop/
│   │   ├── shop.routes.ts
│   │   ├── home/ (liste produits)
│   │   └── product-detail/
│   ├── auth/
│   │   ├── auth.routes.ts
│   │   ├── login/
│   │   ├── register/
│   │   ├── services/auth.service.ts
│   │   ├── interceptors/auth.interceptor.ts
│   │   └── guards/auth.guard.ts
│   └── checkout/
│       ├── checkout.routes.ts
│       ├── cart/
│       └── components/
│           └── cart-item/
└── ...
```

---

## Démarrage rapide

```bash
# 1) Installer les deps
npm i

# 2) Lancer l'app en dev
npm run start
# ou
ng serve

# 3) Build prod
ng build
```

> L’API Node (JWT) est hébergée : `https://node-eemi.vercel.app`.  
> Aucun setup backend requis, mais vérifiez la connectivité réseau.

---

## Configuration (API, Tailwind)

### API
Le projet référence l’API directement dans le `AuthService` via :
```ts
const API_URL = 'https://node-eemi.vercel.app';
```
> Option recommandé : centraliser dans un `environment.ts` ou un token d’injection si vous préférez.

### Tailwind (rappel)
- `tailwind.config.js` :
```js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: { extend: {} },
  plugins: [],
};
```
- `src/styles.css` :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Routing & Layouts

(... contenu complet déjà produit ...)
