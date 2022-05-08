import React from 'react'
import './Loader.scss'

export default function Loader() {
  return (
    <div className="loading-container flex-column">
      <span className="spinner">
        <i className="fa-solid fa-spinner text-white"></i>
      </span>
    </div>
  )
}
