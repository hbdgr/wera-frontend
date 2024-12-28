export const debugLog = (...msg: unknown[]) => {
  if (process.env.NEXT_PUBLIC_DEBUG_LOGS === "true") {
    console.log(...msg);
  }
};
