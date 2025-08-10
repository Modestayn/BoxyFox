import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import HowWeWork from "@/components/HowWeWork.tsx";
import ContactCard from "@/components/ContactCard.tsx";
import {VehicleCarousel} from "@/components/VehicleCarousel.tsx";
import {useState} from "react";
import {PhoneModalForm} from "@/components/PhoneModalForm.tsx";
export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
      <main className="w-full pt-32 px-0 bg-white font-sans mt-[-30px]">
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
          </div>
        </section>
        <HowWeWork />
        <PhoneModalForm open={modalOpen} onOpenChange={setModalOpen} />
        <VehicleCarousel onOrderClick={() => setModalOpen(true)} />
      </main>
  );
};
