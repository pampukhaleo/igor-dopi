import React, { ChangeEvent } from 'react'

type PropsType = {
  title: string
  completed: boolean
  callBack: (id:number, status: boolean) => void
  id: number
}

export const Todo = ({title, completed, callBack, id}: PropsType) => {

  return (
    <>
      <li>{title}<input type='checkbox' checked={completed} onChange={(e) => callBack(id, e.currentTarget.checked)}/></li>
    </>
  )
}
