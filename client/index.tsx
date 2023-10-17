import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Suspense } from 'react'

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(router)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="carlos-aguilar.au.auth0.com"
      clientId="j1ZK6s2kISVEuLr1bUzrlDtgMy8gzbwR"
      redirectUri={window.location.origin}
      audience="https://bellas-backyard/api"
    >
      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}
      cacheLocation="localstorage"
      authorizationParams={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
        redirect_uri: window.location.origin,
      }}
    > */}
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <AppProvider />
        </Suspense>
      </QueryClientProvider>
    </Auth0Provider>
  )
})
