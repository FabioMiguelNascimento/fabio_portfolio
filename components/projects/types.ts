export interface Tag {
  name: string;
  iconKey: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  image: string;
  releaseDate: string;
  links: {
    demo?: string;
    repository?: string;
    doc?: string;
  };
}

export interface Metadata {
  title: string;
  description: string;
  links: {
    demo?: string;
    repository?: string;
    doc?: string;
  }
}

export interface ProjectProps {
  project: Project;
  metadata: Metadata;
}
