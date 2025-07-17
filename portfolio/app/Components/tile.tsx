import { NextComponentType } from "next";
import { Trophy } from "./Icons/trophy";
import { ReactNode } from "react";

interface TileProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Tile(props: TileProps) {
  return (
    <div className="w-32 p-4 flex flex-col items-center space-y-1 border-gray-300 border rounded-xl bg-slate-50">
      <div className="p-2">{props.icon}</div>
      <p className="text-sm font-semibold">{props.title}</p>
      <p className="text-[11px] text-gray-500">{props.description}</p>
    </div>
  );
}
