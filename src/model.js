import image from './assets/img.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
Vivamus gravida facilisis orci id auctor. Quisque vehicula justo est, ac ullamcorper neque porta in. Donec eget turpis eget lorem mattis ullamcorper. Pellentesque maximus at nunc vel lacinia. Ut consequat massa vitae diam consequat suscipit. Pellentesque quis efficitur leo. Nam dignissim urna ut mattis euismod. Vestibulum laoreet arcu ut sem feugiat, ac auctor ex vulputate. Vestibulum in dolor vestibulum, semper est sed, tempor urna. Mauris a tincidunt velit.
`

export const model = [
  new TitleBlock('Vanilla Javascript Website Builder', {
    tag: 'h2',
    styles: {
      background: '#483250',
      color: '#fff',
      padding: '1.6rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      margin: '0',
      padding: '0',
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    imageStyles: {
      margin: '0',
      padding: '0',
      display: 'flex',      
      width: '100%',
      height: '100%'
    },
    alt: 'This is an image'
  }),
  new ColumnsBlock([
    'A simple app made with Javascript, without using any libraries',
    'Find out how SOLID principles and OOP programming work',
    'Try improving website UI with different styles'
  ], {
    styles: {
      background: '#5e3de3',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: '#f5984a',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
]
