// ============================= Module 07 Exercise 01 Side 59 =============================
// Home.jsx — Home page (index route). Wireframe skeleton layout.

export default function Home() {
  const box = {
    background: "#FFDAB9",
    borderRadius: "6px",
    border: "2px dashed #FFA07A",
  };

  return (
    <div className="Home componentBox" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>

      {/* Hero banner */}
      <div style={{ ...box, height: "180px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#cc6633", fontWeight: "bold" }}>Hero Banner</span>
      </div>

      {/* Three feature cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
        {["Feature A", "Feature B", "Feature C"].map((label) => (
          <div key={label} style={{ ...box, height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#cc6633" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Content + sidebar */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}>
        <div style={{ ...box, height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#cc6633" }}>Main Content</span>
        </div>
        <div style={{ ...box, height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#cc6633" }}>Sidebar</span>
        </div>
      </div>

      {/* Footer bar */}
      <div style={{ ...box, height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#cc6633" }}>Footer</span>
      </div>

    </div>
  );
}