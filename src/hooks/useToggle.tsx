import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const onToggle = () => setIsOpen(!isOpen);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return { isOpen, onToggle, onOpen, onClose };
};
