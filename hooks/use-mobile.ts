import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value inside a function or check it cleanly
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    mql.addEventListener("change", checkIsMobile)
    
    // Defer the initial check to avoid synchronous setState warning
    requestAnimationFrame(checkIsMobile)
    
    return () => mql.removeEventListener("change", checkIsMobile)
  }, [])

  return !!isMobile
}
