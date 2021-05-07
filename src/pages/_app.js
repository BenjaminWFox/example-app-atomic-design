import '../styles/globals.css'
import '../styles/utility.css'
import Head from 'next/head'
import React from 'react'
import { ADDisplayContext, display as ADDisplay, colors } from '../data/context'

function MyApp({ Component, pageProps }) {
  const [display, setDisplay] = React.useState(ADDisplay)

  const updateDisplay = (key, value) => {
    setDisplay((d) => ({
      ...d,
      [key]: value,
    }))
  }

  return (
    <>
      <Head>
        <title>Practical Atomic Design for Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ADDisplayContext.Provider value={{display, colors, updateDisplay}}>
          <ADDisplayContext.Consumer>
            {({display, colors}) => (
              <style global jsx>{`
              body .atom {
                outline: ${display.atoms ? 'none' : `4px ${colors.atoms} solid`};
                outline-offset: -3px;
              }
              body .molecule {
                outline: ${display.molecules ? 'none' : `3px ${colors.molecules} solid`};
                outline-offset: -2px;
              }
              body .organism {
                outline: ${display.organisms ? 'none' : `2px ${colors.organisms} solid`};
                outline-offset: -2px;
              }
              body .organism img {
                opacity: ${display.organisms ? '1' : '.5'};
                outline-offset: -2px;
              }
              body .template *:is(header, section, main, aside) {
                outline: ${display.templates ? 'none' : `2px ${colors.templates} solid`};
                outline-offset: -4px;
              }
              body .template > *:not(header, section, main, aside) {
                opacity: ${display.templates ? '1' : '.25'};
              }
              body .template > * > * > * {
                opacity: ${display.templates ? '1' : '.25'};
              }
              body .template {
                outline: ${display.pages ? 'none' : `6px ${colors.pages} solid`};
                outline-offset: -4px;
              }
            `}</style>
            )}
          </ADDisplayContext.Consumer>
          <Component {...pageProps} />
      </ADDisplayContext.Provider>
    </>
  )
}

export default MyApp
