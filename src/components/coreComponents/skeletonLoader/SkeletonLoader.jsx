import styled from './skeletonLoader.module.css'

function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
    <div  className={`bg-gray-300 h-48 w-full rounded-md ${styled['shimmer']} `}></div>
    <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
    <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
   </div>
  )
}

export default SkeletonLoader