import { Container } from "./style";
import { ComponentProps, forwardRef } from "react";

type ContainerProps = ComponentProps<"input"> & {
  label?: string;
  variant?: "black" | "dark";
};

export const Input = forwardRef<HTMLInputElement, ContainerProps>(function ({
  label,
  variant = "black",
  ...props }, ref)  {
  return (
    <Container $variant={variant}>
      {label && <label>{label}</label>}
      <input ref={ref} {...props} />
    </Container>
  );
});
