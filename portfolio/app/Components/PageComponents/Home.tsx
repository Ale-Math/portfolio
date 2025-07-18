import { HandSvg } from "@/app/Images/Hand";
import { Button } from "../Button";
import { Hello } from "../Icons/hello";

export function HomeSection() {
  return (
    <div className="py-24 w-11/12 flex justify-center">
      <div className="w-1/5"></div>
      <div className="w-2/5 space-y-4">
        <p className="text-6xl font-bold">Alexander P.</p>
        <div className="flex items-center">
          <p className="text-6xl font-bold">Mathew</p> &nbsp;&nbsp; <HandSvg />
        </div>
        <p className="text-xl text-gray-600">———— &nbsp; Software Developer</p>
        <p className="w-4/5 text-lg/6 text-gray-500 pb-10">
          As a Software Engineer, I am driven by a deep passion for acquiring
          new skills and expertise to create stunning and fully responsive
          applications.
        </p>
        <Button text="Say Hello &nbsp;" postIcon={<Hello />} />
      </div>
      <div className="w-2/5">
        <img
          className="rounded-full object-cover h-72 w-72"
          src="\Alex.jpg"
        ></img>
      </div>
    </div>
  );
}
