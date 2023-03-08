import React from "react"
import { format } from "date-fns"


export default function Profile(props) {
  return (
    <>
      <article className="p-5 bg-white rounded-lg shadow shadow-yellow-200">
       <article className="flex items-center justify-start">
          <img src={props.owner.avatar_url} alt={props.owner.login} className="w-20 h-20 rounded-full shadow" /> 
          <div className="ml-2">
          <h2 className="text-lg font-bold capitalize text-gray-600"> {props.owner.login}</h2>
          <p className="text-sm mb-1">{props.name}</p>
          {props.private ? <p className="bg-rose-400 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">Private</p> 
          : <p className="bg-emerald-400 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">Public</p>}
          </div>
       </article>

       <div className="my-5">
        <p> Created at {format(new Date(props.created_at), "dd MMMM yyyy")} by {props.owner.login}</p>
       </div>

       <div className="flex  flex-wrap items-center justify-between ">
        <a href={props.html_url} target="_blank" rel="noreferrer" className="underline text-sky-600">View Repo</a>
        <ul className="text-right">
          <li className="text-gray-600">{props.stargazers_count.toLocaleString()} stars</li>
          <li className="text-gray-600">{props.watchers_count.toLocaleString()} watchers</li>
        </ul>
       </div>

       <div className="flex flex-wrap items-center justify-between mt-5">
       {props.language && <p className="bg-gray-400 opacity-75 text-white py-1 px-1 rounded-lg shadow text-xs" >{props.language}</p> }

        <ul>
         
            {props.topics.map((topic, index) =>( <li key={index} className="bg-gray-400 opacity-75 text-white py-1 px-2 rounded-lg shadow text-xs inline-block mx-1">{topic}</li>) )}
          
        </ul>

        

       </div>
      </article> 
    </>
  )
}
