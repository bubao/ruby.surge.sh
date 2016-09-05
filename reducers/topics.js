module.exports = (state = [], action) => {
  switch (action.type) {
    case 'topics.latest':
      return state.concat(action.topics)
    case 'topics.detail':
      return state.concat([action.detail])
    default:
      return state
  }
}
