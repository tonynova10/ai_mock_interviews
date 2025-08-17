"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "./ui/form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface FormRadioGroupProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
}
const FormRadioGroup = ({ control, name, label }: FormRadioGroupProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="label">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col"
            >
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="technical" />
                </FormControl>
                <FormLabel className="font-normal">Technical</FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="behavioral" />
                </FormControl>
                <FormLabel className="font-normal">
                  Behavioral
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="mixed" />
                </FormControl>
                <FormLabel className="font-normal">Mixed</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormRadioGroup;
