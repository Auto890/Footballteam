import { useMemo } from "react";
import "./Dashboard.css";

export default function Dashboard({ data }) {
  const stats = useMemo(() => {
    const positionCounts = {};
    const yearCounts = {};

    data.forEach((student) => {
      positionCounts[student.position] = (positionCounts[student.position] || 0) + 1;
      yearCounts[student.year] = (yearCounts[student.year] || 0) + 1;
    });

    // Most common position
    let mostCommonPosition = "-";
    let maxPositionCount = 0;
    for (const [pos, count] of Object.entries(positionCounts)) {
      if (count > maxPositionCount) {
        maxPositionCount = count;
        mostCommonPosition = pos;
      }
    }

    // Most and least common year
    let mostCommonYear = "-";
    let leastCommonYear = "-";
    let maxYearCount = -1;
    let minYearCount = Infinity;

    for (const [year, count] of Object.entries(yearCounts)) {
      if (count > maxYearCount) {
        maxYearCount = count;
        mostCommonYear = year;
      }
      if (count < minYearCount) {
        minYearCount = count;
        leastCommonYear = year;
      }
    }

    if (minYearCount === Infinity) minYearCount = 0;

    return {
      total: data.length,
      mostCommonPosition,
      maxPositionCount,
      mostCommonYear,
      leastCommonYear,
      maxYearCount,
      minYearCount,
      positionCounts,
    };
  }, [data]);

  return (
    <section className="dashboard">
      <h2 className="dashboard-title">สรุปข้อมูลชมรม</h2>
      <div className="dashboard-grid">
        <div className="stat-card">
          <h3>จำนวนสมาชิกทั้งหมด</h3>
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">คน</div>
        </div>
        <div className="stat-card highlight">
          <h3>ตำแหน่งที่เยอะที่สุด</h3>
          <div className="stat-value">{stats.mostCommonPosition}</div>
          <div className="stat-label">({stats.maxPositionCount} คน)</div>
        </div>
        <div className="stat-card">
          <h3>ชั้นปีที่มากที่สุด</h3>
          <div className="stat-value">ปี {stats.mostCommonYear}</div>
          <div className="stat-label">({stats.maxYearCount} คน)</div>
        </div>
        <div className="stat-card">
          <h3>ชั้นปีที่น้อยที่สุด</h3>
          <div className="stat-value">ปี {stats.leastCommonYear}</div>
          <div className="stat-label">({stats.minYearCount} คน)</div>
        </div>
      </div>
    </section>
  );
}
