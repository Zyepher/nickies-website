# Project Structure

## Overview
This is a simple HTML + TailwindCSS + JavaScript website with no build tools like Vite. The project is organized for better maintainability.

## Directory Structure

```
nickies-website/
├── assets/                  # All static assets
│   ├── css/                # Stylesheets
│   │   ├── input.css       # TailwindCSS input file
│   │   └── output.css      # Compiled TailwindCSS output
│   ├── images/             # All images
│   │   ├── beverages/      # Product images (SVGs)
│   │   ├── icons/          # Favicons and app icons
│   │   └── reviews/        # Customer review media
│   └── js/                 # JavaScript modules
│       ├── theme.js        # Theme initialization (runs immediately)
│       ├── main.js         # Main app functionality
│       ├── products.js     # Product tier/size selection
│       └── media-viewer.js # Image/video gallery viewer
├── index.html              # Main HTML file
├── package.json            # NPM dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
└── [other config files]    # Robots.txt, sitemap, etc.
```

## Build Commands

- `npm run build-css` - Build minified CSS for production
- `npm run dev` or `npm run watch` - Watch and rebuild CSS during development

## Notes

- No bundler or build tool like Vite is used
- JavaScript files are loaded directly as ES5 scripts (not modules)
- TailwindCSS is compiled from `assets/css/input.css` to `assets/css/output.css`
- All paths are relative for easy deployment