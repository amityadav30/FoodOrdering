import { useState } from "react";

const Section = ({
  title,
  description,
  visibility,
  handleVisible,
  handleHide,
}) => {
  // const [visible, setVisible] = useState(false);
  //   const handleVisible = () => {
  //     setVisible(true);
  //   };

  //   const handleNotVisible = () => {
  //     setVisible(false);
  //   };

  return (
    <div>
      <h3 className="border border-black p-2 m-2">{title}</h3>
      {!visibility && (
        <button onClick={handleVisible} className="px-2 mx-2 underline">
          Show
        </button>
      )}
      {visibility && (
        <button onClick={handleHide} className="px-2 mx-2 underline">
          Hide
        </button>
      )}

      {visibility && <p className="p-2 m-2">{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  //const [visible, setVisible] = useState({ about: true, team: false });
  const [visible, setVisible] = useState("about");
  return (
    <>
      <Section
        title={"About"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        visibility={visible === "about"}
        handleVisible={() => setVisible("about")}
        handleHide={() => setVisible("")}
      />
      <Section
        title={"Team"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        visibility={visible === "team"}
        handleVisible={() => setVisible("team")}
        handleHide={() => setVisible("")}
      />
    </>
  );
};
export default InstaMart;
