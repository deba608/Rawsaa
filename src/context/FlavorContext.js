"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { flavors, defaultFlavor } from '@/lib/flavors';

const FlavorContext = createContext(null);

/**
 * Holds the globally-active flavor and pushes its palette onto the document
 * root as CSS custom properties. Because every section styles itself with
 * `var(--flavor-*)`, switching a flavor anywhere re-themes the entire site.
 */
export function FlavorProvider({ children }) {
  const [activeId, setActiveId] = useState(defaultFlavor.id);

  const activeFlavor = useMemo(
    () => flavors.find((f) => f.id === activeId) ?? defaultFlavor,
    [activeId]
  );

  const setFlavor = useCallback((idOrFlavor) => {
    setActiveId(typeof idOrFlavor === 'string' ? idOrFlavor : idOrFlavor.id);
  }, []);

  // Sync the active palette to :root so the whole document re-themes smoothly.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--flavor-primary', activeFlavor.primary);
    root.style.setProperty('--flavor-bg-accent', activeFlavor.tint);
    root.style.setProperty('--flavor-gradient', activeFlavor.gradient);
    root.dataset.flavor = activeFlavor.id;
  }, [activeFlavor]);

  const value = useMemo(
    () => ({ flavors, activeFlavor, activeId, setFlavor }),
    [activeFlavor, activeId, setFlavor]
  );

  return (
    <FlavorContext.Provider value={value}>{children}</FlavorContext.Provider>
  );
}

export function useFlavor() {
  const ctx = useContext(FlavorContext);
  if (!ctx) {
    throw new Error('useFlavor must be used within a <FlavorProvider>');
  }
  return ctx;
}
