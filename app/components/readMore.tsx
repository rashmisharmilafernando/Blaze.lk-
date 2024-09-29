import Link from "next/link"
import { FC, ReactNode } from "react";

interface ReadMoreButtonProps {
    href: string;
    children: ReactNode;

}
 

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ href, children }) => {
   
    return (
      
       <Link className='focus:outline-none text-black font-bold hover:text-[#264B9F]' href={href}>{children}</Link>
    );
  };
  
  export default ReadMoreButton;