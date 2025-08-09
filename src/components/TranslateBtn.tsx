import React from 'react';
import { useTranslation } from 'react-i18next';

type TranslateBtnProps = {
  lang: string;
  label: string;
};

export const TranslateBtn: React.FC<TranslateBtnProps> = ({ lang, label }) => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(lang);
  };

  return (
    <button
      onClick={changeLanguage}
      className='w-full text-left px-2 py-1 hover:bg-gray-100 rounded font-normal'
    >
      {label}
    </button>
  );
};
