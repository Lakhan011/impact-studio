import Link from "next/link";

export default function FloatingBadge() {
  return (
    <Link href="/template/start-here" className="link-template-info w-inline-block">
      <img
        src="/info-empty.svg"
        alt="Info"
        className="icon-info-template"
        width={20}
        height={20}
      />
      <div>About the template</div>
    </Link>
  );
}
