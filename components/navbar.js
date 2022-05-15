import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router }) {
  const items = [
    { id: 1, text: "", href: "/" },
    { id: 2, text: "about", href: "/about" },
    { id: 3, text: "skill", href: "/skill" },
    { id: 4, text: "experience", href: "/experience" },
    { id: 5, text: "media", href: "/media" },
  ];

  return (
    <nav className="">
      <div className="py-8 flex justify-between items-center content-center mx-24">
        <div>
          <Link href="/">
            <a className="text-2xl font-sans font-bold tracking-[5px]">
              RIZQI SAMAWA
            </a>
          </Link>
        </div>
        <div>
          <ul className="flex w-full space-x-8 justify-end font-mono text-xl tracking-wide">
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <li>
                    <Link href={item.href}>
                      <a
                        className={`${
                          router.pathname == item.href
                            ? "border-b-2 border-black"
                            : "hover:border-b-2 border-black"
                        }`}
                      >
                        {item.text}
                      </a>
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
