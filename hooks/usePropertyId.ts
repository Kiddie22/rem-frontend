import { useRouter } from 'next/router';

function usePropertyId(): string | string[] | undefined {
  const router = useRouter();
  const { id } = router.query;
  return id;
}

export default usePropertyId;
