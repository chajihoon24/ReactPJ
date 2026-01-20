// copy OuterHTML

interface IconProps {
    size?: number;
    className?: string;
    fill?: string;
    weight?: number;
}

export function IconBookmark({
    size = 28,
    className,
    fill = "none",
    weight = 1,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="currentColor"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bookmark-icon lucide-bookmark"
        >
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
        </svg>
    );
}

export function IconInfo({
    size = 28,
    className,
    fill = "none",
    weight = 1,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#434343"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-alert-icon lucide-circle-alert"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    );
}

export function IconTrash({
    size = 28,
    className,
    fill = "none",
    weight = 1,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            viewBox="0 -960 960 960"
            width={size}
            fill="#434343"
        >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
    );
}

export function IconSetting({
    size = 24,
    className,
    fill = "none",
    weight = 1,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#434343"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-settings-icon lucide-settings"
        >
            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

export function IconRefresh({
    size = 24,
    className,
    fill = "none",
    weight = 1,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#434343"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
        </svg>
    );
}

export function IconPanel({
    size,
    className,
    fill = "none",
    weight=1.5,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#1f2937"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-panel-right-icon lucide-panel-right"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M15 3v18" />
        </svg>
    );
}

export function IconEllipsis({
    size=24,
    className,
    fill = "none",
    weight = 1.5,
}: IconProps) {


  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-ellipsis-icon lucide-ellipsis"
      >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
      </svg>
  );
}
