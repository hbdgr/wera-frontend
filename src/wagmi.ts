import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import {
  polygon,
  polygonAmoy,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "wera-frontend",
  projectId: "YOUR_PROJECT_ID",
  chains: (
      process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [polygonAmoy] : [polygon]
  ),
  transports: {
    [polygon.id]: http(),
    [polygonAmoy.id]: http(),
  },
  ssr: true,
});
