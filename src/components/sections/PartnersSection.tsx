import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  // Import all partner logos
  const partnerLogos = [
    { id: 1, src: require('../../assast/Images/Partner/logos-1.jpg'), alt: 'Partner 1' },
    { id: 2, src: require('../../assast/Images/Partner/logos-2.jpg'), alt: 'Partner 2' },
    { id: 3, src: require('../../assast/Images/Partner/logos-3.jpg'), alt: 'Partner 3' },
    { id: 4, src: require('../../assast/Images/Partner/logos-4.jpg'), alt: 'Partner 4' },
    { id: 5, src: require('../../assast/Images/Partner/logos-5.jpg'), alt: 'Partner 5' },
    { id: 6, src: require('../../assast/Images/Partner/logos-6.jpg'), alt: 'Partner 6' },
    { id: 7, src: require('../../assast/Images/Partner/logos-7.jpg'), alt: 'Partner 7' },
    { id: 8, src: require('../../assast/Images/Partner/logos-8.jpg'), alt: 'Partner 8' },
    { id: 9, src: require('../../assast/Images/Partner/logos-9.jpg'), alt: 'Partner 9' },
    { id: 10, src: require('../../assast/Images/Partner/logos-10.jpg'), alt: 'Partner 10' },
    { id: 11, src: require('../../assast/Images/Partner/logos-11.jpg'), alt: 'Partner 11' },
    { id: 12, src: require('../../assast/Images/Partner/logos-12.jpg'), alt: 'Partner 12' },
    { id: 13, src: require('../../assast/Images/Partner/logos-13.jpg'), alt: 'Partner 13' },
    { id: 14, src: require('../../assast/Images/Partner/logos-14.jpg'), alt: 'Partner 14' },
    { id: 15, src: require('../../assast/Images/Partner/logos-15.jpg'), alt: 'Partner 15' },
    { id: 16, src: require('../../assast/Images/Partner/logos-16.jpg'), alt: 'Partner 16' },
    { id: 17, src: require('../../assast/Images/Partner/logos-17.jpg'), alt: 'Partner 17' },
    { id: 18, src: require('../../assast/Images/Partner/logos-18.jpg'), alt: 'Partner 18' },
    { id: 19, src: require('../../assast/Images/Partner/logos-19.jpg'), alt: 'Partner 19' },
    { id: 20, src: require('../../assast/Images/Partner/logos-20.jpg'), alt: 'Partner 20' },
    { id: 21, src: require('../../assast/Images/Partner/logos-21.jpg'), alt: 'Partner 21' },
    { id: 22, src: require('../../assast/Images/Partner/logos-22.jpg'), alt: 'Partner 22' }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden md:px-10">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-brand-text dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('ourPartnersTitle') || 'Our Trusted Partners'}
          </motion.h2>
          <motion.p 
            className="text-xl text-brand-text-light dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('ourPartnersSubtitle') || 'We collaborate with leading organizations to deliver exceptional results and create lasting value'}
          </motion.p>
        </motion.div>

        {/* Modern Partners Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
                         breakpoints={{
               640: {
                 slidesPerView: 1,
                 spaceBetween: 40,
               },
               768: {
                 slidesPerView: 2,
                 spaceBetween: 50,
               },
               1024: {
                 slidesPerView: 3,
                 spaceBetween: 60,
               },
               1280: {
                 slidesPerView: 4,
                 spaceBetween: 80,
               },
             }}
            className="partners-swiper"
          >
            {partnerLogos.map((partner) => (
              <SwiperSlide key={partner.id}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group cursor-pointer"
                >
                                     <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 h-48 flex items-center justify-center">
                     <img
                       src={partner.src}
                       alt={partner.alt}
                       className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                       loading="lazy"
                     />
                   </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>


        </motion.div>

        {/* Partnership Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-elnuby-orange to-elnuby-darkOrange rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('partnershipMessage') || 'Building Success Together'}
            </motion.h3>
            <motion.p 
              className="text-lg leading-relaxed opacity-90 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('partnershipDescription') || 'Through strategic partnerships and collaborative relationships, we continue to expand our capabilities and deliver innovative solutions that exceed expectations. Join us in building a better future.'}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
