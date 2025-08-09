// Size selector functionality
const sizeButtons = document.querySelectorAll('.size-btn');

sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.dataset.product;
        const price = btn.dataset.price;
        const card = btn.closest('.beverage-card');
        
        // Update active button styling for this product
        card.querySelectorAll('.size-btn').forEach(b => {
            // Remove all active-related classes
            b.classList.remove('active', 'border-stone-800', 'dark:border-white', 
                              'bg-stone-800', 'dark:bg-white', 'text-white', 
                              'dark:text-black', 'shadow-lg');
            // Add inactive classes
            b.classList.add('border-stone-300', 'dark:border-stone-800', 
                           'text-stone-600', 'dark:text-stone-400');
        });
        
        // Set active state for clicked button
        btn.classList.remove('border-stone-300', 'dark:border-stone-800', 
                            'text-stone-600', 'dark:text-stone-400');
        btn.classList.add('active', 'border-stone-800', 'dark:border-white', 
                         'bg-stone-800', 'dark:bg-white', 'text-white', 
                         'dark:text-black', 'shadow-lg');
        
        // Update all price displays (both desktop and mobile)
        const priceDisplays = card.querySelectorAll('.price-display');
        priceDisplays.forEach(display => {
            display.textContent = price;
        });
    });
});

// Tier selection for beverage cards
const tierBtns = document.querySelectorAll('.tier-btn');

tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.beverage-card');
        const product = btn.dataset.product;
        const tier = btn.dataset.tier;
        const prices = JSON.parse(btn.dataset.prices);
        
        // Get elements to update (both desktop and mobile)
        const image = card.querySelector(`#${product}-image`);
        const title = card.querySelector(`#${product}-title`);
        const description = card.querySelector(`#${product}-description`);
        const tierBadge = card.querySelector(`#${product}-tier-badge`);
        
        // Also get mobile elements
        const imageMobile = card.querySelector(`#${product}-image-mobile`);
        const titleMobile = card.querySelector(`#${product}-title-mobile`);
        const descriptionMobile = card.querySelector(`#${product}-description-mobile`);
        const tierBadgeMobile = card.querySelector(`#${product}-tier-badge-mobile`);
        
        // Update active tier button styling
        card.querySelectorAll('.tier-btn').forEach(b => {
            // Remove all active-related classes
            b.classList.remove('active', 'border-stone-800', 'dark:border-white', 
                              'bg-stone-800', 'dark:bg-white', 'text-white', 
                              'dark:text-black', 'shadow-lg');
            // Add inactive classes
            b.classList.add('border-stone-300', 'dark:border-stone-800', 
                           'text-stone-600', 'dark:text-stone-400');
        });
        
        // Set active state for clicked button
        btn.classList.remove('border-stone-300', 'dark:border-stone-800', 
                            'text-stone-600', 'dark:text-stone-400');
        btn.classList.add('active', 'border-stone-800', 'dark:border-white', 
                         'bg-stone-800', 'dark:bg-white', 'text-white', 
                         'dark:text-black', 'shadow-lg');
        
        // Update content based on tier
        if (product === 'coffee') {
            switch(tier) {
                case 'standard':
                        image.src = './assets/images/beverages/classic-coffee.png';
                        title.textContent = 'Classic Coffee';
                        description.innerHTML = "Local coffee beans brewed strong using<br>traditional way, with full cream milk and<br>condensed milk. It's a timeless classic.";
                        tierBadge.textContent = 'Standard';
                        tierBadge.className = 'inline-block px-3 py-1 bg-gradient-to-r from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-xs font-bold uppercase tracking-wider';
                        break;
                case 'premium':
                        image.src = './assets/images/beverages/caffe-latte.png';
                        title.textContent = 'Caffè Latte';
                        description.innerHTML = 'Precisely extracted espresso shots with<br>fresh milk, unsweetened. Aromatic flavor<br>with a silky finish. For true coffee lovers.';
                        tierBadge.textContent = 'Premium';
                        tierBadge.className = 'inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-bold uppercase tracking-wider';
                        break;
                case 'luxury':
                        image.src = './assets/images/beverages/caramel-macchiato.png';
                        title.textContent = 'Caramel Macchiato';
                        tierBadge.textContent = 'Luxury';
                        tierBadge.className = 'inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-bold uppercase tracking-wider';
                        description.innerHTML = 'Dark smoky arabica espresso shots with<br>fresh milk, finished with caramel drizzle<br>and Madagascar vanilla syrup. Signature.';
                        break;
                }
        } else if (product === 'chocolate') {
            switch(tier) {
                case 'standard':
                        image.src = './assets/images/beverages/nickies-chocolate.png';
                        title.textContent = 'Dutch Chocolate';
                        description.innerHTML = 'Creamy Dutched cocoa with fresh milk,<br>finished with salted caramel drizzle and<br>Madagascar vanilla syrup. Real chocolate.';
                        tierBadge.textContent = 'Standard';
                        tierBadge.className = 'inline-block px-3 py-1 bg-gradient-to-r from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-xs font-bold uppercase tracking-wider';
                        break;
                case 'premium':
                        image.src = './assets/images/beverages/nickies-chocolate.png';
                        title.textContent = 'Belgian Chocolate';
                        description.innerHTML = 'European dark-red cocoa with fresh milk,<br>finished with salted caramel drizzle and<br>Madagascar vanilla syrup. Most beloved.';
                        tierBadge.textContent = 'Premium';
                        tierBadge.className = 'inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-bold uppercase tracking-wider';
                        break;
                case 'luxury':
                        image.src = './assets/images/beverages/nickies-chocolate.png';
                        title.textContent = 'Valrhona Chocolate';
                        description.innerHTML = 'Renowned French cocoa with fresh milk,<br>finished with salted caramel drizzle and<br>Madagascar vanilla syrup. Special treat.';
                        tierBadge.textContent = 'Luxury';
                        tierBadge.className = 'inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-bold uppercase tracking-wider';
                        break;
            }
        }
        
        // Update mobile elements if they exist
        if (imageMobile) imageMobile.src = image.src;
        if (titleMobile) titleMobile.textContent = title.textContent;
        if (descriptionMobile) descriptionMobile.innerHTML = description.innerHTML;
        if (tierBadgeMobile) {
            tierBadgeMobile.textContent = tierBadge.textContent;
            tierBadgeMobile.className = tierBadge.className;
        }
        
        // Update size buttons with new prices
        card.querySelectorAll('.size-btn').forEach(sizeBtn => {
                const size = sizeBtn.textContent.trim();
                let sizeKey;
                // Handle both regular space and thin space
                const normalizedSize = size.replace(/[\s\u2009]/g, ' ');
                switch(normalizedSize) {
                    case '12 oz': sizeKey = '12oz'; break;
                    case '16 oz': sizeKey = '16oz'; break;
                    case '20 oz': sizeKey = '20oz'; break;
                    case '500 mL': sizeKey = '500ml'; break;
                    case '1 Litre': sizeKey = '1L'; break;
                }
                if (sizeKey && prices[sizeKey]) {
                    sizeBtn.dataset.price = prices[sizeKey];
                    // Update price display if this size is currently selected
                    if (sizeBtn.classList.contains('active')) {
                        const priceDisplays = card.querySelectorAll('.price-display');
                        priceDisplays.forEach(display => {
                            display.textContent = prices[sizeKey];
                        });
                    }
                }
        });
            
    });
});

