import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
  useRouter,
} from "blitz"
import { Suspense, useMemo } from "react"
import store from "app/redux/store"
import { Provider } from "react-redux"
import LoginForm from "app/auth/components/LoginForm"
import { IntlProvider } from "react-intl"
import "../core/assets/styles/index.scss"
import Kazakh from "app/content/compiled-locales/kz.json"
import Russian from "app/content/compiled-locales/ru.json"

function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const { locale = "ru" } = useRouter()

  const messages = useMemo(() => {
    switch (locale) {
      case "kz":
        return Kazakh
      default:
        return Russian
    }
  }, [locale])

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <IntlProvider locale={locale} defaultLocale="ru" messages={messages}>
        <Provider store={store}>
          <Suspense fallback={<div></div>}>{getLayout(<Component {...pageProps} />)}</Suspense>
        </Provider>
      </IntlProvider>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}

export default App
