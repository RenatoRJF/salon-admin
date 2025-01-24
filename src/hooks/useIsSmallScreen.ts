import { useState, useEffect } from "react";

export function useIsSmallScreen(query = "(max-width: 768px)") {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const updateSize = () => {
      setIsSmall(mediaQuery.matches);
    };

    updateSize(); // Initialize state

    mediaQuery.addEventListener("change", updateSize);

    return () => mediaQuery.removeEventListener("change", updateSize);
  }, [query]);

  return { isSmall };
}
