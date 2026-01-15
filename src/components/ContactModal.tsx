import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrivacyClick: () => void;
}

export default function ContactModal({ isOpen, onClose, onPrivacyClick }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-card border-2 border-primary/30 rounded-2xl shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <Icon name="Send" size={32} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-heading font-bold gradient-text mb-2">
              Оставьте заявку
            </h2>
            <p className="text-muted-foreground">
              Я свяжусь с вами в течение 24 часов
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-2 border-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-2 border-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-2 border-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <Textarea
                placeholder="Расскажите о вашем запросе"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="border-2 border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <label className="flex items-start gap-3 text-sm cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                required
                className="mt-1 w-4 h-4 rounded border-2 border-primary/50 text-primary focus:ring-2 focus:ring-primary/50 cursor-pointer"
              />
              <span className="text-muted-foreground">
                Я согласен на{' '}
                <button
                  type="button"
                  onClick={onPrivacyClick}
                  className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                >
                  обработку персональных данных
                </button>
              </span>
            </label>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-lg py-6"
            >
              Отправить заявку
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
