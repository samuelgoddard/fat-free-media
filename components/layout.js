import React from 'react'
import { initGA, logPageView } from '../helpers/analytics'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <>
        { this.props.preview && (
          <div className="fixed top-0 left-0 right-0 bg-red-500 z-50 text-center text-white py-2">
            <>
              PREVIEW MODE ENABLED: This is page is showing draft content direct from the CMS.{' '}
              <a
                href="/api/exit-preview"
                className="underline"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          </div>
        )}
        {this.props.children}
      </>
    )
  }
}