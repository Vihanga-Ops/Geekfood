# 🍔 GeekFoods

A fully responsive homepage built with **ReactJS** for the GeekFoods brand — a modern food discovery platform. This project was built as part of a frontend assignment, replicating the [GeekFoods reference site](https://geekfood.vercel.app/) from scratch using only React and CSS.

---

## 📬 Submission Links

| | Link |
|---|---|
| 🌐 **Hosted Link** | [Click here](https://dynamic-manatee-59c169.netlify.app/) ← _Replace with your Netlify URL_ |
| 🐙 **GitHub Repository** | [Click here](https://github.com/Vihanga-Ops/Geekfood.git) ← _Replace with your GitHub URL_ |

---

## 📸 Preview

| Section | Description |
|---|---|
| Navbar | Sticky dark navbar with logo, nav links, active state, and CTA button |
| Hero | Full-viewport background image with headline and action buttons |
| Info Section | Split layout — inset image on white left, gray panel with text on right |
| Cards | 3-column masonry-style testimonial cards with grayscale avatars |
| Quote Page | Full-width dark navy quote cards stacked vertically |
| Footer | Centered logo, tagline, nav links, and social icons on gray background |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **ReactJS** | UI component library |
| **CSS3** | Styling and layout (Flexbox, Grid) |
| **Unsplash** | Free stock images |
| **Flowbite** | Logo SVG |
| **Inline SVGs** | Social media icons in Footer |

---

## 📂 Project Structure

```
geek-food/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx        # Sticky navbar with active page routing
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx          # Full-viewport hero with bg image & buttons
│   │   │   └── Hero.css
│   │   ├── InfoSection/
│   │   │   ├── InfoSection.jsx   # Split layout — image left, text right
│   │   │   └── InfoSection.css
│   │   ├── Cards/
│   │   │   ├── Cards.jsx         # 3-column testimonial card grid
│   │   │   └── Cards.css
│   │   ├── Quote/
│   │   │   ├── Quote.jsx         # Quote page with dark navy cards
│   │   │   └── Quote.css
│   │   └── Footer/
│   │       ├── Footer.jsx        # Centered footer with socials
│   │       └── Footer.css
│   ├── App.js                    # Root component — handles page routing via state
│   ├── App.css                   # Global reset styles
│   └── index.js                  # React entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vihanga-Ops/Geekfood.git
   cd geek-food
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

---

## ☁️ Deployment (Netlify)

1. Push your project to GitHub
2. Go to [netlify.com](https://netlify.com) and click **Add new site → Import from Git**
3. Select your GitHub repository
4. Set build command to `npm run build` and publish directory to `build`
5. Click **Deploy site** — your site is live!

Or deploy via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🧩 Pages & Components

### 🏠 Home Page
The default landing page composed of three sections:
- **Hero** — A full-screen background image with the tagline *"Let us find your Forever Food."*, a pink **Search Now** button and an outlined **Know more** button.
- **InfoSection** — A split two-panel layout. The left panel (white) contains a tall inset portrait image of a house. The right panel (light gray) has a bold heading, descriptive paragraph, and an indigo **Get in Touch** CTA button.
- **Cards** — A 3-column testimonial section. Each column stacks review cards (subtle gray background, no border) independently with the author avatar and name sitting below the card box.

### 💬 Quote Page
Accessible by clicking **Quote** in the navbar. Displays a list of full-width dark navy (`#1e2a3a`) cards, each containing a bold centered food quote and the author's name in muted gray beneath it.

### 🔀 Routing
No external routing library is used. Page navigation is handled with **React `useState`** in `App.js`. The active page is passed as a prop to `Navbar`, which highlights the correct link in blue. Clicking a nav link calls `setActivePage()` to swap the rendered content.

---

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Primary Dark (Navbar) | `#0f172a` |
| Hero Highlight Pink | `#e91e8c` |
| CTA Blue (Navbar btn) | `#2563eb` |
| Indigo (Info btn) | `#4f46e5` |
| Quote Card Dark | `#1e2a3a` |
| Footer / Card Gray | `#f3f4f6` |
| Info Panel Gray | `#eff1f5` |
| Teal (Footer logo) | `#2a9d8f` |

---

## 🖼️ Images Used

| Section | Source |
|---|---|
| Hero background | [Unsplash — Living room](https://images.unsplash.com/photo-1604014237800-1c9102c219da) |
| InfoSection | [Unsplash — House exterior](https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83) |
| Testimonial avatars | [Unsplash — Portrait](https://images.unsplash.com/photo-1603366445787-09714680cbf1) |
| Logo | [Flowbite logo SVG](https://flowbite.com/docs/images/logo.svg) |

---

## 📝 Assignment Notes

- Built using **ReactJS only** — no external UI libraries (no Bootstrap, Tailwind, MUI)
- All icons in the Footer are **inline SVGs** — no icon library dependency
- Fully **responsive** with media queries for mobile screens (`max-width: 768px`)
- Page routing handled with **React state** — no React Router needed for this scale

---

## 👨‍💻 Author

> Vihanga Disal Pathirana

---

## 📄 License

This project was created for educational purposes as part of a frontend development assignment.