import Link from "./Link";

export default function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {links.map(({ label, path }) => {
        return (
          <Link
            key={label}
            to={path}
            className="mb-3 transition-all"
            activeClassName="font-bold border-l-4 border-bule-500 pl-2"
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
