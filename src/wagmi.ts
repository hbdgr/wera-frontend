import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  polygon,
  polygonMumbai,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "wera-frontend",
  projectId: "YOUR_PROJECT_ID", // TODO
  chains: [
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [polygonMumbai] : []),
  ],
  ssr: true,
});
