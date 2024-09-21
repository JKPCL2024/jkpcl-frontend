import { type ClassValue, clsx } from "clsx"
import { toast } from "sonner";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkFileType(file: File, ACCEPTED_FILE_TYPES: string[]) {
  if (!file) return false;
  return file.name
    ? ACCEPTED_FILE_TYPES.includes(file.type)
    : false;
}


export function copyToClipboard({ text, title }: { text: string, title: string }): void {
  const textarea = document.createElement('textarea');
  textarea.textContent = text;
  document.body.appendChild(textarea);

  textarea.select();
  try {
    document.execCommand('copy');
    toast.success(`${title} copied to clipboard`);
  } catch (err) {
    console.error('Error in copying text: ' + err);
  }

  document.body.removeChild(textarea);
}