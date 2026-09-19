export const routes = {
  root: '/',
  itinerary: {
    root: '/itinerary',
    day0: '/itinerary/day-0-departure',
    day1: '/itinerary/day-1-touchdown',
    day2: '/itinerary/day-2-usj',
    day3: '/itinerary/day-3-kansai-cycle',
    day4: '/itinerary/day-4-chill-beach',
    day5: '/itinerary/day-5-water-sports',
    day6: '/itinerary/day-6-sea-walk',
    day7: '/itinerary/day-7-northern-tour',
    day8: '/itinerary/day-8-junglia',
    day9: '/itinerary/day-9-ginowan',
    day10: '/itinerary/day-10-southern-tour',
    day11: '/itinerary/day-11-naha',
    day12: '/itinerary/day-12-home-sweet-home',
  },
  budget: {
    root: '/budget',
  },
  guide: {
    root: '/guide',
    checklist: '/guide/checklist',
    flight: '/guide/flight',
  },
} as const satisfies Record<string, string | Record<string, string>>;

export const navRoutes = [
  {
    name: 'Home',
    path: routes.root,
  },
  {
    name: 'Itinerary',
    path: routes.itinerary.root,
  },
  {
    name: 'Budget',
    path: routes.budget.root,
  },
  {
    name: 'Guide',
    path: routes.guide.root,
  },
] as const satisfies { name: string; path: string }[];
