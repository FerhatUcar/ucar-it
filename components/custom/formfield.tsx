import React, { FC } from "react";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { LucideMail, MessageCircle, UserRound } from "lucide-react";
import { baseColor } from "@/app/const";

type FieldNames = {
  name: string;
  email: string;
  message: string;
};
type FieldType = {
  form: UseFormReturn<FieldNames>;
  label: "name" | "email" | "message";
  isTextarea?: boolean;
};

const iconMap = {
  name: <UserRound size={16} color={baseColor} />,
  email: <LucideMail size={16} color={baseColor} />,
  message: <MessageCircle size={16} color={baseColor} />,
};

const Field: FC<FieldType> = ({ form, label, isTextarea }) => (
  <FormField
    control={form.control}
    name={label}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="flex flex-row gap-2 mb-4 text-white">
          {iconMap[label]}
          {label.toUpperCase()}
        </FormLabel>
        <FormControl>
          {isTextarea ? (
            <Textarea
              className="border-gray-800"
              placeholder="Tell me something.."
              {...field}
            />
          ) : (
            <Input className="border-gray-800" placeholder={label} {...field} />
          )}
        </FormControl>
        <FormMessage className="text-rose-700" />
      </FormItem>
    )}
  />
);

export default Field;
