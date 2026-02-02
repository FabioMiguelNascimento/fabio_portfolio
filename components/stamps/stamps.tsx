import StampsArea from "./stamps-area";
import StampsHeader from "./stamps-header";

export default async function Stamps() {
    return(
        <section className="space-y-6" >
            <StampsHeader />
            <StampsArea />
        </section>
    )
}