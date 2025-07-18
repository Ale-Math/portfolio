import { Button } from "../Button";
import { Call } from "../Icons/call";
import { Case } from "../Icons/case";
import { Document } from "../Icons/document";
import { Trophy } from "../Icons/trophy";
import { Tile } from "../tile";

export function About() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="space-y-2">
        <p className="text-4xl font-bold text-center">About Me</p>
        <p className="text-md text-gray-500 text-center">My Introduction</p>
      </div>
      <div className="flex pt-20 w-4/5 justify-center space-x-5">
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
  );
}
