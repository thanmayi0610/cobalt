import {PropsWithChildren} from "react";
export default ( props: PropsWithChildren) => {
    return(
    <div className = "h-screen flex flex-row ">
        <div className = "w-48">
            
            <ul className="flex flex-col  ">
                <li>Blog 1</li>
                <li>Blog 2</li>
                <li>Blog 3</li>
            </ul>
        </div>
        <div className = "w-full">{props.children}</div>

            
    </div>
    );
    };