import { Tick } from "./Icons/tick";

interface BigTileProps {
  title: string;
  skill: string[];
}

export function BigTile(props: BigTileProps) {
  return (
    <div className="border bg-slate-50 rounded-2xl p-5">
      <div>
        <p className="text-lg p-3">{props.title}</p>
        <div className="grid grid-cols-2 gap-4">
          {props.skill.map((skill, index) => (
            <div key={index} className="flex items-center">
              <Tick />
              &nbsp;{skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
