import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M19 14l.9 2.6L22.5 17.5l-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14Z" />
    </BaseIcon>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h12v15H7a2.5 2.5 0 0 0-2.5 2.5v-15Z" />
      <path d="M7 4v15" />
    </BaseIcon>
  );
}

export function BrainIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9.2 5.2A3.2 3.2 0 0 1 12 4a3.2 3.2 0 0 1 2.8 1.2 3.2 3.2 0 0 1 2.8 2.8A3.2 3.2 0 0 1 19 12a3.2 3.2 0 0 1-1.4 2.8A3.2 3.2 0 0 1 14.8 18 3.2 3.2 0 0 1 12 19a3.2 3.2 0 0 1-2.8-1.2 3.2 3.2 0 0 1-2.8-2.8A3.2 3.2 0 0 1 5 12a3.2 3.2 0 0 1 1.4-2.8A3.2 3.2 0 0 1 9.2 5.2Z" />
      <path d="M9 9c1 .2 1.5 1 1.5 2s-.5 1.8-1.5 2" />
      <path d="M15 9c-1 .2-1.5 1-1.5 2s.5 1.8 1.5 2" />
    </BaseIcon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 18v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
      <path d="M10 7a3 3 0 1 1 0 .1" />
      <path d="M20 18v-1a4 4 0 0 0-2.5-3.7" />
      <path d="M16.8 4.4a3 3 0 0 1 0 5.2" />
    </BaseIcon>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3" />
    </BaseIcon>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="8.5" r="4" />
      <path d="m9 13-1 7 4-2 4 2-1-7" />
    </BaseIcon>
  );
}

export function LaptopIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5V14H5V6.5Z" />
      <path d="M3.5 17h17" />
    </BaseIcon>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 20V6.5A1.5 1.5 0 0 1 7.5 5h9A1.5 1.5 0 0 1 18 6.5V20" />
      <path d="M4 20h16" />
      <path d="M9 9h2" />
      <path d="M13 9h2" />
      <path d="M9 13h2" />
      <path d="M13 13h2" />
      <path d="M10 20v-4h4v4" />
    </BaseIcon>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6.5h12v8H9.2L6 17v-10.5Z" />
      <path d="M8.5 9.5h7" />
      <path d="M8.5 12h4" />
    </BaseIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </BaseIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 7h14" />
      <path d="M5 12h14" />
      <path d="M5 17h14" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </BaseIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h12" />
      <path d="m13 6 6 6-6 6" />
    </BaseIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8v4l2.5 1.5" />
    </BaseIcon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 4 2.3 4.8L20 9.6l-4 3.7.9 5.3L12 16.2 7.1 18.6 8 13.3 4 9.6l5.7-.8L12 4Z" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 7.5h14v9H5z" />
      <path d="m5 8 7 5 7-5" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 5.5h3l1.4 3-2 1.5a12 12 0 0 0 5.6 5.6l1.5-2 3 1.4v3A2 2 0 0 1 18.5 20a15 15 0 0 1-13.5-13.5A2 2 0 0 1 7 5.5Z" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20s5-4.5 5-9a5 5 0 1 0-10 0c0 4.5 5 9 5 9Z" />
      <circle cx="12" cy="11" r="1.8" />
    </BaseIcon>
  );
}