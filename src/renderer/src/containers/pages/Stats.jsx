import Background from '/src/components/Background'
import LeftPaneCabin from '/src/components/LeftPaneCabin'
import RightPane from '/src/components/overview/RightPane'
import FullWidthLayout from '/src/hocs/layouts/FullWidthLayout'

const Stats = () => {
  return (
    <FullWidthLayout>
      <Background>
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="row-span-5">
            <LeftPaneCabin />
          </div>
          <div className="row-span-5">
            <RightPane />
          </div>
          <div className="row-span-5">{/* <LeftPaneCabin /> */}</div>
          <div className="row-span-5">
            <LeftPaneCabin />
          </div>
          <div className="row-span-5">
            <RightPane />
          </div>
        </div>
      </Background>
    </FullWidthLayout>
  )
}

export default Stats
