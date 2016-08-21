module.exports = (state = [], action) => {
  switch (action.type) {
    case 'topics.latest':
      return state.concat(action.topics)
    default:
      return state
  }
}
