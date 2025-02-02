
import SelectPrompt from "./SelectPromt"
import SelectBoxes from "./SelectBoxes"
import SelectRank from "./SelectRank"

function RankInfoSelect() {

  return (
    <div className="w-[100%] grid-cols-1 grid place-items-center">
        
            <div className="p-6 mt-20 rounded-xl border-2 border-green-400 grid grid-cols-1 place-items-center">
                <SelectPrompt/>
                <SelectBoxes/>
            </div>
        
    </div>
  )
}

export default RankInfoSelect
