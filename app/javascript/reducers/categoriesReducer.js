export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.categories;
    default:
      return state;
  }
}
