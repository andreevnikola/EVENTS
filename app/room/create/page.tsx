import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pricing() {
  return (
    <>
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">
              This is what the cover of your <b>group</b> will look like!
            </h1>
            <p className="py-6">
              This is what people will see when they open the invite link. If
              your group is public this is how it will appear in the{" "}
              <b>search</b> page and in the <b>explore</b> page.
            </p>
          </div>
          <div className="card w-full max-w-[420px] bg-base-100 shadow-xl border-2 border-primary">
            <figure className="w-full h-36">
              <img
                src="/images/please_upload_cover_image.png"
                alt="Please upload cover image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
