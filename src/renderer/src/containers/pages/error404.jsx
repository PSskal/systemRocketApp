import Background from '/src/components/Background'
import FullWidthLayout from '/src/hocs/layouts/FullWidthLayout'

const Error404 = () => {
  return (
    <FullWidthLayout>
      <Background>
        <div className="flex flex-col items-center justify-center">
          <h1> 404</h1>
          <p>Page Not Found</p>
        </div>
      </Background>
    </FullWidthLayout>
  )
}

export default Error404
