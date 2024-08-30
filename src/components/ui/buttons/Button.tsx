"use client"
import React, { ButtonHTMLAttributes, ReactNode, SVGProps } from "react";

interface ButtonPropsBase {
  variant?: "primary" | "secondary" | "outline-primary" | "outline-secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  isLoading?: boolean;
  icon?: ReactNode | React.ReactElement<SVGProps<SVGSVGElement>>;
  disabled?: boolean;
}

type ButtonProps = ButtonPropsBase & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  isLoading = false,
  icon,
  disabled = false,
  ...rest
}: ButtonProps) => {
  const variantClasses = {
    primary:
      "bg-amazon text-white hover:bg-amazon/90 focus:ring-amazon-200 dark:focus:ring-amazon-900",
    secondary:
      "bg-gray-200 text-black hover:bg-gray-200/90 focus:ring-gray-200 dark:focus:ring-gray-900",
    ["outline-primary"]: "bg-transparent text-amazon border border-amazon ",
    ["outline-secondary"]:
      "bg-transparent text-gray-700 border border-gray-700 hover:bg-gray-50",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-6 py-3",
  };

  const buttonClasses = ` relative rounded-md text-center ${variantClasses[variant] || variantClasses.primary
    } ${sizeClasses[size] || sizeClasses.md} ${className} ${isLoading ? "cursor-wait" : "cursor-pointer"
    } ${disabled ? "opacity-50 pointer-events-none" : ""}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...rest}
    >
      <span className="flex items-center justify-center">
        {isLoading && (
          <span className="mr-2">
            {/* SVG Path for loader */}
            <svg
              className="h-4 w-4 animate-spin rounded-full border-b-2 border-t-2 border-blue-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            ></svg>
          </span>
        )}
        {isLoading ? null : icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default Button;
