"use client";

import {
  faEye,
  faForwardStep,
  faHandPointRight,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function RoomCover(user: any) {
  user = user.user;
  const [isEditing, setIsEditing] = useState<boolean>(false);
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
              {!isEditing ? "Preview" : "Edit"}{" "}
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
          </figure>
          <div className="card-body">
            <div className="card-title w-full relative">
              <p className="pr-8">Enter a TITLE!</p>
              <span className="absolute right-0">🌵</span>
            </div>
            <p>
              Please write a short and hooking up description of your room for
              the event!
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
