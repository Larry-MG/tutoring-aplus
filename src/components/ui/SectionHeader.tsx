import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  chalkLabel: string;
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  chalkLabel,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={cn('mx-auto max-w-xl text-center', className)}>
      <p className="font-chalk text-lg text-sage mb-2">{chalkLabel}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-chalk-bright leading-tight mb-4">
        {title}
      </h2>
      <p className="text-chalk-dim leading-relaxed">{description}</p>
    </ScrollReveal>
  );
}
