import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import imageCompression, { type Options } from "browser-image-compression";
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

export const compressFile = async (file: File) => {
  const options: Options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1024,
    useWebWorker: true,
  };
  return await imageCompression(file, options);
};
export const formatSize = (bytes: number) => {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
};

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleString("vi-VN", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
};
