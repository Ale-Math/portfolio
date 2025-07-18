import { BigTile } from "./Components/BigTile";
import { Button } from "./Components/Button";
import { Call } from "./Components/Icons/call";
import { Case } from "./Components/Icons/case";
import { Document } from "./Components/Icons/document";
import { Trophy } from "./Components/Icons/trophy";
import { Header } from "./Components/PageComponents/Header";
import { HomeSection } from "./Components/PageComponents/Home";
import { Tile } from "./Components/tile";

export default function Home() {
  return (
    <div className=" flex-col flex items-center relative h-full w-full">
      <Header />
      <HomeSection />
      <div className="flex justify-center flex-col items-center space-y-10">
        <div
          className="py-1
        0 space-y-2"
        >
          <p className="text-4xl font-bold text-center">About Me</p>
          <p className="text-md text-gray-500 text-center">My Introduction</p>
        </div>
        <div className="flex w-4/5 justify-center space-x-5">
          <div className="w-1/2 p-10">
            <img className=" rounded-2xl h-11/12" src="\Alex.jpg"></img>
          </div>
          <div className="w-1/2">
            <div className="flex gap-5 py-10">
              <Tile
                icon={<Trophy />}
                title="Experience"
                description="3+ years working"
              />
              <Tile
                icon={<Case />}
                title="Completed"
                description="25+ projects"
              />
              <Tile icon={<Call />} title="Support" description="Online 24/7" />
            </div>
            <p className="w-4/5 text-gray-600 text-lg pb-12">
              Looking for a MERN Stack Developer to bring your web or mobile
              application ideas to life? Look no further! With expertise in
              MongoDb, MySql, Express, React, React-Native, Node, Typescript and
              GraphQL, I am your go-to developer for building sustainable client
              and server-side projects. Let's work together to create a dynamic
              and engaging online experience for your audience!
            </p>
            <Button text="Download CV &nbsp;" postIcon={<Document />} />
          </div>
        </div>
      </div>
      <div>
        <div className="py-20 space-y-2">
          <p className="text-4xl font-bold text-center">Skills</p>
          <p className="text-sm text-gray-500 text-center">
            My Technical Skills
          </p>
        </div>
        <div className="flex gap-10">
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
    </div>
  );
}
