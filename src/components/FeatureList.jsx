import { FaListUl } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";

import FeatureCard from "./FeatureCard";

const FeatureList = () => {
  const cardContent = {
    toDoListTitle: "To-Do-List",
    toDoListDescription: `In need to track your schedules and
    activities throughout the day? We got your back! Optimally 
    organize your schedules with our To-Do-List!`,
    pomodoroTitle: "Pomodoro Timer",
    pomodoroDescription: `Our Pomodoro Timer is here! 
    Flexibly configure your focus time and break time
    conveniently with our Pomodoro Timer!`
  }
  return ( 
    <div className="features-list flex">
      <FeatureCard 
        icon={<FaListUl size={"2.5rem"}/>} 
        title={cardContent.toDoListTitle} 
        description={cardContent.toDoListDescription}
      />
      <FeatureCard 
        icon={<TfiTimer size={"2.5rem"}/>}
        title={cardContent.pomodoroTitle}
        description={cardContent.pomodoroDescription}
      />
    </div>
   );
}
 
export default FeatureList;