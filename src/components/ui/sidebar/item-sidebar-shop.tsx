import React from "react";

interface Props {
  text: string;
  children: React.ReactNode;
}
export const ItemSidebarShop = ({ text, children }: Props) => {
  return (
    <div className="">
      <div className="flex w-full">
        <div className="w-full flex-1 rounded-t-xl py-4 text-base font-semibold text-gray-900 dark:text-white">
          {text}
        </div>
      </div>
      {children}
    </div>
  );
};
