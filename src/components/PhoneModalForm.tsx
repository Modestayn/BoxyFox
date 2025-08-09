import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';

interface PhoneModalFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PhoneModalForm: React.FC<PhoneModalFormProps> = ({ open, onOpenChange }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);

  const isValidPhone = (phone: string) => {
    return /^[+\d\s()-]{7,}$/.test(phone.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError(t('validation.name_min'));
      return;
    }
    if (!isValidPhone(phone)) {
      setError(t('validation.phone_invalid'));
      return;
    }
    if (message.trim().length < 5) {
      setError(t('validation.message_min'));
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
            setError(response.message || t('error.general'));
          }
        })
        .catch((err) => {
          setError(err.message || t('error.submit'));
        });
  };

  return (
      <>
        <AnimatePresence>
          {open && (
              <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="bg-white p-8 rounded-2xl max-w-md mx-auto shadow-lg">
                  <motion.div
                      initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      style={{ transformOrigin: 'center', perspective: 800 }}
                  >
                    <div>
                      <DialogTitle className="text-black text-center text-xl font-semibold mb-1">
                        {t('phoneModal.title')}
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 text-center mb-6">
                        {t('phoneModal.description')}
                      </DialogDescription>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <Label htmlFor="name" className="text-black mb-1 block font-medium">
                            {t('phoneModal.name')}
                          </Label>
                          <Input
                              id="name"
                              type="text"
                              placeholder={t('phoneModal.name_placeholder')}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                              className="bg-white border border-gray-300 text-black placeholder-gray-400 py-3 px-4 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-black mb-1 block font-medium">
                            {t('phoneModal.phone')}
                          </Label>
                          <Input
                              id="phone"
                              type="tel"
                              placeholder="+380 00 000 0000"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                              className="bg-white border border-gray-300 text-black placeholder-gray-400 py-3 px-4 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-black mb-1 block font-medium">
                            {t('phoneModal.message')}
                          </Label>
                          <textarea
                              id="message"
                              placeholder={t('phoneModal.message_placeholder')}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              required
                              className="w-full bg-white border border-gray-300 text-black placeholder-gray-400 py-3 px-4 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none h-24"
                          />
                        </div>

                        {error && <p className="text-red-600 text-sm">{error}</p>}

                        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition-colors">
                          {t('phoneModal.submit')}
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
                  className="fixed bottom-6 right-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-medium"
              >
                {t('phoneModal.thank_you')}
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
};
