import { useTreeState } from "@react-stately/tree";
import { useMenu, useMenuItem, useMenuSection } from "@react-aria/menu";
import { useFocus } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import React from "react";

export function Menu(props) {
  // Create state based on the incoming props
  let state = useTreeState({ ...props, selectionMode: "none" });
  // Get props for the menu element
  let ref = React.useRef();
  let { menuProps } = useMenu(props, state, ref);
  return (
    <ul
      {...menuProps}
      ref={ref}
      style={{
        padding: 0,
        listStyle: "none",
        border: "10px solid gray",
        maxWidth: 550,
      }}
    >
      {[...state.collection].map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          state={state}
          onAction={props.onAction}
        />
      ))}
    </ul>
  );
}

export function MenuItem({ item, state, onAction }) {
  // Get props for the menu item element
  let ref = React.useRef();
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled: item.isDisabled,
      onAction,
    },
    state,
    ref
  );
  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  let [isFocused, setFocused] = React.useState(false);
  let { focusProps } = useFocus({ onFocusChange: setFocused });
  return (
    <li
      {...mergeProps(menuItemProps, focusProps)}
      ref={ref}
      style={{
        background: isFocused ? "gray" : "transparent",
        color: isFocused ? "white" : null,
        padding: "2px 5px",
        outline: "none",
        cursor: "pointer",
      }}
    >
      {item.rendered}
    </li>
  );
}
