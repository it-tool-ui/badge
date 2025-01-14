import React from "react";
import type { BadgeProps } from "./badge.types";
import { badgeVariants } from "./badge.helpers";

const Badge: React.FC<BadgeProps> = ({
  title,
  shape,
  size,
  color,
  position,
  showOutline,
  hidden,
  children,
}) => {
  return (
    <div className="relative w-fit">
      {children}
      {!hidden && (
        <div
          data-outline={Boolean(showOutline).toString()}
          className={badgeVariants({ shape, size, position, color })}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Badge;
