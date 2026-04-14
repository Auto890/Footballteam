import { useState } from "react";
import "./PersonList.css";
import User from "./User";
import { FaEyeSlash } from "react-icons/fa"; //ปิดตา
import { FaEye } from "react-icons/fa"; //เปิดตา

function PersonList({data, removePerson}) {
 
  const [show, setShow] = useState(true);

  return (
    <div className="list-container">
      <div className="list-header">
        <h2 className="list-title">รายชื่อสมาชิกชมรม ({data.length})</h2>
        <span className="toggle-btn" onClick={() => setShow(!show)}>
          {show ? <FaEyeSlash size={25}/> : <FaEye size={25} />}
        </span>
      </div>
        {show && (
          <ul className="person-ul">
            {data.map((item) => (
              <User key={item.id} item={item} removePerson={removePerson} />
            ))}
          </ul>
        )}
    </div>
  );
}

export default PersonList;
