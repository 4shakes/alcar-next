interface Props {
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  backgroundColor?: string;
  children: React.ReactNode;
}

const Drawer = ({
  isOpen,
  onClose,
  width = 320,
  children,
  backgroundColor = "rgba(0,0,0,0.7)",
}: Props) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-full w-full ${isOpen ? "" : "pointer-events-none"}`}
    >
      <div
        className={`fixed inset-0 z-40 h-full bg-black opacity-0 ${backgroundColor} transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        style={{ width: `${width}px` }}
        className={`fixed z-50 flex h-full transform-gpu bg-gray-100 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex w-full flex-col bg-gray-100 px-6 py-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          {/* Contenido del drawer */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
