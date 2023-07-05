import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  faRightToBracket,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="h-12">
      <nav className="fixed top-0 w-full z-10">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              ShareIT
            </a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <SignedIn>
                <label tabIndex={0}>
                  <UserButton />
                </label>
              </SignedIn>
              <SignedOut>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <FontAwesomeIcon icon={faRightToBracket} />
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
