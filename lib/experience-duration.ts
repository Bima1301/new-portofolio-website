const MONTH_INDEX: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

function parseMonthYear(value: string): Date | null {
  const cleaned = value.replace(/\([^)]*\)/g, "").trim();
  if (!cleaned) return null;

  if (/^present$/i.test(cleaned)) {
    return new Date();
  }

  const parts = cleaned.split(/\s+/);
  if (parts.length < 2) return null;

  const month = MONTH_INDEX[parts[0].toLowerCase()];
  const year = Number.parseInt(parts[parts.length - 1], 10);

  if (month === undefined || Number.isNaN(year)) return null;

  return new Date(year, month, 1);
}

function monthsBetweenInclusive(start: Date, end: Date): number {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  return Math.max(1, months);
}

function formatDuration(totalMonths: number): string {
  if (totalMonths < 12) {
    return totalMonths === 1 ? "1 month" : `${totalMonths} months`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (months === 0) {
    return years === 1 ? "1 year" : `${years} years`;
  }

  const yearLabel = years === 1 ? "1 year" : `${years} years`;
  const monthLabel = months === 1 ? "1 month" : `${months} months`;

  return `${yearLabel} ${monthLabel}`;
}

/** Parse experience date string → human-readable duration */
export function getExperienceDuration(dateRange: string): string {
  const normalized = dateRange.replace(/\s*\([^)]*\)\s*/g, " ").trim();

  if (!normalized.includes(" - ")) {
    return parseMonthYear(normalized) ? "1 month" : "";
  }

  const [startRaw, endRaw] = normalized.split(" - ").map((s) => s.trim());
  const start = parseMonthYear(startRaw);
  const end = parseMonthYear(endRaw);

  if (!start || !end) return "";

  if (end < start) return "";

  return formatDuration(monthsBetweenInclusive(start, end));
}
