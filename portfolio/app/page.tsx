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
      <div className="py-24">
        <div></div>
        <div>
          Alexander P.
          <br />
          Mathew
          <HandSvg />
        </div>

        <div></div>
      </div>
    </div>
  );
}
