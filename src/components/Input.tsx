import { forwardRef } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  error: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return (
      <input
        className="bg-white rounded h-10 w-full px-5 placeholder:text-blue-500 text-blue-500"
        {...props}
        ref={ref}
        required
      />
    );
  },
);

export default Input;
