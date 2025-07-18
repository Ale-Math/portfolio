import { ReactNode } from "react";

interface ButtonProps {
  preIcon?: ReactNode;
  text: string;
  postIcon?: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className="flex justify-center bg-black py-4 px-6 rounded-2xl text-lg font-bold  text-white cursor-pointer">
      {props.preIcon}
      {props.text}
      {props.postIcon}
    </button>
  );
}
