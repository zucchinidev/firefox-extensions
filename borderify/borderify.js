const styles = {
  border: '5px solid blue',
  position: 'absolute',
  top: '20px'
}
Object.keys(styles).forEach(style => {
  document.body.style[style] = styles[style]
})