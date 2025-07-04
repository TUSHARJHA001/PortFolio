const CarouselButton = ({ children, className, ...restProps }) => {
  return (
    <button
      type="button"
      className={`w-6 h-6 rounded-full flex items-center justify-center ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CarouselButton;
