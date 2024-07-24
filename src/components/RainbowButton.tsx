import SunnyButton from "./SunnyButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const RainbowButton = () => {
  return (
    <SunnyButton href="#" title="Button" className="px-0 py-0">
      <ConnectButton
        label="Connect"
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
      />
    </SunnyButton>
  );
};

export default RainbowButton;
