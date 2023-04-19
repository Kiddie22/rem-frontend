import { CardMedia } from '@mui/material';

type PropsType = { src: string; alt: string };

function CustomCardMedia(props: PropsType): JSX.Element {
  const { src, alt } = props;
  return (
    <CardMedia
      component="img"
      height="300px"
      image={src}
      alt={alt}
      style={{
        borderTopLeftRadius: '5%',
        borderTopRightRadius: '5%',
      }}
    />
  );
}

export default CustomCardMedia;
