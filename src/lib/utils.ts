import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getImageUrl = (imageName: string) => {
  const base = "https://cdn.jsdelivr.net/gh";
  const username = "dubanteo19";
  const repo = "cdn";
  const version = "1.0.0";
  return `${base}/${username}/${repo}@${version}/images/${imageName}`;
};
