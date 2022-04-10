import { v4 as uuidv4 } from "uuid";

import store from "../../state/store";

function handleInputKeyPress(e, args) {
  const { id, dispatch } = args;
  if (e.key === "Enter") {
    dispatch({
      type: "addNewComp",
      payload: {
        id: id,
        comp: {
          id: uuidv4(),
          type: "p",
          content: "",
        },
      },
    });
  }
}

function focusThis(ele) {
  setTimeout(() => {
    //const len = ele.current.innerText.trim().length;
    ele.current.focus();
    //ele.current.setSelectionRange(len, len);
  }, 0);
}

function updateBackFocus(id, comps) {
  for (let i = 0; i < comps.length; i++) {
    if (comps[i - 1] && i - 1 >= 0 && comps[i].id === id) {
      focusThis(comps[i - 1].inputRef);
    }
  }
}

function updateNextFocus(id, comps) {
  if (comps[0].id === id && comps.length > 1) {
    focusThis(comps[1].inputRef);
  }
}

function updateArrowFocus(id, comps, keyCode) {
  for (let i = 0; i < comps.length; i++) {
    if (comps[i].id === id && i - 1 >= 0 && keyCode === 38) {
      // prev
      focusThis(comps[i - 1].inputRef);
    } else if (
      comps[i].id === id &&
      i + 1 <= comps.length - 1 &&
      keyCode === 40
    ) {
      // next
      focusThis(comps[i + 1].inputRef);
    }
  }
}

function handleInputKeyDown(e, args) {
  const { id, dispatch } = args;
  const comps = [...store.getState().editor.comps];
  const len = comps.length;
  if (len > 1 && e.keyCode === 8 && e.currentTarget.textContent === "") {
    if (comps[0].id === id) {
      updateNextFocus(id, comps);
    }
    dispatch({
      type: "removeComp",
      payload: {
        id: id,
      },
    });
    updateBackFocus(id, comps);
  }

  updateArrowFocus(id, comps, e.keyCode);
}

function updateContent(e, args) {
  const { id, dispatch } = args;
  dispatch({
    type: "updateComp",
    payload: {
      id: id,
      content:
        e.currentTarget.textContent.trim() === ""
          ? ""
          : e.currentTarget.textContent,
    },
  });
}
function handleTypeChange(newType, args) {
  const { id, dispatch } = args;
  dispatch({
    type: "updateComp",
    payload: {
      id: id,
      type: newType,
    },
  });
}

const actions = {
  handleInputKeyDown,
  handleInputKeyPress,
  handleTypeChange,
  updateContent,
};

export default actions;
