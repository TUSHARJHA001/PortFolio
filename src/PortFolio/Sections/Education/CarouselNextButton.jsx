import { FaArrowRight } from "react-icons/fa";

const NextButton = ({ disabled, className, ...rest }) => (
  <button
    className={`w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center disabled:opacity-40 transition-colors ${className}`}
    disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  >
    <span aria-hidden="true" className="text-black text-3xl font-bold" ><FaArrowRight className="text-3xl" /></span>
  </button>
);

export default NextButton;
