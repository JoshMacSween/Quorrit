import React, { createContext, useContext, useState } from 'react'
import { getPosts } from '../firebase/postsRepository'

const PostsContext = createContext()
export const usePosts = () => useContext(PostsContext)

export default function PostsProvider(props) {
  const [posts, setPosts] = useState([])

  return (
    <PostsContext.Provider
      value={{
        posts,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  )
}
