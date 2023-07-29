"use client";

import Image from "next/image";
import { PostType } from "../models/Posts";
import { useAppSelector } from "../redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/features/post-slise";

export default function Page({params} : {params :{id : string}})
{
    const router = useRouter();
    const postInfo = useAppSelector((state)=>state.posts.find((value : PostType,_)=>{
        return value.id === parseInt(params.id)
    }));
    const dispatch = useDispatch();
    return(
        <>
            {postInfo? 
                <div className="flex space-y-2 flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-neutral-800 p-10 rounded-lg">
                <div className="flex w-full space-x-4 items-center">
                        <Image src={postInfo.avatar} height={100} width={100} className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" alt="avatar"/>
                        <div className="space-y-2 flex flex-col justify-between">
                            <h1 className="text-3xl font-thin">{postInfo.name}</h1>
                            <span className="italic">{new Date(postInfo.date).toUTCString()}</span>    
                        </div>
                </div>
                <hr  className="border-b-zinc-300"/>
                <div className="py-2">
                    <p>
                        {postInfo.body}
                    </p>
                </div>      
                <div className='flex space-x-2 [&>*]:py-2 [&>*]:w-24 [&>*]:font-thin'>
                        <button className='bg-rose-800 rounded-xl hover:bg-rose-900 hover:opacity-75 transition' 
                        onClick={()=>{
                            router.replace("./")
                            dispatch(deletePost(postInfo.id));
                        }}>Delete</button>
                        <button className='bg-cyan-900 rounded-xl hover:bg-cyan-900 hover:opacity-75 transition' onClick={() => { router.back()}}>Back</button>
                </div>
            </div>:"There is no such post"}
        </>
    )
}