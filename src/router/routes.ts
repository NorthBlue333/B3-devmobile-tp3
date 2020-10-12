type RouteName = 'list' | 'profile' | 'details'

interface Route {
  name: RouteName
  path: string
  title: string
}

export const list: Route = {
  name: 'list',
  path: '/liste',
  title: 'Liste',
}

export const profile: Route = {
  name: 'profile',
  path: '/profile',
  title: 'Profile',
}

export const details: Route = {
  name: 'details',
  path: '/details',
  title: 'Détails',
}

export const routes: {
  [key in RouteName]: Route
} = {
  list,
  profile,
  details,
}
