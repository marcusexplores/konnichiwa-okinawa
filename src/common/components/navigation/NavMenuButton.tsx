import { cn } from 'tailwind-variants';

interface NavMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const NavMenuButton = ({
  isOpen,
  onToggle,
  className,
}: NavMenuButtonProps) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      className={cn(
        'fixed z-50 flex h-9 w-9 scale-55 cursor-pointer items-center justify-center transition-transform focus:outline-none sm:h-11 sm:w-11 sm:scale-65',
        className,
      )}
    >
      <div className="relative flex h-5 w-6 flex-col items-center justify-between">
        {/* Top Line */}
        <span
          className={cn(
            'bg-brand-primary absolute top-0 h-0.5 origin-center rounded-full shadow-sm transition-all duration-500 ease-in-out',
            isOpen ? 'bg-on-brand-primary top-2.25 w-6 rotate-45' : 'w-6',
          )}
        />

        {/* Middle Line */}
        <span
          className={cn(
            'bg-brand-primary absolute top-2.25 h-0.5 origin-center rounded-full shadow-sm transition-all duration-300 ease-in-out',
            isOpen
              ? 'bg-on-brand-primary scale-x-0 opacity-0'
              : 'w-6 scale-x-100 opacity-100',
          )}
        />

        {/* Bottom Line */}
        <span
          className={cn(
            'bg-brand-primary absolute bottom-0 h-0.5 origin-center rounded-full shadow-sm transition-all duration-500 ease-in-out',
            isOpen ? 'bg-on-brand-primary bottom-2.25 w-6 -rotate-45' : 'w-6',
          )}
        />
      </div>
    </button>
  );
};
