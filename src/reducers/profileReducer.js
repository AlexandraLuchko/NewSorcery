const SET_NEW_WARRIOR_STATS = "SET_NEW_WARRIOR_STATS";

const defaultState = {
  warrior: { basicStats: { attackPower: 20, healPoints: 60, manaPoints: 10 } },
  archer: { basicStats: { attackPower: 15, healPoints: 50, manaPoints: 15 } },
  wizard: { basicStats: { attackPower: 10, healPoints: 40, manaPoints: 30 } },
};

export default function profileReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_NEW_WARRIOR_STATS:
      return {
        ...state,
        warrior: {
          ...state.warrior,
          basicStats: action.payload,
        },
      };
    default:
      return state;
  }
}

export const setNewWarriorStats = (stats) => ({
  type: SET_NEW_WARRIOR_STATS,
  payload: stats,
});
