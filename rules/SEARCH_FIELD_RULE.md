# Search Field Design System

## Overview
Visual design pattern for search field component with icon integration, modern styling, and responsive layout.

---

## Visual Structure

### Component Layout
```
┌─────────────────────────────────────┐
│ 🔍  [Input Field with placeholder] │
└─────────────────────────────────────┘
```

### Markup Structure
```html
<div class="inner-navbar-search-container premium-search-container mb-0 flex-grow-1" style="min-width: 170px;">
  <!-- Search Icon -->
  <svg class="inner-navbar-search-icon premium-search-icon" 
       xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
       stroke-width="2" 
       stroke-linecap="round" 
       stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
  
  <!-- Input Field -->
  <input type="text" 
         class="inner-navbar-search-input premium-search-input" 
         placeholder="Search points" />
</div>
```

---

## CSS Design Classes

### Container Styling
```scss
.inner-navbar-search-container {
  // Layout
  display: flex;
  align-items: center;
  position: relative;
  
  // Spacing
  padding: 8px 12px;
  gap: 8px;  // Space between icon and input
  
  // Borders & Background
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  
  // Sizing
  min-height: 36px;
  width: 100%;
  
  // Hover & Focus States
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    border-color: #d1d5db;
  }
  
  &:focus-within {
    border-color: #3dcd58;
    box-shadow: 0 0 0 3px rgba(61, 205, 88, 0.1);
  }
}

.premium-search-container {
  // Premium theme variant
  // Inherits from base, can override colors/spacing
}
```

### Icon Styling
```scss
.inner-navbar-search-icon {
  // Sizing
  width: 16px;
  height: 16px;
  min-width: 16px;
  
  // Color & Appearance
  color: #9ca3af;
  stroke-width: 2;
  
  // Layout
  flex-shrink: 0;
  pointer-events: none;
}

.premium-search-icon {
  // Premium icon styling
  color: #6b7280;
}
```

### Input Field Styling
```scss
.inner-navbar-search-input {
  // Layout
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  
  // Typography
  font-size: 14px;
  font-weight: 400;
  color: #1f2937;
  
  // Spacing
  padding: 0;
  margin: 0;
  
  // Placeholder styling
  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }
  
  // Focus state
  &:focus {
    outline: none;
  }
}

.premium-search-input {
  // Premium input variant
  color: #111827;
  
  &::placeholder {
    color: #9ca3af;
  }
}
```

---

## Color Palette

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background | White | `#ffffff` | Container background |
| Border (Default) | Light Gray | `#e5e7eb` | Border color |
| Border (Hover) | Medium Gray | `#d1d5db` | Hover state |
| Border (Focus) | Success Green | `#3dcd58` | Focus/active state |
| Icon | Gray | `#9ca3af` | Search icon color |
| Text | Dark Gray | `#1f2937` | Input text color |
| Placeholder | Light Gray | `#9ca3af` | Placeholder text |

---

## Typography

| Element | Font Size | Font Weight | Line Height |
|---------|-----------|-------------|-------------|
| Input Text | 14px | 400 | 1.5 |
| Placeholder | 14px | 400 | 1.5 |

---

## Spacing & Dimensions

| Property | Value | Purpose |
|----------|-------|---------|
| Container Padding | 8px 12px | Internal spacing |
| Icon-Input Gap | 8px | Space between icon and input |
| Icon Size | 16x16px | SVG dimensions |
| Min Height | 36px | Accessible touch target |
| Min Width | 170px | Minimum container width |
| Border Radius | 4px | Rounded corners |

---

## States & Interactions

### Default State
```
Border: #e5e7eb (light gray)
Background: #ffffff
Icon: #9ca3af
Text: #1f2937
```

### Hover State
```
Border: #d1d5db (darker gray)
Background: #ffffff
Icon: #6b7280
Cursor: text
```

### Focus State (User Typing)
```
Border: #3dcd58 (success green)
Box Shadow: 0 0 0 3px rgba(61, 205, 88, 0.1)
Background: #ffffff
Icon: #6b7280
```

### Filled State (Has Text)
```
All same as focus state
Icon remains: #6b7280
Text visible: #1f2937
```

---

## Responsive Design

### Desktop (≥768px)
- Min Width: 170px
- Padding: 8px 12px
- Font Size: 14px
- Full flex layout

### Tablet (768px - 480px)
- Min Width: 120px
- Padding: 6px 10px
- Font Size: 13px
- Adjusted spacing

### Mobile (<480px)
- Min Width: 100% (full width within container)
- Padding: 8px 12px
- Font Size: 14px
- Stacked layout consideration

---

## Design Variants

### Standard (Current)
- Green focus border (#3dcd58)
- Subtle shadows
- 4px border radius

### Compact Variant
```scss
.search-field-compact {
  padding: 4px 8px;
  min-height: 32px;
  font-size: 12px;
  
  .inner-navbar-search-icon {
    width: 14px;
    height: 14px;
  }
}
```

### Large Variant
```scss
.search-field-large {
  padding: 10px 14px;
  min-height: 40px;
  font-size: 16px;
  gap: 10px;
  
  .inner-navbar-search-icon {
    width: 18px;
    height: 18px;
  }
}
```

### Dark Theme Variant
```scss
.search-field-dark {
  background-color: #1f2937;
  border-color: #374151;
  color: #f3f4f6;
  
  &:focus-within {
    border-color: #3dcd58;
  }
  
  .inner-navbar-search-input {
    color: #f3f4f6;
    
    &::placeholder {
      color: #9ca3af;
    }
  }
  
  .inner-navbar-search-icon {
    color: #6b7280;
  }
}
```

---

## Visual Examples

### With Focus Border & Shadow
```
┌──────────────────────────────────┐
│ 🔍  Search points...             │  ← Green border, soft shadow
└──────────────────────────────────┘
     ↓ Focus state active
```

### With Text Entered
```
┌──────────────────────────────────┐
│ 🔍  controller-points            │  ← Text visible, green border
└──────────────────────────────────┘
```

### Hover State
```
┌──────────────────────────────────┐
│ 🔍  Search points...             │  ← Darker gray border
└──────────────────────────────────┘
```

---

## Design File References
- **Styling**: See `scss/style.css` for complete CSS implementations
- **Example**: [PointStatusList.html](../PointStatusList.html) line ~245
- **Theme**: Green accent (#3dcd58) follows Impact branding
