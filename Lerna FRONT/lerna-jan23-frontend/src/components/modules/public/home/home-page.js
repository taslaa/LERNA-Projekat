import React from "react";
import RecentSearches from "../../../layout/components/RecentSearches";
import InformationSection from "../landingpage-sections/InformationSection";
import PublishRideSection from "../landingpage-sections/PublishRideSection";
import InformationSection from "../landingpage-sections/InformationSection";
import PublishRideSection from "../landingpage-sections/PublishRideSection";
import { useNavigate } from "react-router-dom";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";
import TodoListener from "../TodoListener";
import QuestionsSection from "../landingpage-sections/QuestionsSection";

export default function HomePage() {
  const navigate=useNavigate();
  return (
    <>
      <div class="row mb-5">
      <InformationSection></InformationSection>
      <PublishRideSection></PublishRideSection>
        <button onClick={()=>navigate("/driverProfile/5")} className="w-25 btn btn-info">Go to driver profile</button>
        <button onClick={()=>navigate("/driverInfo/5")} className="w-25 btn btn-success">Go to driver info</button>
        <h4>Todos</h4>
        <TodoAdd></TodoAdd>
        <TodoList></TodoList>
        <TodoListener></TodoListener>
        <RecentSearches></RecentSearches>
      <QuestionsSection></QuestionsSection>
      </div>
    </>
  );
}
