"use client";

import { useEffect, type ReactNode } from "react";
import { StoreProvider } from "@/context/Store";
import ToastContainers from "@/Components/ToastContainer";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      if (
        event?.reason instanceof Event ||
        (event?.reason && typeof event.reason === "object" && !event.reason.message)
      ) {
        event.preventDefault();
      }
    };

    const handleError = (event: ErrorEvent) => {
      if (event?.error instanceof Event || event?.message === "[object Event]") {
        event.preventDefault();
      }
    };

    window.addEventListener("unhandledrejection", handleRejection);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("unhandledrejection", handleRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <StoreProvider>
      <ToastContainers />
      {children}
    </StoreProvider>
  );
}
