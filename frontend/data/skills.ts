export type SkillCategory = {
    category: string;
    items: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    },
    {
        category: "Backend",
        items: ["Java", "Spring Boot"],
    },
    {
        category: "Database",
        items: ["MySQL"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "VS Code", "npm"],
    },
];