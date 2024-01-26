import React, { FC } from "react";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { GanttChart, LucideMail, MessageCircle, UserRound } from "lucide-react";
import { baseColor } from "@/app/const";

type FieldNames = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type FieldType = {
  form: UseFormReturn<FieldNames>;
  label: keyof FieldNames;
  type: "textarea" | "select" | "input";
};

const iconMap = {
  name: <UserRound size={16} color={baseColor} />,
  email: <LucideMail size={16} color={baseColor} />,
  subject: <GanttChart size={16} color={baseColor} />,
  message: <MessageCircle size={16} color={baseColor} />,
};

const selectFieldSubjects = ["Booking", "Question", "Other"];

const renderField = (
  type: FieldType["type"],
  field: ControllerRenderProps<FieldNames, FieldType["label"]>,
  label: string,
) => {
  switch (type) {
    case "textarea":
      return (
        <Textarea
          className="border-gray-800"
          placeholder="Tell me something.."
          {...field}
        />
      );
    case "select":
      return (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {selectFieldSubjects.map((sub) => (
              <SelectItem key={sub} value={sub}>
                {sub}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    case "input":
      return (
        <Input className="border-gray-800" placeholder={label} {...field} />
      );
    default:
      return null;
  }
};

const Field: FC<FieldType> = ({ form, label, type }) => (
  <FormField
    control={form.control}
    name={label}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="flex flex-row gap-2 mb-4 text-white">
          {iconMap[label]}
          {label.toUpperCase()}
        </FormLabel>
        <FormControl>{renderField(type, field, label)}</FormControl>
        <FormMessage className="text-rose-700" />
      </FormItem>
    )}
  />
);

export default Field;
