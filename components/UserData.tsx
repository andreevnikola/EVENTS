import { store } from "@/redux/store";
import { setUser } from "@/redux/user";
import { currentUser } from "@clerk/nextjs";

export default async function UserData() {
  const user = await currentUser();
  console.log("user: " + user);
  store.dispatch(setUser(user));
  return <div>UserData</div>;
}
