import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

export default function TabsJustify(): JSX.Element {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <div className="mb-3">
      <TETabs justify>
        <TETabsItem
          onClick={() => handleJustifyClick("tab1")}
          active={justifyActive === "tab1"}
        >
          <span>STEP 1</span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleJustifyClick("tab2")}
          active={justifyActive === "tab2"}
        >
          <span>STEP 2</span>
        </TETabsItem>
        {/* <TETabsItem
          onClick={() => handleJustifyClick("tab3")}
          active={justifyActive === "tab3"}
        >
          <span>STEP 3</span>
        </TETabsItem> */}
      </TETabs>

      <TETabsContent>
        <TETabsPane show={justifyActive === "tab1"}>
          {" "}
          <img
            className="xl:w-1/4 lg:w-1/2 md:w-1/2 w-1/2 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
        </TETabsPane>
        <TETabsPane show={justifyActive === "tab2"}>
          {" "}
          <img
            className="xl:w-1/4 lg:w-1/2 md:w-1/2 w-1/2 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
        </TETabsPane>
        {/* <TETabsPane show={justifyActive === "tab3"}><img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div></TETabsPane> */}
      </TETabsContent>
    </div>
  );
}
