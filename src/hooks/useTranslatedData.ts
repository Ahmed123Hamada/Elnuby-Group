import { useLanguage } from '../context/LanguageContext';
import { elnubyDataTranslated, getTranslatedContent, getTranslatedArray } from '../data/elnuby-data-translated';

export const useTranslatedData = () => {
  const { language } = useLanguage();

  const getText = (content: any) => {
    return getTranslatedContent(content, language);
  };

  const getArray = (array: any[]) => {
    return getTranslatedArray(array, language);
  };

  const getProject = (project: any) => {
    return {
      ...project,
      title: getText(project.title),
      description: getText(project.description),
      category: getText(project.category),
      location: getText(project.location),
      area: getText(project.area),
      status: getText(project.status),
      features: getArray(project.features),
      client: getText(project.client),
      value: getText(project.value)
    };
  };

  const getService = (service: any) => {
    return {
      ...service,
      title: getText(service.title),
      description: getText(service.description)
    };
  };

  const getNavigation = () => {
    return elnubyDataTranslated.navigation.map(item => ({
      ...item,
      text: getText(item.text)
    }));
  };

  const getHero = () => {
    return {
      title: getText(elnubyDataTranslated.hero.title),
      subtitle: getText(elnubyDataTranslated.hero.subtitle),
      description: getText(elnubyDataTranslated.hero.description),
      image: elnubyDataTranslated.hero.image
    };
  };

  const getAbout = () => {
    return {
      title: getText(elnubyDataTranslated.about.title),
      subtitle: getText(elnubyDataTranslated.about.subtitle),
      content: getText(elnubyDataTranslated.about.content),
      image: elnubyDataTranslated.about.image
    };
  };

  const getServices = () => {
    return elnubyDataTranslated.services.map(service => getService(service));
  };

  const getProjects = () => {
    return elnubyDataTranslated.projects.map(project => getProject(project));
  };

  const getContact = () => {
    return {
      address: getText(elnubyDataTranslated.contact.address),
      phone: getText(elnubyDataTranslated.contact.phone),
      email: getText(elnubyDataTranslated.contact.email)
    };
  };

  const getCategories = () => {
    return elnubyDataTranslated.categories.map(category => ({
      ...category,
      name: getText(category.name)
    }));
  };

  const getStats = () => {
    return elnubyDataTranslated.stats.map(stat => ({
      ...stat,
      label: getText(stat.label)
    }));
  };

  const getWebsiteInfo = () => {
    return {
      title: getText(elnubyDataTranslated.websiteInfo.title),
      description: getText(elnubyDataTranslated.websiteInfo.description),
      logo: {
        ...elnubyDataTranslated.websiteInfo.logo,
        alt: getText(elnubyDataTranslated.websiteInfo.logo.alt)
      }
    };
  };

  return {
    language,
    getText,
    getArray,
    getProject,
    getService,
    getNavigation,
    getHero,
    getAbout,
    getServices,
    getProjects,
    getContact,
    getCategories,
    getStats,
    getWebsiteInfo
  };
}; 