import React from "react";
import RecentSearches from "../../../layout/components/RecentSearches";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";
import TodoListener from "../TodoListener";
import HeroComponent from "./hero/HeroComponent";
import loggedStore from "../../../../data/stores/LoggedStore";
import InfoHeader from "./info/InfoHeader";
import DriverInformation from "./info/DriverInformation";
import QuestionsSection from "../landingpage-sections/QuestionsSection";

export default function HomePage() {
  return (
    <>
      <HeroComponent/>
      {/* {loggedStore.isLogged && <RecentSearches></RecentSearches>} */}
      <InfoHeader/>
      <DriverInformation/>
      <QuestionsSection></QuestionsSection>
    </>
  );
}
