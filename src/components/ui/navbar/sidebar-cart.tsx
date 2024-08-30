import React, { useState } from "react";

import { ItemSidebarCart } from "./item-sidebar-cart";
import { Button } from "../button";
import { ShoppingCart, Trash2 } from "lucide-react";

interface Props {
  onClose?: () => void;
}
export const SidebarCart = ({ onClose }: Props) => {
  return (
    <div className="flex flex-col text-black h-full gap-y-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">FILTRAR POR</h2>
        {onClose && (
          <div className="" onClick={onClose}>
            x
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-scroll">
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <ItemSidebarCart />
        <div className="flex flex-col  gap-2 ">{/* */}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 p">
        <div className="font-semibold uppercase">Subtotal</div>
        <div className="place-self-end">S/ 189.90</div>
        <Button variant="outline" size="default">
          <Trash2 size={20} /> Limpiar
        </Button>
        <Button variant="default" size="default">
          <ShoppingCart size={20} /> Pagar
        </Button>
      </div>
    </div>
  );
};
