import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-zinc-500 px-20 text-2xl font-bold tracking-widest">
      <Link href={"/"}>Pokemon!</Link>
    </header>
  );
};

export default Header;
