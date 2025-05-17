import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  title,
  subtitle,
  color,
  github,
  website,
}: {
  title: string;
  subtitle: string;
  color: string;
  github: string;
  website: string;
}) {
  return (
    <div className="bg-[#2e3a59] text-white rounded-xl p-6 flex flex-col justify-between h-56 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-white/80">{subtitle}</p>
        </div>
        <div
          className="w-6 h-6 rounded-md"
          style={{ backgroundColor: color }}
        />
      </div>
      <div className="flex gap-4 mt-6">
        <a
          href={github}
          target="_blank"
          className="bg-blue-500 px-4 py-1.5 rounded text-sm font-semibold flex items-center gap-1"
        >
          GITHUB <ExternalLink size={14} />
        </a>
        <a
          href={website}
          target="_blank"
          className="bg-blue-500 px-4 py-1.5 rounded text-sm font-semibold flex items-center gap-1"
        >
          WEBSITE <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
