import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/icons/Icons";
import { Switch } from "@nextui-org/react";

export const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Manejar el cambio de tema cuando el switch cambia de estado
  const handleThemeChange = (isSelected: boolean) => {
    setTheme(isSelected ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <Switch
      checked={theme === "light"}
      onChange={(e) => handleThemeChange(e.target.checked)} // Manejar el cambio de estado aquí
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
    />
  );
};