// Initialize default selections - update content without triggering click
document.querySelectorAll('.beverage-card').forEach(card => {
    const productType = card.querySelector('.tier-btn').dataset.product;
    
    if (productType === 'coffee') {
        // Set luxury tier content for coffee
        const image = card.querySelector('#coffee-image');
        const title = card.querySelector('#coffee-title');
        const description = card.querySelector('#coffee-description');
        const tierBadge = card.querySelector('#coffee-tier-badge');
        const imageMobile = card.querySelector('#coffee-image-mobile');
        const titleMobile = card.querySelector('#coffee-title-mobile');
        const descriptionMobile = card.querySelector('#coffee-description-mobile');
        const tierBadgeMobile = card.querySelector('#coffee-tier-badge-mobile');
        
        if (image) image.src = './assets/images/beverages/caramel-macchiato.png';
        if (title) title.textContent = 'Caramel Macchiato';
        if (description) description.innerHTML = 'Dark smoky arabica espresso shots with<br>fresh milk, finished with caramel drizzle<br>and Madagascar vanilla syrup. Signature.';
        if (tierBadge) {
            tierBadge.textContent = 'Luxury';
            tierBadge.className = 'inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-bold uppercase tracking-wider';
        }
        if (imageMobile) imageMobile.src = './assets/images/beverages/caramel-macchiato.png';
        if (titleMobile) titleMobile.textContent = 'Caramel Macchiato';
        if (descriptionMobile) descriptionMobile.innerHTML = 'Dark smoky arabica espresso shots with<br>fresh milk, finished with caramel drizzle<br>and Madagascar vanilla syrup. Signature.';
        if (tierBadgeMobile) {
            tierBadgeMobile.textContent = 'Luxury';
            tierBadgeMobile.className = 'inline-block px-2 py-0.5 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-bold uppercase tracking-wider';
        }
        
        // Update price for 500ml
        const priceDisplays = card.querySelectorAll('.price-display');
        priceDisplays.forEach(display => {
            display.textContent = '18';
        });
        
    } else if (productType === 'chocolate') {
        // Set premium tier content for chocolate
        const image = card.querySelector('#chocolate-image');
        const title = card.querySelector('#chocolate-title');
        const description = card.querySelector('#chocolate-description');
        const tierBadge = card.querySelector('#chocolate-tier-badge');
        const imageMobile = card.querySelector('#chocolate-image-mobile');
        const titleMobile = card.querySelector('#chocolate-title-mobile');
        const descriptionMobile = card.querySelector('#chocolate-description-mobile');
        const tierBadgeMobile = card.querySelector('#chocolate-tier-badge-mobile');
        
        if (image) image.src = './assets/images/beverages/nickies-chocolate.png';
        if (title) title.textContent = 'Belgian Chocolate';
        if (description) description.innerHTML = 'European dark-red cocoa with fresh milk,<br>finished with salted caramel drizzle and<br>Madagascar vanilla syrup. Most beloved.';
        if (tierBadge) {
            tierBadge.textContent = 'Premium';
            tierBadge.className = 'inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-bold uppercase tracking-wider';
        }
        if (imageMobile) imageMobile.src = './assets/images/beverages/nickies-chocolate.png';
        if (titleMobile) titleMobile.textContent = 'Belgian Chocolate';
        if (descriptionMobile) descriptionMobile.innerHTML = 'European dark-red cocoa with fresh milk,<br>finished with salted caramel drizzle and<br>Madagascar vanilla syrup. Most beloved.';
        if (tierBadgeMobile) {
            tierBadgeMobile.textContent = 'Premium';
            tierBadgeMobile.className = 'inline-block px-2 py-0.5 bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-bold uppercase tracking-wider';
        }
        
        // Update price for 500ml
        const priceDisplays = card.querySelectorAll('.price-display');
        priceDisplays.forEach(display => {
            display.textContent = '16';
        });
    }
});