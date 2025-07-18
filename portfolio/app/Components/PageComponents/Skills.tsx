import { BigTile } from "../BigTile";

export function Skills() {
  return (
    <div>
      <div className="space-y-2">
        <p className="text-4xl font-bold text-center">Skills</p>
        <p className="text-sm text-gray-500 text-center">My Technical Skills</p>
      </div>
      <div className=" py-20 flex gap-10">
        <BigTile
          title="Frontend Engineer"
          skill={[
            "HTML",
            "CSS",
            "JavaScript",
            "Typescript",
            "React Js",
            "Recoil",
            "Next Js",
            "Tailwind",
          ]}
        />
        <BigTile
          title="Backend Engineer"
          skill={[
            "Node Js",
            "Express",
            "MongoDB",
            "Git/GitHub",
            "PostgreSQL",
            "Web Sockets",
            "Zod",
            "Bycrypt",
          ]}
        />
        <BigTile
          title="DevOps Engineer"
          skill={[
            "Docker",
            "CI/CD",
            "AWS",
            "Kubernetes",
            "Grafana",
            "Nginx",
            "Prometheus",
            "Helm",
          ]}
        />
      </div>
    </div>
  );
}
