import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDuration(startDate: string, endDate: string | null): { years: number; months: number } {
  const start = new Date(startDate + "-01");
  const end = endDate ? new Date(endDate + "-01") : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months };
}
