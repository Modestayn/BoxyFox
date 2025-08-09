import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import headerBG from '../assets/img/header-bg.jpg';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Home = () => {
  const { t } = useTranslation();

  return (
      <main className="w-full pt-32 px-0 bg-white font-sans mt-[-70px]">
        <section className="w-full bg-white px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
            <motion.div
                className="flex flex-col gap-4 md:gap-5 text-center md:text-left max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 leading-tight tracking-tight">
                BoxyFox
              </h1>
              <p className="text-4xl sm:text-xl text-gray-800 font-bold leading-tight">
                {t('logistics_delivery')}
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {t(
                    'home_intro'
                )}
              </p>
              <div className="mt-3">
                <Link to="/about">
                  <Button className="bg-orange-600 text-white hover:bg-orange-700 transition-colors text-sm sm:text-base px-6 py-2 rounded-md">
                    {t('more')}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Картинка */}
            <motion.div
                className="relative w-full max-w-md sm:max-w-lg md:w-[500px] h-[260px] sm:h-[320px] md:h-[400px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
              <img src={headerBG} alt={t('hero_alt')} className="w-full h-full object-contain" />
            </motion.div>
          </div>
        </section>

        <section
            className="w-full mt-36 bg-black py-20 px-4"
            aria-label={t('how_we_work_section_aria')}
            itemScope
            itemType="https://schema.org/HowTo"
        >
          <motion.div
              className="max-w-7xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" itemProp="name">
              {t('how_we_work')}
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                {
                  icon: '⚡',
                  title: t('operatively'),
                  desc: t('operatively_desc'),
                },
                {
                  icon: '🔐',
                  title: t('reliably'),
                  desc: t('reliably_desc'),
                },
                {
                  icon: '🛣️',
                  title: t('optimally'),
                  desc: t('optimally_desc'),
                },
                {
                  icon: '🤝',
                  title: t('comfortably'),
                  desc: t('comfortably_desc'),
                },
              ].map((item, index) => (
                  <motion.div
                      key={index}
                      className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-600 transition-all hover:shadow-2xl"
                      initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.02, rotate: 0.5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 14,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      itemProp="step"
                      itemScope
                      itemType="https://schema.org/HowToStep"
                  >
                    <div className="text-5xl mb-4" aria-hidden="true">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2" itemProp="name">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-base" itemProp="description">
                      {item.desc}
                    </p>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
  );
};
