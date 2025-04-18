import React from "react";

export function Avatar({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt }: { src?: string; alt?: string }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

export function AvatarFallback({ children }: React.PropsWithChildren) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700 text-sm">
      {children}
    </div>
  );
}
