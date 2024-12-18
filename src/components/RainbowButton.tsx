import { ConnectButton } from "@rainbow-me/rainbowkit";

const RainbowButton = () => {
  return (
    <ConnectButton
      label="Connect Wallet"
      accountStatus={{
        smallScreen: "avatar",
        largeScreen: "full",
      }}
    />
  );
};

export default RainbowButton;
