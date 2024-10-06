"use client";

import { toggleScheme } from "@/utils/themeScheme";
import { useRouter } from "next/navigation";

const ThemSchemeBtn = () => {
  const router = useRouter();

  const toggle = async () => {
    await toggleScheme();

    router.refresh();
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="px-2 py-1.5 rounded-sm bg-zinc-900 dark:bg-zinc-100"
      onClick={toggle}
    >
      <span className="inline-block text-sm dark:hidden text-zinc-100">
        switch to DARK
      </span>
      <span className="hidden text-sm dark:inline-block text-zinc-800">
        switch to LIGHT
      </span>
    </button>
  );
};

export default ThemSchemeBtn;
