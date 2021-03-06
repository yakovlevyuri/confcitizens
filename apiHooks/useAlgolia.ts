import useSWR from 'swr';

import fetch from '../libs/fetch';

const useAlgolia = (phrase: string, initialData: any = {}) => {
  return useSWR(
    `/api/speakers${phrase ? `?phrase=${phrase}` : ''}`,
    fetch,
    initialData,
  );
};

export default useAlgolia;
