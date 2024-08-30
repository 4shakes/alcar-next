import React from "react";
/* import { InputCounter } from '../inputCounter/InputCounter'

import IconTrash from '../../public/icons/IconTrash' */

export const ItemSidebarCart = () => {
  return (
    <div className="w-full">
      <div className="flex gap-2">
        <div className="rounded">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-20 h-20 object-cover"
          />
        </div>

        <div className="flex-1 ">
          <div className="flex flex-col">
            <div className="flex justify-between mb-3">
              <h3 className="text-sm font-bold">Man T-shirt</h3>
              <p className="text-xs"> $100.00</p>
            </div>
            <hr />
            <div className="flex justify-between mt-3">
              {/*  <InputCounter /> */}
              <button
                type="button"
                className="inline-flex border items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/*  <IconTrash fill='red' /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
    </div>
  );
};
