import React, { memo } from "react"
import { useRouter, Link } from "blitz"

function LocalesToggle() {
  const router = useRouter()
  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(router.pathname, router.asPath, {
      locale: router.locale === "ru" ? "kz" : "ru",
      scroll: false,
      shallow: true,
    })
  }
  return (
    <div className="lang header__lang">
      {router.locale === "ru" ? (
        <a href="#" onClick={handleToggle} className="lang__link -kz -active">
          Kz
        </a>
      ) : (
        <a href="#" onClick={handleToggle} className="lang__link -ru -active">
          Ru
        </a>
      )}
    </div>
  )
}

export default memo(LocalesToggle)
