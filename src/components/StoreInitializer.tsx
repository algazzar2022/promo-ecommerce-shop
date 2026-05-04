"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export default function StoreInitializer() {
  const loadFromServer = useStore((state) => state.loadFromServer);

  useEffect(() => {
    loadFromServer();
  }, [loadFromServer]);

  return null;
}
