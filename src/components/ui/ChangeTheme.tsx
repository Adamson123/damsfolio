import { useTheme } from "next-themes";
import { useEffect } from "react";
const ChangeTheme = () => {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    if (theme === "dark") return;
    setTheme("dark");
  }, []);
  return <></>;
};

export default ChangeTheme;
