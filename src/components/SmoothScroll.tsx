"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect, useState } from 'react';

function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [ios, setIos] = useState(false);

  useEffect(() => {
    setIos(isIOS());
  }, []);

  // On iOS, skip Lenis entirely — iOS Safari has beautiful native momentum scroll
  // Lenis intercepts it and creates jank / slow feel on iPhones
  if (ios) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
