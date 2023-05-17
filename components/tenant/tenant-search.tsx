import React, { useState, useEffect, SetStateAction } from 'react';
import Select from 'react-select';
import { Button } from '@mui/material';
import { User } from '@/utils/user-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import { useAddTenantMutation } from '@/hooks/react-query/useTenants';

function TenantSearch(): JSX.Element {
  const addTenantMutation = useAddTenantMutation();
  const [, setInputValue] = useState('');
  const instance = useAxiosInstance();
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const response = await instance.get('users');
      const { data } = response;

      const formattedOptions = data.map((user: User) => ({
        value: user.id,
        label: user.username,
      }));

      setOptions(formattedOptions);
    };

    fetchUsers();
  }, [instance]);

  const handleInputChange = (value: string): void => {
    setInputValue(value);
  };

  const handleChange = (selected: SetStateAction<null>): void => {
    setSelectedOption(selected);
  };

  return (
    <>
      <Select
        value={selectedOption}
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={options}
        placeholder="Add tenant..."
      />
      <Button
        variant="outlined"
        onClick={(): void => addTenantMutation.mutate(selectedOption?.value)}
        style={{ marginTop: '10px' }}
      >
        Add Tenant
      </Button>
    </>
  );
}

export default TenantSearch;
