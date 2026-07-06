# Search Field Design - Visual Guide

Quick reference for visual design and styling of the search field component.

---

## HTML Markup (Design Structure)
```html
<div class="inner-navbar-search-container premium-search-container mb-0 flex-grow-1" style="min-width: 170px;">
  <!-- Search Icon (Visual) -->
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
  
  <!-- Input Field (Visual) -->
  <input type="text" 
         class="inner-navbar-search-input premium-search-input" 
         placeholder="Search [ENTITY]" />
</div>
```

---

## Design Specifications

### Dimensions
| Component | Width | Height | Notes |
|-----------|-------|--------|-------|
| Container | 170px min | 36px | Flexible width |
| Icon | 16px | 16px | Centered vertically |
| Input | Flex 1 | 36px | Takes remaining space |

### Spacing
| Element | Value | Purpose |
|---------|-------|---------|
| Container Padding | 8px 12px | Internal padding |
| Icon-Input Gap | 8px | Separation |
| Border Radius | 4px | Rounded corners |

### Colors
| State | Element | Color | Hex |
|-------|---------|-------|-----|
| **Default** | Border | Light Gray | #e5e7eb |
| | Background | White | #ffffff |
| | Icon | Gray | #9ca3af |
| **Hover** | Border | Medium Gray | #d1d5db |
| **Focus** | Border | Green | #3dcd58 |
| | Shadow | Soft Green | rgba(61, 205, 88, 0.1) |

### Typography
| Element | Size | Weight |
|---------|------|--------|
| Input Text | 14px | 400 |
| Placeholder | 14px | 400 |

---

## Visual States

### 🔘 Default (Idle)
```
┌─────────────────────────────────┐
│ 🔍  Search points               │
└─────────────────────────────────┘
Border: Light Gray (#e5e7eb)
```

### 🔘 Hover
```
┌─────────────────────────────────┐
│ 🔍  Search points               │
└─────────────────────────────────┘
Border: Medium Gray (#d1d5db)
Cursor: text
```

### 🔘 Focus / Active
```
┌─────────────────────────────────┐
│ 🔍  controller-points           │
└─────────────────────────────────┘
Border: Green (#3dcd58)
Shadow: Soft glow
```

---

## Design Variants

### Compact Size
```
Height: 32px
Padding: 6px 10px
Font: 13px
Icon: 14x14px
```

### Large Size
```
Height: 40px
Padding: 10px 14px
Font: 16px
Icon: 18x18px
```

### Dark Theme
```
Background: #1f2937
Border: #374151
Text: #f3f4f6
Placeholder: #9ca3af
Focus Border: #3dcd58
```

---

## Responsive Breakpoints

| Viewport | Min Width | Padding | Font |
|----------|-----------|---------|------|
| Desktop ≥768px | 170px | 8px 12px | 14px |
| Tablet 480-768px | 120px | 6px 10px | 13px |
| Mobile <480px | 100% | 8px 12px | 14px |

---

## Key Design Principles

✓ **Consistent**: Uses Impact brand green (#3dcd58) for focus state  
✓ **Accessible**: 36px height for adequate touch targets  
✓ **Clean**: Minimal borders, clear icon integration  
✓ **Responsive**: Adapts to screen sizes  
✓ **Interactive**: Visual feedback on hover & focus  

---

## CSS Classes Used

| Class | Purpose |
|-------|---------|
| `.inner-navbar-search-container` | Main container layout |
| `.premium-search-container` | Premium theme variant |
| `.inner-navbar-search-icon` | Icon styling |
| `.premium-search-icon` | Icon premium variant |
| `.inner-navbar-search-input` | Input field styling |
| `.premium-search-input` | Input premium variant |

See `scss/style.css` for full CSS implementations.
