import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "wera-frontend",
  projectId: "YOUR_PROJECT_ID", // TODO
  chains: [
    mainnet,
    polygon,
    optimism,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
