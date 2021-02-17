import "tailwindcss/tailwind.css";
import { SSRProvider } from "@react-aria/ssr";
import { OverlayProvider } from "@react-aria/overlays";
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-red-50">
      <SSRProvider>
        <OverlayProvider>
          <Component {...pageProps} />
        </OverlayProvider>
      </SSRProvider>
    </div>
  );
}

export default MyApp;
