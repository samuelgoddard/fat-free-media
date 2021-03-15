export default function Layout({ children, preview }) {
  return (
    <div>
      { preview && (
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

      {children}
    </div>
  )
  }