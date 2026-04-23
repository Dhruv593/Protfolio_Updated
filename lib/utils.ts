// Utility functions for portfolio

/**
 * Format date to locale string
 * @param dateString - ISO date string
 * @param format - 'short' | 'long' | 'full'
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string,
  format: 'short' | 'long' | 'full' = 'short'
): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions =
    format === 'short'
      ? { month: 'short', year: 'numeric' }
      : format === 'long'
        ? { month: 'long', year: 'numeric' }
        : { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };

  return date.toLocaleDateString('en-US', options);
}

/**
 * Calculate duration between two dates
 * @param startDate - ISO start date string
 * @param endDate - ISO end date string (optional)
 * @returns Formatted duration string (e.g., "2yr 3mo")
 */
export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years}yr ${remainingMonths}mo`;
  } else if (years > 0) {
    return `${years}yr`;
  } else {
    return `${remainingMonths}mo`;
  }
}

/**
 * Get Tailwind color class for tech tags
 * @param tech - Technology name
 * @returns Tailwind class string
 */
export function getTechTagColor(tech: string): string {
  const colors: { [key: string]: string } = {
    python: 'bg-slate-100 text-slate-700',
    javascript: 'bg-slate-100 text-slate-700',
    typescript: 'bg-slate-100 text-slate-700',
    react: 'bg-blue-50 text-blue-700',
    nextjs: 'bg-slate-100 text-slate-700',
    nodejs: 'bg-slate-100 text-slate-700',
    express: 'bg-slate-100 text-slate-700',
    mongodb: 'bg-slate-100 text-slate-700',
    postgresql: 'bg-slate-100 text-slate-700',
    aws: 'bg-orange-50 text-orange-700',
    gcp: 'bg-blue-50 text-blue-700',
    docker: 'bg-blue-50 text-blue-700',
    pytorch: 'bg-orange-50 text-orange-700',
    tensorflow: 'bg-orange-50 text-orange-700',
    ml: 'bg-purple-50 text-purple-700',
    datascience: 'bg-purple-50 text-purple-700',
    ai: 'bg-purple-50 text-purple-700',
  };
  return colors[tech] || 'bg-slate-100 text-slate-700';
}

/**
 * Format tech name for display
 * @param tech - Technology key
 * @returns Formatted tech name
 */
export function formatTechName(tech: string): string {
  const formats: { [key: string]: string } = {
    python: 'Python',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    react: 'React',
    nextjs: 'Next.js',
    nodejs: 'Node.js',
    express: 'Express',
    mongodb: 'MongoDB',
    postgresql: 'PostgreSQL',
    aws: 'AWS',
    gcp: 'Google Cloud',
    docker: 'Docker',
    pytorch: 'PyTorch',
    tensorflow: 'TensorFlow',
    ml: 'Machine Learning',
    datascience: 'Data Science',
    ai: 'AI/LLM',
  };
  return formats[tech] || tech;
}

/**
 * Truncate text to specified length
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns Truncated text with ellipsis
 */
export function truncateText(text: string, length: number = 150): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Get status badge color
 * @param status - 'available' | 'busy' | 'leave'
 * @returns Tailwind class string
 */
export function getStatusColor(
  status?: 'available' | 'busy' | 'leave'
): string {
  const colors: { [key: string]: string } = {
    available: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    busy: 'bg-orange-50 text-orange-700 border-orange-200',
    leave: 'bg-blue-50 text-blue-700 border-blue-200',
  };
  return colors[status || 'available'] || colors.available;
}

/**
 * Get status text
 * @param status - 'available' | 'busy' | 'leave'
 * @returns Display text
 */
export function getStatusText(
  status?: 'available' | 'busy' | 'leave'
): string {
  const texts: { [key: string]: string } = {
    available: 'Available',
    busy: 'Busy',
    leave: 'On Leave',
  };
  return texts[status || 'available'] || 'Available';
}
