import { memo } from 'react';
import { FilterOptions, Filter } from '../types/Filter';
import { capitalize } from '../utils/transform';

interface DoctorFilterProps {
  filters: FilterOptions;
  onSelect: (filter: Filter) => void;
}

function DoctorFilter({ filters, onSelect }: DoctorFilterProps) {
  return (
    <form className='flex flex-col gap-2 sm:flex-row'>
      <label className='font-bold'>Filter</label>
      <SelectFilter
        name='specialty'
        options={filters.specialty}
        onSelect={onSelect}
      />
      <SelectFilter name='date' options={filters.date} onSelect={onSelect} />
      <SelectFilter name='time' options={filters.time} onSelect={onSelect} />
    </form>
  );
}

interface SelectFilterProps {
  name: keyof FilterOptions;
  options: string[];
  onSelect: (filter: Filter) => void;
}

const SelectFilter = ({ name, options, onSelect }: SelectFilterProps) => (
  <select
    name={name}
    onChange={(e) => onSelect({ name, value: e.target.value })}
    className='border rounded outline-none'
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
);

export default memo(DoctorFilter);
