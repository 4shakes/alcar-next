import React, { useState } from "react";

import { ItemSidebarShop } from "./item-sidebar-shop";
/* import Button from "../buttons/Button"; */
/* import InputCheckbox from "../inputCheckbox/InputCheckbox"; */
import { Button } from "../button";
import { Checkbox } from "@radix-ui/react-checkbox";

interface Props {
  onClose?: () => void;
}
export const SidebarShop = ({ onClose }: Props) => {
  return (
    <div className="flex h-screen flex-col text-black">
      <div className="flex justify-between">
        <h2 className="mb-4 text-xl font-bold dark:text-white">FILTRAR POR</h2>
        {onClose && (
          <div className="" onClick={onClose}>
            x
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-scroll rounded-lg border dark:border-gray-700">
        <div className="flex flex-col gap-2 p-4">
          <Button variant="secondary">Limpiar filtro</Button>
          <div className="">
            <ItemSidebarShop text="Category Shop">
              <div className="items-top flex space-x-2">
                <Checkbox id="printing" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="printing"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Impresión Digital
                  </label>
                </div>
              </div>
              {/* <InputCheckbox labelText="Impresión Digital" name="printing" />
              <InputCheckbox labelText="Impresión Offset" name="printing" />
              <InputCheckbox
                labelText="Impresión de Gran Formato"
                name="printing"
              />
              <InputCheckbox
                labelText="Impresión de Tarjetas"
                name="printing"
              /> */}
            </ItemSidebarShop>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-4 p">
                <Button
                    variant='outline-primary'
                    size='md'
                    icon={<IconDelete />}
                >
                    Limpiar
                </Button>
                <Button
                    variant='primary'
                    size='md'
                    icon={<IconShopCart />}
                >
                    Pagar
                </Button>
            </div> */}
    </div>
  );
};
