import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Ruler, CheckCircle, ExternalLink, Phone, Mail, User, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTranslatedData } from '../hooks/useTranslatedData';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const ProjectDetails: React.FC = () => {
  const { t } = useTranslation();
  const { getProjects, getContact } = useTranslatedData();
  const { projectId } = useParams<{ projectId: string }>();
  
  const projects = getProjects();
  const contact = getContact();
  
  // Find the project by title (using projectId as title for now)
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === projectId?.toLowerCase()
  );

  if (!project) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('projectNotFound')}</h1>
          <Link to="/projects" className="btn-primary">
            {t('backToProjects')}
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case t('completed'):
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case t('underConstruction'):
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case t('inProgress'):
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 py-8">
        <div className="container-custom">
          <Link 
            to="/projects" 
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>{t('backToProjects')}</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Image Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              {project.subImages && project.subImages.length > 0 ? (
                <ProjectImageCarousel 
                  images={project.subImages} 
                  title={project.title}
                />
              ) : project.image ? (
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <span className="text-4xl font-bold">N</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('projectDetails')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('location')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Ruler className="text-primary-600 dark:text-primary-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('area')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.area}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Calendar className="text-primary-600 dark:text-primary-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('year')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.year}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="text-primary-600 dark:text-primary-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('status')}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {project.client && (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <User className="text-primary-600 dark:text-primary-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('client')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{project.client}</p>
                    </div>
                  </div>
                )}

                {project.value && (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <DollarSign className="text-primary-600 dark:text-primary-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('projectValue')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{project.value}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('features')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('projectDescription')}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              {/* Contact Info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('contactUs')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('phoneNumber')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('emailAddress')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('address')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{contact.address}</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact" className="w-full mt-6 btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <span>{t('contactUs')}</span>
                  <ExternalLink size={16} />
                </Link>
              </div>

              {/* Related Projects */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('relatedProjects')}</h3>
                <div className="space-y-4">
                  {projects
                    .filter(p => p.category === project.category && p.title !== project.title)
                    .slice(0, 3)
                    .map((relatedProject, index) => (
                      <Link
                        key={index}
                        to={`/project/${relatedProject.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {relatedProject.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 