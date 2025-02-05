import {
  BriefcaseBusiness,
  FileUser,
  Inbox,
  LayoutDashboard,
  LogOut,
  UserRoundPen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  //   SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Properties",
    url: "/properties",
    icon: LayoutDashboard,
  },

 
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Card>
          <div className=" flex items-center gap-4 rounded-md border px-2 py-2">
            {/* <BellRing />
             */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none ">Uzair Ahmed</p>
              <p className="text-sm text-muted-foreground">Frontend Dev</p>
            </div>
            <LogOut></LogOut>
            {/* <Switch /> */}
          </div>
          {/* <CardContent className="grid gap-4">
     

      </CardContent> */}
        </Card>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
