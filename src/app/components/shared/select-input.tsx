import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select/async";
import AsyncCreatableSelect from "react-select/async-creatable";

interface SelectInputProps {
  placeholder?: string;
  options: Array<{ value: any; label: string }>;
  onChange: (selectedOption: any) => void;
  value?: any;
  defaultValue?: any;
  isAsync?: boolean;
  isCreatable?: boolean;
  onCreateOption?: (inputValue: string) => void;
  loadOptions?: (
    inputValue: string,
    callback: (options: any[]) => void
  ) => void;
  onInputChange?: (newValue: string) => void;
  isLoading?: boolean;
  menuPlacement?: "auto" | "bottom" | "top";
  isClearable?: boolean;
  isDisabled?: boolean;
  autoFocus?: boolean;
  menuIsOpen?: boolean;
  onBlur?: () => void;
  styles?: any;
  getOptionValue?: (option: any) => any;
  getOptionLabel?: (option: any) => string;
  id?: string;
  [key: string]: any;
}

export const SelectInput = ({
  placeholder,
  options,
  onChange,
  value,
  defaultValue,
  isAsync,
  isCreatable,
  onCreateOption,
  loadOptions,
  onInputChange,
  isLoading = undefined,
  menuPlacement = "bottom",
  isClearable = true,
  isDisabled = false,
  autoFocus,
  menuIsOpen,
  onBlur,
  styles,
  getOptionValue,
  getOptionLabel,
  id,
  ...rest
}: SelectInputProps) => {
  if (isCreatable && !isAsync) {
    return (
      <CreatableSelect
        onCreateOption={onCreateOption}
        id={id}
        styles={styles}
        isClearable={isClearable}
        options={options}
        value={value}
        onInputChange={onInputChange}
        onChange={onChange}
        placeholder={placeholder}
        isLoading={isLoading}
        autoFocus={autoFocus}
        menuIsOpen={menuIsOpen}
        onBlur={onBlur}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        {...rest}
      />
    );
  }

  if (isAsync && !isCreatable) {
    return (
      <AsyncSelect
        id={id}
        styles={styles}
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={onChange}
        value={value}
        onInputChange={onInputChange}
        isClearable={isClearable}
        placeholder={placeholder}
        isLoading={isLoading}
        autoFocus={autoFocus}
        menuIsOpen={menuIsOpen}
        onBlur={onBlur}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        {...rest}
      />
    );
  }

  if (isAsync && isCreatable) {
    return (
      <AsyncCreatableSelect
        onCreateOption={onCreateOption}
        id={id}
        styles={styles}
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={onChange}
        value={value}
        onInputChange={onInputChange}
        isClearable={isClearable}
        placeholder={placeholder}
        isLoading={isLoading}
        autoFocus={autoFocus}
        menuIsOpen={menuIsOpen}
        onBlur={onBlur}
        createOptionPosition={"first"}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        {...rest}
      />
    );
  }
  return (
    <Select
      id={id}
      styles={styles}
      menuIsOpen={menuIsOpen}
      autoFocus={autoFocus}
      isClearable={!isClearable ? false : true}
      placeholder={placeholder}
      value={value}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      isLoading={isLoading}
      menuPlacement={menuPlacement}
      isDisabled={isDisabled}
      onBlur={onBlur}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
      {...rest}
    />
  );
};
