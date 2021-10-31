import { useRouter } from "blitz"
import { useCallback } from "react"

const useLocalizedProp = () => {
  const { locale = "ru" } = useRouter()
  const getLocalizedValue = useCallback(
    (model: Record<string, any>, field: string) => {
      const suffix =
        (locale && locale[0] && locale.replace(/^[a-z]/gi, locale[0].toUpperCase())) || "Ru"
      return model[field + suffix]
    },
    [locale]
  )
  return getLocalizedValue
}
export default useLocalizedProp
