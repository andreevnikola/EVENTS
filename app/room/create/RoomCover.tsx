"use client";

import {
  faEye,
  faForwardStep,
  faHandPointRight,
  faPenToSquare,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function RoomCover(user: any) {
  user = user.user;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [title, setTitle] = useState("Enter a title!");
  const [description, setDescription] = useState(
    "Write a short and hooking up description of your room and the event!"
  );
  const [emoji, setEmoji] = useState("🌵");

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse max-w-5xl w-[90%] p-0 py-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            This is what the cover of your <b>group</b> will look like!
          </h1>
          <p className="py-6">
            This is what people will see when they open the invite link. If your
            group is public this is how it will appear in the <b>search</b> page
            and in the <b>explore</b> page.
          </p>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <button
              className="btn btn-accent flex flex-grow"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? "Preview" : "Edit"}{" "}
              <FontAwesomeIcon icon={!isEditing ? faEye : faPenToSquare} />
            </button>
            <button className="btn btn-primary flex flex-grow">
              Next <FontAwesomeIcon icon={faForwardStep} />
            </button>
          </div>
        </div>
        <div className="card w-full max-w-[420px] bg-base-100 shadow-xl border-2 border-primary">
          <figure className="w-full h-36">
            <img
              src="/images/please_upload_cover_image.png"
              alt="Please upload cover image"
            />
            <div className="absolute top-2 right-2 py-1 px-4 rounded-full backdrop-filter backdrop-blur-lg backdrop-brightness-[0.65] flex flex-row gap-2">
              {!isEditing && (
                <>
                  <span className="rounded-full bg-red-500 h-[22px] w-[22px] -ml-2" />
                  <span className="w-fit font-bold">
                    Private{" "}
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
              {isEditing && (
                <>
                  <select className="select w-full max-w-xs select-sm bg-transparent">
                    <option disabled selected>
                      Change <b>visibility</b>
                    </option>
                    <option>Private</option>
                    <option>Hidden</option>
                    <option>Public</option>
                  </select>
                </>
              )}
            </div>
          </figure>
          <div className="card-body">
            <div className="card-title w-full relative">
              {!isEditing && <p className="mr-8 pr-0">{title}</p>}
              {isEditing && (
                <input
                  className="mr-10 w-full input input-bordered"
                  placeholder="Enter a title:"
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
                    placeholder="🌵"
                    value={emoji}
                    onChange={(e) => {
                      setEmoji(e.target.value);
                    }}
                  />
                )}
              </span>
            </div>
            <p>
              {!isEditing && <>{description}</>}
              {isEditing && (
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Write a short and hooking up description of your room for the event!"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              )}
            </p>
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
