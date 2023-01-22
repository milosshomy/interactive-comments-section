const Divider = ({ children }) => {
  return (
    <div className="relative h-full mb-5">
      <div className="absolute left-12 top-0 bg-lightGray w-0.5 h-full"></div>
      {children}
    </div>
  );
};

export default Divider;
