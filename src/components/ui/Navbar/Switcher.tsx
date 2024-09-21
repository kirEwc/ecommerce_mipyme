import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/icons/Icons";
import { Switch } from "@nextui-org/react";
import { useTheme } from "@/components/context/ThemeContext";

export const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLightTheme = theme === "light";

  return (
    <Switch
      checked={isLightTheme}
      onChange={toggleTheme} // Usa el toggleTheme directamente
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <MoonIcon className={className} /> : <SunIcon className={className} />
      }
    />
  );
};
