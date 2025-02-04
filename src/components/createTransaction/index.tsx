import { useCallback, useEffect, useState } from "react";
import { Input } from "../input";
import {
  ButtonGroup,
  Container,
  InputGroup,
  RadioInputGroup,
  RadioGroupContent,
  InputNumberMask,
  ErrorMessage,
} from "./style";
import { Dialog } from "../dialog";
import { ButtonIn } from "../button";
import { Titte } from "../../components/tittle";
import { InputMask } from "@react-input/mask";
import { useFetchApi } from "../../hooks/useFetchApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTransactionData } from "../../validators/types";
import dayjs from "dayjs";
import { createTransactionSchema } from "../../validators/schemas";


export function CreateTransaction() {
  const { categories, fetchCategories, createTransaction } = useFetchApi();
  const [open, setOpen] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTransactionData>({
    defaultValues: {
      categoryId: 'null',
      title: "",
      amount: "",
      date: dayjs(new Date()).format("DD/MM/YYYY"),
      type: "income",
    },
    resolver: zodResolver(createTransactionSchema),
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handlerClose = useCallback(() => {
    reset();
    setOpen(false);
  }, [reset]);

  const OnSubmit = useCallback(
    async (data: CreateTransactionData) => {
      
      await createTransaction(data);
      handlerClose();
    },
    [handlerClose, createTransaction]
  );

  return (
    <Dialog
      trigger={<ButtonIn>Nova Transação</ButtonIn>}
      open={open}
      onOpenChange={setOpen}

    >
    

     
      <Titte
        title="Nova Transação"
        subtittle="Crie uma nova transação para seu controle financeiro"
      />
  

      <Container>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <InputGroup>
            <label>Categoria</label>
            <select id="categories" {...register("categoryId")}>
              <option value="null">Selecione a Categoria...</option>
              {categories &&
                Array.isArray(categories) &&
                categories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                ))}
            </select>

            <ErrorMessage>{errors.categoryId?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Input
              label="Nome"
              placeholder="Nome da Transação"
              variant="black"
              {...register('title')}
            />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <label>Valor</label>
            <InputNumberMask
              placeholder="0,00 R$"
              format="currency"
              currency="BRL"
              locales="pt-BR"
              {...register('amount')}
            />
            <ErrorMessage>{errors.amount?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <InputMask
              component={Input}
              mask="dd/mm/aaaa"
              replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
              variant="black"
              label="Data"
              placeholder="dd/mm/aaaa"
              {...register('date')}
            />
            <ErrorMessage>{errors.date?.message}</ErrorMessage>
          </InputGroup>

          <RadioInputGroup style={{ display: "flex", gap: "0.200rem" }}>
            <RadioGroupContent style={{ display: "flex", gap: "0.500rem" }}>
              <input
                value="income"
                id="income"
                type="radio"
                {...register('type')}
              />
              <label htmlFor="income">Receita</label>
            </RadioGroupContent>

            <RadioGroupContent style={{ display: "flex", gap: "0.500rem" }}>
              <input value="expense" type="radio" {...register('type')} />
              <label htmlFor="expense">Gastos</label>
            
            </RadioGroupContent>
          
          </RadioInputGroup>

          <ButtonGroup style={{ display: "flex", gap: "0.800rem" }}>
            <ButtonIn onClick={handlerClose} variant="outline" type="button">
              Cancelar
            </ButtonIn>
            <ButtonIn type="submit">Cadastrar</ButtonIn>
          </ButtonGroup>
        </form>
      </Container>
    </Dialog>
  );
}
