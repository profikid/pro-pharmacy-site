# ProPharm Delivery - Professional Pharmacy Website

A production-ready, HIPAA-compliant pharmacy website built with **UUPM Design Intelligence** and modern web technologies.

## 🎯 Design System (UUPM Generated)

**Pattern:** Trust-First + Service-Selector  
**Style:** Clean Medical (Soft UI Evolution)  
**Colors:** Healthcare-grade palette with WCAG AAA contrast  
**Typography:** Inter UI + Source Serif Pro (Google Fonts)  
**Accessibility:** WCAG AAA compliant, `prefers-reduced-motion` support

### Color Palette
```css
Primary: #2563EB (Medical Blue)
Success: #10B981 (Health Green)
Warning: #F59E0B (Caution Amber)
Background: #F8FAFC (Clinical White)
Text: #1E293B (High-contrast Charcoal)
```

## 🚀 Tech Stack

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Fonts:** Inter (UI) + Source Serif Pro (Headings)
- **TypeScript:** Full type safety

## ✨ Features

### 🏥 Professional Pharmacy Services
- ✅ Prescription transfers with 3-step process
- ✅ Same-day delivery promise
- ✅ Insurance verification (real-time)
- ✅ Vaccination services
- ✅ FlavorRx (medication flavoring)
- ✅ Custom compounding
- ✅ Medication reminder app promo

### 🔒 Trust & Compliance
- NABP accreditation badges
- HIPAA compliance indicators
- SSL security badges
- Pharmacy license display
- 24/7 pharmacist hotline
- WCAG AAA accessibility

### 📱 Modern UX
- Responsive design (mobile-first)
- Smooth 200ms micro-interactions
- Focus rings for keyboard navigation
- Reduced motion support
- High-contrast text (4.5:1 minimum)
- Clean, clinical aesthetic

### 🎨 Design Tokens Included
- Custom CSS properties for colors
- Semantic Tailwind config
- Medical-grade color system
- Professional typography scale
- Consistent spacing system

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd ~/workspace/snuuusnuuu-blog/examples/pro-pharmacy-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pro-pharmacy-site/
├── pages/
│   └── index.tsx          # Main landing page
├── components/
│   └── ui/
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       └── badge.tsx      # Badge component
├── lib/
│   └── utils.ts           # Utility functions (cn)
├── styles/
│   └── globals.css        # Global styles & design tokens
├── next.config.js         # Next.js config
├── tailwind.config.js     # Tailwind config with custom colors
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## 🎨 UUPM Integration

This project demonstrates the **UUPM Design Intelligence** system in action:

```bash
# How this design was generated:
uupm.py generate "online pharmacy - prescription delivery" \
  --style clean-medical \
  --colors healthcare \
  --tech-stack react
```

The UUPM engine provided:
- Industry-specific color palette (healthcare)
- Trust-first layout pattern
- Accessibility requirements (WCAG AAA)
- Anti-patterns to avoid (neon colors, playful animations)
- Pre-delivery checklist (HIPAA compliance, license display)

## 🏆 Professional Highlights

### Performance
- Next.js 14 App Router ready
- Optimized fonts (variable fonts)
- Minimal dependencies
- Tree-shakeable components

### Accessibility
- WCAG AAA compliant colors
- Keyboard navigation
- Screen reader friendly
- Reduced motion support
- Focus management

### Trust Signals
- NABP accreditation
- License numbers
- SSL/security badges
- HIPAA compliance
- Pharmacist availability

### Mobile-First
- Responsive grid system
- Touch-friendly buttons (44x44px)
- Optimized typography scales
- Fast loading

## 🔄 Customization

### Change Colors
Edit `styles/globals.css` CSS custom properties:
```css
--primary-500: 59 130 246; /* Change medical blue */
```

### Add Services
Edit `pages/index.tsx` Services section:
```tsx
<Card>
  <CardHeader>
    <Truck className="w-10 h-10 text-blue-600 mb-3" />
    <CardTitle>Your Service</CardTitle>
  </CardHeader>
</Card>
```

### Update Insurance Providers
Edit the `<select>` options in the Insurance Checker section.

## 📞 Contact Information

Template includes:
- 24/7 pharmacist hotline
- Support email
- Physical address
- Social proof badges

**Replace with your actual pharmacy details before deployment.**

## 🌐 Deployment

Deploy to Vercel (recommended for Next.js):
```bash
vercel --prod
```

Or deploy to snuuusnuuu.profikid.nl:
```bash
clawd-deploy pro-pharmacy-site
```

## ⚠️ Legal Requirements

Before going live, ensure:
- [ ] NABP .pharmacy domain verification
- [ ] State pharmacy license numbers displayed
- [ ] HIPAA-compliant hosting
- [ ] SSL certificate installed
- [ ] Pharmacy license verification
- [ ] Terms of Service & Privacy Policy
- [ ] medication guide disclaimers

## 🎓 Learning Resources

- [UUPM Design System](https://uupm.cc)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with UUPM Design Intelligence** 🎨✨
*Professional pharmacy website template - ready for customization and deployment*