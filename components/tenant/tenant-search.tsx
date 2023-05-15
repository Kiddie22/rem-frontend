import React, { useState, useEffect, SetStateAction } from 'react';
import Select from 'react-select';
import { Button } from '@mui/material';
import { User } from '@/utils/user-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import { Property } from '@/utils/properties-utils';

type PropsType = { property: Property };

function TenantSearch(props: PropsType): JSX.Element {
  const { property } = props;
  const [, setInputValue] = useState('');
  const instance = useAxiosInstance();
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const response = await instance.get('http://localhost:3000/users/');
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

  const addTenant = async (): Promise<void> => {
    const response = await instance.post(
      `http://localhost:3000/properties/${property.id}/tenant/`,
      { userId: selectedOption?.value },
    );
    console.log(response);
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
      <Button variant="contained" onClick={addTenant}>
        Add Tenant
      </Button>
    </>
  );
}

export default TenantSearch;
