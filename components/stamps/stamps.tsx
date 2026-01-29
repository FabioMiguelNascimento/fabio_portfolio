import StampsCanvas from "./stamps-canvas";
import StampsHeader from "./stamps-header";
import StampsSelectorContent from "./stamps-selector";

export default async function Stamps() {
    return(
        <section className="space-y-6" >
            <StampsHeader />
            <StampsSelectorContent />
            <StampsCanvas />
        </section>
    )
}