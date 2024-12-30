"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Switch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>loading ...</div>;
  }

  if (resolvedTheme === "dark") {
    return <div onClick={() => setTheme("light")}>DARK COMPONENT</div>;
  }

  if (resolvedTheme === "light") {
    return <div onClick={() => setTheme("dark")}>LIGHT COMPONENT</div>;
  }
};

export default Switch;
