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
        <SheetHeader className="w-full">
          <div className="flex items-center gap-4 w-full justify-start sm:justify-end">
            <StatusButton />
            <div className="ml-auto sm:ml-0">
              <ResumeControlls downloadLabel={downloadLabel} onOpenChange={onOpenChange} />
            </div>
          </div>
        </SheetHeader>
    )
}