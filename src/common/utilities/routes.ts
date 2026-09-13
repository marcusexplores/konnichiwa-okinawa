interface Route {
  name: string;
  path: string;
}

export const routes = {
  home: {
    name: 'Home',
    path: '/',
  },
  itinerary: {
    name: 'Itinerary',
    path: '/itinerary',
  },
  budget: {
    name: 'Budget',
    path: '/budget',
  },
  guide: {
    name: 'Guide',
    path: '/guide',
  },
} as const satisfies Record<string, Route>;
