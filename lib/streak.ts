const LAST_DATE_KEY = 'streak-last-date';
const COUNT_KEY = 'streak-count';

/** Returns the current streak count (0 if no streak or SSR). */
export function getStreak(): number {
  if (typeof window === 'undefined') return 0;
  return parseInt(localStorage.getItem(COUNT_KEY) ?? '0', 10);
}

/**
 * Call this whenever the user completes any practice session.
 * - Same day    → no change
 * - Next day    → streak + 1
 * - 2+ days gap → reset to 1
 * Returns the updated streak count.
 */
export function markPracticeToday(): number {
  if (typeof window === 'undefined') return 0;

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const lastDate = localStorage.getItem(LAST_DATE_KEY);
  let count = parseInt(localStorage.getItem(COUNT_KEY) ?? '0', 10);

  if (lastDate === today) return count; // already practiced today

  if (lastDate) {
    const diffMs = new Date(today).getTime() - new Date(lastDate).getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    count = diffDays === 1 ? count + 1 : 1;
  } else {
    count = 1; // first ever practice
  }

  localStorage.setItem(LAST_DATE_KEY, today);
  localStorage.setItem(COUNT_KEY, count.toString());
  return count;
}
