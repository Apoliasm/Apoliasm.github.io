export const profile = {
  nameKo: "신영재",
  nameEn: "Yeongjae Shin",
  title: "Full-Stack Developer",
  bio: "LLM 기반 서비스 설계부터 프론트엔드·백엔드 구현까지, AI 시대의 풀스택을 지향합니다.",
  email: "syjsir@gmail.com",
  github: "https://github.com/Apoliasm",
  linkedin: "https://www.linkedin.com/in/yeongjae-shin-230422284",
};

export const career = [
  {
    period: "2019.03 - 2025.02",
    company: "경북대학교 컴퓨터학부 졸업",
    role: "",
    description: "",
  },
  {
    period: "2024.01 - 2024.02",
    company: "LG Soft India(인도 뱅갈루루)",
    role: "ML Engineer, Data Analytics",
    description:
      "LG전자 연구소 현장실습, ML 에어컨 자동제어 시스템 데이터 분석 및 ML 모델 성능 테스팅",
  },
  {
    period: "2024.07~2024.08",
    company: "주식회사 모키",
    role: "프론트엔드 개발",
    description:
      "스타트업 현장실습, 키오스크 매출분석 보고서 웹 프론트엔드 개발 및 초기 버전 배포",
  },
  {
    period: "2026.01~현재",
    company: "pitchUS",
    role: "풀스택 개발",
    description:
      "창업 프로젝트, MVP 버전 웹 프론트엔드 개발 및 백오피스 기능 풀스택 개발",
  },
];

// 기술 이름만 적으면 shields.io 배지가 자동 생성됩니다.
// logo: Simple Icons 이름 (https://simpleicons.org)
// color: 배지 배경색 (hex, #없이)
export interface SkillBadge {
  name: string;
  logo: string;
  color: string;
  logoColor?: string;
  customUrl?: string; // 전체 URL 직접 지정 (shields.io, custom-icon-badges 등)
}

const badgeMap: Record<
  string,
  { logo: string; color: string; logoColor?: string; customUrl?: string }
> = {
  JavaScript: { logo: "JavaScript", color: "F7DF1E", logoColor: "black" },
  TypeScript: { logo: "TypeScript", color: "3178C6" },
  React: { logo: "React", color: "61DAFB", logoColor: "black" },
  Redux: { logo: "Redux", color: "764ABC" },
  "Next.js": { logo: "Next.js", color: "000000" },
  "Tailwind CSS": { logo: "TailwindCSS", color: "06B6D4" },
  Python: { logo: "Python", color: "3776AB" },
  Django: { logo: "Django", color: "092E20" },
  Pandas: { logo: "Pandas", color: "150458" },
  "Node.js": { logo: "Node.js", color: "339933" },
  Express: { logo: "Express", color: "000000" },
  FastAPI: { logo: "FastAPI", color: "009688" },
  PostgreSQL: { logo: "PostgreSQL", color: "4169E1" },
  MongoDB: { logo: "MongoDB", color: "47A248" },
  Redis: { logo: "Redis", color: "DC382D" },
  OracleDB: { logo: "Oracle", color: "F80000" },
  SQLite: { logo: "SQLite", color: "003B57" },
  "C++": { logo: "C%2B%2B", color: "00599C" },
  Docker: { logo: "Docker", color: "2496ED" },
  Git: { logo: "Git", color: "F05032" },
  "GitHub Actions": { logo: "GitHubActions", color: "2088FF" },
  AWS: {
    logo: "aws",
    color: "FF9900",
    customUrl:
      "https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=aws&logoColor=white",
  },
  Linux: { logo: "Linux", color: "FCC624", logoColor: "black" },
  Figma: { logo: "Figma", color: "F24E1E" },
  Zustand: {
    logo: "Zustand",
    color: "433E38",
    customUrl:
      "https://custom-icon-badges.demolab.com/badge/Zustand-%23433E38.svg?style=for-the-badge&logo=zustand&logoColor=white",
  },
  pnpm: { logo: "pnpm", color: "F69220" },
  Yarn: { logo: "Yarn", color: "2C8EBB" },
  npm: { logo: "npm", color: "CB3837" },
  Prisma: { logo: "Prisma", color: "2D3748" },
  nginx: { logo: "nginx", color: "009639" },
  Vercel: { logo: "Vercel", color: "000000" },
  Claude: {
    logo: "Claude",
    color: "D97757",
    customUrl:
      "https://custom-icon-badges.demolab.com/badge/Claude-%23D97757.svg?style=for-the-badge&logo=claude&logoColor=white",
  },
  OpenRouter: {
    logo: "OpenRouter",
    color: "6366F1",
    customUrl:
      "https://custom-icon-badges.demolab.com/badge/OpenRouter-%236366F1.svg?style=for-the-badge&logo=openrouter&logoColor=white",
  },
  Swagger: { logo: "Swagger", color: "85EA2D", logoColor: "black" },
  Postman: { logo: "Postman", color: "FF6C37" },
};

// 이름만 적으면 배지 정보가 자동 매��됩니다.
// badgeMap에 없는 기술은 회색 기본 배지로 표시됩니다.
export function getBadge(name: string): SkillBadge {
  const entry = badgeMap[name];
  if (entry) {
    return { name, ...entry };
  }
  return { name, logo: name, color: "555555" };
}

export const skills = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "pnpm",
      "Yarn",
      "npm",
    ],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Node.js", "Prisma"],
  },
  {
    category: "Database & Infra",
    items: [
      "OracleDB",
      "SQLite",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "AWS",
      "nginx",
      "Vercel",
    ],
  },
  {
    category: "Etc",
    items: ["Claude", "OpenRouter", "Swagger", "Postman", "Pandas", "Figma"],
  },
];
