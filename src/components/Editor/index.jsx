import React from "react";
import "./index.css";
import TextArea from "../TextArea";
import data from "../../utils/data";

import { useDispatch, useSelector } from "react-redux";

import actions from "./actions";

export default function Editor() {
  const dispatch = useDispatch();
  const comps = useSelector((state) => {
    return state.editor.comps;
  });
  const {
    updateContent,
    handleInputKeyPress,
    handleInputKeyDown,
    handleTypeChange,
  } = actions;
  function getSize(comp) {
    return data.menuItems.filter((item) => item.type === comp)[0].size;
  }

  return (
    <div className="editor-container">
      {comps.length ? (
        comps.map((comp, i) => {
          const args = {
            id: comp.id,
            len: comps.length,
            dispatch: dispatch,
          };
          return (
            <TextArea
              key={comp.id}
              compId={comp.id}
              content={comp.content}
              onKeyPress={(e) => handleInputKeyPress(e, args)}
              onKeyDown={(e) => handleInputKeyDown(e, { ...args, comps })}
              onChange={(e) => updateContent(e, args)}
              onChangeType={(type) => handleTypeChange(type, args)}
              type={comp.type}
              size={getSize(comp.type)}
            />
          );
        })
      ) : (
        <TextArea size={18} />
      )}
    </div>
  );
}
