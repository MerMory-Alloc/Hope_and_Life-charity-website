
const FolderShapedItem = ({children, direction }) => {
  const directionClass = direction === 'right' ? 'folder-shape-left' : 'folder-shape-right';

  return (
    <div className={`${directionClass}  w-full h-full relative`}>
      {children}
    </div>
  )
}

export default FolderShapedItem