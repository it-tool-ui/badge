import React from "react";
import type { BadgeProps } from "./badge.types";
import { badgeVariants } from "./badge.helpers";
import { cn } from "../utils";

const Badge: React.FC<BadgeProps> = ({
  title,
  shape,
  size,
  color,
  position,
  showOutline,
  hidden,
  className,
  labelClassName,
  children,
}) => {
  return (
    <div className={cn("relative w-fit", className)}>
      {children}
      {!hidden && (
        <div
          data-outline={Boolean(showOutline).toString()}
          className={cn(
            badgeVariants({ shape, size, position, color }),
            labelClassName
          )}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Badge;
