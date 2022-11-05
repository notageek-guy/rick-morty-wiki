import React from "react";
import { IoIosClose } from "react-icons/io";
export default function Filter({ setStatus }) {
  const filterAlive = () => setStatus("Alive");
  const filterDead = () => setStatus("Dead");
  const filterUnknown = () => setStatus("unknown");
  return (
    <div className="flex  py-2 flex-col items-center">
      <div className="flex gap-1 md:gap-3">
        <div className="badge badge-success gap-2" onClick={filterAlive}>
          <IoIosClose />
          Alive
        </div>
        <div className="badge badge-secondary gap-2" onClick={filterUnknown}>
          <IoIosClose />
          Unknown
        </div>
        <div className="badge badge-error gap-2" onClick={filterDead}>
          <IoIosClose />
          Dead
        </div>
      </div>
    </div>
  );
}
