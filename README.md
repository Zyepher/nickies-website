# Nickies Website

A website built with pure HTML, Tailwind CSS v3.4.17, and JavaScript, designed to be hosted on GitHub Pages.

## Project Structure

```
nickies-website/
├── index.html          # Main HTML file
├── dist/
│   └── output.css      # Generated Tailwind CSS (production)
├── src/
│   └── input.css       # Tailwind input file with custom styles
├── tailwind.config.js  # Tailwind configuration
├── package.json        # NPM configuration
└── .gitignore          # Git ignore file
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build CSS for production:
   ```bash
   npm run build-css
   ```

3. For development (watches for changes):
   ```bash
   npm run dev
   ```

## Development Workflow

### Option 1: Using Local Build (Recommended)
1. Make changes to your HTML or CSS
2. Run `npm run dev` to watch for changes
3. Open `index.html` in your browser
4. Before committing, run `npm run build-css` to create optimized CSS

### Option 2: Using CDN (Quick Development)
1. In `index.html`, comment out the local CSS link and uncomment the CDN script
2. Make your changes
3. Before deploying, switch back to local CSS and run `npm run build-css`

## Deploying to GitHub Pages

1. Build the CSS: `npm run build-css`
2. Commit all changes including the `dist/output.css` file
3. Push to GitHub
4. Enable GitHub Pages in repository settings
5. Set source to deploy from the main branch root directory

## Customization

- **Colors**: Edit color palette in `tailwind.config.js`
- **Fonts**: Update font family in `tailwind.config.js`
- **Custom CSS**: Add custom styles to `src/input.css`

## Notes

- The `dist/output.css` file is included in the repository for GitHub Pages
- Always run `npm run build-css` before committing to ensure optimized CSS
- The project uses Tailwind's JIT mode for optimal file size