import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import headerBG from '../assets/img/header-bg.jpg';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <main className='w-full pt-32 px-0 bg-white font-sans mt-[-70px]'>
      {/* Хедер-секція */}
      <section className='w-full bg-white px-4 md:px-8'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20'>
          {/* Текстовий блок */}
          <motion.div
            className='flex flex-col gap-4 md:gap-5 text-center md:text-left max-w-xl'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 leading-tight tracking-tight'>
              BoxyFox
            </h1>
            <p className='text-4xl sm:text-xl text-gray-800 font-bold leading-tight'>
              Логістична доставка
            </p>
            <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
              Отримайте або надсилайте посилки будь-кому,
              <br />
              будь-де та будь-коли — за декілька простих кроків.
            </p>
            <div className='mt-3'>
              <Link to='/about'>
                <Button className='bg-orange-600 text-white hover:bg-orange-700 transition-colors text-sm sm:text-base px-6 py-2 rounded-md'>
                  {t('more')}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Картинка */}
          <motion.div
            className='relative w-full max-w-md sm:max-w-lg md:w-[500px] h-[260px] sm:h-[320px] md:h-[400px]'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={headerBG} alt='Hero' className='w-full h-full object-contain' />
          </motion.div>
        </div>
      </section>

      {/* Переваги сервісу */}
      <section className='w-full mt-15 bg-black py-20 px-4'>
        <motion.div
          className='max-w-7xl mx-auto text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
            {t('why_choose_us', 'Чому обирають нас')}
          </h2>
          <p className='text-gray-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg'>
            {t('our_benefits', 'Ми робимо доставку простою, швидкою та надійною для кожного.')}
          </p>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Картки переваг */}
            {[
              {
                icon: '🚀',
                title: t('fast_delivery', 'Швидка доставка'),
                desc: t(
                  'fast_delivery_desc',
                  'Ваші посилки доставляються вчасно — ми цінуємо ваш час.',
                ),
              },
              {
                icon: '🔒',
                title: t('secure_service', 'Безпечний сервіс'),
                desc: t(
                  'secure_service_desc',
                  'Ваші речі під надійним захистом під час усієї подорожі.',
                ),
              },
              {
                icon: '📍',
                title: t('easy_tracking', 'Зручне відстеження'),
                desc: t(
                  'easy_tracking_desc',
                  'Відстежуйте свої посилки в реальному часі з будь-якого пристрою.',
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className='bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-600 transition-all hover:shadow-2xl'
                initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{
                  type: 'spring',
                  stiffness: 200, // чем больше — тем быстрее возвращается
                  damping: 14, // меньше — более резкое движение
                  delay: index * 0.05, // ускоряем каскад
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className='text-5xl mb-4'>{item.icon}</div>
                <h3 className='text-xl font-semibold text-white mb-2'>{item.title}</h3>
                <p className='text-gray-400 text-base'>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};
