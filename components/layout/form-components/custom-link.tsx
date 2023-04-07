import Link from 'next/link';

type CustomLinkProps = {
  href: string;
  label: string;
};

export default function CustomLink(props: CustomLinkProps): JSX.Element {
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
