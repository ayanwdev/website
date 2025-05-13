export default function Header() {
  return (
    <section className="flex flex-col justify-center items-center w-screen pt-8 pb-8">
      <h1 className="text-8xl font-bold bg-gradient-to-tr from-indigo-500 via-blue-500 to-blue-200 bg-clip-text text-transparent p-8">
        {"AyanW"}
      </h1>
      <div className="text-2xl font-semibold">
        {"Kotlin, Jetpack Compose developer"}
      </div>
    </section>
  );
}
