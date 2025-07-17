import { ReactNode } from "react";

interface ButtonProps {
  preIcon?: ReactNode;
  text: string;
  postIcon?: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className="flex justify-center bg-black p-2 rounded-xl text-white cursor-pointer">
      {props.preIcon}
      {props.text}
      {props.postIcon}
    </button>
  );
}
