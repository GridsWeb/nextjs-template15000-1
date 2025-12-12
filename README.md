# Lumina - Premium Web Showcase Template15000-1

A high-performance, AI-ready, and aesthetically stunning web showcase platform built with Next.js 16, Tailwind CSS v4, and Framer Motion. Designed for the modern web creator with a focus on speed, accessibility, and immersive user experiences.

![Project Preview](/public/images/zenith.jpg)

## 🚀 Features

### Core Capabilities

- **Performance First**: Optimized Core Web Vitals with lightweight code and efficient asset loading.
- **AI-Ready Architecture**: Structure designed to support future AI integrations (chatbots, adaptive layouts).
- **Mobile-First Design**: Fully responsive navigation and layouts that prioritize mobile experiences.
- **Glassmorphism UI**: Premium aesthetic using backdrop blurs, gradients, and subtle borders.
- **Dynamic Routing**: Showcase system with detailed pages for each template (`/templates/[id]`).

### UX/UI Highlights

- **Micro-Animations**: Smooth transitions and hover effects using `framer-motion`.
- **Dark Mode**: High-contrast, easy-on-the-eyes dark theme with vibrant accents.
- **Typography**: Uses **Outfit** font for a clean, modern, and readable look.
- **Custom Scrollbar**: Sleek, non-intrusive scrollbar to match the dark theme.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📂 Project Structure

```ini
├── app/
│   ├── layout.tsx         # Root layout with Navbar/Footer persistence
│   ├── page.tsx           # Landing page (Hero + Grid)
│   ├── globals.css        # Global styles & Tailwind theme variables
│   ├── lib/
│   │   └── data.ts        # Mock data for templates
│   └── templates/
│       └── [id]/          # Dynamic template details page
├── components/
│   ├── Navbar.tsx         # Responsive glassmorphic navigation
│   ├── Hero.tsx           # Animated entry section
│   ├── TemplateGrid.tsx   # Grid display of templates
│   ├── TemplateCard.tsx   # Individual template card component
│   └── Footer.tsx         # Simple site footer
└── public/
    └── images/            # Static assets
```

## 🏁 Getting Started

1. **Clone the repository**

    ```bash
    git clone https://github.com/GridsWeb/nextjs-template15000-1
    cd nextjs-web-showcase
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
    Navigate to `http://localhost:3000` to see the results.

## 🎨 Customization

- **Colors & Fonts**: Edit `app/globals.css` to change CSS variables for colors and fonts.
- **Data**: Update `app/lib/data.ts` to add or modify templates.
- **Images**: Place new images in `public/images/` and update references in `data.ts`.

---

![image1](/docs/src/image1.png)

![image2](/docs/src/image2.png)

![image3](/docs/src/image3.png)

![image4](/docs/src/image4.png)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
