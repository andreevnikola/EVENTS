export default function LoadingComponent() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-error-content opacity-30"></div>
      <span className="loading loading-ring w-48 text-accent fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    </>
  );
}
