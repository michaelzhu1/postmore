import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../actions/note_actions";
const initialState = [
  {
    title: "Grocery List",
    body:
      "Bananas \nStrawberries \nHoney \nChia seeds \nBlueberries \nFlax seeds \nGreek yogurt \nRasberries",
    color: "rgb(246, 150, 161)"
  },
  {
    title: "Another Example Note",
    body:
      "This is where you can write your thoughts and anything else you want to share",
    color: "rgb(246, 150, 161)"
  },
  {
    title: "Things to do in SF",
    body:
      "Alcatraz Island \nGolden Gate Bridge \nFisherman's Wharf \nThe Exploratorium \nPlance of Fine Arts \nTwin Peaks \nCalifornia Academy of Sciences \nWalt Disney Family Museum",
    color: "rgb(168, 233, 199)"
  },
  {
    title: "Meeting Notes",
    body:
      "Biggest issues \ncannot go back and fix things \nbank statements \noption to skip \n\nAssets \noption to ask for source of downpayment \nlove the option at the end to upload",
    color: "rgb(250, 212, 159)"
  },
  {
    title: "Burning Man 101",
    body:
      "What to bring: \nbring photo copies of your id \ntickets \ntowels (one for each seat of the car) \nziplock bag of clean clothes \ncamelbak \ntoiletpaper \nbatteries",
    color: "rgb(168, 233, 199)"
  },
  {
    title: "Portland Schedule",
    body:
      "7:00 - 8:45 Flight to Portland \n8:45 - 9:15 Transportation to Embassy \n9:15 - 9:30 Drop off bags at Embassy \n9:30 - 10: 15 Check out Stumptown \n10:30 - 12:00 Brunch @ Mothers \n12:00 - 7:00 Free Time \n8:00 - 9:30 Dinner @ Pok Pok \n9:30 - Dranks",
    color: "rgb(168, 233, 199)"
  }
];

const NoteReducer = (state = initialState, action) => {
  const oldState = state.slice();
  let newState;
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case UPDATE_NOTE:
      newState = oldState
        .slice(0, action.id)
        .concat([action.note])
        .concat(oldState.slice(action.id + 1));
      return newState;
    case DELETE_NOTE:
      oldState.splice(action.id, 1);
      newState = oldState;
      return newState;
    default:
      return state;
  }
};

export default NoteReducer;
