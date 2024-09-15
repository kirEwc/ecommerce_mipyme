import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

import {
    MoonIcon,
    SunIcon,
  } from "@/icons/Icons";
  
  import {
    Switch,
    
  } from "@nextui-org/react";

export const Switcher = () => {

    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSwitch = (isSelected: boolean, className: string): React.ReactElement => {
    if (isSelected) {
      setTheme('light')
      return <SunIcon className={className} />
    } else {
      setTheme('dark')
      return <MoonIcon className={className} />
    }
  }


  if(!mounted) return null
  return (
    <Switch
    defaultSelected = {theme === 'light' ? true : false}
    size="lg"
    color="primary"
    thumbIcon={({ isSelected=false, className }) => handleSwitch(isSelected, className)}
    />
  )
}
