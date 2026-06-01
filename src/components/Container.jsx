
const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1320px] mx-auto px-4 sm:px-6 ${className}`}>{children}</div>
  );
};

export default Container
