"use client";

import {
  faBook,
  faCameraRetro,
  faEye,
  faForwardStep,
  faHandPointRight,
  faPenToSquare,
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface IPrimaryInfo {
  title: string;
  emoji: string;
  description: string;
  coverImage: File;
  visibility: string;
  readMoreLink: string;
  video: File;
}

export default function RoomInfo(user: any) {
  const laUser = useSelector((state: any) => state.user);
  console.log(laUser);

  useEffect(() => {
    console.log(laUser);
  }, []);

  user = user.user;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [title, setTitle] = useState("Enter a title!");
  const [description, setDescription] = useState(
    "Write a short and hooking up description of your room and the event!"
  );
  const [emoji, setEmoji] = useState("🌵");

  interface IVisibility {
    text: "Private" | "Hidden" | "Public";
    color: "orange" | "#e1ff00" | "green";
    description: string;
  }
  const privateVisibility: IVisibility = {
    text: "Private",
    color: "orange",
    description: "Only invited members will be able to join!",
  };
  const hiddenVisibility: IVisibility = {
    text: "Hidden",
    color: "#e1ff00",
    description: "Everyone with the link can join!",
  };
  const publicVisibility: IVisibility = {
    text: "Public",
    color: "green",
    description: "Everyone can join!",
  };
  const [visibility, setVisibility] = useState<IVisibility>(publicVisibility);

  const [isDescriptionVisible, setdescriptionVisibility] = useState(false);
  const [moreAboutURL, setMoreAboutURL] = useState("");
  const [video, setVideo] = useState<any>(null);
  const [image, setImage] = useState<any>(null);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse max-w-5xl w-[90%] p-0 py-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            This is what the cover of your <b>group</b> will look like!
          </h1>
          <h3 className="py-6">
            This is what people will see when they open the invite link. If your
            group is public this is how it will appear in the <b>search</b> page
            and in the <b>explore</b> page.
          </h3>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <button
              className="btn btn-accent flex flex-grow"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? "Preview" : "Edit"}{" "}
              <FontAwesomeIcon icon={isEditing ? faEye : faPenToSquare} />
            </button>
            <button className="btn btn-primary flex flex-grow">
              Next <FontAwesomeIcon icon={faForwardStep} />
            </button>
          </div>
        </div>
        <div className="card w-full max-w-[420px] bg-base-100 shadow-xl border-2 border-primary">
          <figure className="w-full h-36 relative">
            <img
              src={!image ? "/images/please_upload_cover_image.png" : image.url}
              alt="Please upload cover image"
            />
            {isEditing && (
              <>
                <label
                  htmlFor="upload_cover"
                  className="w-fit rounded-full backdrop-filter backdrop-brightness-50 backdrop-blur-sm flex flex-col gap-2 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:backdrop-blur-md transition-all"
                >
                  <FontAwesomeIcon icon={faCameraRetro} size="3x" />
                  <p className="w-fit text-xs font-bold">Upload cover image</p>
                </label>
                <input
                  type="file"
                  id="upload_cover"
                  className="absolute opacity-0 -z-10"
                  accept="image/*"
                  onChange={(e) => {
                    setImage({
                      url: URL.createObjectURL(e.target.files![0]),
                      image: e.target.files![0],
                    });
                  }}
                />
              </>
            )}
            <div className="absolute top-2 left-2 py-1 px-2 rounded-full backdrop-filter backdrop-blur-lg backdrop-brightness-[0.65] flex flex-row gap-2 text-white">
              <p className="w-fit text-white text-lg leading-5 font-bold">0</p>{" "}
              <FontAwesomeIcon className="text-xl" icon={faUserCircle} />
            </div>
            <div className="absolute top-2 right-2 py-1 px-4 rounded-full backdrop-filter backdrop-blur-lg backdrop-brightness-[0.65] flex flex-row gap-2 text-white">
              {isEditing ? (
                <>
                  <select
                    className="select w-full max-w-xs select-sm bg-transparent"
                    value={visibility.text}
                    onChange={(e) => {
                      setVisibility(
                        e.target.value === publicVisibility.text
                          ? publicVisibility
                          : e.target.value === hiddenVisibility.text
                          ? hiddenVisibility
                          : privateVisibility
                      );
                    }}
                  >
                    <option disabled value="info">
                      Change visibility
                    </option>
                    <option value={publicVisibility.text}>Public</option>
                    <option value={hiddenVisibility.text}>Hidden</option>
                    <option value={privateVisibility.text}>Private</option>
                  </select>
                </>
              ) : (
                <>
                  <span
                    className="rounded-full h-[22px] w-[22px] -ml-2"
                    style={{ backgroundColor: visibility.color }}
                  />
                  <span className="w-fit font-bold">
                    {visibility.text}
                    <div
                      className="tooltip tooltip-left"
                      data-tip="Only invited members will be able to join!"
                    >
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="text-sm ml-1"
                      />
                    </div>
                  </span>
                </>
              )}
            </div>
          </figure>
          <div className="card-body">
            <div className="card-title w-full relative">
              {!isEditing && <h1 className="mr-8 pr-0">{title}</h1>}
              {isEditing && (
                <input
                  className="mr-10 w-full input input-bordered"
                  placeholder="Enter a title:"
                  maxLength={50}
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                ></input>
              )}
              <span className="absolute right-0">
                {!isEditing ? (
                  emoji
                ) : (
                  <input
                    type="text"
                    className="input input-bordered p-0 pl-2.5 w-9"
                    maxLength={1}
                    placeholder="🌵"
                    value={emoji}
                    onChange={(e) => {
                      setEmoji(e.target.value);
                    }}
                  />
                )}
              </span>
            </div>
            <div
              className="py-1.5 px-3 backdrop-filter backdrop-brightness-[0.87] rounded h-fit overflow-hidden pb-5"
              style={{
                maxHeight: isDescriptionVisible || isEditing ? "100%" : "60px",
                boxShadow:
                  !isDescriptionVisible && !isEditing
                    ? "inset 0 -10px 10px hsl(var(--b1))"
                    : "none",
              }}
            >
              <p className="relative">
                {!isEditing && <>{description}</>}
                {isEditing && (
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Write a short and hooking up description of your room for the event!"
                    value={description}
                    maxLength={500}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                )}
              </p>
              <div className="divider mt-1 mb-1"></div>
              <div className="rounded-xl bg-secondary p-3 px-5">
                <a
                  href={moreAboutURL}
                  target="_blank"
                  className="flex flex-row justify-between"
                >
                  <FontAwesomeIcon icon={faBook} size="xl" />
                  <p className="w-full text-right font-bold">Read More</p>
                </a>
                {isEditing && (
                  <input
                    type="text"
                    placeholder="Link to more information"
                    value={moreAboutURL}
                    className="input input-bordered w-full max-w-xs mt-4"
                    onChange={(e) => {
                      setMoreAboutURL(e.target.value);
                    }}
                  />
                )}
              </div>
              {!isEditing && (
                <video
                  className="w-full mt-3 rounded"
                  src={!video ? "/videos/BULGARIA_THRAILER.mp4" : video.url}
                  controls
                  title={title}
                />
              )}
              {isEditing && (
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs mt-3"
                  placeholder="Upload short video!"
                  accept="video/*"
                  onChange={(e) => {
                    console.log(e.target.files);
                    setVideo({
                      url: URL.createObjectURL(e.target.files![0]),
                      video: e.target.files![0],
                    });
                    // setVideo(e.target);
                  }}
                />
              )}
              {!isEditing && (
                <span
                  className="absolute right-0.5 bottom-0.5 cursor-pointer btn btn-xs bg-base-100 z-10"
                  onClick={() => {
                    setdescriptionVisibility(!isDescriptionVisible);
                  }}
                >
                  {!isDescriptionVisible ? "Show more" : "Show less"}
                </span>
              )}
            </div>
            <div className="card-actions flex w-full justify-between align-middle">
              <div
                className="flex flex-row gap-3 overflow-hidden relative btn-ghost cursor-pointer rounded p-1"
                style={{ maxWidth: "calc(100% + -100px)" }}
              >
                <div className="avatar">
                  <div className="h-11 rounded">
                    <img src={user?.profileImageUrl} />
                  </div>
                </div>
                <hgroup className="flex flex-col pt-1.5">
                  <h4 className="font-bold text-[22px] leading-3 whitespace-nowrap">
                    {user?.firstName} {user?.lastName}
                  </h4>
                  <p className="leading-5 text-[12px]">
                    {user?.emailAddresses[0].emailAddress}
                  </p>
                </hgroup>
              </div>
              <button className="btn btn-primary">
                <b>JOIN</b>
                <FontAwesomeIcon icon={faHandPointRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
