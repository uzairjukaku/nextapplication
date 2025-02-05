import React from "react";

import { Separator } from "@radix-ui/react-separator";
import { SidebarTrigger } from "./ui/sidebar";

function Myheader({ children } :{
  children: React.ReactNode
}) {
  return (
    <header className="  flex min-h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4 flex-wrap">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        {children}
      </div>
    </header>
  );
}

export default Myheader;
