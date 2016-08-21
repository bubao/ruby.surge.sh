import App from '../views/App'
import NotFound from '../views/404'
import {HomeLayout} from '../views/layouts'

module.exports = {
  path: '/',
  component: App,
  indexRoute: {
    component: HomeLayout
  },
  childRoutes: [
    {
      path: '404',
      component: NotFound
    }
  ]
}
