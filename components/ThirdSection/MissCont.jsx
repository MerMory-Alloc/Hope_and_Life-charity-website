import { getMissions } from '@/utils/getMissions'
import MissionElement from "./MissionElement"


const MissCont = async () => {
    
    const missions = await getMissions();

  return (
    <div  className="flex items-stretch justify-stretch  gap-4 ">
            {missions.map((mission, index) => (
              <MissionElement key={index} mission={mission}/>
            ))}
    </div>
  )
}

export default MissCont