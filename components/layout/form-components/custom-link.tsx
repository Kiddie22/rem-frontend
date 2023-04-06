import Link from 'next/link';

export default function CustomLink(props: {
  href: string;
  label: string;
}): JSX.Element {
  const { href, label } = props;
  return (
    <Link
      href={href}
      style={{
        textDecoration: 'inherit',
        color: 'inherit',
        padding: '10px',
      }}
    >
      {label}
    </Link>
  );
}
