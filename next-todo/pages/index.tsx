import { GetServerSideProps, NextPage } from "next";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

// const todos: TodoType[] = [
//   {id: 1, text: "마트 가서 장보기", color:"red" , checked: false},
//   {id: 2, text: "수학 숙제하기", color: "orange", checked: false},
//   {id: 3, text: "코딩하기", color: "yellow", checked: true},
//   {id: 4, text: "넥스트 공부하기", color: "green", checked: true},
//   {id: 5, text: "요리 연습하기", color: "blue", checked: false},
//   {id: 6, text: "분리수거 하기", color: "navy", checked: false},
//   {id: 7, text: "분리수거 하기2", color: "red", checked: false},
// ];

interface IProps {
  todos: TodoType[];
}

const index:NextPage<IProps> = ({todos}) => {
  return <TodoList todos={todos}/>;
};

export const getServerSideProps: GetServerSideProps = async() => {
  try{
    const { data }= await getTodosAPI();
    return { props: { todos: data} };
  }
  catch(e){
    console.log(e);
    return { props: { todos: [] } };
  }
};

export default index;