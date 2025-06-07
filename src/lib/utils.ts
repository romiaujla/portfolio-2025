import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: Array<string>) => {
    return twMerge(clsx(inputs));
}