import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { capabilities } from "@/constants";

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
}

const FormSelect = ({
  control,
  name,
  label,
  placeholder = "Select A value",
}: FormSelectProps<T>) => {
  const items = capabilities.map((capability) => (
    <SelectItem key={capability.id} value={capability.value}>
      {capability.name}
    </SelectItem>
  ));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="label">{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{items}</SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
