import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const avatarSize = 54;

  return (
    <div className="flex flex-col bg-gray-950 text-gray-50 scale-125">
      <div className="flex flex-row items-center justify-center rounded-2xl p-4">
        <div className="pr-2">
          <Image
            src={"/avatar.png"}
            alt="avatar"
            height={avatarSize}
            width={avatarSize}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-3xl text-gray-50">{"AyanW"}</span>
          <span className="text-xs text-gray-700 pt-1">
            <Link
              className="hover:underline"
              href={"https://github.com/ayanwdev"}
            >
              {"@ayanwdev"}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
