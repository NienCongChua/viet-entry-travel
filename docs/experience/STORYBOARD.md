# Storyboard & Cinematic Experience Architecture

## 1. Overview Experience Spine (`/culinary`)
```yaml
scene:
  id: chapter-01-culinary-hero
  question: "What defines Vietnamese cuisine to an international traveler?"
  takeaway: "Vietnamese gastronomy is an ancient balance of five elements, fresh wild herbs, and regional terroir."
  composition:
    background: "Warm steaming street scene & dawn pho broth cauldron"
    foreground: "High-contrast editorial serif title with brand red badge"
  scroll:
    pin: false
  beats:
    - { at: 0.0, state: "Atmospheric hero with floating steam nuance and clear orientation" }
    - { at: 0.3, state: "The 3 Pillars of Vietnamese Culinary Philosophy" }
    - { at: 0.6, state: "Interactive Regional Terroir Explorer with multi-province tabs" }
    - { at: 1.0, state: "Call to Action for bespoke food tours & culinary booking" }
```

## 2. Dish Deep Cultural Storytelling (`/culinary/:slug`)
```yaml
scene:
  id: chapter-02-dish-detail
  question: "How was this dish created, how is it cooked, and where should travelers eat it?"
  takeaway: "Every bite is connected to a specific town, water source, and generational technique."
  composition:
    hero: "High-resolution signature dish plating with origin metadata"
    gallery: "3-4 real verified photos with interactive full-screen lightbox"
    flavor_radar: "Savory, sweet, sour, spicy, herbal umami visualizer"
    anatomy: "Key indigenous ingredients card grid"
    recipe_timeline: "Step-by-step master technique breakdown"
    tasting_secrets: "Insider dining etiquette & recommended traditional eateries"
```
