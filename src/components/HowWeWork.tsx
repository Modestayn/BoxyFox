import {JSX, useState} from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { BoltIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon, MapIcon, HandRaisedIcon } from '@heroicons/react/24/solid';

const cardsData = [
    {
        icon: <BoltIcon className="w-12 h-12 text-orange-500 transform-gpu" />,
        titleKey: 'operatively',
        descKey: 'operatively_desc',
    },
    {
        icon: <LockClosedIcon className="w-12 h-12 text-orange-500 transform-gpu" />,
        titleKey: 'reliably',
        descKey: 'reliably_desc',
    },
    {
        icon: <MapIcon className="w-12 h-12 text-orange-500 transform-gpu" />,
        titleKey: 'optimally',
        descKey: 'optimally_desc',
    },
    {
        icon: <HandRaisedIcon className="w-12 h-12 text-orange-500 transform-gpu" />,
        titleKey: 'comfortably',
        descKey: 'comfortably_desc',
    },
];

function Card({ icon, titleKey, descKey }: { icon: JSX.Element; titleKey: string; descKey: string }) {
    const { t } = useTranslation();

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateYCalc = ((x / width) - 0.5) * 40;
        const rotateXCalc = ((y / height) - 0.5) * -40;

        setRotateX(rotateXCalc);
        setRotateY(rotateYCalc);
    }

    function handleMouseLeave() {
        setRotateX(0);
        setRotateY(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 cursor-pointer hover:border-orange-600 transition-shadow shadow-lg hover:shadow-orange-600 will-change-transform"
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            itemProp="step"
            itemScope
            itemType="https://schema.org/HowToStep"
        >
            <div
                className="mb-6"
                aria-hidden="true"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(20px) rotateX(${-rotateX / 2}deg) rotateY(${-rotateY / 2}deg)`,
                    willChange: 'transform',
                }}
            >
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2" itemProp="name">
                {t(titleKey)}
            </h3>
            <p className="text-gray-400 text-base" itemProp="description">
                {t(descKey)}
            </p>
        </motion.div>
    );
}

export default function HowWeWork() {
    const { t } = useTranslation();

    return (
        <section
            className="w-full mt-36 bg-black py-20 px-4"
            aria-label={t('how_we_work_section_aria')}
            itemScope
            itemType="https://schema.org/HowTo"
        >
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    {t('how_we_work')}
                </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto perspective-[1000px]">
                {cardsData.map(({ icon, titleKey, descKey }, index) => (
                    <Card key={index} icon={icon} titleKey={titleKey} descKey={descKey} />
                ))}
            </div>
        </section>
    );
}
