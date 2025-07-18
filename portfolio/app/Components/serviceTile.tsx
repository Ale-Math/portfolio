import { ReactNode } from "react";

interface ServicesTileProps {
  icon: ReactNode;
  title: string;
}

export function ServicesTile(props: ServicesTileProps) {
  return (
    <div className="w-60 p-4 flex flex-col items-start space-y-3 shadow border-gray-300 border bg-slate-50">
      <div className="p-2">{props.icon}</div>
      <p className="text-lg font-semibold">{props.title}</p>
      <p className="text-sm text-gray-500">view more -</p>
    </div>
  );
}
