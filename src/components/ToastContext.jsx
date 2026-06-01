import { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setMessages((prev) => [...prev, { id, message, type }]);
    window.setTimeout(() => {
      setMessages((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, messages, setMessages }}>
      {children}
      <div className="fixed right-6 top-6 z-50 flex max-w-sm flex-col gap-3">
        {messages.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-3xl border px-5 py-4 text-sm shadow-xl transition-transform duration-300 ${
              toast.type === "success"
                ? "border-[#C7F5E7] bg-[#F0FFFA] text-[#14594B]"
                : "border-[#FED7D7] bg-[#FFF2F2] text-[#991B1B]"
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
