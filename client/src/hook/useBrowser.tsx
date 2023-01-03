import { useState, useEffect } from "react";

function useBrowser(): string {
  const [browser, setBrowser] = useState("" as string);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const browser =
      userAgent.match(/(Chrome|Firefox|Safari|Edge)/)?.[0] ?? "Other";
    setBrowser(browser);
  }, []);

  return browser;
}

export default useBrowser;
