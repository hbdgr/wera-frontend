import SunnyButton from "./SunnyButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const RainbowButton = () => {
  return (
    <SunnyButton href="#" title="Button" className="px-1 py-0 w-max">
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
