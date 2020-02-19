import { useState, useEffect, useRef } from 'react'
import { cleanAllSideMenus } from '../../logic/sidemenu/sidemenuAction'
import { useDispatch } from 'react-redux'
import { closeModals } from '../../logic/modal/modalAction'

export const useComponentVisible = (initialIsVisible: boolean) => {
  const dispatch = useDispatch()
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref: any = useRef(null)

  const cleanAll = () => {
    dispatch(cleanAllSideMenus())
    dispatch(closeModals())
  }

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false)
      cleanAll()
    }
  }

  const handleClickOutside = (event: KeyboardEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false)
      cleanAll()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isComponentVisible, setIsComponentVisible }
}
