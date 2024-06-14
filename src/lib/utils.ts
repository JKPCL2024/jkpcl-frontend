import { toast } from "@/components/ui/use-toast";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function copyToClipboard({ text, title }: { text: string, title: string }): void {
  const textarea = document.createElement('textarea');
  textarea.textContent = text;
  document.body.appendChild(textarea);

  textarea.select();
  try {
    document.execCommand('copy');
    console.log('Text copied to clipboard');
    toast({
      title: "Copied",
      description: `${title} copied to clipboard`,
      className: "border-emerald-400"
    })
  } catch (err) {
    console.error('Error in copying text: ' + err);
  }

  document.body.removeChild(textarea);
}
