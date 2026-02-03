"use client"

import getIconComponent from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FiBook, FiExternalLink, FiGithub } from "react-icons/fi";


interface SerializableProject {
  id: string;
  releaseDate: string;
  image: string;
  links: { demo?: string; repository?: string; doc?: string };
  tags: { name: string; iconKey: string }[];
}

interface Metadata {
  title: string;
  description: string;
  links: {
    demo?: string;
    repository?: string;
    doc?: string;
  };
}

interface Props {
  project: SerializableProject;
  metadata: Metadata;
}

export default function ProjectDialogBody({ project, metadata }: Props) {
  const t = useTranslations("projects");


  return (
    <div className="space-y-2">
        <div className="-mx-4 sm:-mx-6 -mt-6 overflow-hidden rounded-t-lg">
          <Image src={project.image} alt={metadata.title} width={1400} height={560} className="w-full h-64 sm:h-72 md:h-80 object-cover" priority={true} />
        </div>

      <div className="mt-4 mb-2 flex items-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight m-0 p-0">{metadata.title}</h2>
          <span className="text-sm text-stone-500 border border-stone-200 rounded-md px-2 py-0.5 mt-1 inline-block">{project.releaseDate}</span>
      </div>

      <p className="mb-4 text-sm text-muted-foreground">{metadata.description}</p>

      <ul className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Badge key={tag.name} variant="muted" className="flex items-center gap-2">
            {getIconComponent(tag.iconKey)}
            <span>{tag.name}</span>
          </Badge>
        ))}
      </ul>

      <div className="flex gap-2 justify-end">
        {project.links.demo && (
          <Button variant="brand" size="sm" asChild>
            <Link target="_blank" rel="noreferrer" href={project.links.demo}>
              <FiExternalLink />
              {metadata.links.demo ?? t("links.demo")}
            </Link>
          </Button>
        )}

        {project.links.repository && (
          <Button variant="outline" size="sm" asChild>
            <Link target="_blank" rel="noreferrer" href={project.links.repository}>
              <FiGithub />
              {metadata.links.repository ?? t("links.repository")}
            </Link>
          </Button>
        )}

        {project.links.doc && (
          <Button variant="outline" size="sm" asChild>
            <Link target="_blank" rel="noreferrer" href={project.links.doc}>
              <FiBook />
              {metadata.links.doc ?? t("links.doc")}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}