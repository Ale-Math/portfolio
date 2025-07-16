import { HandSvg } from "./Images/Hand";

export default function Home() {
  return (
    <div className=" flex-col flex items-center relative h-full w-full">
      <div className="flex justify-between w-full px-36 p-7 sticky top-0 bg-white  ">
        <div>Alexander</div>
        <div>
          <ul className="flex gap-4 text-md">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="py-24 w-11/12 flex justify-center">
        <div className="w-1/5"></div>
        <div className="w-2/5 space-y-4">
          <p className="text-6xl font-bold">Alexander P.</p>
          <div className="flex items-center">
            <p className="text-6xl font-bold">Mathew</p> &nbsp;&nbsp;{" "}
            <HandSvg />
          </div>
          <p className="text-xl text-gray-600">
            ———— &nbsp; Software Developer
          </p>
          <p className="w-4/5 text-lg/6 text-gray-500">
            As a Software Engineer, I am driven by a deep passion for acquiring
            new skills and expertise to create stunning and fully responsive
            applications.
          </p>
        </div>
        <div className="w-2/5">
          <img
            className="rounded-full object-cover h-72 w-72"
            src="\Alex.jpg"
          ></img>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center space-y-10">
        <div>
          <p className="text-3xl font-bold text-center">About Me</p>
          <p className="text-md text-gray-500 text-center">My Introduction</p>
        </div>
        <div className="flex w-4/5 justify-center space-x-5">
          <div className="w-1/2 p-10">
            <img className=" rounded-2xl" src="\Alex.jpg"></img>
          </div>
          <div className="w-1/2">
            <div></div>
            <p>
              Looking for a MERN Stack Developer to bring your web or mobile
              application ideas to life? Look no further! With expertise in
              MongoDb, MySql, Express, React, React-Native, Node, Typescript and
              GraphQL, I am your go-to developer for building sustainable client
              and server-side projects. Let's work together to create a dynamic
              and engaging online experience for your audience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
