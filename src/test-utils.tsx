import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

function render(
  ui: any,
  {
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: any) {
    return <MemoryRouter>{children}</MemoryRouter>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }