import React from "react";

export function Card({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-xl border bg-white shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function CardContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}
