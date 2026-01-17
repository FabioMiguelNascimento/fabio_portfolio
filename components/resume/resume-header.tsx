import { StatusButton } from "@/components/ui/status-button";
import { SheetHeader } from "../ui/sheet";
import ResumeControlls from "./resume-controlls";

export default function ResumeHeader({
    downloadLabel,
}: {
    title?: string;
    downloadLabel: string;
}) {
    return(
        <SheetHeader className="w-full">
          <div className="flex items-center gap-4 w-full justify-start sm:justify-end">
            <StatusButton />
            <div className="ml-auto sm:ml-0 flex items-center gap-2">
              <ResumeControlls downloadLabel={downloadLabel} />
            </div>
          </div>
        </SheetHeader>
    )
}