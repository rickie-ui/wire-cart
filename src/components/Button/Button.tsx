import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon: ReactNode;
};

const Button = ({ children, icon }: Props) => {
  return (
    <>
      <button className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all hover:bg-primary">
        {icon}
        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-primary px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          {children}
          <span className="absolute -bottom-1 left-1/2 -z-10 -mt-1 h-3 w-3 -translate-x-1/2 rotate-45 transform bg-primary"></span>
        </span>
      </button>
    </>
  );
};

export default Button;
