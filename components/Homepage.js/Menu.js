import React from "react";
import { useMenuTrigger } from "@react-aria/menu";
import { useMenuTriggerState } from "@react-stately/menu";
import { useButton } from "@react-aria/button";
import { useMenu, useMenuItem } from "@react-aria/menu";
import { useTreeState } from "@react-stately/tree";
import { mergeProps } from "@react-aria/utils";
import { FocusScope } from "@react-aria/focus";
import { useFocus } from "@react-aria/interactions";
import { useOverlay, DismissButton } from "@react-aria/overlays";

export function MenuButton(props) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the menu trigger and menu elements
  let ref = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  // Get props for the button based on the trigger props from useMenuTrigger
  let { buttonProps } = useButton(menuTriggerProps, ref);

  return (
    <div className="relative inline-block text-left">
      <button
        {...buttonProps}
        ref={ref}
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {props.label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {state.isOpen && (
        <Menu
          {...props}
          domProps={menuProps}
          autoFocus={state.focusStrategy}
          onClose={() => state.close()}
        />
      )}
    </div>
  );
}

export function Menu(props) {
  let state = useTreeState({ ...props, selectionMode: "none" });

  let ref = React.useRef();
  let { menuProps } = useMenu(props, state, ref);
  let overlayRef = React.useRef();
  let { overlayProps } = useOverlay(
    {
      onCLose: props.onCLose,
      shouldCloseBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef
  );

  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={props.onCLose}>
        <DismissButton onDismiss={props.onCLose} />
        <div
          {...mergeProps(menuProps, props.domProps)}
          ref={ref}
          class="origin-top-left absolute right-0 mt-2 w-full rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5"
        >
          <div
            class="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {[...state.collection].map((item) => (
              <MenuItem
                key={item.key}
                item={item}
                state={state}
                onAction={props.onAction}
                onClose={props.onClose}
              />
            ))}
          </div>
        </div>
        <DismissButton onDismiss={props.onClose} />
      </div>
    </FocusScope>
  );
}

export function MenuItem({ item, state, onAction, onClose }) {
  let ref = React.useRef();
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled: item.isDisabled,
      onAction: onAction,
      onClose: onClose,
    },
    state,
    ref
  );
  let [isFocused, setFocused] = React.useState(false);
  let { focusProps } = useFocus({ onFocusChange: setFocused });

  return (
    <a
      {...mergeProps(menuItemProps, focusProps)}
      ref={ref}
      class="block px-4 py-2 text-sm font-bold text-black hover:bg-red-100 hover:text-gray-900"
      role="menuitem"
    >
      {item.rendered}
    </a>
  );
}
