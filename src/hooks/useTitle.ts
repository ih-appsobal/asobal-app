import { useContext, useEffect } from "react"
import { TitleContext } from "../contexts/TitleProvider"

export default function useTitle(title: string) {
  const { setTitle } = useContext(TitleContext)

  useEffect(() => {
    setTitle(title)
  }, [setTitle, title])
}