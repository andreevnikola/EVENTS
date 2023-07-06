"use client";

import { store } from "@/redux/store";
import { changedTheme } from "@/redux/theme";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  faBars,
  faBell,
  faBuilding,
  faCirclePlus,
  faCompass,
  faDoorOpen,
  faPersonDigging,
  faRightToBracket,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

function SideMenu() {
  let [opened, setOpened] = useState(false);

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        className="drawer-content"
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <FontAwesomeIcon
            icon={faBars}
            className={`-rotate-${opened ? "45" : "0"} transition-all`}
          />
        </label>
      </div>
      <div
        className="drawer-side mt-[64px] overflow-auto"
        style={{ height: "calc(100% + -64px)" }}
      >
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
          onClick={() => {
            setOpened(false);
          }}
        ></label>
        <ul className="menu p-4 w-80 bg-base-200 text-base-content h-fit min-h-full overflow-auto">
          <div className="divider hidden max-xs:flex">Main Navigation</div>
          <li className="hidden max-xs:block">
            <Link
              href="/aboutus"
              className="font-semibold"
              onClick={() => {
                document?.querySelector(".drawer-overlay")?.click();
              }}
            >
              About Us
            </Link>
            <Link
              href="/pricing"
              className="font-bold"
              onClick={() => {
                document?.querySelector(".drawer-overlay")?.click();
              }}
            >
              Pricing
            </Link>
            <Link
              href="/howitworks"
              className="font-semibold"
              onClick={() => {
                document?.querySelector(".drawer-overlay")?.click();
              }}
            >
              How it works?
            </Link>
          </li>
          <div className="divider">
            <FontAwesomeIcon icon={faUser} /> Profile
          </div>
          <li>
            <a>
              <FontAwesomeIcon icon={faBell} /> Notifications
            </a>
          </li>
          <li>
            <ul className="menu bg-base-200 w-full rounded-box ml-0">
              <li>
                <h2 className="menu-title text-info-content cursor-pointer hover:bg-info-content hover:text-base-100 rounded-sm ">
                  <FontAwesomeIcon icon={faBuilding} /> My Rooms
                </h2>
                <ul>
                  <li>
                    <a className="flex justify-between">
                      <p className="w-fit">The gigga niggas room</p>
                      <p className="w-fit">👶🏿</p>
                    </a>
                  </li>
                  <li>
                    <a className="flex justify-between">
                      <p className="w-fit">Trip to ohio</p>
                      <p className="w-fit">🦈</p>
                    </a>
                  </li>
                  <li>
                    <a className="flex justify-between">
                      <p className="w-fit">Over everest</p>
                      <p className="w-fit">🏔</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <div className="divider">
            <FontAwesomeIcon icon={faPersonDigging} /> Activities
          </div>
          <li>
            <a>
              <FontAwesomeIcon icon={faDoorOpen} /> Join Room
            </a>
          </li>
          <li>
            <Link
              href="/room/create"
              onClick={() => {
                document?.querySelector(".drawer-overlay")?.click();
              }}
            >
              <FontAwesomeIcon icon={faCirclePlus} /> Create Room
            </Link>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faCompass} /> Explore Public Rooms
            </a>
          </li>
          <div className="divider"></div>
          <div className="form-control relative w-full -ml-1 bg-transparent focus:bg-transparent">
            <div className="input-group w-full">
              <input
                type="text"
                placeholder="Search Rooms…"
                className="input input-bordered"
              />
              <button className="btn btn-primary btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <header className="h-[75px]">
      <nav className="fixed top-0 w-full z-10">
        <div className="navbar bg-base-100 justify-between">
          <div className="flex-1 flex-grow-0 w-fit gap-1">
            <SideMenu />
            <button
              onClick={() => {
                router.push("/");
              }}
              className="btn btn-ghost normal-case text-xl z-10"
            >
              <img
                src={`/branding/${theme}_theme/logo.png`}
                alt=" ShareIT"
                className="h-full w-auto z-0"
              />
            </button>
          </div>
          <div className="flex-1 gap-7 flex-grow-1 justify-center hidden xs:flex">
            <Link
              href="/aboutus"
              className="font-semibold hover-underline-animation"
            >
              About Us
            </Link>
            <Link
              href="/pricing"
              className="font-semibold hover-underline-animation"
            >
              <b>Pricing</b>
            </Link>
            <Link
              href="/howitworks"
              className="font-semibold hover-underline-animation"
            >
              How it works?
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <SignedIn>
                <label tabIndex={0} className="flex gap-2">
                  <label className="swap swap-rotate">
                    <input
                      type="checkbox"
                      onClick={() => {
                        store.dispatch(changedTheme());
                      }}
                    />
                    <svg
                      className="swap-on fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                      className="swap-off fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                  <UserButton />
                </label>
              </SignedIn>
              <SignedOut>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="flex w-10 rounded-full justify-center align-middle">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className="text-[38px]"
                    />
                  </div>
                </label>
              </SignedOut>
              <SignedOut>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <SignInButton mode="modal">
                      <a className="justify-between">
                        Sign In
                        <span className="badge">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="relative h-4 px-[2.5px]"
                          />
                        </span>
                      </a>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <a className="justify-between">
                        <b>Sign Up</b>
                        <span className="badge">
                          <FontAwesomeIcon
                            icon={faUserPlus}
                            className="relative h-4"
                          />
                        </span>
                      </a>
                    </SignUpButton>
                  </li>
                </ul>
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
