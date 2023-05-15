import TenantSearch from '@/components/tenant/tenant-search';
import { Property } from '@/utils/properties-utils';

type PropsType = { property: Property };

export default function PropertyTenantDetails(props: PropsType): JSX.Element {
  const { property } = props;
  return (
    <>
      <h1>Tenant Details</h1>
      <TenantSearch property={property} />
    </>
  );
}
