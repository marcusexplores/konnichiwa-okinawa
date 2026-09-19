export const formatDate = (value: string): string => {
  const isValidDate = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/.test(
    value,
  );

  if (!isValidDate) {
    throw new Error(
      `Invalid date format: "${value}". Expected format is YYYY-MM-DD (e.g., 2026-11-19).`,
    );
  }

  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  const formatter = new Intl.DateTimeFormat('en-SG', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC', // Ensures the output stays in UTC so that date will not change
  });

  return formatter.format(date);
};
