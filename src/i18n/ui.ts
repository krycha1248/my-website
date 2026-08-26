export const languages = {
  pl: 'Polski',
  en: 'English',
} as const;

export type Lang = keyof typeof languages; // "pl" | "en"

export const defaultLang: Lang = 'pl';
export const showDefaultLang = false;

export const ui = {
  pl: {
    greeting: 'Witaj na moim portfolio!',
  },
  en: {
    greeting: 'Welcome to my portfolio!',
  },
} as const;

interface LocalizedContent {
  title: string;
  description: string;
  heroName: string;
  typewriterMessages: string[];
  about: {
    heading: string;
    text: string;
    emailButton: string;
    githubButton: string;
    email: string;
    githubUrl: string;
  };
  technologies: {
    heading: string;
    items: string[];
  };
  certificates: {
    heading: string;
    items: string[];
  };
  repositories: {
    heading: string;
    noDescription: string;
    viewOnGithub: string;
  };
}

export const content: Record<Lang, LocalizedContent> = {
  pl: {
    title: "Krystian Włodek",
    description: "Cześć! Jestem Krystian, pasjonat technologii z zamiłowaniem do administracji systemów i automatyzacji infrastruktury IT.",
    heroName: "Krystian Włodek",
    typewriterMessages: ["sysadmin", "devops", "network engineer", "automation specialist"],
    about: {
      heading: "O mnie",
      text: "Cześć! Jestem Krystian, pasjonat technologii z zamiłowaniem do administracji systemów i automatyzacji infrastruktury IT. Moje główne obszary zainteresowań to administrowanie serwerami, sieciami i chmurami. Dążę do tego, by zostać inżynierem DevOps.",
      emailButton: "Email",
      githubButton: "GitHub",
      email: "krystian@wlodek.net",
      githubUrl: "https://github.com/krycha1248",
    },
    technologies: {
      heading: "Technologie",
      items: [
        "Linux (Debian, RedHat)", "RouterOS (Mikrotik)", "Linux + PHP", "MySQL",
        "Nginx", "Redis", "Proxmox", "Docker", "Kubernetes", "Terraform",
        "Bash", "ZSH", "Ansible", "GitHub Actions", "DirectAdmin", "Zabbix", "Monit",
        "Uptime Kuma", "WordPress", "AutoDesk AutoCAD", "Cloudflare", "Postfix", "Dovecot",
        "Spamassassin", "Bind"
      ],
    },
    certificates: {
      heading: "Certyfikaty",
      items: [
        "9/2019/2020 IT Essentials: PC Hardware and Software",
        "10/2019/2020 CCNA R&S: Introduction to Networks",
        "21/2020/2021 CCNAv7: Introduction to Networks",
        "Cisco CCNA Routing and Switching",
        "Kwalifikacja INF0.2",
        "Kwalifikacja INF0.3",
        "Certyfikat Autodesk Certified User (ACU)"
      ],
    },
    repositories: {
      heading: "Repozytoria",
      noDescription: "Brak opisu",
      viewOnGithub: "Zobacz na GitHub →",
    },
  },
  en: {
    title: "Krystian Włodek",
    description: "Hi! I'm Krystian, a technology enthusiast with a passion for system administration and IT infrastructure automation.",
    heroName: "Krystian Włodek",
    typewriterMessages: ["sysadmin", "devops", "network engineer", "automation specialist"],
    about: {
      heading: "About Me",
      text: "Hi! I'm Krystian, a technology enthusiast with a passion for system administration and IT infrastructure automation. My main areas of interest are managing servers, networks, and cloud environments. I'm aiming to become a DevOps engineer.",
      emailButton: "Email",
      githubButton: "GitHub",
      email: "krystian@wlodek.net",
      githubUrl: "https://github.com/krycha1248",
    },
    technologies: {
      heading: "Technologies",
      items: [
        "Linux (Debian, RedHat)", "RouterOS (Mikrotik)", "Linux + PHP", "MySQL",
        "Nginx", "Redis", "Proxmox", "Docker", "Kubernetes", "Terraform",
        "Bash", "ZSH", "Ansible", "GitHub Actions", "DirectAdmin", "Zabbix", "Monit",
        "Uptime Kuma", "WordPress", "AutoDesk AutoCAD", "Cloudflare", "Postfix", "Dovecot",
        "Spamassassin", "Bind"
      ],
    },
    certificates: {
      heading: "Certificates",
      items: [
        "9/2019/2020 IT Essentials: PC Hardware and Software",
        "10/2019/2020 CCNA R&S: Introduction to Networks",
        "21/2020/2021 CCNAv7: Introduction to Networks",
        "Cisco CCNA Routing and Switching",
        "Qualification INF0.2",
        "Qualification INF0.3",
        "Autodesk Certified User (ACU)"
      ],
    },
    repositories: {
      heading: "Repositories",
      noDescription: "No description",
      viewOnGithub: "View on GitHub →",
    },
  },
};

export function getContent(lang: Lang): LocalizedContent {
  return content[lang] || content[defaultLang];
}
