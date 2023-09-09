import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Generated by shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

export function formatDateString(dateString: string) {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedTime} — ${formattedDate}`;
}

}
