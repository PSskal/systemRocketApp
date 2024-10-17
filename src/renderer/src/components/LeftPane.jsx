const leftPaneData = [
  { title: 'All Systems Check', status: 'normal' },
  { title: 'Rendezvous burn slow', status: 'normal' },
  { title: 'Prepare rendezvous burn', status: 'normal' },
  { title: 'Thermal shield', status: 'applied' },
  { title: 'Thermal shield', status: 'applied' },
  { title: 'Burn Go/No-GO', status: 'normal' },
  { title: 'Power completion', status: 'awaiting' },
  { title: 'Station deck check', status: 'normal' }
]

const iconColors = {
  applied: 'text-green',
  awaiting: 'text-yellow'
}

const labelColors = {
  applied: 'text-white',
  awaiting: 'text-white'
}

const getIconColor = (status) => iconColors[status] || 'text-gray-600'
const getLabelColor = (status) => labelColors[status] || 'text-gray-600/50'

const LeftPane = () => {
  return (
    <div className="w-64 space-y-11">
      {leftPaneData.map((pane, index) => (
        <div key={index} className="flex">
          <svg
            className={`w-6 h-6 fill-current ${getIconColor(pane.status)}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.6647 10.1879C18.0446 9.78705 18.0276 9.15411 17.6268 8.77419C17.2259 8.39428 16.593 8.41125 16.2131 8.8121L10.8574 14.463L8.81882 12.3121C8.43891 11.9112 7.80597 11.8943 7.40512 12.2742C7.00427 12.6541 6.9873 13.287 7.36721 13.6879L10.1315 16.6046C10.3204 16.8038 10.5828 16.9167 10.8574 16.9167C11.1319 16.9167 11.3943 16.8038 11.5832 16.6046L17.6647 10.1879Z"
            />
          </svg>
          <div className="flex flex-col pl-2">
            <span className="text-xxxs font-bold text-gray-600 uppercase whitespace-nowrap">
              {pane.title}
            </span>
            <span className={`text-xxxs capitalize ${getLabelColor(pane.status)}`}>
              {pane.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LeftPane
