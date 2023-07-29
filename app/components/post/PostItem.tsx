"use client";
import { PostType } from '@/app/models/Posts'
import { deletePost } from '@/app/redux/features/post-slise';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';

const PostItem:React.FC<PostType> = (props)=> {
  const router = useRouter();
  const dispatch = useDispatch();   
  return (
      <div className='bg-zinc-800 rounded-2xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] py-8 h-fit px-10 space-y-3 flex flex-col'>
        <div className='flex items-center justify-between'>
            <h3 className='text-2xl'>{props.name}</h3>
            <Image alt='avatar' src={props.avatar} width={50} height={50} className='rounded-full'/>
        </div>
        <p className='h-[100px] overflow-hidden overflow-ellipsis'>
          {props.body}  
        </p>
        <span>{new Date(props.date).toUTCString()}</span>
        <div className='flex space-x-2 [&>*]:py-2 [&>*]:w-24 [&>*]:font-thin'>
            <button className='bg-rose-800 rounded-xl hover:bg-rose-900 hover:opacity-75 transition' onClick={()=>dispatch(deletePost(props.id))}>Delete</button>
        <button className='bg-cyan-900 rounded-xl hover:bg-cyan-900 hover:opacity-75 transition' onClick={()=>{router.push(`${props.id}`)}}>More</button>
        </div>
    </div>
  )
}

export default PostItem
