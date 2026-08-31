/* tailwind.config.js - Shooz Premium Theme Configuration */

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        shooz: {
          // Dark & Deep Background Teals
          darkteal: '#0B1B1F',
          deepteal: '#122B31',
          slate: '#2F4454',
          
          // Accent Gold & Luxury Tones
          accentgold: '#D4AF37',
          lightgold: '#F3E5AB',
          
          // Secondary Accent Colors
          rose: '#DA7B93',
          teal: '#376E6F',
          mutedslate: '#64748B'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
