import data from "./../../utils/data.js";

export default function editorReducer(state = data.initialState, action) {
  switch (action.type) {
    case "updateComp": {
      let comps = [...state.editor.comps];
      comps = comps.map((comp) => {
        if (comp.id === action.payload.id) {
          return { ...comp, ...action.payload };
        }
        return { ...comp };
      });
      const newState = {
        ...state,
        editor: { ...state.editor, comps: comps },
      };
      return newState;
    }
    case "removeComp": {
      let comps = [...state.editor.comps];
      if (comps.length <= 1) return;
      comps = comps.filter((comp) => comp.id !== action.payload.id);
      const newState = {
        ...state,
        editor: { ...state.editor, comps: comps },
      };
      return newState;
    }
    case "addNewComp": {
      let comps = [...state.editor.comps];
      let newComps = [];
      comps.forEach((comp) => {
        newComps.push({ ...comp });
        if (comp.id === action.payload.id) {
          newComps.push({ ...action.payload.comp });
        }
      });
      const newState = {
        ...state,
        editor: {
          ...state.editor,
          comps: newComps,
        },
      };

      return newState;
    }
    case "updateRef": {
      let newComps = [...state.editor.comps];
      newComps = newComps.map((comp) => {
        if (comp.id === action.payload.id) {
          return { ...comp, inputRef: action.payload.inputRef };
        }
        return { ...comp };
      });
      const newState = {
        ...state,
        editor: {
          ...state.editor,
          comps: newComps,
        },
      };

      return newState;
    }

    default:
      return state;
  }
}
