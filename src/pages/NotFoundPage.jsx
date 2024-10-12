function NotFoundPage() {
  return (
    <>
      <div className="h-screen grid place-content-center">
        <h1 className="text-7xl mb-16 mx-auto">Oops !</h1>
        <div className="flex justify-center font-bold">
          <span className="text-6xl">404</span>
        </div>
        <p className="text-xl font-bold my-4 text-red-500 uppercase space-x-4 mx-auto">
          Page not Found
        </p>
        <p className="text-lg font-semibold text-slate-500">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </>
  );
}

export default NotFoundPage;
