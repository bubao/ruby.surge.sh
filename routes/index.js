import App from '../views/App'
import NotFound from '../views/404'
import HomeLayout from '../views/layouts/Home'
import DetailLayout from '../views/layouts/Detail'

module.exports = {
  path: '/',
  component: App,
  indexRoute: {
    component: HomeLayout
  },
  childRoutes: [
    {
      path: '/topics/:id',
      component: DetailLayout
    },
    {
      path: '404',
      component: NotFound
    }
  ]
}
