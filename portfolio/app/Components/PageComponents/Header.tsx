export function Header() {
  return (
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
  );
}
