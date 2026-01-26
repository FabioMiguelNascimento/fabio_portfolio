export interface Tag {
  name: string;
  iconKey: string;
}

export interface Project {
  id: string;
  tags: Tag[];
  image: string;
  releaseDate: string;
  links: {
    demo?: string;
    repository?: string;
    doc?: string;
  };
}

// Principalmente textos traduzidos
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
