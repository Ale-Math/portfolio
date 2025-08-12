import { ReactNode } from "react";

interface ServicesTileProps {
  icon: ReactNode;
  icon2: ReactNode;
  title: string;
}

export function ServicesTile(props: ServicesTileProps) {
  return (
    <div className="w-60 p-5 pr-10 py-20 flex flex-col items-start space-y-3 shadow border-gray-300 border bg-slate-50">
      <div className="p-2">{props.icon}</div>
      <p className="text-xl">{props.title}</p>
      <p className="text-md text-gray-500">view more {props.icon2}</p>
    </div>
  );
}
