import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { browser } from "~lib/utils/constants";
import useAppStore from "~store";

export function useTheme() {
  const { theme, setTheme } = useAppStore(
    (state) => ({
      theme: state.theme,
      setTheme: state.setTheme,
    }),
    shallow
  );

  useEffect(() => {
    if (!browser) return;
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme] as const;
}
