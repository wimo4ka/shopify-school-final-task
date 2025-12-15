# 🛍️ Product Details Page (PDP)

A **Product Details Page (PDP)** was built based on the provided design.

### Clone

🔗 **Repository:**  
https://github.com/wimo4ka/shopify-school-final-task.git

The project is bundled with **Vite**.  

### Preview
```bash
npm run dev
```

## Theme architecture

```bash
.
├── assets          # Stores static assets (CSS, JS, images, fonts, etc.)
├── blocks          # Reusable, nestable, customizable UI components
├── config          # Global theme settings and customization options
├── layout          # Top-level wrappers for pages (layout templates)
├── locales         # Translation files for theme internationalization
├── sections        # Modular full-width page components
├── snippets        # Reusable Liquid code or HTML fragments
└── templates       # Templates combining sections to define page structures
```
## ✨ Implemented Features
1. Header & Footer

The header and footer were reused from Lesson 5 homework: “Building Pages in Shopify”.
The current implementation can be improved — details are listed in the Improvements section.

2. Main Product Section
  (main-product-section.liquid)

The section is fully block-based, allowing flexible content management.
Some logic was extracted into snippets to improve readability and maintainability.

Implemented blocks:

- Product link
  Extracted into a separate snippet.
  The Home link is implemented via linklists['main-menu'].links.

- Product gallery
  Implemented using Swiper.js to display the main product image and navigate between images.
  An option for a minimum product rating was added to display a “Highly rated” badge.
  Later it was noted that this should be implemented via product tags — added to improvements.

- Product title

- Star rating
  Implemented as a separate snippet.
  Rating data is retrieved from product metafields.

- Product price
  Implemented as a separate snippet.
  If compare_at_price exists, it is displayed as crossed out.
  Additional badges Sold Out and On Sale were added.

- Color picker
  Implemented as a separate snippet using the Section Rendering API.
  Products are grouped using the metafield product.metafields.custom.group_key.
  Each color swatch updates the section to display the selected product.

- Size option
  Implemented as a component using the Section Rendering API.
  The section updates when a variant is selected.
  Styles are added for unavailable variants.
  A Size popup is implemented as a separate component (planned to move to metafields).

- Buy button
  Implemented as a separate snippet using the product form.
  The button is disabled when the selected variant is unavailable.

- Checkout details
  Added editable texts and icons via section settings.

3. Accordion (Description / Shipping / Returns)
  (accordion.liquid)

  Implemented using details / summary elements.
  Content is loaded from product metafields:

- product.metafields.custom.size_fit
- product.metafields.custom.product_notes
- product.metafields.custom.returns_policy

  Each accordion item is rendered via a reusable accordion-item snippet.
  Text content is fully editable by the merchant.

4. Recommended Products
  (recommendation-carousel.liquid)

  The “You may also like” section is implemented using the Search & Discovery app.
  The section is rendered via a recommendations-carousel component.

  - A Swiper carousel appears if there are more than 4 products
  - Product cards are implemented as a separate snippet
  - Section settings allow changing the heading and product count

5. Reviews (Basic Version)
  (reviews-section.liquid)

  Reviews are loaded from the metaobject product.metafields.custom.reviews.
  Each review card is rendered via a separate snippet.

  - Configurable maximum number of reviews (up to 5)
  - The section is rendered only if reviews exist

6. Hero Banner with CTA
  (hero-section.liquid)

  A hero banner with:

  - Separate images for desktop and mobile
  - Rich text content
  - Configurable CTA button with link

## 🛠️ Technologies Used

  - Shopify
  - Liquid
  - JavaScript
  - Tailwind CSS 4.0
  - Swiper.js
  - Vite

## 🔧 Improvements (Planned)

- Improve header burger menu
- Footer: 
    Refactor styles to Tailwind
    Add text content according to the design
- Main Product Section:
    Replace rating-based badge logic with product tags
- Size popup:
  Implement via metafields

## 🔗 Demo Store

🌐 Store link:
https://final-task-2.myshopify.com/?preview_theme_id=184002380141

🔑 Password:
pahgaw

