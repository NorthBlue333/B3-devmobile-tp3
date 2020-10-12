import Home from '../pages/Home'

export type RouteName = 'list' | 'profile' | 'details'

interface Route {
  name: RouteName
  path: string
  title: string
  component: React.FC
}

export const list: Route = {
  name: 'list',
  path: '/liste',
  title: 'Liste',
  component: Home,
}

export const profile: Route = {
  name: 'profile',
  path: '/profile',
  title: 'Profile',
  component: Home,
}

export const details: Route = {
  name: 'details',
  path: '/details',
  title: 'Détails',
  component: Home,
}

export const routes: {
  [key in RouteName]: Route
} = {
  list,
  profile,
  details,
}
