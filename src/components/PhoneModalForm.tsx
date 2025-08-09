import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PhoneModalFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PhoneModalForm: React.FC<PhoneModalFormProps> = ({ open, onOpenChange }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);

  const isValidPhone = (phone: string) => {
    // Разрешаем цифры, пробелы, +, -, скобки, минимум 7 символов
    return /^[+\d\s()-]{7,}$/.test(phone.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError("Ім'я повинно містити щонайменше 2 символи.");
      return;
    }
    if (!isValidPhone(phone)) {
      setError('Будь ласка, введіть коректний номер телефону.');
      return;
    }
    if (message.trim().length < 5) {
      setError('Повідомлення повинно містити щонайменше 5 символів.');
      return;
    }

    fetch('https://formcarry.com/s/COJHjHU5HoT', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setShowToast(true);
          onOpenChange(false);
          setName('');
          setPhone('');
          setMessage('');
          setTimeout(() => setShowToast(false), 3000);
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message || 'Сталася помилка.');
        }
      })
      .catch((err) => {
        setError(err.message || 'Помилка при відправці форми.');
      });
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='bg-orange-600 p-6 rounded-2xl'>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateX: 30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='bg-zinc-900 rounded-xl p-10 shadow-2xl'
                style={{ transformOrigin: 'center', perspective: 1000 }}
              >
                <div>
                  <DialogTitle className='text-white text-center text-lg font-semibold'>
                    Замовити дзвінок
                  </DialogTitle>
                  <DialogDescription className='text-gray-300 mt-2 text-center mb-6'>
                    Залиште ім'я, номер телефону та повідомлення, ми зв’яжемося з вами
                  </DialogDescription>

                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                      <Label htmlFor='name' className='text-gray-300 pb-2'>
                        Ім'я
                      </Label>
                      <Input
                        id='name'
                        type='text'
                        placeholder="Ваше ім'я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='bg-zinc-800 text-white placeholder-gray-400 border-none py-3 px-4 rounded-md focus:ring-2 focus:ring-orange-600 focus:outline-none'
                      />
                    </div>

                    <div>
                      <Label htmlFor='phone' className='text-gray-300 pb-2'>
                        Телефон
                      </Label>
                      <Input
                        id='phone'
                        type='tel'
                        placeholder='+380 00 000 0000'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className='bg-zinc-800 text-white placeholder-gray-400 border-none py-3 px-4 rounded-md focus:ring-2 focus:ring-orange-600 focus:outline-none'
                      />
                    </div>

                    <div>
                      <Label htmlFor='message' className='text-gray-300 pb-2'>
                        Повідомлення
                      </Label>
                      <textarea
                        id='message'
                        placeholder='Ваше повідомлення...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className='w-full bg-zinc-800 text-white placeholder-gray-400 border-none py-3 px-4 rounded-md focus:ring-2 focus:ring-orange-600 focus:outline-none resize-none h-24'
                      />
                    </div>

                    {error && <p className='text-red-500 text-sm'>{error}</p>}

                    <Button
                      type='submit'
                      className='w-full bg-orange-600 hover:bg-orange-700 text-white py-3'
                    >
                      Відправити
                    </Button>
                  </form>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-6 right-6 bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg z-50'
          >
            Дякуємо! Ми отримали вашу заявку.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
