import { currentUser } from "@clerk/nextjs";
// import { store } from "@/redux/store";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoomInfo from "./RoomInfo";

function TitleBanner() {
  return (
    <h1
      className="text-center text-4xl font-bold p-10 text-white stroked"
      style={{
        backgroundImage: "url(/images/community-header.webp)",
        backgroundPosition: "center -15%",
        backgroundAttachment: "fixed",
      }}
    >
      <FontAwesomeIcon icon={faPlusCircle} /> Create new <b>ROOM</b>
    </h1>
  );
}

export default async function CreateRoom() {
  const user = await currentUser();

  return (
    <>
      <TitleBanner />
      <RoomInfo user={user} />
    </>
  );
}
