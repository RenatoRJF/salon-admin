import { Ripple } from "primereact/ripple";
import { NavbarListProps } from "./NavbarList.types";
import Link from "next/link";

export default function NavbarList({ items }: NavbarListProps) {
  return (
    <nav className="px-8 mt-8 mb-12">
      <ul className="list-none p-0 m-0 overflow-hidden">
        <span className="block uppercase mb-2 text-xs text-gray-400 pl-6">
          Main
        </span>

        {items.map(({ label, icon, href }) => (
          <li className="text-gray-400" key={label}>
            <Link
              href={href}
              className="p-ripple flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg hover:bg-gray-700 duration-200 transition-colors hover:text-white"
            >
              <i className={`pi mr-2 ${icon}`} />
              <span className="font-medium">{label}</span>
              <Ripple />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
