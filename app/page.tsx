"use client"
import { useEffect } from "react";
import { PostType } from "./models/Posts";
import { useAppSelector } from "./redux/store";
import { useDispatch } from "react-redux";
import PostItem from "./components/post/PostItem";
export default function Home() {
  const dispatch = useDispatch();
  const data = useAppSelector((state)=>state.posts);
  return (
    <section className="grid grid-cols-3 min-h-screen gap-8">
        {data.map((value :PostType, index : number)=>{
          return <PostItem {...value} key={index}/>
        })}
    </section>
  )
}
