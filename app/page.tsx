"use client"
import { useEffect } from "react";
import { PostType } from "./models/Posts";
import { useAppSelector } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./components/post/PostItem";
export default function Home() {
  const dispatch = useDispatch();
  const data = useAppSelector((state)=>state.posts);
  const filter = useAppSelector((state)=>state.filters);
  console.log(filter)
  return (
    <section className="grid grid-cols-3 min-h-screen gap-8">
        {data.map((value :PostType, index : number)=>{
          if(filter!=="")
          {
            if(value.name.includes(filter))
              return <PostItem {...value} key={index} />
            else 
              return ""
          }else{
            return <PostItem {...value} key={index}/> 
          }
        })}
    </section>
  )
}
