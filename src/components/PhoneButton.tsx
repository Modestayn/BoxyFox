import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { PhoneModalForm } from './PhoneModalForm';

export const PhoneButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0, rotate: -180 }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: 0,
          boxShadow: [
            '0 0 0px rgba(255,165,0,0.6)',
            '0 0 20px rgba(255,165,0,0.9)',
            '0 0 0px rgba(255,165,0,0.6)',
          ],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 2,
        }}
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        className='fixed bottom-6 right-6 bg-orange-500 text-white rounded-full p-5 shadow-lg hover:bg-orange-600 transition-colors z-50'
      >
        <FontAwesomeIcon icon={faPhone} size='lg' />
      </motion.button>

      <PhoneModalForm open={open} onOpenChange={setOpen} />
    </>
  );
};
