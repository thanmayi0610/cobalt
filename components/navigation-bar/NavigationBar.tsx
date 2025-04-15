"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
  const path = usePathname();
  const paths = {
    home: "/",
    enterprise: "/enterprise",
    pricing: "/pricing",
    blog: "/blog",
  };
 
  return (
    <div>
      <ol className="flex flex-row items-center justify-center gap-8 ">
        <li key={paths.home} className={path ==paths.home ? "text-red-800" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li
          key={paths.enterprise}
          className={path == "paths.enterprise" ? "text-green-800" : ""}
        >
          <Link href="/enterprise">Enterprise</Link>
        </li>
        <li
          key={paths.pricing}
          className={path == paths.pricing ? "text-blue-900" : ""}
        >
          <Link href="/pricing">Pricing</Link>
        </li>
        <li key={paths.blog} className={path == paths.blog ? "text-blue-900" : ""}>
          <Link href="/blog">Blogs</Link>
        </li>
      </ol>
    </div>
  );
};
