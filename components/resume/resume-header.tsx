import { StatusButton } from "@/components/ui/status-button";
import { SheetHeader } from "../ui/sheet";
import ResumeControlls from "./resume-controlls";

export default function ResumeHeader({
    downloadLabel,
    onOpenChange,
}: {
    title: string;
    downloadLabel: string;
    onOpenChange: (open: boolean) => void;
}) {
    return(
        <SheetHeader className="ml-auto">
          <div className="flex items-center gap-4">
            <StatusButton />
            <ResumeControlls downloadLabel={downloadLabel} onOpenChange={onOpenChange} />
          </div>
        </SheetHeader>
    )
}