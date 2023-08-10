import React from 'react'
import s from './SuperButton.module.css'

type PropsType = {
  name?: string
  callBack: () => void
  children?: React.ReactNode
  color?: string
  disabled?: boolean
}

export const SuperButton:React.FC<PropsType> = ({ color,
                                                  disabled,
                                                  children,
                                                  name,
                                                  callBack } ) => {

  console.log('super btn rendered')
  const onClickHandler = () => {
    callBack()
  }

  // const finalClassName = s.button
  //   + (disabled
  //     ? ' ' + s.disabled
  //     : color === 'red'
  //       ? ' ' + s.red
  //       : color === 'secondary'
  //         ? ' ' + s.secondary
  //         : ' ' + s.default)
  //   + (className ? ' ' + className : '')

  // const finalClassName = s.button+" " +s.secondary

  const finalClassName = `${s.button} `
  return (
    <button className={finalClassName} onClick={ onClickHandler }>{ children }</button>
  )
}


// import React from 'react'
//
// type PropsType = {
//   name?: string
//   callBack: () => void
//   children?: React.ReactNode
// }
//
// export const SuperButton = ({ children, name, callBack }: PropsType) => {
//
//   console.log('super btn rendered')
//   const onClickHandler = () => {
//     callBack()
//   }
//
//   return (
//     <button onClick={ onClickHandler }>{ children }</button>
//   )
// }
