import "./index.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";

export default function Input(props) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "updateRef",
      payload: {
        id: props.compId,
        inputRef: inputRef,
      },
    });
    inputRef.current.focus();
  }, [props.compId, dispatch]);

  return (
    <div className="c-input-container">
      <span className="type-indicator">{props.customType}</span>
      <ContentEditable
        innerRef={inputRef}
        className="c-input-field"
        onChange={props.onChange}
        onKeyDown={(e) => {
          props.onKeyDown(e);
          props.onKeyPress(e);
        }}
        style={props.style}
        html={props.value}
      />
    </div>
  );
}
