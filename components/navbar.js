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
     <div className="justify-between md:flex items-center mx-22">
      <div className="text-center font-sans text-2xl font-bold tracking-[5px] p-4 ml-3">
        <Link href="/">
          <a>RIZQI SAMAWA</a>
        </Link>
      </div>
      <div>
        <ul className="flex justify-center space-x-5 p-2 text-xl font-mono tracking-wide mr-4">
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
  );
}

export default withRouter(Navbar);
