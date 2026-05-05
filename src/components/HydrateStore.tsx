"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";

interface Props {
  initialData: Record<string, unknown>;
}

export default function HydrateStore({ initialData }: Props) {

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      useStore.setState((state) => ({
        ...state,
        ...initialData,
        hero: { ...state.hero, ...(initialData.hero as object || {}) },
        cta: { ...state.cta, ...(initialData.cta as object || {}) },
        settings: { ...state.settings, ...(initialData.settings as object || {}) },
        benefits: { ...state.benefits, ...(initialData.benefits as object || {}) },
        products: (initialData.products as typeof state.products) || state.products,
        features: (initialData.features as typeof state.features) || state.features,
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
