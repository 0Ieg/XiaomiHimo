import { FC, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../templates/button";

const Styled = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
.title{
  font: 700 18px Inter;
  text-transform: uppercase;
}
.data_fieldset{
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0;
  .label{
    display: block;
    max-width: 298px;
    padding-bottom: 10px;
    font: 400 14px Inter;
  }
  .input{
    max-width: 420px;
    height: 33px;
    border-width: 0 0 2px 0;
    border-color: black;
    font: 400 16px Inter;
    &:focus{
      outline: none;
    }
  }
}
.colors_fieldset{
  border: 0;
  .label{
    display: block;
    padding-bottom: 10px;
    font: 400 14px Inter;
    color: var(--color-gray);
    text-transform: lowercase;
  }
  .input{
    width: 80px;
    height: 14px;
    border-radius: 30px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    &:not(:last-of-type){
      margin-right: 23px;
    }
    &::after{
      content: '';
      border-radius: 30px;
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
    }
    &.gray::after{
      background-color: var(--color-gray);
    }
    &.white::after{
      background-color: var(--color-white);
      border: 1px solid var(--color-gray);
    }
    &.red::after{
      background-color: var(--color-red);
    }
  }
}
`
export const Form:FC = ()=>{
  const {handleSubmit, register, reset, formState:{isSubmitSuccessful}} = useForm({mode:'onTouched'})
  const onSubmit = (event:FieldValues)=>{
    console.log(event)
  }
  const validParams = {
    text:{
      required:{value:true, message:'Поле является обязательным'},
      pattern:{value:/([A-Za-zА-Яа-я]){2}/, message:'Введено некорректное имя'}
    },
    tel:{
      minLength:{value:3, message:'Не менее 3 символов'},
      pattern:{value:/\8\(\d{3}\)\d{3}-\d{2}-\d{2}/, message:'Правильный формат 8(111)222-33-44'}
    },
    radio:{
      required:{value:true, message:'Необходимо выбрать цвет'},
    }
  }
  useEffect(()=>{
    reset({
      "text_input":null,
      "tel_input":null,
      "color_input":null
    })
  },[isSubmitSuccessful])
  return(
    <Styled onSubmit={handleSubmit(onSubmit)}>
      <div className="title">Заказать</div>
      <fieldset className="data_fieldset">
        <label className="label">Если Вы хотите заказать велосипед, оставьте свой контакт и наш менеджер перезвонит вам в ближайшее время</label>
        <input className="input" type="text" {...register('text_input', validParams.text)} placeholder="имя"/>
        <input className="input" type="tel" {...register('tel_input', validParams.tel)}  placeholder="телефон"/>
      </fieldset>
      <fieldset className="colors_fieldset">
      <label className="label">выберите желаемый цвет</label>
        <input className='input gray' type="radio" {...register('color_input',validParams.radio)} value={'gray'}/>
        <input className='input white' type="radio" {...register('color_input')} value={'white'}/>
        <input className='input red' type="radio" {...register('color_input')} value={'red'}/>
      </fieldset>
      <Button>Заказать</Button>
    </Styled>
  )
}