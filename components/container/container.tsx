import { PropsWithChildren }    from "react";
 const Container = (props: PropsWithChildren) => {
  return <div className="w-full px-4 md:w-2xl md:px-0 md:mx-auto lg:w-4xl">
      {props.children}
    </div>
  
};
export default Container;
// w-max-[1200px]