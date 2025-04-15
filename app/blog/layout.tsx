import Link from "next/link";
import {PropsWithChildren} from "react";
export default ( props: PropsWithChildren) => {
    return(
    <div className = "h-screen flex flex-row ">
        <div className = "w-48">
            
        <ul className="flex flex-col list-none">
  {[1, 2, 3, 4].map((slug) => {
    return (
      <li key={slug}>
        <Link href={`/blog/${slug}`}>Blog {slug}</Link>
      </li>
    );
  })}
</ul>

        </div>
        <div className = "w-full">{props.children}</div>

            
    </div>
    );
    };