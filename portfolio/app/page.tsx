import { HandSvg } from "./Images/Hand";

export default function Home() {
  return (
    <div className=" flex-col flex items-center">
      <div className="flex justify-between w-4/5 p-5">
        <div>Alexander</div>
        <div>
          <ul className="flex gap-4">
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
        <div className="w-2/5"></div>
      </div>
      <div>
        <div>
          <p>About Me</p>
          <p>My Introduction</p>
        </div>
      </div>
    </div>
  );
}
