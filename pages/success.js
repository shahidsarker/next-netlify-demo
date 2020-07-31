import Link from "next/link";

export default function Success() {
  return (
    <div>
      Your form has been successfully submitted.
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
