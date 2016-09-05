module.exports = (state = [], action) => {
  const reload = action.reload === undefined || action.reload
  switch (action.type) {
    case 'topics.latest':
      return reload ? action.topics : state.concat(action.topics)
    case 'topics.detail':
      return reload ? [action.detail] : state.concat([action.detail])
    default:
      return state
  }
}
