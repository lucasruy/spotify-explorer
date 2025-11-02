import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilitário para combinar classes do Tailwind CSS de forma inteligente
 * Usa clsx para combinar condicionalmente classes e twMerge para resolver conflitos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}