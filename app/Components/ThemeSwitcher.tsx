// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { IoSunny,IoMoonSharp } from "react-icons/io5";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="flex justify-center gap-3 text-lg dark:text-white text-gray-700">
      <button onClick={() => setTheme('light')}><IoSunny /></button>
      <button onClick={() => setTheme('dark')}><IoMoonSharp /></button>
    </div>
  )
};