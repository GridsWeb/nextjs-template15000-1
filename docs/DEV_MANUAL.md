# คู่มือการพัฒนา (Development Manual) - Lumina Showcase

เอกสารนี้รวบรวมขั้นตอนการพัฒนา เทคนิค และ Roadmap ของโปรเจกต์ Lumina เพื่อใช้เป็นแนวทางและ Knowledge Base ควบคู่ไปกับการเขียนโค้ด

## 🗺️ Roadmap & Status

### Phase 1: Frontend Foundation (✅ Completed)
- [x] โครงสร้างโปรเจกต์ Next.js 16 (App Router)
- [x] ติดตั้ง Tailwind CSS v4 & Design Tokens
- [x] หน้า Landing Page (Hero, Grid, Footer)
- [x] หน้ารายละเอียดสินค้า Dynamic (`/templates/[id]`)
- [x] Basic Responsive & Animations

### Phase 2: Data & Backend (🚧 Next Step)
- [ ] **Database Setup**: เลือกและติดตั้งฐานข้อมูล (แนะนำ Supabase/PostgreSQL)
- [ ] **Schema Design**: ออกแบบตาราง Users, Templates, Orders
- [ ] **API Integration**: เชื่อมต่อหน้าเว็บกับฐานข้อมูลจริง แทน `data.ts`

### Phase 3: Authentication & Commerce
- [ ] ระบบ Login/Register (NextAuth / Supabase Auth)
- [ ] ระบบตะกร้าสินค้า (Shopping Cart State)
- [ ] การชำระเงิน (Stripe Payment Integration)

### Phase 4: AI & Advanced Features
- [ ] AI Chatbot ผู้ช่วยแนะนำ Template
- [ ] ระบบแนะนำสินค้า (Recommendation Engine)

---

## 🛠️ รายละเอียดทางเทคนิค (Technical Details)

### 1. โครงสร้าง Design System
เราใช้ไฟล์ `globals.css` เป็นจุดศูนย์กลางในการคุม Theme:
- **Colors**: ใช้ CSS Variables (`--primary`, `--background`) เพื่อรองรับ Dark Mode
- **Typography**: ฟอนต์ **Outfit** นำเข้าผ่าน `next/font/google`
- **Glassmorphism**: คลาส `.glass` สำหรับทำพื้นหลังกระจกฝ้า

### 2. การจัดการข้อมูล (Data Handling)
- ปัจจุบัน: ใช้ Mock Data Array ใน `app/lib/data.ts`
- อนาคต: จะเปลี่ยนไปใช้ `fetch` ข้อมูลจาก Database ผ่าน Server Components
