import { memo, useRef } from 'react';
import { FilterOptions, Filter } from '../types/Filter';
import { capitalize } from '../utils/transform';
import { useAccessibleFocus } from '../hooks/useAccesibleFocus';

interface DoctorFilterProps {
  filters: FilterOptions;
  onSelect: (filter: Filter) => void;
}

function DoctorFilter({ filters, onSelect }: DoctorFilterProps) {
  return (
    <form className='flex flex-col gap-2 sm:flex-row'>
      <legend className='font-bold'>Filter</legend>
      {Object.entries(filters).map(([name, options]) => (
        <SelectFilter
          key={name}
          name={name as keyof FilterOptions}
          options={options}
          onSelect={onSelect}
        />
      ))}
    </form>
  );
}

interface SelectFilterProps {
  name: keyof FilterOptions;
  options: string[];
  onSelect: (filter: Filter) => void;
}

const SelectFilter = ({ name, options, onSelect }: SelectFilterProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  useAccessibleFocus(selectRef);

  return (
    <div className='flex'>
      <label htmlFor={name} className='sr-only'>
        {name}
      </label>
      <select
        ref={selectRef}
        id={name}
        name={name}
        className='border rounded w-[175px] sm:w-full'
        onChange={(e) => onSelect({ name, value: e.target.value })}
      >
        <option value='' className='text-black'>
          {capitalize(name)}
        </option>
        {options.map((value) => (
          <option key={value} value={value} className='text-black'>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(DoctorFilter);
