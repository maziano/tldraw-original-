import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/editor.css'
import '@tldraw/tldraw/ui.css'

export default function Example() {
	return (
		<div
			style={{
				width: '120vw',
				height: '150vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundImage: 'url(https://source.unsplash.com/random/2000x2000)',
			}}
		>
			<div style={{ width: '60vw', height: '80vh' }}>
				<Tldraw autoFocus />
			</div>
		</div>
	)
}