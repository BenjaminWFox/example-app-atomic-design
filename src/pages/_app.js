import '../styles/globals.css'
import '../styles/utility.css'
import Head from 'next/head'
import React from 'react'
import { ADDisplayContext, display as ADDisplay } from '../data/context'

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
      <ADDisplayContext.Provider value={{display, updateDisplay}}>
          <ADDisplayContext.Consumer>
            {({display}) => (
              <style global jsx>{`
              body .atom {
                outline: ${display.atoms ? 'none' : '4px red solid'};
                outline-offset: -3px;
              }
              body .molecule {
                outline: ${display.molecules ? 'none' : '3px blue solid'};
                outline-offset: -2px;
              }
              body .organism {
                outline: ${display.organisms ? 'none' : '2px aqua solid'};
                outline-offset: -2px;
              }
              body .organism img {
                opacity: ${display.organisms ? '1' : '.5'};
                outline-offset: -2px;
              }
              body .template *:is(header, section, main, aside) {
                outline: ${display.templates ? 'none' : '2px green solid'};
                outline-offset: -4px;
              }
              body .template > *:not(header, section, main, aside) {
                opacity: ${display.templates ? '1' : '.25'};
              }
              body .template > * > * > * {
                opacity: ${display.templates ? '1' : '.25'};
              }
              body .template {
                outline: ${display.pages ? 'none' : '6px yellow solid'};
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
