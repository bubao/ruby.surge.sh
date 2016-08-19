import App from '../views/App'
import NotFound from '../views/404'

module.exports = {
  path: '/',
  component: App,
  indexRoute: {
    component: NotFound
  },
  childRoutes: [
    {
      path: '404',
      component: NotFound
    }
  ]
}
