export default function(store) {
  const actions = {
    addToFavorites(state, uri) {
      const favorites = Object.assign([], state.favorites)
      // Add to list
      const index = favorites.indexOf(uri)
      index < 0 && favorites.push(uri)
      return { favorites }
    },

    removefromFavorites(state, uri) {
      const favorites = Object.assign([], state.favorites)
      // Remove from list
      const index = favorites.indexOf(uri)
      index > -1 && favorites.splice(index, 1)
      return { favorites }
    },

    toggleFavorite(state, uri) {
      const favorites = state.favorites || []
      // Favorite selector
      const isFavorite = favorites.indexOf(uri) > -1
      // Toggle favorite
      store.action(!isFavorite ? actions.addToFavorites : actions.removefromFavorites)(
        uri
      )
    },
  }

  return actions
}
