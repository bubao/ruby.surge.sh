import moment from 'moment'

module.exports = (time) => {
  moment.locale('zh-CN')
  return moment(time).fromNow()
}
