# Website Translation Guide

This guide explains how to translate content for the Elnuby Group website.

## 🌐 Translation System Overview

The website now supports full bilingual content (Arabic and English) with a comprehensive translation system that includes:

- **Dynamic Language Switching**: Users can switch between Arabic and English
- **Persistent Language Preference**: User's language choice is saved
- **RTL Support**: Automatic right-to-left layout for Arabic
- **Comprehensive Content Translation**: All website content is translated

## 📁 Files Structure

```
src/
├── data/
│   ├── elnuby-data.js              # Original Arabic-only data
│   └── elnuby-data-translated.js   # New bilingual data structure
├── hooks/
│   └── useTranslatedData.ts        # Custom hook for translation
├── context/
│   └── LanguageContext.tsx         # Language context provider
├── i18n/
│   └── index.ts                    # i18n configuration
└── components/
    ├── LanguageSwitcher.tsx        # Language switching component
    └── TranslatedContentExample.tsx # Example usage
```

## 🔧 How to Use the Translation System

### 1. Using the `useTranslatedData` Hook

```typescript
import { useTranslatedData } from '../hooks/useTranslatedData';

const MyComponent: React.FC = () => {
  const { 
    getHero, 
    getAbout, 
    getServices, 
    getProjects,
    getContact,
    getCategories,
    getStats 
  } = useTranslatedData();

  const hero = getHero();
  const services = getServices();
  const projects = getProjects();

  return (
    <div>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
      
      {services.map((service, index) => (
        <div key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};
```

### 2. Available Translation Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `getHero()` | Hero section content | `{ title, subtitle, description, image }` |
| `getAbout()` | About section content | `{ title, subtitle, content, image }` |
| `getServices()` | All services | Array of service objects |
| `getProjects()` | All projects | Array of project objects |
| `getContact()` | Contact information | `{ address, phone, email }` |
| `getCategories()` | Project categories | Array of category objects |
| `getStats()` | Statistics | Array of stat objects |
| `getNavigation()` | Navigation items | Array of navigation objects |
| `getWebsiteInfo()` | Website metadata | `{ title, description, logo }` |

### 3. Language Context Usage

```typescript
import { useLanguage } from '../context/LanguageContext';

const MyComponent: React.FC = () => {
  const { language, toggleLanguage, setLanguage, forceLanguage } = useLanguage();

  return (
    <div>
      <p>Current language: {language}</p>
      
      {/* Toggle between languages */}
      <button onClick={toggleLanguage}>
        Switch Language
      </button>
      
      {/* Set specific language */}
      <button onClick={() => setLanguage('en')}>
        Set to English
      </button>
      
      {/* Force language (clears saved preference) */}
      <button onClick={() => forceLanguage('ar')}>
        Force Arabic
      </button>
    </div>
  );
};
```

## 📝 Adding New Translated Content

### 1. Adding New Projects

In `src/data/elnuby-data-translated.js`, add new projects to the `projects` array:

```javascript
{
  title: {
    ar: 'اسم المشروع بالعربية',
    en: 'Project Name in English'
  },
  description: {
    ar: 'وصف المشروع بالعربية',
    en: 'Project description in English'
  },
  category: {
    ar: 'التصنيف',
    en: 'Category'
  },
  location: {
    ar: 'الموقع',
    en: 'Location'
  },
  area: {
    ar: 'المساحة',
    en: 'Area'
  },
  status: {
    ar: 'الحالة',
    en: 'Status'
  },
  features: {
    ar: ['الميزة الأولى', 'الميزة الثانية'],
    en: ['First Feature', 'Second Feature']
  },
  client: {
    ar: 'العميل',
    en: 'Client'
  },
  value: {
    ar: 'قيمة المشروع',
    en: 'Project Value'
  }
}
```

### 2. Adding New Services

```javascript
{
  title: {
    ar: 'اسم الخدمة',
    en: 'Service Name'
  },
  description: {
    ar: 'وصف الخدمة',
    en: 'Service Description'
  },
  icon: '🏗️'
}
```

### 3. Adding New Categories

```javascript
{
  id: 'unique-id',
  name: {
    ar: 'اسم التصنيف',
    en: 'Category Name'
  }
}
```

## 🌍 Language Switching

### For Users:
- Click the globe icon (🌐) in the navigation bar
- Language choice is automatically saved
- Page refreshes with new language

### For Developers:
```typescript
// Toggle between languages
toggleLanguage();

// Set specific language
setLanguage('en'); // or 'ar'

// Force language (clears saved preference)
forceLanguage('ar');
```

## 🔄 Migration from Old System

### Before (Old System):
```typescript
import { elnubyData } from '../data/elnuby-data';

// Content was only in Arabic
const project = elnubyData.projects[0];
console.log(project.title); // Arabic only
```

### After (New System):
```typescript
import { useTranslatedData } from '../hooks/useTranslatedData';

const { getProjects } = useTranslatedData();
const projects = getProjects();

// Content is automatically translated based on current language
const project = projects[0];
console.log(project.title); // Arabic or English based on current language
```

## 📊 Current Translation Status

### ✅ Fully Translated:
- Navigation menu
- Hero section
- About section
- Services (4 services)
- Projects (7 healthcare projects)
- Contact information
- Categories
- Statistics
- Website metadata

### 🔄 Partially Translated:
- Project details (some projects need more translation)
- Additional project categories (infrastructure, educational, etc.)

### ❌ Needs Translation:
- Additional projects in other categories
- Blog posts (if any)
- News/updates section
- FAQ section
- Terms and conditions
- Privacy policy

## 🛠️ Technical Details

### Language Detection:
- Default: Arabic (`ar`)
- Fallback: English (`en`)
- Browser language detection
- Local storage persistence

### RTL Support:
- Automatic right-to-left layout for Arabic
- CSS classes: `rtl` and `ltr`
- Document direction updates
- Font family changes

### Performance:
- Translations are loaded at build time
- No runtime translation API calls
- Efficient content switching
- Minimal bundle size impact

## 🚀 Best Practices

1. **Always use the translation functions** instead of accessing data directly
2. **Test both languages** when adding new content
3. **Keep translations consistent** across similar content
4. **Use appropriate fonts** for each language
5. **Consider cultural differences** in content presentation

## 🔧 Troubleshooting

### Content not translating:
- Check if the content is in the translated data structure
- Verify the translation function is being used
- Ensure the language context is properly set up

### Language not switching:
- Check if the language context is wrapping the component
- Verify the language toggle function is working
- Check browser console for errors

### RTL layout issues:
- Ensure RTL CSS classes are applied
- Check if the document direction is being set
- Verify font families for Arabic text

## 📞 Support

For questions about the translation system:
1. Check this guide first
2. Review the example components
3. Check the TypeScript definitions
4. Contact the development team

---

**Last Updated**: December 2024
**Version**: 1.0.0 