import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/transfer_files.png"
            className="max-w-md w-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Share with the <b>GANG</b> quickly!
            </h1>
            <p className="py-6">
              You can share <i>photos from event</i> / <i>files</i> /
              <i>MD messages</i> with a group of people which you've chosen to
              invite via link or by email. It is perfect for sharing infirmation
              with large groups of people. Can be used from travel agencies or
              families to share photos from the trip.
            </p>
            <div className="btn-group">
              <a className="btn btn-active">Join room</a>
              <a className="btn btn-outline">Create room</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
