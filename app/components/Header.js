import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/work">WORK</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/contact">CONTACT</Link>
    </nav>
  );
}
