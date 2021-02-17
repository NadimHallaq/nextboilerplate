import React from "react";
import { FocusScope } from "@react-aria/focus";
import {
  OverlayContainer,
  useOverlay,
  usePreventScroll,
  useModal,
} from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
function SlideOverContent(props) {
  let ref = React.useRef();
  let { overlayProps } = useOverlay(props, ref);

  let { modalProps } = useModal();

  let { dialogProps, titleProps } = useDialog(props, ref);
  return (
    <FocusScope contain restoreFocus autoFocus>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <section
            className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
            aria-labelledby="slide-over-heading"
            {...overlayProps}
            {...dialogProps}
            {...modalProps}
            ref={ref}
            ref={ref}
          >
            <div className="relative w-screen max-w-md">
              <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                <button
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={props.onClose}
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div className="px-4 sm:px-6">
                  <h2
                    id="slide-over-heading"
                    className="text-lg font-medium text-gray-900"
                    {...titleProps}
                  >
                    {props.title}
                  </h2>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  {props.children}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </FocusScope>
  );
}

export default function SlideOver({ title, children, isOpen, onClose }) {
  return (
    <OverlayContainer>
      {isOpen && (
        <SlideOverContent
          title={title}
          onClose={onClose}
          isOpen={isOpen}
          isDismissable
        >
          {children}
        </SlideOverContent>
      )}
    </OverlayContainer>
  );
}
