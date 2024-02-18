import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    daisyui: {
        themes: [
          {
            mytheme: {
                "primary": "#014069",
                "secondary": "#4DBAFF",
                "accent": "#e263b6",
                "neutral": "#1c1d2b",
                "base-100": "#f6f8f9",
                "info": "#3b5bc4",
                "success": "#1bac8d",
                "warning": "#f7b064",
                "error": "#da402f",
            },
          },
        ],
      },

      plugins: [forms, require("daisyui")],
};
