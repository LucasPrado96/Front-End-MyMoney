import { useCallback, useState, } from "react";
import { Input } from "../input";
import {ButtonGroup, Container, ErrorMessage, InputGroup } from './style'
import { Dialog } from "../dialog";
import { ButtonIn } from "../button";
import { Titte } from "../../components/tittle";
import { CreateCategoryData } from "../../validators/types";
import { useFetchApi } from "../../hooks/useFetchApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { theme } from "../../styles/theme";

import { createCategorySchema } from "../../validators/schemas";



export function CreateCategory(){
    const {createCategory, fetchCategories} = useFetchApi();
    const [open, setOpen] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm<CreateCategoryData>({
        defaultValues:{
            title: '',
            color: theme.colors.primary,
        },
        resolver: zodResolver(createCategorySchema)
    })


    const handlerClose = useCallback(() => {
        setOpen(false)
    }, [])

    const OnSubmit = useCallback(async (data: CreateCategoryData) => {
        await createCategory(data)
        handlerClose()
        await fetchCategories()
    }, [handlerClose, createCategory, fetchCategories])


    return(
        <Dialog trigger={<ButtonIn>Nova Categoria</ButtonIn>} open={open} onOpenChange={setOpen}>
          
             <Titte title="Nova Categoria" subtittle="Crie uma nova categoria para suas transações"/> 
       
          

        <Container>

           <form onSubmit={handleSubmit(OnSubmit)}>
                <div>

                    <InputGroup>
                        <Input placeholder="Nome da categoria" 
                        label="Nome" type="text" 
                        {...register('title')}
                    
                        />
                        <ErrorMessage>{errors.title?.message}</ErrorMessage>
                    </InputGroup>    
                   
                    <InputGroup>
                        <Input  label="Cor" type="color" {...register('color')}
                        />
                        <ErrorMessage>{errors.color?.message}</ErrorMessage>
                   </InputGroup>
                </div>

                <ButtonGroup style={{display: 'flex', gap: '0.800rem'}}>
                <ButtonIn onClick={handlerClose} variant="outline" type="button">Cancelar</ButtonIn>
                <ButtonIn  type="submit">Cadastrar</ButtonIn>
                 </ButtonGroup>
           </form>

            

        </Container>

        </Dialog>
    )
}
