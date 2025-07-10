import React from 'react'

const Badge = ({badgeText, className}) => {
  return (
    <div className={`w-[92px] py-2 px-8 bg-black text-white font-bold text-center text-sm ${className}`}>{badgeText}</div>
  )
}

export default Badge
