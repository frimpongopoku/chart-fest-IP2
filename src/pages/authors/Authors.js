import React from "react";

const authors = [
  {
    name: "Frimpong Opoku Agyemang",
    img: "https://i.pravatar.cc/150?u=1",
    description: `Frimpong Opoku Agyemang is a young Ghanaian who belongs to a family of 8. He lives in a small town 
  situated in the suburbs of Ablekuma Fanmilk -- a region in the capital city of Ghana. His interest range from 
  soccer, cooking, music and mainly technology. He intends to garner as much knowledge as possible relating to programming 
  and how computers work, in order to become a full fledged software developer in the years to come.`,
  },
  {
    name: "Jeffrey Izuorah",
    img: "https://i.pravatar.cc/150?u=2",
    description: `Jeffrey Obumneme Izuorah, "Star boy" as many know him as, is a young nigerian sensation in video games. 
  His love for video games has ever drawn him closer into the field of technology. In future, he intends make a 
  mark with Africa in the video game industry.`,
  },
  {
    name: "Alex Miseda",
    img: "https://i.pravatar.cc/150?u=3",
    description: `Alex Miseda Mumbo, "Mandem" as many of his friends know him as, 
    is an upcoming young talent in the Kenyan music industry. As a current third year computing student 
    at the African Leadership University, his interests range from Soccer, programming, and mainly Music. 
    At a young age of 21, he has successfully cemented his presence in the kenyan music industry. 
    In future he intends to balance his love for technology and his talent for music into a mix that benefits Africa.`,
  },
  {
    name: "Stanley Olajide",
    img: "https://i.pravatar.cc/150?u=4",
    description: `In his third year at the African Leadership University, Stanley is majoring in Computer Science. Interested in technology, he aspires to enhance technology in Africa by bringing it to the continent's attention.`,
  },
];
function Authors() {
  return (
    <div className="authors-wrapper">
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
            <p>{it.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Authors;
