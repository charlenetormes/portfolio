export interface ISection {
    folderColor: string;
    section: string;
    files: string[];
}

export interface ILine {
    statement: string;
}

export interface IProject {
    sequence: string;
    title: string;
    description: string;
    link: string;
    image: string;
    tech: string;
    top: boolean;
}
