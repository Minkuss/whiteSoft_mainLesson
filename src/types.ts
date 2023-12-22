type fullInput = {
  subject_input: boolean,
  name_input: boolean,
  phone_input: boolean,
}

type WorkItemData = {
  subtitle: string;
  description: string;
  technologies: string[];
  imageFileName: string;
}

type WorkData = {
  title: string;
  shortDescription: string;
  items: WorkItemData[];
}

type SendRequestData = {
  subject: string;
  name: string;
  phone: string;
  descrition?: string;
 }