import { Tick } from "./Icons/tick";

interface BigTileProps {
  title: string;
  skill: string[];
}

export function BigTile(props: BigTileProps) {
  return (
    <div className="border border-gray-300 bg-slate-50 rounded-xl w-80 p-7 shadow">
      <div>
        <p className="text-lg font-bold  flex justify-center pb-10">
          {props.title}
        </p>
        <div className="grid grid-cols-2 gap-7">
          {props.skill.map((skill, index) => (
            <div key={index} className="flex items-center text-md">
              <Tick />
              &nbsp;{skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
