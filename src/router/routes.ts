import Home from '../pages/Home'
import Profil from '../pages/Profil/Profil'

export type RouteName = 'list' | 'profil' | 'details'

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

export const profil: Route = {
  name: 'profil',
  path: '/profile',
  title: 'Profil',
  component: Profil,
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
  profil,
  details,
}
