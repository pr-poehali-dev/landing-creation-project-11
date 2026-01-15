import Icon from '@/components/ui/icon';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-card border-2 border-primary/30 rounded-2xl shadow-2xl animate-scale-in max-h-[90vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-card border-b border-primary/20 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-heading font-bold gradient-text">
            Политика конфиденциальности
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              Здесь будет размещена политика конфиденциальности вашего сайта.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">1. Общие положения</h3>
            <p className="text-muted-foreground mb-4">
              Добавьте текст политики конфиденциальности, который описывает, как вы собираете, 
              используете и защищаете персональные данные ваших клиентов.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">2. Какие данные мы собираем</h3>
            <p className="text-muted-foreground mb-4">
              Опишите, какие данные вы собираете (имя, email, телефон и т.д.).
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3. Как мы используем данные</h3>
            <p className="text-muted-foreground mb-4">
              Укажите цели использования персональных данных.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4. Защита данных</h3>
            <p className="text-muted-foreground mb-4">
              Опишите меры по защите персональных данных.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5. Контактная информация</h3>
            <p className="text-muted-foreground">
              Укажите контакты для вопросов по обработке персональных данных.
            </p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-card border-t border-primary/20 p-4">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
