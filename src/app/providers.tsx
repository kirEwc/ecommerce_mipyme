// app/providers.tsx
'use client'

// import {ThemeProvider as NextThemesProvider} from "next-themes";
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from "@/components/context/ThemeContext";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
            
        <ThemeProvider>
        {children}
        </ThemeProvider>
      
    </NextUIProvider>
  )
}