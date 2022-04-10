import React from "react"
import { convertToMillion } from './../utils/convertToMillion';

const List = ({ data }) => {

  return (
    <>
      <ul className="menu bg-base-100 w-full mx-0">
        {data?.map((datum, index) => {
          return (
           <div className="stats shadow w-full border-2 my-1 bg-gray-300" key={index}>
            <div className="stat w-4 md:w-24 xl:w-24">
                <div className="text-xl font-extrabold text-base-100 md:stat-value">{index + 1}</div>
                <div className="text-sm font-medium text-base-100 md:text-xl md:w-32 md:font-medium xl:w-96 xl:text-2xl xl:font-medium">{datum.name}</div>
                {datum.artist && (
                  <div className="text-sm text-secondary font-medium md:text-xl md:w-32 md:stat-desc xl:w-96">{datum.artist.name ? datum.artist.name : datum.artist}</div>
                )}
            </div>
            
           {datum.playcount && (<div className="stat w-4 xl:w-12">
              <div className="stat-figure text-primary">
              </div>
              <div className="stat-title text-base-100 font-medium">Dimainkan</div>
                <div className="text-xl font-extrabold  md:stat-value text-primary">{convertToMillion(datum.playcount)}</div>
            </div>)}
            
            <div className="stat w-4 xl:w-12">
              <div className="stat-figure text-secondary">
              </div>
              <div className="stat-title text-base-100 font-medium">Didengarkan</div>
                <div className="text-xl font-extrabold md:stat-value text-secondary">{convertToMillion(datum.listeners)}</div>
            </div>
          </div>
          )
        })}
      </ul>
    </>
  )
}

export default List

