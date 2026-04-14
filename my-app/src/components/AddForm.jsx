import "./AddForm.css";
import { useState } from "react";

export default function AddForm(props) {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("กองหน้า");
    const [year, setYear] = useState("1");
    const [id, setId] = useState("");

    const {addPerson} = props;
    
    function saveData(e){
        e.preventDefault()
        const person = {
            id: id,
            name: name,
            position: position,
            year: year
        }
        addPerson(person);
        setId("");
        setName("");
        setPosition("กองหน้า");
        setYear("1");
    }
    return (   
        <section className="container form-container"> 
        <h2 className="form-title">เพิ่มสมาชิกใหม่</h2>
        <form onSubmit={saveData} className="add-form">
          <div className="form-group">
            <label>รหัสนักศึกษา</label>
            <input type="text" placeholder="เช่น 66001" value={id} onChange={(e) =>setId(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>ชื่อ - นามสกุล</label>
            <input type="text" placeholder="ชื่อ นามสกุล" value={name} onChange={(e) =>setName(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>ตำแหน่ง</label>
            <select value={position} onChange={(e) =>setPosition(e.target.value)}>
                <option value="กองหน้า">กองหน้า (Striker)</option>
                <option value="กองกลาง">กองกลาง (Midfielder)</option>
                <option value="กองหลัง">กองหลัง (Defender)</option>
                <option value="ผู้รักษาประตู">ผู้รักษาประตู (Goalkeeper)</option>
            </select>
          </div>
          <div className="form-group">
            <label>ชั้นปี</label>
            <select value={year} onChange={(e) =>setYear(e.target.value)}>
                <option value="1">ปี 1</option>
                <option value="2">ปี 2</option>
                <option value="3">ปี 3</option>
                <option value="4">ปี 4</option>
            </select>
          </div>
          <button type="submit" className="btn-save" disabled={name.trim()==="" || id.trim()===""}>บันทึกข้อมูล</button>
        </form>
        </section> 
    );
}