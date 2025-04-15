"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
  const path = usePathname();
  return (
    <div>
      <ol className="flex flex-row items-center justify-center gap-8 ">
        <li key={"Home"} className={path === "/" ? "text-red-800" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li
          key={"Enterprise"}
          className={path === "/enterprise" ? "text-green-800" : ""}
        >
          <Link href="/enterprise">Enterprise</Link>
        </li>
        <li
          key={"pricing"}
          className={path === "/pricing" ? "text-blue-900" : ""}
        >
          <Link href="/pricing">Pricing</Link>
        </li>
        <li key={"blog"} className={path === "/blog" ? "text-blue-900" : ""}>
          <Link href="/blog">Blogs</Link>
        </li>
      </ol>
    </div>
  );
};
