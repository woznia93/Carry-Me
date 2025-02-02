import TeamDisplay from "./TeamDisplay";
import WinPrompt from "./WinPrompt";

function FindTeam() {
    return(
    <div className="w-[100%] grid-cols-1 grid place-items-center">
        <TeamDisplay/>
        <WinPrompt/>
    </div>
    )
}

export default FindTeam;