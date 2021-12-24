import React, { SelectHTMLAttributes, useState } from "react";
import { Control, Controller } from "react-hook-form";
import AsyncSelect from "react-select/async";
import { ISelectOptions } from "../../../utils/ISelectOptions";
import { Container, Label, SelectContainer, Select } from "./styles";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  control: Control;
  label: string;
  options: IOptions[];
}

interface IOptions {
  value: string | ReadonlyArray<string> | number | undefined;
  label: string;
}

export const SelectForm: React.FC<Props> = ({
  label,
  name,
  control,
  value,
  options,
  ...rest
}: Props) => {

  return (
    <Container>
      <Label>{label}</Label>
      <SelectContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            // <MySelect
            //   cacheOptions
            //   loadOptions={loadOptions}
            //   defaultOptions
            //   onInputChange={onChange}
            // />
            <Select onChange={onChange} value={value}>
              {options.map((e, key) => {
                return (
                  <option key={key} value={e.value}>
                    {e.label}
                  </option>
                );
              })}
            </Select>
          )}
          name={name}
        />
      </SelectContainer>
    </Container>
  );
};
