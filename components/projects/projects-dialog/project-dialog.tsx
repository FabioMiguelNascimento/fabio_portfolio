"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { Drawer } from "@/components/ui/drawer";

import { isMobile as detectMobile, onMobileChange } from "@/lib/device";
import { useEffect, useState } from "react";
import Project from "../project";
import ProjectCursor from "../project-cursor/project-cursor";
import ProjectCursorContent from "../project-cursor/project-cursor-content";
import type { Metadata, ProjectProps } from "../types";
import ProjectDialogBody from "./project-dialog-body";


interface Props {
  project: ProjectProps['project'];
  metadata: Metadata;
  projectIndex: number;
}

export default function ProjectDialog({ project, metadata, projectIndex }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(detectMobile())

    const off = onMobileChange((now) => setIsMobile(now))
    return off
  }, [])

  if (!mounted) {
    return null;
  }

  if (isMobile) {
    return (
      <>
        <Project
          project={project}
          metadata={metadata}
          onClick={() => setOpen(true)}
        />

        <Drawer
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <ProjectDialogBody project={project} metadata={metadata} />
        </Drawer>
      </>
    );
  }

  return (
    <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
      <DialogTrigger asChild>
        <ProjectCursor
          projectIndex={projectIndex}
          projectData={{ project, metadata, index: projectIndex }}
          tooltipContent={({ direction, previous, isTransitioning }) => (
            <ProjectCursorContent project={project} metadata={metadata} direction={direction} previous={previous} isTransitioning={isTransitioning} />
          )}
          onClick={() => setOpen(true)}
        >
          <Project project={project} metadata={metadata} />
        </ProjectCursor>
      </DialogTrigger>
      <DialogContent className="max-w-5xl sm:max-w-4xl">
        <ProjectDialogBody project={project} metadata={metadata} />
      </DialogContent>
    </Dialog>
  );
}