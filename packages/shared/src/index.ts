export type Locale = "th" | "en";

export interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
  locale: Locale;
}

export interface ContactResponse {
  id: string;
  message: "received";
}

export interface ResumeProfile {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

export interface ResumeExperience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface ResumeSkillGroup {
  category: string;
  items: string[];
}

export interface ResumeProject {
  name: string;
  description: string;
  stack: string[];
  link?: string;
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  period: string;
}

export interface ResumeContent {
  profile: ResumeProfile;
  nav: {
    home: string;
    resume: string;
    contact: string;
    language: string;
  };
  hero: {
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    heading: string;
    body: string;
  };
  sections: {
    experience: string;
    skills: string;
    projects: string;
    education: string;
    certifications: string;
    onlineProfiles: string;
    resume: string;
    contact: string;
  };
  experience: ResumeExperience[];
  skills: ResumeSkillGroup[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  certifications: string[];
  onlineProfiles: string[];
  contact: {
    heading: string;
    body: string;
    labels: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      submitting: string;
    };
    success: string;
    error: string;
  };
  resume: {
    heading: string;
    body: string;
    download: string;
  };
}
