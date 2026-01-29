import StampRender from "./stamp-render";
import { AVAILABLE_STAMPS } from "./stamps.registry";

export default async function StampsSelectorContent() {
    
    return(
        <div className="p-4 border gap-2 flex flex-wrap bg-background text-accent-foreground" >
            {AVAILABLE_STAMPS.map((stamp) => (
                <StampRender key={stamp.id} id={stamp.id} className="cursor-pointer" />
            ))}
        </div>
    )
}