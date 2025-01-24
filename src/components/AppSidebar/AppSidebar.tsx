"use client";

import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { Sidebar, SidebarProps } from "primereact/sidebar";

import { dashboardRoutes } from "@/constants/routes";

import UserInfo from "../UserInfo/UserInfo";
import NavbarList from "../NavbarList/NavbarList";
import AppDivider from "../AppDivider/AppDivider";

export default function AppSidebar({
  visible,
  onHide = () => {},
}: Partial<SidebarProps>) {
  return (
    <Sidebar
      modal={false}
      onHide={onHide}
      visible={visible}
      dismissable={false}
      closeOnEscape={false}
      showCloseIcon={false}
      className="w-[260px] border-0 after:content-[''] after:absolute after:right-0 after:w-[1px] after:h-screen after:bg-gradient-to-b after:from-indigo-500 after:via-indigo-800 after:to-red-700"
      content={
        <div className="relative flex flex-col h-screen">
          <div className="absolute top-10 -right-4 hover:opacity-80 border-0 z-10">
            <Button
              rounded
              size="small"
              onClick={onHide}
              icon="pi pi-angle-left text-lg"
              className="bg-white !p-0 !w-8 !h-8 hover:opacity-80 border-0"
            />
          </div>

          <header className="p-8">
            <UserInfo
              name="Royal Salons"
              occupation="Hair & makeup"
              image="https://randomuser.me/api/portraits/men/5.jpg"
            />
          </header>

          <div className="overflow-auto flex-1">
            <AppDivider />

            <NavbarList items={dashboardRoutes} />

            <AppDivider />

            <ul className="list-none px-8 m-0 mt-8 overflow-hidden">
              <span className="block uppercase mb-2 text-xs text-gray-400 pl-6">
                TEAM MEMBERS
              </span>

              {Array.from({ length: 3 }).map((_, index) => (
                <li className="text-gray-400" key={index}>
                  <a className="p-ripple flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg hover:bg-gray-700 duration-200 transition-colors hover:text-white">
                    <UserInfo
                      name="Royal Salons"
                      occupation="Hair & makeup"
                      image={`https://randomuser.me/api/portraits/men/${
                        index + 1
                      }.jpg`}
                    />

                    <Ripple />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    />
  );
}
