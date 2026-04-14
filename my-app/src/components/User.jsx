import "./User.css";

export default function User({ item , removePerson }) {
  // Determine border color or accent based on position
  const getAccentColor = (position) => {
    switch(position) {
      case "กองหน้า": return "#ff4757"; // red
      case "กองกลาง": return "#2ed573"; // green
      case "กองหลัง": return "#1e90ff"; // blue
      case "ผู้รักษาประตู": return "#ffa502"; // orange
      default: return "#747d8c";
    }
  }

  const accentColor = getAccentColor(item.position);

  return (
    <li className="user-card" style={{ borderLeftColor: accentColor }}>
      <div className="user-info">
        <div className="user-header">
          <span className="user-id">#{item.id}</span>
          <h3 className="user-name">{item.name}</h3>
        </div>
        <div className="user-details">
          <span className="user-badge" style={{ backgroundColor: accentColor }}>{item.position}</span>
          <span className="user-year">ปี {item.year}</span>
        </div>
      </div>

      <div className="control">
        <button
          className="btn-remove"
          onClick={() => removePerson(item.id)}>
          ลบข้อมูล
        </button>
      </div>
    </li>
  );
}
