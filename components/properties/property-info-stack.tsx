import Pluralize from 'pluralize';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CardComponents from '../layout/card-components';
import { Property } from '@/utils/properties-utils';

type PropsType = { property: Property };

function PropertyInfoStack(props: PropsType): JSX.Element {
  const { property } = props;
  return (
    <CardComponents.CardStack>
      <>
        <HotelIcon />
        {`${property?.noOfBedrooms}
      ${Pluralize('bedroom', property?.noOfBedrooms)}`}
      </>
      <>
        <BathtubIcon />
        {`${property?.noOfBathrooms}
      ${Pluralize('bathroom', property?.noOfBathrooms)}`}
      </>
    </CardComponents.CardStack>
  );
}

export default PropertyInfoStack;
