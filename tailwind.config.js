/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Just-In-Time mode for faster builds and more utility classes
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}' // Updated to use 'content' instead of 'purge'
  ],
  darkMode: 'class', // Use 'class' for dark mode support
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'] // Default sans-serif font
      },
      fontSize: {
        xxxs: '0.6875em', // Extra extra small font size
        xxs: '0.75rem', // Extra small font size
        xs: '0.8125rem', // Small font size
        sm: '0.875rem', // Small/Medium font size
        base: '1rem', // Base font size
        lg: '1.125rem', // Large font size
        xl: '1.25rem', // Extra large font size
        '3xl': '2rem' // Triple extra large font size
      },
      borderWidth: {
        DEFAULT: '1px', // Default border width
        0: '0', // No border
        2: '2px', // 2px border
        4: '4px', // 4px border
        8: '8px', // 8px border
        16: '16px' // 16px border
      },
      colors: {
        gray: {
          600: '#9499C3', // Custom gray color
          DEFAULT: '#A0AEC0' // Default gray color
        },
        yellow: {
          DEFAULT: '#FFD630' // Default yellow color
        },
        red: {
          DEFAULT: '#E72D2D' // Default red color
        },
        blue: {
          DEFAULT: '#298BFE', // Default blue color
          900: '#1A1C48' // Darker blue color
        },
        green: {
          DEFAULT: '#79F74B' // Default green color
        }
      }
    }
  },
  variants: {
    extend: {
      // Extend variants here if needed
    }
  },
  plugins: []
}
