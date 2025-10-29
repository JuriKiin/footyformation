import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 0 0-4.47 1.22m0 17.56A10 10 0 0 0 12 22" />
      <path d="M2.22 16.47A10 10 0 0 1 2 12m20 0a10 10 0 0 0-.22-4.47" />
      <path d="m15.53 21.11 1.7-2.94" />
      <path d="m21.11 15.53-2.94-1.7" />
      <path d="m8.47 2.89-1.7 2.94" />
      <path d="m2.89 8.47 2.94 1.7" />
      <path d="m12 7.5 3.8 2.25" />
      <path d="M12 7.5v4.5" />
      <path d="M12 7.5 8.2 9.75" />
      <path d="m12 16.5-3.8-2.25" />
      <path d="M12 12v4.5" />
      <path d="m12 16.5 3.8-2.25" />
    </svg>
  );
}
