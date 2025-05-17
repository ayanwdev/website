import { silkScreen } from "@/app/lib/fonts";

interface Props {
  text: string;
}

export default function SectionHeader({ text }: Props) {
  return (
    <section className="p-8">
      <div className="flex flex-row justify-center items-center">
        <span className="flex w-1/2 h-[2px] bg-slate-500"></span>
        <span
          className={`${silkScreen.className} text-yellow-400 text-3xl p-6 pt-0 pb-0`}
        >
          {text}
        </span>
        <span className="flex w-1/2 h-[2px] bg-slate-500"></span>
      </div>
    </section>
  );
}
