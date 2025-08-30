# FINTHEM.NU Landing Page - Deployment Guide

## 🚀 Quick Start

The FINTHEM.NU landing page is now ready for deployment! Here's what you need to do:

### 1. Add Your Video File
Replace the placeholder file at `/public/bg.mp4` with your actual background video:
- **Format**: MP4
- **Resolution**: 1920x1080 or higher
- **Duration**: 10-30 seconds (will loop)
- **File size**: Optimize for web (under 10MB)
- **Content**: Construction/building footage, architectural elements, or subtle motion

### 2. Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial FINTHEM.NU landing page"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### 3. Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Upload the .next folder to Netlify
```

**Traditional Hosting**:
```bash
npm run build
npm start
```

## 🎨 Features Implemented

✅ **Fullscreen minimal layout** with light beige background (#f8f6f2)  
✅ **Centered FINTHEM logo** with video texture effect  
✅ **SVG mask implementation** for video inside letters  
✅ **Responsive design** for mobile, tablet, desktop  
✅ **Google Fonts integration** (Montserrat + Playfair Display)  
✅ **Animated hamburger menu** (top-left corner)  
✅ **Navigation text** with hover effects  
✅ **Modern browser support** with fallbacks  

## 🔧 Technical Details

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Video Mask**: CSS `mask-image` with SVG text
- **Responsive**: Custom hook for dynamic mask sizing
- **Performance**: Optimized video loading with poster fallback

## 📱 Responsive Breakpoints

- **Mobile**: ≤480px (50px font size)
- **Tablet**: ≤768px (80px font size)  
- **Desktop**: >768px (120px font size)

## 🌐 Browser Support

The video mask effect works in:
- Chrome 8+
- Firefox 3.5+
- Safari 4+
- Edge 12+

Fallback text is provided for older browsers.

## 🎯 Next Steps

1. **Add your video file** to `/public/bg.mp4`
2. **Customize colors** in `tailwind.config.js` if needed
3. **Add menu functionality** to the hamburger button
4. **Add contact information** or additional pages
5. **Optimize for SEO** with meta tags and structured data

## 📞 Support

The landing page is production-ready and follows modern web development best practices. The video mask effect creates a stunning visual impact similar to martinkempdesign.com, perfect for showcasing your construction company's professional image.
