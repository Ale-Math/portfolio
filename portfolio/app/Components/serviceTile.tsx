import { ReactNode } from "react";

interface ServicesTileProps {
  icon: ReactNode;
  icon2: ReactNode;
  title: string;
}

export function ServicesTile(props: ServicesTileProps) {
  return (
    <div className="w-64 p-5 pr-14 py-20 flex flex-col items-start space-y-5 shadow border-gray-300 border bg-slate-50">
      <div className="p-2">{props.icon}</div>
      <p className="text-xl">{props.title}</p>
      <div className="flex">
        <p className="text-md text-gray-500">view more </p>
        {props.icon2}
      </div>
    </div>
  );
}
