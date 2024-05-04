import React from 'react'

const TaskEditIdPage = ({params} : {params: {id : string}}) => {
    // 引数に設定したidの部分は、ディレクトリ名と合わせる必要がある
  return (
    <div>{params.id}</div>
  )
}

export default TaskEditIdPage