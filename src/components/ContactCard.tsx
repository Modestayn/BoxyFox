import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import headerBG from '../assets/img/header-bg.jpg';

export default function ContactCard() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="relative mt-[60px] w-full max-w-4xl h-[320px] rounded-xl shadow-2xl overflow-hidden select-none
                 flex flex-col md:flex-row"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
                perspective: 1200,
                transformStyle: 'preserve-3d',
                transform: 'rotateX(10deg) rotateY(-15deg) translateZ(30px)',
                boxShadow: '0 20px 30px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.2)',
                backgroundColor: 'white',
            }}
        >
            {/* Картинка */}
            <div className="w-full md:w-1/2 h-[220px] md:h-full overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none relative">
                <img
                    src={headerBG}
                    alt={t('contact_card.hero_alt', 'Hero image')}
                    className="w-full h-full object-cover"
                    draggable={false}
                    style={{
                        filter: 'brightness(0.9)',
                        transformStyle: 'preserve-3d',
                    }}
                />
            </div>

            {/* Темный блок с контактами */}
            <div
                className="
          bg-zinc-900 text-white p-8
          w-full md:w-1/2
          rounded-b-xl md:rounded-r-xl md:rounded-tl-none
          flex flex-col justify-center gap-6
          relative
          md:static
          "
                style={{
                    backdropFilter: 'none',
                    backgroundColor: 'rgba(24, 24, 27, 0.95)',
                }}
            >
                <style>{`
                    @media (max-width: 768px) {
                        div.relative.md\\:static {
                            position: absolute !important;
                            top: 120px;
                            left: 20px;
                            right: 20px;
                            background-color: rgba(24, 24, 27, 0.85) !important;
                            border-radius: 1rem !important;
                            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                            backdrop-filter: saturate(180%) blur(20px);
                            z-index: 10;
                        }
                    }
                `}</style>

                <h2 className="text-3xl font-bold">{t('contact_card.contact_card_title')}</h2>

                <div className="flex items-center gap-3">
                    <PhoneIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <a
                        href={`tel:${t('contact_card.phone_1').replace(/\s+/g, '')}`}
                        className="text-lg hover:text-orange-400 transition-colors"
                        title={t('contact_card.messengers_available')}
                    >
                        {t('contact_card.phone_1')} <span className="text-sm text-gray-400">({t('contact_card.messengers_available')})</span>
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <PhoneIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <a
                        href={`tel:${t('contact_card.phone_2').replace(/\s+/g, '')}`}
                        className="text-lg hover:text-orange-400 transition-colors"
                    >
                        {t('contact_card.phone_2')}
                    </a>
                </div>

                <div className="flex items-center gap-3 break-all">
                    <EnvelopeIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <a
                        href={`mailto:${t('contact_card.email')}`}
                        className="text-lg hover:text-orange-400 transition-colors"
                    >
                        {t('contact_card.email')}
                    </a>
                </div>
            </div>
        </motion.div>
    );
}