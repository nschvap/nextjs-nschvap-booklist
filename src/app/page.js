import ReadList from "@/components/read-list/read-list";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-bold">
        ¡Bienvenido a esta página de muestra de libros!
      </h2>
      <p className="font-medium">
        La idea era cumplir con la primera prueba técnica hecha por{" "}
        <Link
          href={"https://github.com/midudev"}
          target="_blank"
          referrerPolicy="no-referrer"
          className="text-blue-500 font-black"
        >
          midudev
        </Link>{" "}
        en GitHub o{" "}
        <Link
          href={"https://pruebastecnicas.com"}
          target="_blank"
          referrerPolicy="no-referrer"
          className="text-blue-500 font-black"
        >
          pruebastecnicas.com
        </Link>
      </p>

      <span className="mt-5 font-black tracking-wider text-center">
        Para ir a la "libreria":
      </span>
      <Link
        href={"/books"}
        className="px-4 py-2 bg-sky-500 text-white font-black rounded hover:brightness-75"
      >
        Presioná acá
      </Link>

      <div className="mt-8">
        <ReadList />
      </div>
    </main>
  );
}
