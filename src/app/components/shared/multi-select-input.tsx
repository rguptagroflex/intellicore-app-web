import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select/async";
import AsyncCreatableSelect from "react-select/async-creatable";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

import OptionTypeBase from "react-select";

interface SelectMultipleInputProps {
  placeholder?: string;
  options?: OptionTypeBase[];
  onChange?: () => void;
  value?: any;
  defaultValue?: any;
  isAsync?: boolean;
  isCreatable?: boolean;
  loadOptions?: (
    inputValue: string,
    callback: (options: OptionTypeBase[]) => void
  ) => void;
  onInputChange?: (newValue: string) => void;
  isAnimated?: boolean;
  isLoading?: boolean;
}

const MultiSelectInput: React.FC<SelectMultipleInputProps> = ({
  placeholder,
  options,
  onChange,
  value,
  defaultValue,
  isAsync,
  isCreatable,
  loadOptions,
  onInputChange,
  isAnimated,
  isLoading = undefined,
}) => {
  if (isCreatable && !isAsync) {
    return (
      <CreatableSelect
        isClearable
        options={options}
        value={value}
        defaultValue={defaultValue}
        onInputChange={onInputChange}
        onChange={onChange}
        placeholder={placeholder}
        isLoading={isLoading}
        components={isAnimated ? animatedComponents : undefined}
        isMulti
      />
    );
  }

  if (isAsync && !isCreatable) {
    return (
      <AsyncSelect
        isClearable
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        onInputChange={onInputChange}
        placeholder={placeholder}
        isLoading={isLoading}
        components={isAnimated ? animatedComponents : undefined}
        isMulti
      />
    );
  }

  if (isAsync && isCreatable) {
    return (
      <AsyncCreatableSelect
        isClearable
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        onInputChange={onInputChange}
        placeholder={placeholder}
        isLoading={isLoading}
        components={isAnimated ? animatedComponents : undefined}
        isMulti
      />
    );
  }
  return (
    <Select
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      isLoading={isLoading}
      components={isAnimated ? animatedComponents : undefined}
      isMulti
    />
  );
};

export default MultiSelectInput;
