import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" w-1/4 h-1/4 flex flex-col items-center justify-center gap-4 bg-blue-400 rounded-2xl">
          <h3 className="text-2xl text-white font-medium">This Page Isn't Found</h3>
          <Link to="/about">
            <button className="bg-blue-900 rounded-[10px] px-3 py-2 text-white cursor-pointer hover:opacity-60 ">
              Back To About
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
