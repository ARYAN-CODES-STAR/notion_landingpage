import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import AiComponent from "./AiComponent";
import WikisComponent from "./WikisComponent";
import ProjectsComponent from "./ProjectsComponent";
import DocsComponent from "./DocsComponent";
// Placeholder components (replace with your actual components)
// const AIComponent = () => <div>Content for AI Component</div>;
// const WikisComponent = () => <div>Content for Wikis Component</div>;
// const ProjectsComponent = () => <div>Content for Projects Component</div>;
// const DocsComponent = () => <div>Content for Docs Component</div>;

function CardTemp() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleBoxHover = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="px-4">
      <div className="flex justify-evenly ml-4 mr-4 h-1/4">
        {/* AI */}
        <div
          className="w-1/4 lg:w-64 rounded bg-gray-100 shadow-lg hover:bg-white"
          onMouseEnter={() => handleBoxHover("AI")}
        >
          <div className="h-32 lg:w-64 mx-2 m-4">
            <div className="h-8 flex">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-1.5 py-1 text-sm text-white font-medium mx-3">
                <BsStars className="bg-purple-100 text-purple-500" />
              </span>
              <h3 className="font-bold text-3xl inline-block">AI</h3>
              <span className="whitespace-nowrap rounded-full bg-purple-100 text-purple-500 px-1.5 py-1 text-sm font-medium mx-3">
                New with Q&A
              </span>
            </div>
            <p className="mt-4 m-4">
              Ask literally anything. <br />
              Notion will answer.
            </p>
            <p>
              <a
                className={`text-purple-900 ${
                  activeComponent === "AI" ? "opacity-1" : "opacity-0"
                }`}
                href="/learn_more"
              >
                Learn more >
              </a>
            </p>
          </div>
        </div>

        {/* WIKIS */}
        <div
          className="bg-gray-100 h-48 lg:w-64 mx-2 shadow-lg"
          onMouseEnter={() => handleBoxHover("Wikis")}
        >
          <div className="w-1/4 lg:w-64 bg-gray-100 m-4">
            <div className="h-32 lg:w-64 mx-2">
              <div className="h-8 flex">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-1.5 py-0.5 text-sm text-white font-medium mx-3">
                  <GiOpenBook className="bg-red-100 text-red-500 " />
                </span>
                <h3 className="font-bold text-3xl inline-block">Wikis</h3>
              </div>
              <p className="mt-4 m-4">
                Centralize your knowledge.
                <br />
                No more hunting for answers.
              </p>
              <p>
                <a
                  className={`text-purple-500 ${
                    activeComponent === "Wikis" ? "opacity-100" : "opacity-0"
                  }`}
                  href="/learn_more"
                >
                  Learn more >
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div
          className="bg-gray-100 h-48 lg:w-64 mx-2 shadow-lg"
          onMouseEnter={() => handleBoxHover("Projects")}
        >
          <div className="w-1/4 lg:w-64 bg-gray-100 m-4">
            <div className="h-32 lg:w-64 mx-2">
              <div className="h-8 flex">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-1.5 py-1 text-sm text-white font-medium mx-3">
                  <BsStars className="bg-blue-100 text-blue-500" />
                </span>
                <h3 className="font-bold text-3xl inline-block">Projects</h3>
              </div>
              <p className="mt-4 m-4">
                Manage complex projects without the chaos.
              </p>
              <p>
                <a
                  className={`text-blue-500 ${
                    activeComponent === "Projects" ? "opacity-100" : "opacity-0"
                  }`}
                  href="/learn_more"
                >
                  Learn more >
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* DOCS */}
        <div
          className="bg-gray-100 h-48 lg:w-64 mx-2 shadow-lg"
          onMouseEnter={() => handleBoxHover("Docs")}
        >
          <div className="w-1/4 lg:w-64 bg-gray-100 m-4">
            <div className="h-32 lg:w-64 mx-2">
              <div className="h-8 flex">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-1.5 py-1 text-sm text-white font-medium mx-3">
                  <BsStars className="bg-yellow-100 text-yellow-500" />
                </span>
                <h3 className="font-bold text-3xl inline-block">DOCS</h3>
              </div>
              <p className="mt-4 m-4">
                Simple, powerful, beautiful. Next-gen notes & docs.
              </p>
              <p>
                <a
                  className={`text-yellow-500 ${
                    activeComponent === "Docs" ? "opacity-1 " : "opacity-0"
                  }`}
                  href="/learn_more"
                >
                  Learn more >
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {/* Display the corresponding component below the hovered box */}
        {activeComponent === "AI" && <AiComponent />}
        {activeComponent === "Wikis" && <WikisComponent />}
        {activeComponent === "Projects" && <ProjectsComponent />}
        {activeComponent === "Docs" && <DocsComponent />}
      </div>
    </div>
  );
}

export default CardTemp;
