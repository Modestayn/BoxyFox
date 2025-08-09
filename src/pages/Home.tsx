import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import HowWeWork from "@/components/HowWeWork.tsx";
import ContactCard from "@/components/ContactCard.tsx";

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
            <ContactCard/>
            {/*<motion.div*/}
            {/*    className="relative mt-[60px] w-full max-w-md sm:max-w-lg md:w-[500px] h-[260px] sm:h-[320px] md:h-[400px] rounded-xl shadow-2xl"*/}
            {/*    initial={{ opacity: 0, scale: 0.9 }}*/}
            {/*    whileInView={{ opacity: 1, scale: 1 }}*/}
            {/*    transition={{ duration: 0.6, delay: 0.2 }}*/}
            {/*    viewport={{ once: true }}*/}
            {/*    style={{*/}
            {/*      perspective: 1200, // создаём перспективу для 3D*/}
            {/*    }}*/}
            {/*>*/}
            {/*  <img*/}
            {/*      src={headerBG}*/}
            {/*      alt={t("hero_alt")}*/}
            {/*      className="w-full h-full object-contain rounded-xl"*/}
            {/*      style={{*/}
            {/*        transform: "rotateX(10deg) rotateY(-15deg) translateZ(30px)", // небольшой наклон и выдвижение вперёд*/}
            {/*        boxShadow:*/}
            {/*            "0 20px 30px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.2)", // мягкая тень для объёма*/}
            {/*        transformStyle: "preserve-3d",*/}
            {/*        backfaceVisibility: "hidden",*/}
            {/*      }}*/}
            {/*  />*/}
            {/*</motion.div>*/}
          </div>
        </section>
        <HowWeWork />
      </main>
  );
};
