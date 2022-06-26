import React from "react";

const authors = [
  { name: "Frimpong Opoku Agyemang", img: "https://i.pravatar.cc/150?u=1" },
  { name: "Jefferey Izuorah", img: "https://i.pravatar.cc/150?u=2" },
  { name: "Alex Miseda", img: "https://i.pravatar.cc/150?u=3" },
  { name: "Stanley Olajide", img: "https://i.pravatar.cc/150?u=4" },
];
function Authors() {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {authors.map((it, index) => {
        const isLastOfFirst = index === 0 || index === authors.length - 1;
        return (
          <div
            className={`author-item ${!isLastOfFirst ? "elevate-2" : ""}`}
            key={index.toString()}
            style={{
              background: isLastOfFirst
                ? " var(--app-theme-light)"
                : "transparent",
            }}
          >
            <img src={it.img} />
            <h6>{it.name}</h6>
            <p>
              Groups will create a web application that demonstrates how to
              visualise data through appropriate coding practices. The project
              will involve finding sources of interesting data (three dissimilar
              sources are required)
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Authors;
