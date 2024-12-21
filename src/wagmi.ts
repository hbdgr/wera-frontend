import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from 'wagmi'
import {
  polygon,
  polygonAmoy,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "wera-frontend",
  projectId: "WERA-FRONTEND-DAPP",
  chains: [
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [polygonAmoy] : []),
  ],
  transports: {
    [polygon.id]: http(),
    [polygonAmoy.id]: http()
  },
  ssr: true,
})
