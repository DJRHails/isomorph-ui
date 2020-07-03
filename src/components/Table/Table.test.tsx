import React from 'react'
import { Table } from '.'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '/themes/theme'

const DEFAULT_TABLE = (
  <Table>
    <thead>
      <tr>
        <th>Transaction hash</th>
        <th>Value</th>
        <th>Recipient</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0xeb...cc0</td>
        <td>0.10 ETH</td>
        <td>0x4fe...581</td>
        <td>March 28 2019 08:47:17 AM +UTC</td>
      </tr>
      <tr>
        <td>0xsb...230</td>
        <td>0.11 ETH</td>
        <td>0x4gj...1e1</td>
        <td>March 28 2019 08:52:17 AM +UTC</td>
      </tr>
      <tr>
        <td>0xed...c40</td>
        <td>0.12 ETH</td>
        <td>0x3fd...781</td>
        <td>March 28 2019 08:55:17 AM +UTC</td>
      </tr>
    </tbody>
  </Table>
)

describe('Table component sanity', () => {
  it('has name', () => {
    expect(Table.displayName).toBe('Table')
  })

  it('matches default snapshot', () => {
    const component = render(DEFAULT_TABLE)
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        {DEFAULT_TABLE}
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
