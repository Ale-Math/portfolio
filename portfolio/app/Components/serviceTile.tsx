import { ReactNode } from "react";

interface ServicesTileProps {
  icon: ReactNode;
  title: string;
}

export function ServicesTile(props: ServicesTileProps) {
  return (
    <div className="w-60 p-4 flex flex-col items-start space-y-1 shadow border-gray-300 border rounded-xl bg-slate-50">
      <div className="p-2">{props.icon}</div>
      <p className="text-sm font-semibold">{props.title}</p>
      <p className="text-[11px] text-gray-500">view more -</p>
    </div>
  );
}
